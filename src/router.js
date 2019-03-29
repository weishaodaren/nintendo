import Vue from 'vue'
import Router from 'vue-router'
// import HelloContainer from "./components/HelloWorld.vue"
import exam from './components/Exam1.vue'
import list from './components/list.vue'
import home from './components/tabber/home.vue'
import NewsList from './components/home/NewsList.vue'
import GoodList from './components/goods/GoodList.vue'
import Newsinfo from './components/home/Newsinfo.vue'
import comment from './components/sub/comment.vue';
import GoodInfo from './components/goods/GoodInfo.vue';
import Login from './components/home/Login.vue';
import ShopCart from './components/home/ShopCart.vue';
import Logout from './components/home/Logout.vue';
import Register from './components/Register.vue';


Vue.use(Router)

export default new Router({
  routes: [
   // {path:'/',component:HelloContainer},
   {path:'/',redirect:"/home"},   //rredirect  自动跳转到 后一个页面
    {path:'/exam',component:exam},
    {path:'/list',component:list},
    {path:'/home',component:home},
    {path:'/NewsList',component:NewsList},
    {path:"/GoodList",component:GoodList},
    {path:"/Newsinfo",component:Newsinfo},
    {path:'/GoodInfo',component:GoodInfo},
    {path:'/Login',component:Login},
    {path:'/ShopCart',component:ShopCart},
    {path:'/Logout',component:Logout},
    {path:'/Register',component:Register}
  ]
})

