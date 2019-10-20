<template>
    <el-row class="tac">
        <el-col :span="24">
            <el-menu 
                :default-active="$route.path"
                router
            >
                <el-menu-item index="/admin">
                    <i class="el-icon-data-analysis"></i>
                    <span>Аналитика</span>
                </el-menu-item>
                <el-menu-item index="/admin/create">
                    <i class="el-icon-document-add"></i>
                    <span>Создать</span>
                </el-menu-item>
                <el-menu-item index="/admin/list">
                    <i class="el-icon-tickets"></i>
                    <span>Посты</span>
                </el-menu-item>
                <el-menu-item index="/admin/users">
                    <i class="el-icon-user"></i>
                    <span>Пользователи</span>
                </el-menu-item>
                <el-menu-item index="/admin/logout">
                    <i class="el-icon-circle-close"></i>
                    <span>Выйти</span>
                </el-menu-item>
            </el-menu>
        </el-col>
    </el-row>
</template>

<script>
    export default {
        methods: {

        }
    }
</script>