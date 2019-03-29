<template>
 <div class="app-container">
    <!--添加公共样式 Header-->
    <mt-header title="Nintnedo" fixed> <router-link to="" slot="left">
    <mt-button icon="back"  @click.native="$router.back(-1)"></mt-button>
  </router-link>
  <mt-button icon="more" slot="right"></mt-button></mt-header>




    <router-view></router-view>    <!--router-view 是占位符--> 


    <!--添加公共样式 tabber--> 
    <nav class="mui-bar mui-bar-tab">
        <router-link class="mui-tab-item mui-active" to="/Home">
            <!-- <span class="mui-icon mui-icon-home"></span> -->
            <SPAN>
                <svg viewBox="0 0 34 34" width="30%" height="35%"><path d="M32 23h-9v9c0 1.1-.9 2-2 2h-8c-1.1 0-2-.9-2-2v-9H2c-1.1 0-2-.9-2-2v-8c0-1.1.9-2 2-2h9V2c0-1.1.9-2 2-2h8c1.1 0 2 .9 2 2v9h9c1.1 0 2 .9 2 2v8c0 1.1-.9 2-2 2zM8 16H4c-.6 0-1 .4-1 1s.4 1 1 1h4c.6 0 1-.4 1-1s-.4-1-1-1zM18 4c0-.6-.4-1-1-1s-1 .4-1 1v4c0 .6.4 1 1 1s1-.4 1-1V4zm0 22c0-.6-.4-1-1-1s-1 .4-1 1v4c0 .6.4 1 1 1s1-.4 1-1v-4zm12-10h-4c-.6 0-1 .4-1 1s.4 1 1 1h4c.6 0 1-.4 1-1s-.4-1-1-1z" fill='#e60012'></path></svg>
            </SPAN>
            <span class="mui-tab-label">首页</span>
        </router-link>
        <!-- <a  href="#tabbar-with-chat"> -->
            <router-link class="mui-tab-item" to="/Login">
            <!-- <span class="mui-icon mui-icon-contact"></span> -->
            <span>
                <svg viewBox="0 0 18 18" width="30%" height="35%"><path data-name="角丸長方形 15" d="M3.061 6.028a17.794 17.794 0 0 1 3.354-3.961C8.554.198 10.592-.407 12.149.267c1.633.707 1.621 3.406 1.469 4.64 0 0 3.139.055 3.2 1.024S13.59 8.119 13.59 8.119s.051 1.094.254 2.382a5.635 5.635 0 0 1 1.848-.678 1.817 1.817 0 0 1 2.3 1.995 2.139 2.139 0 0 1-2.874 2.285 1.181 1.181 0 0 1-.747 1.135.947.947 0 0 1 .026.692.772.772 0 0 1-.671.346 1.855 1.855 0 0 1-.6 1.288c-.684.582-3.811.83-6.254-.886a1.229 1.229 0 0 1-.886.513.911.911 0 0 1-.835-.36 1.583 1.583 0 0 1-1.709.014c-.948-.608-.949-1.565-.57-1.745.28-.133.595.015.659-.291s-.19-.4-.671-1.357a3.523 3.523 0 0 1-.367-1.3 5.44 5.44 0 0 1-2.026-2.007c-.81-1.4-.56-2.971.519-3.6a4.15 4.15 0 0 1 2.075-.517z" fill='#e60012'></path></svg>
            </span>
            <span class="mui-tab-label">用户</span>
            </router-link> 
        <router-link class="mui-tab-item" to="/ShopCart">
            <!-- <span class="mui-icon mui-icon-extra mui-icon-extra-cart"> -->
                <span>
                   <svg viewBox="0 0 41 40" width="30%" height="35%"><path d="M40.187 15.781c-.225-.685-.974-1.418-7.264-2.187-2.506-.3-5.311-.779-6.276-.848-.356-.94-1.277-3.831-2.313-6.226C21.726.498 20.779-.007 20.101-.007S18.472.5 15.84 6.528c-1.045 2.4-1.98 5.29-2.336 6.233-.96.065-3.739.522-6.216.815-6.241.741-7 1.5-7.221 2.157a1.114 1.114 0 0 0-.068.379c0 .749.75 2.1 4.676 5.877 1.86 1.789 3.777 3.468 4.519 4.118-.236.982-.842 2.682-1.345 5.268a36.2 36.2 0 0 0-.813 6.218c0 1.249.262 1.627.539 1.85.564.444 1.9.6 7.459-2.672 2.209-1.3 4.342-2.854 5.165-3.393.816.533 2.92 2.063 5.107 3.356 5.489 3.239 6.86 3.12 7.412 2.753.323-.217.606-.59.606-1.907a36.543 36.543 0 0 0-.8-6.22c-.506-2.626-1.119-4.375-1.358-5.372a127.54 127.54 0 0 0 4.459-4.039c3.9-3.716 4.631-5.056 4.631-5.8a1.077 1.077 0 0 0-.069-.368z" fill='#e60012'></path></svg>
                </span>
                <span class="mui-badge">
                    {{$store.getters.optCartCount}}
                </span>
            <!-- </span> -->
            <span class="mui-tab-label">大爱</span>
        </router-link>
        <router-link class="mui-tab-item" to="/NewsList">
            <!-- <span class="mui-icon mui-icon-search"></span> -->
            <span>
                <svg  viewBox="0 0 38 38" width="30%" height="35%"><path d="M19.013 25.844H36.8a1.2 1.2 0 0 1 1.2 1.2v.037a1.2 1.2 0 0 1-1.2 1.2H19.013a1.2 1.2 0 0 1-1.2-1.2v-.037a1.2 1.2 0 0 1 1.2-1.2zm.012 9.687h17.763A1.213 1.213 0 0 1 38 36.744v.043A1.213 1.213 0 0 1 36.788 38H19.025a1.212 1.212 0 0 1-1.212-1.213v-.043a1.212 1.212 0 0 1 1.212-1.213zM2.5 0h33A2.5 2.5 0 0 1 38 2.5v16.844a2.5 2.5 0 0 1-2.5 2.5h-33a2.5 2.5 0 0 1-2.5-2.5V2.5A2.5 2.5 0 0 1 2.5 0zm0 25.875h7.937a2.5 2.5 0 0 1 2.5 2.5V35.5a2.5 2.5 0 0 1-2.5 2.5H2.5A2.5 2.5 0 0 1 0 35.5v-7.125a2.5 2.5 0 0 1 2.5-2.5zm16.525 4.813h17.763A1.212 1.212 0 0 1 38 31.9v.012a1.213 1.213 0 0 1-1.212 1.213H19.025a1.212 1.212 0 0 1-1.212-1.213V31.9a1.211 1.211 0 0 1 1.212-1.212z" fill='#e60012'></path></svg>
            </span>
            <span class="mui-tab-label">话题</span>
        </router-link>
    </nav>
 </div>
</template>

<script>
export default {
    data(){
        return{

        }
    },
    methods:{
        toHome(){
            this.$router.push('/Home');
            
        }
    }
}
</script>

<style>
   .app-container{
     padding-top:50px;
     padding-bottom:50px;
     overflow-x:hidden;
   }
   .mint-header {
  background-color:#e60012 !important;
  font-style: italic;
  font-size: 12px;
  height: 50px !important;
}
.mint-header-title {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: inherit;
    font-weight: 900 !important;
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
}

 .mui-bar-tab .mui-tab-item.mui-active {
    color: gray !important;
}
.mui-bar-tab .mui-tab-item-tao {
    display: table-cell;
    overflow: hidden;
    width: 1%;
    height: 50px;
    text-align: center;
    vertical-align: middle;
    white-space: nowrap;
    text-overflow: ellipsis;
    color: #e60012 !important;
}
.mui-bar-tab .mui-tab-item-tao .mui-icon {
    top: 3px;
    width: 24px;
    height: 24px;
    padding-top: 0;
    padding-bottom: 0;
}

.mui-bar-tab .mui-tab-item-tao .mui-icon~.mui-tab-label {
   font-size:11px;
   display:block;
   overflow:hidden;
   text-overflow:ellipsis;
}
.mint-button--primary {
    color: #fff;
    background-color: #e60012 !important;
    /* font-style: oblique; */
    font-size: 15px !important;
}
</style>
