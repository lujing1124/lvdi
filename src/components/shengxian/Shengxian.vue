<template>
  <div>
      <div id="slider" class="mui-slider">
				<div id="sliderSegmentedControl" class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
					<div class="mui-scroll">
						<a v-for="item in titleList" :key="item.id" :class="['mui-control-item', item.id==0? 'mui-active':'']" href="#item1mobile" data-wid="tab-top-subpage-1.html">
							{{item.title}}
						</a>					
					</div>
				</div>
			</div>
      <ul>
        <li v-for="item in list" :key=item.id>
          <img :src="item.src" v-lazy="item">
        </li>
      </ul>
  </div>
</template>

<script>
import mui from '../../lib/mui/js/mui.min.js'

export default {
  data() {
    return {
      titleList: [],
      list:[
        {id:1,src:"./src/images/home/timgs.jpg"},
        {id:2,src:"./src/images/home/timg.jpg"},
        {id:3,src:"./src/images/home/u=3256829805,3946790029&fm=26&gp=0.jpg"},
        ]
    };
  },
  created() {
    this.getTitle()
  },
  mounted(){
    mui('.mui-scroll-wrapper').scroll({
      deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
    });
  },
  methods: {
    getTitle(){
      this.$http.get('./src/data/shengxianCat.json').then(result =>{
        //console.log(result)
        if(result.status == 200){
          result.body.unshift({"id":0,"title":"全部"})
        }
        this.titleList = result.body
      })
    }
  }
};
</script>

<style lang="scss" scoped>
*{
  touch-action:pan-y;
}
img[lazy=loading] {
  width: 40px;
  height: 300px;
  margin: auto;
}
ul{
  margin:0;
  padding:0;
  list-style: none;
  li{
    width: 100%;
    img{
      width: 100%;
    }
  }

}
</style>
