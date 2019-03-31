import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Mint from 'mint-ui';
import 'mint-ui/lib/style.css';
Vue.use(Mint);
//1.引入mint-ui组件
import {Header,Swipe,SwipeItem,Button,Search} from "mint-ui"  //要其中一个
//2.注册
Vue.component(Header.name,Header);
Vue.component(Swipe.name,Swipe);
Vue.component(SwipeItem.name,SwipeItem);
//引入button这个按钮  也是mint-ui的
Vue.component(Button.name,Button);
Vue.component(Search.name,Search);

// import './assets/css/myMint.scss'
import'mint-ui/lib/style.css'

Vue.config.productionTip = false
//1: 设置请求的根路径 
//Vue.http.options.root = "http://127.0.0.1/vue_ser/";
//2:全局设置post 时候表音的数据组织格式为 application/x-www-form-urlencoded
//Vue.http.options.emulateJSON = true;
// 导入 MUI 的样式表， 和 Bootstrap 用法没有差别
import './lib/mui/css/mui.css'
// 导入 MUI 的样式表，扩展图标样式，购物车图标
// 还需要加载图标字体文件
import './lib/mui/css/icons-extra.css'

//引入axios全部
//1.引库
import axios from "axios"
//2.配置跨域  访问保存session
axios.defaults.withCredentials = true
//3.将axios配置Vue实例中
Vue.prototype.axios = axios
// 依附axios加载第三方模块qs 
import qs from 'qs';
import { stat } from 'fs';
//配置qs;成为Vue实例对象
Vue.prototype.qs=qs;
Vue.config.productionTip = false

//创建全局过滤器  过滤日期  后面直接调用
Vue.filter("datetimeFilter",function(val){
  // console.log(val); 
  var date = new Date(val);
  var y = date.getFullYear();   // 年    获取
  var m = date.getMonth()+1;    // 月
  var d = date.getDate();       // 日
  var h = date.getHours();      // 小时
  var mi = date.getMinutes();   // 分
  var s = date.getSeconds();    // 秒
  //拼接字符串
  m<10&&(m="0"+m);
  d<10&&(d="0"+d);
  return `${y}-${m}-${d} ${h}:${mi}:${s}`;
});




Vue.filter("details",function(val){
 var data = new Date(val)
 var y = data.getFullYear();
 var m = data.getMonth();
 var d = data.getDate();
 var h = data.getHours();
 var mi = data.getMinutes();
 var s = data.getSeconds();
 m<10&&(m="0"+m);
  d<10&&(d="0"+d);
  return `${y}-${m}-${d} ${h}:${mi}`;
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
