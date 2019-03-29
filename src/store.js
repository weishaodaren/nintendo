import Vue from 'vue';
//0.1引入vuex
import Vuex from 'vuex';
//0.2注册vuex组件
Vue.use(Vuex);
//0.3创建store
export default new Vuex.Store({
  state:{
    globalUrl:'http://127.0.0.1:6605/',
    cartCount:sessionStorage.getItem("cartCount")||0 //共享数据：购物车中商品数量
  },
  mutations:{
    // sub(state,count){state.cartCount=count}
    //购物车中数据加1  点击商品详细[加入购物车]
    increment(state){
      state.cartCount++;
    },
    //显示购物车列表时 修改多个
    updateCount(state,count){
      state.cartCount=count;
      sessionStorage.setItem("cartCount",count);
    }
  },
  getters:{
    //获取购物车数量方法
    optCartCount:function(state){
      return state.cartCount;
    }
  }
});
//0.9将store对象添加Vue实例成一个属性
