<template>
  <div class="app-exam">
     <h3>我的Vue，你别看了{{danger}}</h3>   
     <div @click="jump1">跳转新闻</div> 
     <div @click="jump2">调转列表</div>  
     <div @click="jump3">列表</div>  
     <div @click="jump4">列表542</div>  
  </div>
</template>
<script>
export default {
  data:function(){
      return {danger:"."}
  },
  methods:{
      jump1(){
          this.$router.push("/NewsList")
      },
      jump2(){
          this.$router.push("/GoodList")
      },
       jump3(){
          this.$router.push("/NewsList?nid=6")
      },
      jump4(){
          this.axios.get('http://127.0.0.1:6605/about_games_msg').then((res)=>{
              console.log(res.data)
          }).catch((err)=>{
              console.log(err)
          })
      }
      
  }
}
</script>
<style>
    .app-exam{
        color:red;
        background:#000;
        font-size:16px;
    }
</style>