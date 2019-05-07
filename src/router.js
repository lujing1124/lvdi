import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import home from './components/tabbar/Home.vue'
import category from './components/tabbar/Category.vue'
import cart from './components/tabbar/Cart.vue'
import mine from './components/tabbar/Mine.vue'
import shengxian from './components/shengxian/Shengxian.vue'
import product from './components/category/product.vue'

// 3. 创建路由对象
var router = new VueRouter({
  routes: [
    {path:'/', redirect: '/home' },
    {path:'/home', component: home},
    {path:'/category', component: category},
    {path:'/cart', component: cart},
    {path:'/mine', component: mine},
    {path:'/home/shengxian', component: shengxian},
    {path:'/category/product/:id', component: product},
  ],
  linkActiveClass: 'mui-active'
})

// 把路由对象暴露出去
export default router