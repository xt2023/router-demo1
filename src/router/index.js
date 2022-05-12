//src/router/index.js 就是当前项目的路由模块
import Vue from "vue";
import VueRouter from "vue-router";
//导入组件
import Home from "@/components/Home";
import Movie from "@/components/Movie";
import About from "@/components/About";

//把VueRouter安装vue项目的插件
//Vue.use()就是来安装插件的
Vue.use(VueRouter)

//创建路由的实例对象
const router=new VueRouter({
    //routes是一个数组，定义hash地址与组件的对应关系
    routes :[
        //重定向路由规则
        //当用户访问‘/’，的时候强者跳转'/home'
        {path:'/',redirect: '/home'},
        {path:'/home',component:Home},
        {path:'/movie',component:Movie},
        {path:'/about',component:About},

    ]
})

export default router
