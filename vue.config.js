/*
 * @Author: your name
 * @Date: 2021-02-22 11:08:05
 * @LastEditTime: 2021-02-22 11:09:14
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \项目\后台管理系统\management\vue.config.js
 */
module.exports = {
    devServer: {
      proxy: {
        "/api": {
          target: "http://192.168.31.110:8888/api/private/v1/",
          changeOrigin: true,
          pathRewrite: {
              '^/api':''
          }
        }
      }
    }
}