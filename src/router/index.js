//src/router/index.js 就是当前项目的路由模块
import Vue from "vue";
import VueRouter from "vue-router";
//导入组件
import Home from "@/components/Home";
import Movie from "@/components/Movie";
import About from "@/components/About";
import Tab1 from "@/components/tabs/Tab1";
import Tab2 from "@/components/tabs/Tab2";
import * as path from "path";
import Login from "@/components/Login";
import Main from "@/components/Main";

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
        //可以为路由开启props传参，从而拿到动态参数的值
        {path:'/movie/:id',component:Movie,props:true},
        {path:'/about',component:About,children: [
            //通过children属性声明嵌套子路由规则
                //默认子路由，如果children数组中某个路由规则path值为空字符串，则这条规则就叫做‘默认子路由’
                {path: '',component:Tab1},
                {path: 'tab2',component:Tab2}
            ]},
        {path:'/login',component:Login},
        {path:'/Main',component:Main}

    ]
})
//为router实例对象声明前置导航守卫
//只要发生了路由的跳转必然会触发beforeEach指定的function回调函数
router.beforeEach(function (to, from, next){
    next()
    console.log(to)
    //to表示将要访问的路由信息】
    //from表示将要离开的路由信息
    //next()函数表示放行的意思
    if (to.path==='/main'){
        const token=localStorage.getItem('token')
        if (token){
            next()
        }else {
            next('/login')
        }
    }else {
        next()
    }

})
export default router
