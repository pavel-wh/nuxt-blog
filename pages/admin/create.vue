<template>
    <section class="post">
        <h1>Создать пост</h1>

        <el-form 
            :model="controls" 
            :rules="rules" 
            ref="form"
            @submit.native.prevent="onSubmit"
        >
            <el-form-item label="Введите название поста" prop="title">
                <el-input 
                    v-model.trim="controls.title"
                ></el-input>
            </el-form-item>
            <el-form-item label="Введите текст в формате .md или .html" prop="text">
                <el-input 
                    type="textarea"
                    v-model.trim="controls.text"
                    resize="none"
                    :rows="10"
                ></el-input>
            </el-form-item>
            <div class="mb2">
                <small>
                    <i class="el-icon-time"></i>
                    {{ new Date().toLocaleString() }}
                </small>
            </div>
            <el-form-item>
                <el-button 
                    type="primary" 
                    native-type="submit"
                    round
                    :loading="loading"
                >Создать</el-button>
            </el-form-item>

        </el-form>
    </section>
</template>

<script>
export default {
    layout: 'admin',
    middleware: ['admin-auth'],
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
                        message: 'Заголовок не должен быть пустым',
                        trigger: 'blur'
                    }
                ],
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
                        title: this.controls.title,
                        text: this.controls.text
                    }

                    try {
                        await this.$store.dispatch('post/create', formData)
                        this.$refs.form.resetFields()
                        this.$message.success('Пост создан')
                    } catch (e) {
                    } finally {
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