// 入口文件
import Vue from 'vue'
import app from './App.vue'

import { Header, Swipe, SwipeItem, Button, Lazyload} from 'mint-ui';
Vue.component(Header.name, Header);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.component(Button.name, Button);
Vue.use(Lazyload);

import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'

import router from './router.js'

import VueResource from 'vue-resource'
Vue.use(VueResource)

import Vuex from 'vuex'
Vue.use(Vuex)

var cart = JSON.parse(localStorage.getItem('cart') || '[]')
var store = new Vuex.Store({
    state:{
        cart:cart,
        index:0,
        products:[]
    },
    mutations:{
        addToCar(state,good){
            //console.log(good)
            var flag = false
            flag = state.cart.some(item =>{
                if(item.id == good.id){
                    item.count += good.count
                    return true
                }else{
                    return false
                }
            })
            if(!flag){
                state.cart.push(good)
            }
            localStorage.setItem('cart',JSON.stringify(state.cart))
        },
        removeGoods(state,id){
            //console.log(id)
            state.cart.forEach((item,i) =>{
                if(item.id == id){
                   
                    state.cart.splice(i,1)
                }
            })
            localStorage.setItem('cart',JSON.stringify(state.cart))
        },
        updateCartGoods(state,good){
            state.cart.forEach(item =>{
                if(item.id == good.id){
                    item.count =  parseInt(good.count)
                }
            })
            localStorage.setItem('cart',JSON.stringify(state.cart))
        }
        // getCatDetailGoods(state){
        //     this.$http.get('./src/data/categoryDetail.json').then(result =>{
        //         if(result.status == 200){
        //             state.products = result.body
        //             return state.products
        //         }
        //     })
        // }
    },
    getters:{
        getAllCount(state){
            var c = 0
            state.cart.forEach(item =>{
                c += item.count
            })
            return c
        },
        getAllPrice(state){
            var c = 0
            state.cart.forEach(item =>{
                c += item.price * item.count
            })
            return c
        }
    }
})

var vm = new Vue({
    el:'#app',
    data:{},
    methods:{},
    router,
    render: c => c(app),
    store
})

