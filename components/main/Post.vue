<template>
    <el-card 
        shadow="hover"
        class="post"
        :body-style="{padding: 0}"
    >
        <header 
            class="post__header"
            slot="header"
        >
            <h3>{{ post.title }}</h3>
            <small>
                <i class="el-icon-time"></i>
                {{ post.date }}
            </small>
        </header>
        <div class="post__body">
            <img 
                class="post__img"
                :src="post.imageUrl" 
                :alt="post.title"
            >
        </div>
        <footer class="post__footer">
            <el-button round @click="openPost">Открыть</el-button>
            <span>
                <i class="el-icon-message"></i>
                {{ post.comments.length }}
            </span>
        </footer>
    </el-card>
</template>

<script>
export default {
    props: {
        post: {
            type: Object,
            required: true
        }  
    },
    methods: {
        openPost() {
            const id = this.post._id
            this.$router.push(`/post/${ id }`)
        }
    }
}
</script>

<style lang="sass" scoped>
    .post
        margin-bottom: 1.5rem
        &__header
            display: flex
            align-items: center
            justify-content: space-between
        &__body 
            line-height: 0
        &__img
            width: 100%
            height: auto
        &__footer
            display: flex
            justify-content: space-between
            align-items: center
            padding: 1rem

</style>