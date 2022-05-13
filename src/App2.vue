<template>
  <div class="app-container">
    <h1>App2 组件</h1>
<!--    路由链接-->
<!--    有要项目中安装了vue-router就可以router-link来替换a链接了-->
<!--在hash地址中，/后面的参数项叫做“路径参数”-->
<!--    在路由参数对象中，需要使用thi.$route.params来访问路径参数-->
<!--    在hash地址中？后面的参数叫做查询参数-->
<!--    在路由参数对象中需要使用this.$route.query来访问查询参数-->
<!--    在this.route中path只是路径部分，fullpath是完整地址-->
    <router-link to="/home">home</router-link>
    <router-link to="/movie/1?name=zs,age=30">电影1</router-link>
    <router-link to="/movie/2">电影2</router-link>
    <router-link to="/movie/3">电影3</router-link>
    <router-link to="/about">about</router-link>

    <hr />
<!--    只有要项目中安装了vue-router就可以使用router-view这个组件-->
<!--    作用就是占位符-->
    <router-view></router-view>

  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="less" scoped>
.app-container {
  background-color: #efefef;
  overflow: hidden;
  margin: 10px;
  padding: 15px;
  > a {
    margin-right: 10px;
  }
}
</style>
