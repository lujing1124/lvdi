<template>
  <div class="category-container">
      
      <left-box></left-box>
      <right-box></right-box>
  </div>
</template>

<script>

import left from '../category/cat1.vue'
import right from '../category/cat2.vue'

export default {
  data() {
    return {
      
    }
  },
  created() {
    
  },
  methods: {
    
  },
  components: {
      'left-box':left,
      'right-box':right
  }
  
};
</script>

<style lang="scss" scoped>
.category-container{
    display:flex;
    justify-content: space-between;
    position: relative;
    left-box{
        background-color: pink;
        height:100%;
        flex:1;
        position:fixed;
        top:0;
        left:0;
    }
    right-box{
        flex:2;
    }
}

</style>
