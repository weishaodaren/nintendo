<template>
   <div class="app-goodlist">
        <div class="mui-card">
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                    发表评论
                    <textarea placeholder="请输入120个字" maxlength="120" v-model='msg'>
                    
                    </textarea>
                    <mt-button size="large" type="primary" @click=addcomment>发表评论</mt-button>
                </div> 
            </div>
            <div class="mui-card-footer" v-for="(item,i) in list" :key="item.id">
               <div class="cmt-list">
                  <div class="cmt-item">
                       <div>第{{i+1}}楼   发表时间 {{item.ctime}}</div>
                       <div>{{item.content}}</div>
                  </div>
               </div>
            </div>
        </div>
   </div>
</template>
<script>
    import {Toast} from 'mint-ui';//1 在当前commen.vue单独引入
export default {
      data:function(){
          return {
           list:[],
           pno:0,
           pageSize:5,
           msg:'',//双向绑定
        }
      },
      methods:{
          addcomment(){
           //获取评论内容
        //    var m=this.msg;
           //判断是否为空
           //trim去除字符串两端的空格
           var size=this.msg.trim().length;
           if(size==0){
               Toast('评论内容不能为空');
               return;
               //添加提示框
           }
           var nid=this.$route.query.nid;
           console.log(nid);
            //1:创建参数对象 postDate
            //stringify将js对象转换成查询字符串
            var postDate=this.qs.stringify({
                nid:nid,
                content:this.msg,
            });

            //2：发送post 请求
            var url='http://127.0.0.1:3000/addcomment';
            this.axios.post(url,postDate).then(result=>{
                //console.log(result.data);
                //1.提示发表成功；清空评论区域
            Toast(result.data.msg);
            this.msg="";
            //2.2 清空页码
            this.pno=0;
            //2.3清空原有数组
            this.list=[];
            //3.立即查看评论、
            this.getMore();
            });
            //3：接收返回数据
            //4：测试 在created()调用
          },
          getMore(){
              this.pno++;
              var url="http://127.0.0.1:3000/getComment?nid="+this.$route.query.nid+"&pno"
              +this.pno+"&pageSize="+this.pageSize;
              this.axios.get(url).then(res=>{
                 this.list = this.list.concat(res.data.data);
              //  console.log(this.list);
              })
          }
      },
      created:function(){
          this.getMore();
          //this.addcomment();
      }
}
</script>
<style>

</style>