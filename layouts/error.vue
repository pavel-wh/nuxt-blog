<template>
    <div class="error">
        <div class="error__content">
            <h1 class="error__title">Ошибка 404</h1>
            <nuxt-link to="/">Вернуться на главную</nuxt-link>
        </div>
    </div>
</template>

<style lang="sass" scoped>
    .error
        display: flex
        justify-content: center
        align-items: center
        width: 100%
        &__content
            display: flex
            flex-direction: column
            align-items: center
            padding-top: 4rem
        &__title
            color: crimson

</style>