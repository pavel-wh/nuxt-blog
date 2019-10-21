<template>
    <el-form :model="controls" :rules="rules" ref="form" @submit.native.prevent="onSubmit">
        <h1>Создать пользователя</h1>
        <el-form-item label="Логин" prop="login">
            <el-input v-model.trim="controls.login"></el-input>
        </el-form-item>
        <el-form-item label="Пароль" prop="password" class="mb2">
            <el-input v-model.trim="controls.password" type="password"></el-input>
        </el-form-item>
        <el-form-item label="Тип аккаунта" prop="accountType" >
            <el-radio-group v-model="controls.accountType">
                <el-radio label="Клиент" border></el-radio>
                <el-radio label="Партнёр" border></el-radio>
            </el-radio-group>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" native-type="submit" round :loading="loading">Создать</el-button>
        </el-form-item>
    </el-form>
</template>

<script>
    export default {
        layout: 'admin',
        middleware: ['admin-auth'],
        data() {
            return {
                loading: false,
                controls: {
                    login: '',
                    password: '',
                    accountType: 'Клиент'
                },
                rules: {
                    login: [{
                            required: true,
                            message: 'Введите логин пользователя',
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
                            message: 'Введите пароль',
                            trigger: 'blur'
                        },
                        {
                            min: 8,
                            max: 250,
                            message: 'Длина пароля должна быть не менее 8 символов',
                            trigger: 'blur'
                        }
                    ],
                    accountType: [{
                            required: true,
                            message: 'Пожалуйста выберите тип аккаунта',
                            trigger: 'change'
                    }],
                }
            };
        },
        mounted() {
            const {
                message
            } = this.$route.query
            switch (message) {
                case 'login':
                    this.$message.info('Для начала войдите в систему')
                    break
                case 'logout':
                    this.$message.success('Вы успешно вышли из системы!')
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
                                password: this.controls.password,
                                accountType: this.controls.accountType
                            }
                            await this.$store.dispatch('auth/createUser', formData)
                            this.$message.success('Новый пользователь успешно создан')
                            this.$refs.form.resetFields()
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