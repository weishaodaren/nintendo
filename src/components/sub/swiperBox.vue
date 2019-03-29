<template>
<div class="app-swiperBox">
    <mt-swipe :auto="2500" >
    <mt-swipe-item v-for="item of list" :key="item.id">
    <img :src="item.gameUrl"/>
    </mt-swipe-item>
    </mt-swipe>
</div>
</template>
<script>
export default{
    data(){
        return{
          
        }
    },
    props:['list'],//接收父组件数据
   //1.父组件发送ajax请求，获取图片；列表
   //2.将列表传递子组件

}
</script>
<style>
.app-swiperBox .mint-swipe{
    height:200px;
}
.app-swiperBox .mint-swipe img{
    width:100%;
}

</style>