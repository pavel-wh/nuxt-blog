<template>
  <el-card class="comment">
    <div class="comment__header">
      <b>{{ comment.name }}</b>
      <small>
        <i class="el-icon-time"></i>
        {{ comment.date | date }}
      </small>
    </div>
    <div class="comment__text">{{ comment.text }}</div>
  </el-card>
</template>

<script>
export default {
	props: {
		comment: {
			type: Object,
			required: true
		}
	}
}
</script>

<style lang="sass">
.comment
    margin-bottom: 1rem
    &__header
        display: flex
        justify-content: space-between
        margin-bottom: .5rem
</style>