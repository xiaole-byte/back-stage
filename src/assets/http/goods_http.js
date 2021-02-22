import http from './index.js'

//商品列表
export function parameter(){
    return http({
        method: "get",
        url: "/categories",
    });
}

//商品分类
export function classify(){
    return http({
        method: "get",
        url: "/categories",
    });
}