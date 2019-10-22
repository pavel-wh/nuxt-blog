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
                    v-model="controls.text"
                    resize="none"
                    :rows="10"
                ></el-input>
            </el-form-item>

            <el-button 
                plain
                class="mb"
                type="success" 
                @click="previewDialog = true">Предпросмотр</el-button>

            <el-dialog
                title="Tips"
                :visible.sync="previewDialog"
            >
                <div :key="controls.text">
                    <vue-markdown>{{ controls.text }}</vue-markdown>
                </div>
            </el-dialog>
            
            <el-upload
                ref="upload"
                drag
                action="https://jsonplaceholder.typicode.com/posts/"
                :on-change="handleImageChange"
                :auto-upload="false"
                class="mb"
                >
                <i class="el-icon-upload"></i>
                <div class="el-upload__text">Перетащите картинку сюда или <em>нажмите для загрузки</em></div>
                <div class="el-upload__tip" slot="tip">jpg/png файлы не более 500KB</div>
            </el-upload>

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
            previewDialog: false,
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
        handleImageChange(file, fileList) {
            this.image = file.raw
        },
        onSubmit() {
            this.$refs.form.validate(async valid => {
                if (valid && this.image) {
                    this.loading = true
                    const formData = {
                        title: this.controls.title,
                        text: this.controls.text,
                        image: this.image
                    }

                    try {
                        await this.$store.dispatch('post/create', formData)
                        this.image = null
                        this.$refs.upload.clearFiles()
                        this.$refs.form.resetFields()
                        this.$message.success('Пост создан')
                    } catch (e) {
                    } finally {
                        this.loading = false
                    }
                } else {
                    this.$message.warning('Форма не валидна')
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