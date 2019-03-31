<template>
  <div class="home_name">
  <!--导航条-->
     <!--放到公共样式中了-->
  <!--轮播图-->
    <mt-swipe  :auto="3000" :show-indicators="false">
       <mt-swipe-item v-for="item in list" :key="item.id">
                <img :src="item.imgUrl">
       </mt-swipe-item>
    </mt-swipe>
  <!--九空格-->
<ul class="mui-table-view mui-grid-view mui-grid-9">
    <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="/NewsList"> 
         <img src="../../img/menu1.png">
         <div class="mui-media-body">最新话题</div>
         </router-link></li>
    <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="/GoodList">
         <img src="../../img/menu2.png">
        <div class="mui-media-body">商品</div>
        </router-link></li>
    <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="/ShopCart">
        <img src="../../img/menu3.png">
        <div class="mui-media-body">购物车</div>
        </router-link></li>
    <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="/Logout">
        <img src="../../img/menu4.png">
        <div class="mui-media-body">登出</div>
        </router-link></li>
    <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="/Register">
        <img src="../../img/menu5.png">
        <div class="mui-media-body">注册</div>
        </router-link></li>
    <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="/Search">
        <img src="../../img/menu6.png">
        <div class="mui-media-body">搜索</div>
        </router-link></li>
</ul> 
  <!--tabber--> 
<!--放到公共样式中了--> 
    
<!-- 加入一个GIF短动画 -->
<div class="mui-card mui-card-media" v-for="item of my_gif" :key="item.id">
        <img :src="item.myGif"/>
</div>

  </div>
</template>
<script>
export default {
    data:function(){
        return {
            list:[
            ],
            my_gif:[]
        }
    },
    methods:{
         handleImage(){
             var url=this.$store.state.globalUrl+"index";
             this.axios.get(url).then(res=>{
                //  console.log(res.data);
                 this.list = res.data;
             })
         },
         handlegIF(){
             var url=this.$store.state.globalUrl+"myGif";
         this.axios.get(url).then((res)=>{
                // console.log(res);
                this.my_gif=res.data;
            }).catch((err)=>{
            console.log(err)
            })
        }
    },
    created(){
        this.handleImage();
        this.handlegIF();
    },
}
</script>
<style>
/*轮播*/ 
    .home_name .mint-swipe{
          height:140px;
      }
    .home_name .mint-swipe img{
          width:100%;
          height:135px; 
      }
/*九空格*/ 
 .home_name .mui-table-view img{
     width:60px;
     height:60px;
 }
  .home_name .mui-table-view.mui-grid-9{
     background:#fff;
 }
 .mui-card > img:first-child {
    float: left;
    width: 100% !important;
    height: 200px !important;
}

</style>