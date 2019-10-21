<template>
    <el-container class="admin">
        <el-aside width="250px">
            <app-admin-aside />
        </el-aside>
        <el-main>
            <nuxt />
        </el-main>
    </el-container>
</template>

<script>
import AppAdminAside from '@/components/admin/AdminAside'
export default {
    components: {
        AppAdminAside
    }
}
</script>

<style lang="sass" scoped>
    .admin
        width: 100%
        height: 100vh
</style>