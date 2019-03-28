<template>
   <div class="app-goodlist">
        <div class="goods-item" v-for="item of list" :key="item.lid">
            <img @click="jumpInfo" :data-lid="item.lid" :src="item.md" alt="can't find" >
            <h4>{{item.title}}</h4>
            <div class="info">
                 <span class="now">&yen;{{(item.price).toFixed(2)}}</span>
            </div>
            <div class="sell">
                 <span>热卖中</span>
            </div>
        </div>
        <mt-button type="primary" size="large" v-on:click="getMore">加载更多</mt-button>
   </div>
</template>
<script>
export default {
      data:function(){
          return {
            list:[],
            pno:1,      //当前页码
            pageSize:4,  //页面 列表
        }
      },
      methods:{
          jumpInfo(e){
              var lid=e.target.dataset.lid;
              this.$router.push('/GoodInfo?pid='+lid);

          },
          getMore(){
            //   this.pno++;
              var url="http://127.0.0.1:6605/products?pno="+this.pno+"&pageSize="+this.pageSize;
              this.axios.get(url).then(res=>{
                console.log(res.data.data);
                  //push的 是返回数组长度  所以用concat拼接
                this.list = this.list.concat(res.data.data);
              })
          }
      },
      created:function(){
          this.getMore();
      }
}
</script>
<style>
   .app-goodlist{
         display:flex;
         flex-wrap:wrap;
         justify-content:space-between;
         padding:4px;
    }
   .app-goodlist .goods-item{
        width:49%;
        border:1px solid #ccc;
        box-shadow:0 0 8px #ccc;
        margin:4px 0;
        padding:2px;
        display:flex;
        flex-direction:column;
        min-height:230px;
        justify-content:space-between;
    }
    .app-goodlist .goods-item img{
           width:100%;
    }
    .app-goodlist .goods-item h4{
        font-size:18px;
    }
    .app-goodlist .goods-item .now{
        color:red;
        font-size:18px;
        font-weight:bold;
    }
</style>