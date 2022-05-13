<template>
  <div class="movie-container">
    <h3>Movie 组件</h3>
    <button @click="showThis">打印this</button>
<!--    this.$route是路由的参数对象-->
<!--    this.$router是；路由的导航对象-->
    <h3>movie组件----{{$route.params.id}}---{{id}}</h3>
    <button @click="goBack">后退</button>
    <hr>
<!--    在行内使用编程式导航的时候this必须省略，否则会报错-->
    <button @click="$router.back()">后退</button>
    <button @click="$router.forward()">前进</button>
  </div>
</template>

<script>
export default {
  name: 'Movie',
  //接收props数据
  props:['id'],
  methods :{
    showThis (){
      console.log(this)
    },
    goBack (){
      this.$router.go(-1)
    }
  }
}

</script>

<style lang="less" scoped>
.movie-container {
  min-height: 200px;
  background-color: lightsalmon;
  padding: 15px;
}
</style>
