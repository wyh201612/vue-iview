import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Layouts from '@/layout'
export const constantRoutes = [
  {
    path: '/redirect',
    component: Layouts,
    children: [
      {
        path: '/redirect/:path*',
        component: () => import('@/views/redirect/index')
      }
    ]
  },
  {
    path: '/404',
    component: () => import('@/views/error-page/404'),
    meta: { title: '404',auth: false }
  },
  {
    path: '',
    component: Layouts,
    redirect: 'index',
    children: [
      {
        path: 'login',
        name: 'login',
        component: resolve => require(['@/views/login/index'], resolve),
        meta: { title: '登陆',auth: false }
      },
      {
        path: 'index',
        name: 'index',
        component: resolve => require(['@/views/home/index'], resolve),
        meta: { title: '首页',auth: false }
      },
      { 
        path: '*',
        redirect: '/index'
      }
    ],
  },
]

const createRouter = () => new Router({
  mode: 'history',
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

export default router
