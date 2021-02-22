/*
 * @Author: your name
 * @Date: 2021-02-20 14:30:50
 * @LastEditTime: 2021-02-22 11:07:18
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
    component:() => import("../views/Home.vue")
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
