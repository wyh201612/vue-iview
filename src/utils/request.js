import axios from 'axios'
import router from '@/router';
import store from '@/store'
import { Message,Spin } from 'view-design'

// 创建axios实例
const service = axios.create({
  timeout: 5000 // 请求超时时间
})
// request拦截器
service.interceptors.request.use(
  config => {
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

// respone拦截器
service.interceptors.response.use(
  response => {
    const res = response.data
    if (res.code !== 200) {
      Message.error(res.msg);
      // 503:Token 过期了;
      if (res.code === 503) {
          store.dispatch('user/resetToken').then(() => {
            router.push({path:'/login' ,query: {url:location.hostname}});
            location.reload() // 为了重新实例化vue-router对象 避免bug
        })
      }
      setTimeout(() => {
          Spin.hide();
      }, 3000);
      return
    } else {
      return res
    }
  },
  error => {
    console.log('err' + error) // for debug
    Message.error(error.message);
    return Promise.reject(error)
  }
)

export default service
