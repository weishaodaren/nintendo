<template>
  <div class="app-newsinfo">
     <h2>游戏情报</h2>
     <!--详细信息-->
     <div class="mui-card">
        <div class="mui-card-header mui-card-media" :style="'height:40vw;background-image:url('+list.img_url+')'"></div>
        <div class="mui-card-content">
            <div class="mui-card-content-inner">
                <p>Posted on {{list.ctime | details}}</p>
                <p style="color: #333;">{{list.title}}</p>
            </div>
        </div>
        <div class="mui-card-footer">
            <a class="mui-card-link">Like</a>
            <a class="mui-card-link">Read more</a>
        </div>
	</div>
    <!--评论-->
    <comment-box></comment-box>
  </div>
</template>
<script>


// 引入子组件
import comment from "../sub/comment.vue"
// 注册子组件    在下面 components 里面写

// 调用子组件   在temptale 里面写


export default {
    data(){
       return {
           list:[]
       } 
    },
    methods:{
         findNewsInfo(){
             var url=this.$store.state.globalUrl+"findNewsInfo?id="+this.$route.query.nid
             this.axios.get(url).then(res=>{
                  this.list = this.list.concat(res.data.data);
               this.list = res.data.data[0]
            //   console.log(res.data)
              //  console.log(this.list.title)
             })
         }
    },
    created(){
        this.findNewsInfo()
     //  console.log(this.$route.query.nid)
    },
    components:{
        "comment-box":comment
    }
}

</script>
<style>
    
</style>