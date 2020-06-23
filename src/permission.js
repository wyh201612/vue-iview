import router from './router'
// import NProgress from 'nprogress' // progress bar
// import 'nprogress/nprogress.css' // progress bar style
import { getCookie } from '@/utils/auth'
// NProgress.configure({ showSpinner: false }) // NProgress Configuration
import { LoadingBar } from 'view-design'

const whiteList = ['/login'] // no redirect whitelist
router.beforeEach(async(to, from, next) => {
  // 开始进度条
  // NProgress.start();
  LoadingBar.start();
  // 设置页面标题
  document.title = to.meta.title;
  // 确定用户是否已登录
  const hasToken = getCookie('accessToken');
  if(!to.meta.auth) {
    next();
  } else {
    if (hasToken) { // 判断是否有token
      if (to.path === '/login') {
        // 如果已登录，请重定向到主页
        next({ path: '/index' });
        // NProgress.done();
        LoadingBar.finish();
      } else {
        next();
        // NProgress.done();
        LoadingBar.finish();
      }
    } else {
      if (whiteList.indexOf(to.path) !== -1) { // 在免登录白名单，直接进入
        next();
      } else {
        next(`/login?redirect=${to.path}`); // 否则全部重定向到登录页
        // NProgress.done();
        LoadingBar.finish();
      }
    }
  }
})

router.afterEach(() => {
  // NProgress.done();
  LoadingBar.finish();
})
