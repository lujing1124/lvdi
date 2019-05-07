<template>
     <div class="mui-numbox" data-numbox-min='1'>
        <button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
        <input id="test" class="mui-input-numbox" type="number"  :value="num" @change="numChanged" ref="numbox"/>
        <button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
  ` </div>

</template>

<script>
import mui from '../../lib/mui/js/mui.min.js'

export default {

  data() {
    return {
       
    }
  },
  created() {
    
  },
  mounted(){
      mui('.mui-numbox').numbox()
  },
  methods: {
    numChanged(){
      //console.log(this.$refs.numbox.value)
      console.log(this.goodId)
      this.$store.commit('updateCartGoods',{id:this.goodId,count:this.$refs.numbox.value})
    }
  },
  props:['num','goodId']
};
</script>

<style lang="scss" scoped>

</style>
