<template>
  <div>
    <div class="user">
      <img alt="Vue logo" src="../assets/logo.png">
      <div class="name">{{name}}</div>
      <p>欢迎来到个人中心</p>
    </div>
    <div class="ctrls">
      <router-link :to="{name: 'Add'}" class="Add">添加</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'List',
  data () {
    return {
      name: ''
    }
  },
  mounted () {
    this.name = localStorage.getItem('name') ? localStorage.getItem('name') : 'VueProject'
  }
}
</script>

<style scoped>

</style>
