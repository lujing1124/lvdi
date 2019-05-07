<template>
  <div class="product-container">
      <mt-swipe :auto="10000">
        <mt-swipe-item v-for="item in list" :key="item">
            <img :src="item" alt="">
        </mt-swipe-item>        
      </mt-swipe>

      <div class="info">
            <h1>{{product.title}}</h1>
            <p class="price">
                <span class="new">现价： ￥ {{product.price}}</span>
                <del class="old">原价： ￥ {{product.oldPrice}}</del>
            </p>
            <p>购买数量:  <numbox @getcount="getNumbox" :max="product.shen"></numbox></p>
            <p class="sell">
                <span>热卖中</span>
                <span>剩余{{product.shen}}件</span>
            </p>

            <mt-button type="primary" size="small">立即购买</mt-button>
            <mt-button type="danger" @click="addToCart" size="small">加入购物车</mt-button>
      </div>
  </div>
</template>

<script>
import numbox from '../subcomponent/numbox.vue'

export default {
  data() {
    return {
        id:this.$route.params.id,
        product:{},
        list:[],
        selectedCount: 1
    }
  },
  created() {
    this.getProduct()
  },
  methods: {
   getProduct(){
       this.$http.get('./src/data/product.json').then(result =>{
           if(result.status == 200){
               this.product = result.body[this.id-1]
               this.list = this.product.imgs
               
           }
       })
   },
   getNumbox(data){
       //console.log(data)
       this.selectedCount = data
   },
   addToCart(){
       var goodInfo = {
           id:this.id,
           count:this.selectedCount,
           price:this.product.price,
           selected:true,
           title: this.product.title,
           img:this.product.src
       }
       this.$store.commit('addToCar',goodInfo)
       //console.log(goodInfo)
   }
  },
  components:{
      'numbox':numbox
  }
};
</script>

<style lang="scss" scoped>
.mint-swipe{
    height: 200px;
    .mint-swipe-item {
        &:nth-child(1){
            background-color: red;
        }
        &:nth-child(2){
            background-color:greenyellow;
        }
        &:nth-child(3){
            background-color:bisque;
        }
        img{
            width:100%;
            height:100%;
        }
    }   
}

.info{
    background-color: #fff;
    padding:10px;
    margin-top:5px;
    h1{
        font-size:18px;
        margin-bottom:5px;
    }
    .price{
        display: flex;
        justify-content: space-between;
        .new{
            color: red;
            font-size:17px;
            font-weight: bold;
        }
    }
    .sell{
        display: flex;
        justify-content: space-between;
    }
}
</style>
