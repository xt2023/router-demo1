<template>
  <div class="home-container">
    <h3>Home 组件</h3>
    <button @click="goM1">去电影1</button>
    <button @click="toM1">还是去电影1</button>
    <router-link to="/login"> 去登录 </router-link>
    <router-link to="/main">去main</router-link>
    <hr>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'Home',
  methods :{
    goM1 (){
      //通过编程式导航api导航转到指定的页面
      this.$router.push('movie/1')
    },
    toM1 (){
      this.$router.replace('movie/1')
    }
  }
}
</script>

<style lang="less" scoped>
.home-container {
  min-height: 200px;
  background-color: pink;
  padding: 15px;
}
</style>
