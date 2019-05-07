<template>
  <div class="catleft">
    <div class="inner">
      <ul>
          <li @click="choice(item.id,i)" :class="[i==0?'active':'']" v-for="(item,i) in list" :key="item.id">{{item.name}}</li>
      </ul>
    </div>
      
  </div>
</template>

<script>


export default {
  data() {
    return {
      list:[
          {id:1,name:'热卖'},
          {id:2,name:'特价'},
          {id:12,name:'精品水果'},
          {id:3,name:'优选蔬菜'},
          {id:4,name:'粮油调味'},
          {id:5,name:'冷藏冷冻'},
          {id:6,name:'中外名酒'},
          {id:7,name:'饮料冲泡'},
          {id:8,name:'休闲零食'},
          {id:9,name:'乳品烘培'},
          {id:10,name:'个人护理'},
          {id:11,name:'家居清洁'},          
          {id:13,name:'日用百货'},
      ]
    };
  },
  created() {
    
  },
  methods: {
    choice(id,i){
      this.$store.state.index = parseInt(i)
      //console.log(this.$store.state.index);
    }
  }
};
</script>

<style lang="scss" scoped>
.catleft{
    position:relative;
    .inner{
      position: fixed;
      height: 100%;
      left:0;
      top: 40px;
      overflow: auto;
      ul{
        margin:0;
        padding:0;
        
        li{
            list-style: none;
            font-size: 14px;
            padding:0 15px;
            text-align: right;
            line-height: 50px;
            
            background-color: #eee;            
        }
        .active{
            background-color: #fff;
            font-weight: bold;
            
        }
        li:hover{
            background-color: #fff;
            font-weight: bold;
        }
    }
    }
    

}


</style>
