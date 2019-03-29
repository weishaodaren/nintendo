<template>
<div class="app-goodinfo">
    <!--轮播图-->
<div class="mui-card">
    <div class="mui-card-content">
        <div class="mui-card-content-inner">
        <!--调用子组件-->
           <swiper-box :list='rows'></swiper-box>
        </div>
    </div>
</div>
    <!--商品信息-->
    <div class="mui-card">
    <div class="mui-card-header">{{info.lname}}</div>
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
						<p>
                        销售价￥{{info.price}}
                        </p>
                        购买数量
                    <div class="mui-numbox">
					<button class="mui-btn mui-btn-numbox-minus" type="button" @click="Goodsub">-</button>
					<input class="mui-input-numbox" type="number" value='1' v-model="add"/>
					<button class="mui-btn mui-btn-numbox-plus" type="button" @click="Goodadd">+</button>
				</div>
					</div>
				</div>
				<div class="mui-card-footer">
                <button type="danger" size="small" @click='addcart'>加入购物车</button>
                </div>
			</div>
    <!--商品参数-->
</div>
</template>
<script>
import swiperBox from '../sub/swiperBox.vue';
import {Toast} from 'mint-ui';
export default{
    data(){
        return{
            rows:[],//保存子组件显示的数据
            info:{},//创建对象保存商品信息 lname price
            pid:this.$route.query.pid,
            add:1,
             
        }
    },
    components:{
        'swiper-box':swiperBox
    },
    methods:{
        Goodadd(){
            this.add++;
        },
        Goodsub(){
            this.add--;
        },
        findGoodInfo(){
            this.axios.get(this.$store.state.globalUrl+'findProduct?pid='+this.pid).then(result=>{
                this.info=result.data.data[0];
            });
        },
        getImages(){
            this.axios.get(this.$store.state.globalUrl+'about_games').then(result=>{
                console.log(result.data);
                 this.rows=result.data;
            });
        },
        addcart(){
            var pid=this.pid;
            var price=this.info.price;
            // console.log(pid+'_'+price+'_'+uid);
            //2.发送ajax请求
            var url=this.$store.state.globalUrl+'addcart?uid=1&pid='+pid+'&price='+price;
                // url+=' ';
                // url+=' ;
                // url+=' ;
            this.axios.get(url).then(result=>{
                // console.log(11);
                if(result.data.code==1){
                    Toast(`加入成功`);
                }else{
                    Toast(`加入失败`);
                }
            });
        }
    },
    created(){
        this.getImages();
        this.findGoodInfo();
    }

}
</script>
<style></style>