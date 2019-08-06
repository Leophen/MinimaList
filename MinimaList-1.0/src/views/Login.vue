<template>
	<div>
    <form v-if="!isRed">
      <div>用户名：</div>
      <input type="text" v-model="name">
      <div>密码：</div>
      <input type="password" v-model="password">
      <button type="button" @click="login">登录</button>
      <button type="button" @click="reg">注册</button>
    </form>
    <form v-else>
      <div>用户名：</div>
      <input type="text" v-model="name">
      <div>密码：</div>
      <input type="password" v-model="password">
      <div>确认密码：</div>
      <input type="password" v-model="repeat">
      <button type="button" @click="addUser">确定</button>
      <button type="button" @click="cancel">取消</button>
    </form>
	</div>
</template>

<script>
export default {
  data () {
    return {
      isRed: false,
      name: '',
      password: '',
      repeat: ''
    }
  },
  methods: {
    login () {
      if (localStorage.getItem('name') === this.name && localStorage.getItem('password') === this.password) {
        this.name = ''
        this.password = ''
        this.$router.push('/Home/List')
      } else {
        alert('密码不正确')
      }
    },
    reg () {
      this.isRed = true
    },
    addUser () {
      if (this.password === this.repeat) {
        localStorage.setItem('name', this.name)
        localStorage.setItem('password', this.password)
        this.name = ''
        this.password = ''
        this.isRed = false
      } else {
        alert('两次密码输入不一致')
      }
    },
    cancel () {
      this.isRed = false
    }
  }
}
</script>

<style scoped>

</style>
