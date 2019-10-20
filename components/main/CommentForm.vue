<template>
    <el-form 
        :model="controls" 
        :rules="rules" 
        ref="form"
        @submit.native.prevent="onSubmit"
    >
        <h1>Добавить комментарий</h1>
        <el-form-item label="Ваше имя" prop="name">
            <el-input v-model.trim="controls.name"></el-input>
        </el-form-item>

        <el-form-item label="Текст комментария" prop="text">
            <el-input 
                type="textarea" 
                v-model.trim="controls.text"
                resize="none"
                :rows="2"
            ></el-input>
        </el-form-item>

        <el-form-item>
            <el-button 
                type="primary" 
                native-type="submit"
                round
                :loading="loading"
            >Добавить комментарий</el-button>
        </el-form-item>

    </el-form>
</template>

<script>
    export default {
        data() {
            return {
                loading: false,
                controls: {
                    name: '',
                    text: ''
                },
                rules: {
                    name: [{
                            required: true,
                            message: 'Пожалуйста введите своё имя',
                            trigger: 'blur'
                        },
                        {
                            min: 1,
                            max: 50,
                            message: 'Длина ограничена от 2х до 50 символов',
                            trigger: 'blur'
                        }
                    ],
                    text: [{
                        required: true,
                        message: 'Введите ваш комментарий',
                        trigger: 'blur'
                    }]
                }
            };
        },
        methods: {
            onSubmit() {
                this.$refs.form.validate((valid) => {
                    if (valid) {
                        this.loading=true

                        const formData = {
                            name: this.controls.name,
                            text: this.controls.text,
                            postId: ''
                        }

                        try {
                            this.$emit('created')
                            this.$message.success('Комментарий добавлен')
                        } catch (e) {
                            console.log(e)
                            this.loading=false
                        }

                    } else {
                        console.log('error submit!!')
                        return false
                    }
                });
            },
            // resetForm(formName) {
            //     this.$refs[formName].resetFields();
            // }
        }
    }
</script>

<style lang="sass" scoped>

</style>