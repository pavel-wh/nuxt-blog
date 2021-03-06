<template>
    <section class="post">
        <h1>{{ controls.title }}</h1>
        <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/admin/list' }">Посты</el-breadcrumb-item>
            <el-breadcrumb-item>Пост {{ controls.title }}</el-breadcrumb-item>
        </el-breadcrumb>

        <el-form 
            :model="controls" 
            :rules="rules" 
            ref="form"
            @submit.native.prevent="onSubmit"
        >
            <el-form-item label="Текст заголовка" prop="title">
                <el-input 
                    v-model="controls.title"
                ></el-input>
            </el-form-item>
            <el-form-item label="Текст в формате .md или .html" prop="text">
                <el-input 
                    type="textarea"
                    v-model="controls.text"
                    resize="none"
                    :rows="10"
                ></el-input>
            </el-form-item>
            <div class="mb2">
                <small>
                    <i class="el-icon-time"></i>
                    {{ post.date | date }}
                </small>
                <small class="ml">
                    <i class="el-icon-view"></i>
                    {{ post.views }}
                </small>
            </div>
            <el-form-item>
                <el-button 
                    type="primary" 
                    native-type="submit"
                    round
                    :loading="loading"
                >Обновить</el-button>
            </el-form-item>

        </el-form>
    </section>
</template>

<script>
export default {
    layout: 'admin',
    middleware: ['admin-auth'],
    head() {
        return {
            title: `${ this.post.title } | ${ process.env.appName }`
        }
    },
    validate({ params }) {
        return Boolean( params.id )
    },
    async asyncData({ store, params }) {
        const post = await store.dispatch('post/fetchAdminById', params.id)
        return { post }
    },
    mounted() {
        this.controls.title = this.post.title
        this.controls.text = this.post.text
    },
    data() {
        return {
            loading: false,
            controls: {
                title: '',
                text: '',
            },
            rules: {
                title: [{
                    required: true,
                    message: 'Поле не должно быть пустым',
                    trigger: 'blur'
                }],
                text: [{
                    required: true,
                    message: 'Поле не должно быть пустым',
                    trigger: 'blur'
                    }
                ],
            }
        };
    },
    methods: {
        onSubmit() {
            this.$refs.form.validate(async valid => {
                if (valid) {
                    this.loading = true
                    const formData = {
                        id: this.post._id,
                        title: this.controls.title,
                        text: this.controls.text
                    }

                    try {
                        await this.$store.dispatch('post/update', formData)
                        this.$message.success('Пост обновлён')
                        this.loading = false

                    } catch (e) {
                        this.loading = false
                    }
                }
            })
        }
    }
}
</script>

<style lang="sass" scoped>
    .post
        max-width: 600px
    .ml
        margin-left: 1em
</style>