<template>
  <div class="home_name">
  <!--导航条-->
     <!--放到公共样式中了-->
  <!--轮播图-->
    <mt-swipe  :auto="3000">
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
    <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
        <img src="../../img/menu4.png">
        <div class="mui-media-body">支付信息</div></a></li>
    <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
        <img src="../../img/menu5.png">
        <div class="mui-media-body">搜索</div></a></li>
    <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
        <img src="../../img/menu6.png">
        <div class="mui-media-body">订单</div></a></li>
</ul> 
  <!--tabber--> 
<!--放到公共样式中了--> 
    

  </div>
</template>
<script>
export default {
    data:function(){
        return {
            list:[
                // {id:1,img_url:"img/banner1.png"},{id:2,img_url:"img/banner2.png"},{id:3,img_url:"img/banner3.png"}
            ],
        }
    },
    methods:{
         handleImage(){
             var url="http://127.0.0.1:6605/index";
             this.axios.get(url).then(res=>{
                //  console.log(res.data);
                 this.list = res.data;
             })
         }
    },
    created(){
        this.handleImage();
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
</style>