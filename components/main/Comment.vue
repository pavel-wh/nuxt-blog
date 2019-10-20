<template>
    <el-card
        class="comment"
    >
        <div class="comment__header">
            <b>Person name</b>
            <small>
                <i class="el-icon-time"></i>
                {{ new Date().toLocaleString() }}
            </small>
        </div>
        <div class="comment__text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium consectetur dolore sint aspernatur corporis. Pariatur nihil a rem et dolor dicta tenetur consectetur doloribus fugiat, amet, tempora iure, nisi illo!Obcaecati possimus labore distinctio dolorem odit numquam corporis, eligendi, ipsa officiis mollitia esse beatae fugit vitae dolorum at pariatur veniam iure suscipit magni? Dolorum soluta assumenda dolorem maxime exercitationem harum!</div>
    </el-card>
</template>

<script>
export default {
    props: ['comment']
}
</script>

<style lang="sass">
    .comment
        margin-bottom: 1rem
        &__header
            display: flex
            justify-content: space-between
            margin-bottom: .5rem
        &__text
</style>