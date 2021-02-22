/*
 * @Author: your name
 * @Date: 2021-02-20 14:30:50
 * @LastEditTime: 2021-02-22 11:35:53
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \项目\后台管理系统\management\src\router\index.js
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/login.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/login',
    component: Login
  },
  {
    path:'/login',
    component:() => import("../views/login.vue")
  },
  {
    path: '/home',
    component:() => import("../views/Home.vue"),
    children: [
      {
        path: '/home/user',
        component:() => import("../components/User/user.vue"),
      },
      {
        path: '/home/jurisdiction',
        component:() => import("../components/Jurisdiction/jurisdiction.vue"),
      },
      {
        path: '/home/role',
        component:() => import("../components/Jurisdiction/role.vue"),
      },
      {
        path: '/home/order',
        component:() => import("../components/Order/order.vue"),
      },
      {
        path: '/home/report',
        component:() => import("../components/Statistics/report.vue"),
      },
      {
        path: '/home/classify',
        component:() => import("../components/Goods/classify.vue"),
      },
      {
        path: '/home/goods',
        component:() => import("../components/Goods/goods.vue"),
      },
      {
        path: '/home/parameter',
        component:() => import("../components/Goods/parameter.vue"),
      },
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
