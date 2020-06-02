<template>
  <el-container>
    <el-header>
      <app-navigation />
    </el-header>
    <el-main>
      <nuxt />
    </el-main>
    <el-footer class="footer">© 2020</el-footer>
  </el-container>
</template>

<script>
import AppNavigation from '@/components/main/Navigation'
export default {
	components: {
		AppNavigation
	}
}
</script>

<style lang="sass" scoped>
.footer
  padding-top: 20px
  text-align: center
</style>
