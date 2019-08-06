<template>
  <div>
    <router-view/>
    <ul>
      <li><router-link :to="{name:'List'}">新闻列表</router-link></li>
      <li><router-link :to="{name:'User'}">个人中心</router-link></li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      name: 'Home'
    }
  }
}
</script>

<style scoped>

</style>
