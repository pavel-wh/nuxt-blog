<template>
    <article class="post">
        <header class="post__header">
            <div class="post__title">
                <h1>Post title</h1>
                <nuxt-link to="/">
                    <i class="el-icon-back"></i>
                </nuxt-link>
            </div>
            <div class="post__info">
                <small>
                    <i class="el-icon-time"></i>
                    {{ new Date().toLocaleString() }}
                </small>
                <small>
                    <i class="el-icon-view"></i>
                    42
                </small>
            </div>
            <div class="post__image">
                <img 
                    class="post__img"
                    src="https://saint-petersburg.ru/tilda/26756/images/f7b0a80d-f450-427d-83b1-990396b8e045__cxknadxghb0.jpg" 
                    alt="Post Image"
                >
            </div>
        </header>
        <main class="post__content">
            <p><span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id quae nemo velit? Odit recusandae consequuntur optio accusamus rem, tenetur at, doloremque ab numquam doloribus quisquam, repellendus officiis laboriosam maxime exercitationem.</span><span>Non dolore mollitia pariatur inventore soluta tempora ipsum facilis quae architecto ex iure distinctio harum, in fugit excepturi ut minus debitis, officia omnis vel earum commodi! Animi sit nulla quibusdam?</span></p>
            <p><span>Est doloremque ipsam ea repudiandae corrupti iste molestias magni, libero porro impedit deleniti perspiciatis ratione sint maiores unde sit qui possimus debitis deserunt neque nostrum. Iusto cum commodi architecto rem?</span><span>Porro enim natus quis ab perferendis ipsum, exercitationem sunt nihil distinctio, eveniet doloremque, fugiat modi expedita quam? Nulla aperiam recusandae porro earum nemo vel, atque, non hic eligendi ut fuga.</span></p>
            <p><span>Assumenda neque quidem culpa eaque! Laboriosam, nulla cupiditate eius omnis distinctio repellendus praesentium similique aliquam quod quibusdam numquam fugiat quis totam accusamus veniam quia itaque, rem ipsam consectetur velit dolorum?</span><span>Aliquam illo inventore dolore aut laboriosam laudantium consectetur quis eum doloribus possimus rerum ut, distinctio asperiores minus necessitatibus repellat eveniet nulla voluptatem deleniti quo itaque sequi optio. Nam, cum. Ab?</span></p>
        </main>
        <footer class="post__footer">
            <!-- Form -->
            <app-comment-form
                v-if="canAddComment"
                @created="createCommentHandler"
            ></app-comment-form>

            <div class="comments" v-if="true">
                <app-comment 
                    v-for="comment in 4"
                    :key="comment"
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
    data() {
        return {
            canAddComment: true
        }
    },
    methods: {
        createCommentHandler() {
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