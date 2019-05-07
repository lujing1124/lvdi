<template>
  <div class="catDt-container">
      <ul>
          <router-link v-for="item in product" :key=item.id :to="'/category/product/'+item.id" tag="li">
              <img :src="item.src" />
              <div class="info">
                  <h1>{{item.title}}</h1>
                  <p class="price">￥ {{item.price}}</p>
                  <del class="oldPrice">￥ {{item.oldPrice}}</del>
                  <span class="mui-icon mui-icon-plus"></span>
              </div>
          </router-link>
      </ul>
  </div>
</template>

<script>


export default {
  data() {
    return {
      product:[],
      i:this.$store.state.index
    }
  },
  created() {
    this.getProduct()
  },
  methods: {
    getProduct(){
        this.$http.get('./src/data/categoryDetail.json').then(result =>{
            if(result.status == 200){
                this.product=result.body
           //console.log(result.body[this.i])
            }
        })
        //this.product = this.$store.commit('getCatDetailGoods')
    }
  }
//   watch: {
//       'i':function(newVal,oldVal){
//           this.$http.get('./src/data/categoryDetail.json').then(result =>{
//               if(result.status ==200){
//                   this.product.push(result.body)
//                 
//                   console.log(this.product)
//               }
//           })
//       }
//   }

 
  }


</script>

<style lang="scss" scoped>
.catDt-container{
    background-color: #fff;
    ul{
        padding:0 15px;
        list-style-type: none;
        
        li{
            width:100%;
            padding:10px 5px;
            display:flex;
            //justify-content: space-between;
            border-bottom: 1px solid #eee;
            
            .info{
                h1{
                font-size: 14px;
                del{
                    font-size: 12px;
                }
            }
            
            }
            img{
                height:80px;
                width:80px;
                margin-right: 20px;
            }
        }
    }
}
.price{
    color:red;
    font-size: 16px;
    font-weight: bold;
    line-height: 24px;
}
.oldPrice{
    font-size: 14px;
    color:#ccc;
    line-height: 16px;
}
.mui-icon{
    margin-left: 80px;
    color:#aaa;
}
</style>


