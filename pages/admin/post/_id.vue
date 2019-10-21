<template>
    <section>
        <h1>Post {{ $route.params.id }}</h1>
        <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/admin/list' }">Посты</el-breadcrumb-item>
            <el-breadcrumb-item>Пост {{ $route.params.id }}</el-breadcrumb-item>
        </el-breadcrumb>
    </section>
</template>

<script>
export default {
    layout: 'admin',
    middleware: ['admin-auth']
}
</script>

<style lang="sass" scoped>

</style>