<template>
  <div>
      <mt-swipe :auto="2000">
        <mt-swipe-item v-for="item in lunboList" :key="item.src">
            <img :src="item.src" alt="">
        </mt-swipe-item>        
      </mt-swipe>

      <ul class="mui-table-view mui-grid-view mui-grid-9">
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
            <router-link to="/home/shengxian">
                <img src="../../images/home/1.png" alt="">
                <div class="mui-media-body">生鲜</div>
            </router-link>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
            <router-link to="/">
                <img src="../../images/home/4.png" alt="">
                <div class="mui-media-body">秒杀</div>
            </router-link>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
            <router-link to="/">
                <img src="../../images/home/3.png" alt="">
                <div class="mui-media-body">推荐</div>
            </router-link>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
            <router-link to="/">
                <img src="../../images/home/2.png" alt="">
                <div class="mui-media-body">会员</div>
            </router-link>
        </li>        
      </ul> 
      
  </div>
</template>

<script>


export default {
  data() {
    return {
      lunboList: []
    };
  },
  created() {
    this.getLunbo()
  },
  methods: {
    getLunbo(){
       this.$http.get('./src/data/homeLunbo.json').then(result => {
           //console.log(result)
           if(result.status == 200){
               this.lunboList = result.body
           }
       })
    }
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

.mui-grid-view.mui-grid-9 .mui-table-view-cell{
    border:0;
    width:25%;
    background-color:#fff;
}
</style>
