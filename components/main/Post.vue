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
            <h3>Post title</h3>
            <small>
                <i class="el-icon-time"></i>
                {{ new Date().toLocaleString() }}
            </small>
        </header>
        <div class="post__body">
            <img 
                class="post__img"
                src="https://saint-petersburg.ru/tilda/26756/images/f7b0a80d-f450-427d-83b1-990396b8e045__cxknadxghb0.jpg" 
                alt="Post Image"
            >
        </div>
        <footer class="post__footer">
            <el-button round @click="openPost">Открыть</el-button>
            <span>
                <i class="el-icon-message"></i>
                12
            </span>
        </footer>
    </el-card>
</template>

<script>
export default {
    methods: {
        openPost() {
            const id="test-id"
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