import Vue from 'vue'

import 'normalize.css/normalize.css' // a modern alternative to CSS resets

import ViewUI from 'view-design';
import 'view-design/dist/styles/iview.css';
Vue.use(ViewUI);

import '@/styles/index.scss' // global css

import App from './App'
import store from './store'
import router from './router'

import qs from 'qs'
Vue.prototype.$qs = qs

import './icons' // icon
import './permission' // permission control

import * as filters from './filters' // global filters

import api from './api/api'
Vue.prototype.$api = api

Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})
Vue.config.productionTip = true

// 公告文字滚动
import scroll from 'vue-seamless-scroll'
Vue.use(scroll)
// 进度条
import vueProgressBar from 'svg-progress-bar'
// you can set componentName default componentName is svg-progress-bar
Vue.use(vueProgressBar)

import VueAwesomeSwiper from 'vue-awesome-swiper'
// import style
import 'swiper/css/swiper.css'
Vue.use(VueAwesomeSwiper)

new Vue({
  router,
  store,
  render: h => h(App),
  mounted:function(){//解决跳转到新页面不默认固定在顶部的bug
    this.$router.afterEach((to, from, next) => {
        window.scrollTo(0, 0)
    })
  },
  data: {
    eventHub: new Vue()
  }
}).$mount('#app')


