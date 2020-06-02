<template>
  <nav>
    <a href="/">
      <strong>Персональный блог</strong>
    </a>
  </nav>
</template>

<script>
export default {
	data() {
		return {
			appName: process.env.appName
		}
	}
}
</script>

<style lang="sass" scoped>
nav
    display: flex
    align-items: center
    justify-content: center
    height: 100%
    border-bottom: 2px solid #f6f6f6
    a
        text-decoration: none
</style>