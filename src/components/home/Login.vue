<template>
    <div class="app-login">
    <h3 v-if="ii">🙈🙈🙈🙈🙈🙈🙈🙈🙈🙈🙈</h3>
    <h3 v-else="">🐵🐵🐵🐵🐵🐵🐵🐵🐵🐵🐵</h3>
    <div class="mui-card">
    <div class="mui-card-content">
        <div class="mui-card-content-inner">
            <form>
            用户名<input type='text' name='uname' v-model='uname'/><br><!--双向绑定-->
            密码<input type='password' name='upwd' v-model='upwd' @focus="showoff" @blur="showin"/>
            <input type='button'  @click=btnLogin value='登录' class="login_btn"/>        
            </form>
        </div>
    </div>
</div>
    </div>
</template>
<script>
//单独引入toast
import {Toast} from 'mint-ui';
    export default{
        data(){
            return{
                uname:'',
                upwd:'',
                ii:false
                }
            
        },
        methods:{
            showoff(){
                this.ii=true;
            },
            showin(){
                this.ii=false;
            },
            btnLogin(){
                //0.为button绑定点击事件
                //1.获取用户输入用户名和密码
                var u=this.uname;
                var p=this.upwd;
                // console.log(u+'----'+p);
                //2.验证不能为空
                var reg=/^[a-z0-9]{3,12}$/i;
                if(!reg.test(u)){
                    Toast(`用户名格式不正确`);
                    return;
                }
                //3.发送ajax请求
                var url=this.$store.state.globalUrl+"Login?uname="+u+"&upwd="+p;
                this.axios.get(url).then(result=>{
                    if(result.data.code==1){
                        //发送ajax请求 获取购物车中商品数量 立即直接更新 updateCount()
                        Toast(`登录成功`)
                        this.$router.push('/home')
                    }else{
                        Toast(`用户名或密码有误`);
                    };
                });
                //4.失败 显示提示框
                //5.成功 跳转home
            }
        },
        created(){
            
        },
    };
</script>
<style>
.login_btn{
    background: #e60012 !important;
    color: #fff !important;
    font-weight: bolder !important;
    font-style: oblique;
    width: 100%;
}
</style>