<template>
    <el-card
        shadow="always"
        :style="{width: '500px'}"
    >
        <el-form 
            :model="controls" 
            :rules="rules" 
            ref="form"
            @submit.native.prevent="onSubmit"
        >
            <h1>Панель администратора</h1>
            <el-form-item label="Логин" prop="login">
                <el-input v-model.trim="controls.login"></el-input>
            </el-form-item>

            <el-form-item label="Пароль" prop="password" class="mb2">
                <el-input v-model.trim="controls.password" type="password"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button 
                    type="primary" 
                    native-type="submit"
                    round
                    :loading="loading"
                >Войти</el-button>
            </el-form-item>

        </el-form>
    </el-card>
</template>

<script>
export default {
    layout: 'empty',
    head: {
        title: `Вход в панель администратора | ${process.env.appName}`
    },
    data() {
        return {
            loading: false,
            controls: {
                login: '',
                password: ''
            },
            rules: {
                login: [{
                        required: true,
                        message: 'Пожалуйста введите свой логин',
                        trigger: 'blur'
                    },
                    {
                        min: 2,
                        max: 50,
                        message: 'Длина логина ограничена от 2х до 50 символов',
                        trigger: 'blur'
                    }
                ],
                password: [{
                    required: true,
                    message: 'Введите ваш пароль',
                    trigger: 'blur'
                },
                {
                    min: 8,
                    max: 250,
                    message: 'Длина пароля должна быть не менее 8 символов',
                    trigger: 'blur'
                }]
            }
        };
    },
    mounted() {
        const { message } = this.$route.query

        switch (message) {
            case 'login':
                this.$message.info('Для начала войдите в систему')
                break
            case 'logout':
                this.$message.success('Вы успешно вышли из системы!')
                break
            case 'session':
                this.$message.warning('Время сессии истекло, пожалуйста зайдите заново')
                break
        }

    },
    methods: {
        onSubmit() {
            this.$refs.form.validate(async valid => {
                if (valid) {
                    this.loading = true

                    try {
                        const formData = {
                            login: this.controls.login,
                            password: this.controls.password
                        }
                        await this.$store.dispatch('auth/login', formData)

                        this.$router.push('/admin')

                    } catch (e) {
                        this.loading = false
                    }
                }
            })
        }
    }
}
</script>