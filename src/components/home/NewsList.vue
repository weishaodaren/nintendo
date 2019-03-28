<template>
   <div class="app-newslist">
      <h2>最新话题</h2>
       <ul class="mui-table-view">
            <li class="mui-table-view-cell mui-media" :key="item.id" v-for="item of list">
                <router-link :to="'/Newsinfo?nid='+item.id">
                    <img class="mui-media-object mui-pull-left" :src="item.img_url">
                    <div class="mui-media-body">  {{item.title}}       
                        <p class='mui-ellipsis'>
                             <!--调用全局过滤器 datetimeFilter-->
                            <span>{{item.ctime | datetimeFilter}}</span><span>点击{{item.point}}次数</span>
                        </p>
                    </div>
                </router-link>
            </li>
        </ul>                                    <!--click 点击事件-->
       <mt-button type="primary" size="large" v-on:click="getMore">加载更多</mt-button>
   </div>
</template>
<script>
export default {
    data(){
        return {
            list:[],
            pno:1,      //当前页码
            pageSize:7  //页面 列表
        }
    },
   methods:{
        NewsList(){
             var url="http://127.0.0.1:6605/index_reco";
             this.axios.get(url).then(res=>{
              //   console.log(res.data.data);
                 this.list = res.data.data;
             })
        },
        //加载下一页的数据
        getMore(){
            this.pno++;
            var url="http://127.0.0.1:3000/newslist?pno="+this.pno+"&pageSize="+this.pageSize;
             this.axios.get(url).then(res=>{
                // console.log(res.data.data);
                  //push的 是返回数组长度  所以用concat拼接
                this.list = this.list.concat(res.data.data);
             })
        },
    },
    created(){
        // console.log(this.$route.query.nid)
        this.NewsList();    
    },
}
</script>
<style>
   .app-newslist li .mui-ellipsis{
        display:flex; justify-content:space-between;
        font-size:15px; color:#126;opacity: 1;
   }
</style>