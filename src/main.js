/*
 * @Author: your name
 * @Date: 2021-02-20 14:30:50
 * @LastEditTime: 2021-02-21 18:57:01
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \项目\后台管理系统\management\src\main.js
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 引入ElementUI
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

// 引入样式重置文件
import './assets/css/rest.css'

// 引入axios
import axios from 'axios'

// 配置请求的根路径
axios.defaults.baseURL = 'http://192.168.31.110:8888/api/private/v1/'

Vue.prototype.$http = axios
Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')