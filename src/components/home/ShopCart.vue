<template>
<div class="app-cart">
        <div class="mui-card">
    <div class="mui-card-header">
        <h3>购物车列表</h3>
        <!--allcb 全选状态-->
        <h4> 全选<input type="checkbox" @click='selectAll' :checked='allcb'/></h4>
    </div>
        <div class="mui-card-content">
            <div class="mui-card-content-inner">
    <ul class="mui-table-view" >
    <li class="mui-table-view-cell mui-media" v-for="(item,i) in list" :key="item.id">
        <a href="javascript:;">
            <img class="mui-media-object mui-pull-left">
    <div class="mui-media-body">
        <p class='mui-ellipsis'>  
        <input type="checkbox" :checked='item.cb' :data-i='i' @click='mod'>
        <!-- 数量: {{item.count}}-->
        价格: {{item.price}}
        型号: {{item.lname}}
        <div>
            <button @click="del" :data-id='item.id' :data-idx='i'>删除</button>
        </div>
        </p>
        </div>
        </a>
        </li>
    </ul>
                </div>
				</div>
				<div class="mui-card-footer">
                  <button @click='removeItem'>删除选中商品</button>
                  小计：￥{{scope.toFixed(2)}}
                </div>
			</div>
   </div>
</template>
<script>
import {Toast} from 'mint-ui';
export default {
    data(){
        return {
            list:[],
            scope:0,
            cb:false,
            allcb:false //保存全选复选框状态
        }
    },
    methods:{
        del(e){
            //1获取当前id e.target触发事件对象   dataset自定义属性
            var id=e.target.dataset.id;
            var idx=e.target.dataset.idx;
            console.log(idx);
            //2发送ajax请求
            this.axios.get('http://127.0.0.1:6605/delCart?id='+id).then(result=>{
                if(result.data.code==1){
                    //3返回结果判断是否删除成功
                    Toast(`删除成功`);
                    //4删除list对应购物车商品对象
                    //splice(数组下标,个数)
                    this.list.splice(idx,1);
                }
            })
        },
        loadMore(){
            var url = "http://127.0.0.1:6605/cartlist?uid=1"
            this.axios.get(url).then(res=>{
                //1.判断如果没有登录 显示出错信息
                if(res.data.code==-1){
                    Toast(`请登录`);
                    return;
                }
                  //1.接收服务器程序返回数据
                  var rows=res.data.data;
                  //修改全局购物车数量
                  this.$store.commit("updateCount",rows.length);
                  //2.为每个商品对象添加属性cb
                  for(var item of rows){
                      item.cb=false;
                  //3.将最终属猪赋值list列表
                        this.list=rows;
                    }
            })
        },
        selectAll(e){
            //1.获取当前全选状态
                var cb=e.target.checked;
                //修改全选状态
                this.allcb=cb;
            //2.依据全选状态修改数组中cb值
            for(var item of this.list){
                item.cb=cb;
            }
        },
        mod(e){
        //1获取当前元素下标
        var idx=e.target.dataset.i;
        // console.log(idx);
        //2将下标对象数组元素cb修改当前复选状态
        var checked=e.target.checked;
        //3将数组中对应的cb状态修改
        this.list[idx].cb=checked;
        //4.统计购物车中商品选中数量==list.length
        var count=0;
        for(var item of this.list){
            if(item.cb) count++;
            if(count==this.list.length){
                 //5.将全选状态改为true
                this.allcb=true
            }else{
                this.allcb=false;
            }
        
        }
    
        },
        removeItem(){
            //创建空字符串
            var html='';
            //遍历数组中的元素
            for(var item of this.list){
                //判断cb==true
                if(item.cb==true){
                //保存id 拼字符串
                html+=item.id;
                }
            }
            // console.log(html);
            //发送ajax请求 删除多个商品
            this.axios.get('http://127.0.0.1:6605/removeMitem?ids='+html).then(res=>{
                if(res.data.code==1){
                    Toast(`删除成功`);
                    this.loadMore();
                }else{
                    Toast(`失败`);
                }
            })
        },
    },
    created(){
        this.loadMore();   


        
    }
}
</script>
<style>
    
</style>