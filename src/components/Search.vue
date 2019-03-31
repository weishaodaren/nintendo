<template>
  <div class="page-search">
    <mt-search autofocus  v-model="value" placeholder='可以搜索游戏想要的游戏'>
        <mt-cell v-for="item in result" :key="item.id" :title="item.value" :value="item.address">
  </mt-cell>
    </mt-search>
  </div>
</template>
 
<script>
export default {
  name: 'page-search',
  data() {
    return {
      value: '',
      result: []
    };
  },
  created(){
      this.axios.get(this.$store.state.globalUrl+'index_select').then((res)=>{
        //   var oo=JSON.stringify(res.data)
        //   console.log(oo);
          this.result=res.data
      })
  },
  computed: {
  
  }
};
</script>
 
<style lang="css">
  .page-search {
    height: 100%;
  }
  .mint-searchbar {
    padding: 0 !important;
}
input[type='search'] {
    text-align: left !important;
    margin: 5px !important;
}
.mint-searchbar-cancel {
    color: #000 !important;
}
.mint-searchbar-inner {
    height: 51px !important;
}
</style>
