<template>
  <div>
    <div class="user">
      <img alt="Vue logo" src="../assets/logo.png">
      <div class="name">{{name}}</div>
      <p>欢迎进入个人中心</p>
    </div>
    <div class="ctrls">
      <router-link :to="{name: 'Add'}" class="Add">添加事项</router-link>
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

<style scoped lang="scss">
$main-color: #42b983;
.user{
  text-align: center;
  font-size: 18px;
  position: relative;
  top: 70px;
  img{
    width: 150px;
    height: 150px;
  }
  .name{
    margin-top: 20px;
    padding: 10px;
    color: #757575;
  }
  p{
    color: #757575;
  }
}
.ctrls{
  width: 50%;
  position: relative;
  left: 25%;
  top: 120px;
  text-align: center;
}
.Add{
  display: block;
  height: 50px;
  line-height: 50px;
  border-radius: 10px;
  background: $main-color;
  margin: 0 auto;
  color: #fff;
}
</style>
