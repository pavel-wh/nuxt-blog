<template>
    <section>
        <h1>Список постов</h1>
        <el-table :data="posts.filter(data => !search || data.title.toLowerCase().includes(search.toLowerCase()))" style="width: 100%">
            <el-table-column label="Название" prop="title">
            </el-table-column>
            <el-table-column label="Дата">
                <template slot-scope="{ row: { date }}">
                    <small>
                        <i class="el-icon-time"></i>
                        {{ new Date(date).toLocaleString() }}
                    </small>
                </template>
            </el-table-column>
            <el-table-column label="Просмотры">
                <template slot-scope="{ row: { views }}">
                    <small>
                        <i class="el-icon-view"></i>
                        {{ views }}
                    </small>
                </template>
            </el-table-column>
            <el-table-column label="Комментарии">
                <template slot-scope="{ row: { comments }}">
                    <small>
                        <i class="el-icon-message"></i>
                        {{ comments.length }}
                    </small>
                </template>
            </el-table-column>
            <el-table-column align="right">
                <template slot="header" slot-scope="scope">
                    <el-input
                        v-model="search"
                        size="mini"
                        placeholder="Поиск"/>
                </template>

                <template slot-scope="scope">
                    <el-tooltip class="item" effect="dark" content="Редактировать пост" placement="top">
                        <el-button 
                            icon="el-icon-edit"
                            size="mini" 
                            @click="postEdit(scope.row._id)">
                            </el-button>
                    </el-tooltip>
                    <el-tooltip class="item" effect="dark" content="Удалить пост" placement="top">
                        <el-button 
                            icon="el-icon-delete"
                            size="mini" 
                            type="danger"
                            @click="postDelete(scope.row._id)"></el-button>
                    </el-tooltip>
                </template>
            </el-table-column>
        </el-table>
    </section>
</template>

<script>
    export default {
        layout: 'admin',
        middleware: ['admin-auth'],
        async asyncData({ store }) {
            const posts = await store.dispatch('post/fetchAdmin')
            return { posts }
        },
        data() {
            return {
                search: '',
            }
        },
        methods: {
            postEdit(id) {
                this.$router.push(`/admin/post/${ id }`)
            },
            async postDelete(id) {
                try {
                    await this.$confirm('Удалить пост?', 'Внимание! Действие необратимо.', {
                        confirmButtonText: 'Удалить',
                        cancelButtonText: 'Отмена',
                        type: 'warning'
                    })
                    await this.$store.dispatch('post/remove', id)
                    this.posts = this.posts.filter(p => p._id !== id)
                    this.$message.success('Пост удалён')
                } catch (e) {
                    
                }
            }
        }
    }
</script>