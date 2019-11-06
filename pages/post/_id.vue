<template>
    <article class="post">
        <header class="post__header">
            <div class="post__title">
                <h1>{{ post.title }}</h1>
                <nuxt-link to="/">
                    <i class="el-icon-back"></i>
                </nuxt-link>
            </div>
            <div class="post__info">
                <small>
                    <i class="el-icon-time"></i>
                    {{ new Date(post.date).toLocaleString() }}
                </small>
                <small>
                    <i class="el-icon-view"></i>
                    {{ post.views }}
                </small>
            </div>
            <div class="post__image">
                <img 
                    class="post__img"
                    :src="post.imageUrl" 
                    :alt="post.title"
                >
            </div>
        </header>
        <main class="post__content">
            <vue-markdown>{{ post.text }}</vue-markdown>
        </main>
        <footer class="post__footer">
            <!-- Form -->
            <app-comment-form
                v-if="canAddComment"
                @created="createCommentHandler"
                :postId="post._id"
            ></app-comment-form>

            <div class="comments" v-if="post.comments.length">
                <app-comment 
                    v-for="comment in post.comments"
                    :key="comment._id"
                    :comment="comment"
                ></app-comment>
            </div>
            <p class="text-center" v-else>Комментариев нет</p>
        </footer>
    </article>
</template>
<script>
import AppComment from '~/components/main/Comment'
import AppCommentForm from '~/components/main/CommentForm'
export default {
    validate({ params }) {
        return Boolean(params.id)
    },
    async asyncData({ store, params }) {
        const post = await store.dispatch('post/fetchById', params.id)
        await store.dispatch('post/addView', post)
        return { 
            post: {
                ...post, views: ++post.views
            } 
        }
    },
    data() {
        return {
            canAddComment: true
        }
    },
    methods: {
        createCommentHandler(comment) {
            this.post.comments.unshift(comment)
            this.canAddComment = false
        }
    },
    components: {
        AppComment, AppCommentForm
    }
}
</script>

<style lang="sass" scoped>
    .post
        max-width: 600px
        margin: 0 auto
        &__header
            margin-bottom: 1.5rem
        &__title 
            display: flex
            align-items: center
            justify-content: space-between
            margin-bottom: 1rem
        &__info
            display: flex
            align-items: center
            justify-content: space-between
            margin-bottom: .5rem
        &__img
            width: 100%
            height: auto
        &__content
            margin-bottom: 2rem
        &__footer
            
</style>