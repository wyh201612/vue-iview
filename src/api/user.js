import request from '@/utils/request'
import {domain} from '@/host_url.js'

// 登录
// loginSource: 1,
// loginName:  // 手机号码
// code:  // 短信验证码
export function login(data) {
  return request({
    url: domain.Base_URL+'/login/user/shortcut/login',
    method: 'post',
    data
  })
}

// 校验输入验证码是否和所发短信一样
// loginType: "3", // 登陆类型 1：管理员 2：普通用户 3：会员用户
// loginSource: 1, // 登陆客户端 1：pc 2：Android 3：IOS
// type: "6", // 类型 1：注册验证码 2：修改密码验证码 3：忘记密码验证码 4：验证身份验证码 5.管理员登陆 6快捷登陆
// loginName:  // 手机号码
// code: // 短信验证码
export function verificationCodeCkeck(data) {
  return request({
    url: domain.Base_URL+'/login/verificationCode/check',
    method: 'post',
    data
  })
}

// 获取短信验证码
// loginType: "3", // 登陆类型 1：管理员 2：普通用户 3：会员用户
// loginSource: 1, // 登陆客户端 1：pc 2：Android 3：IOS
// type: "6", // 类型 1：注册验证码 2：修改密码验证码 3：忘记密码验证码 4：验证身份验证码 5.管理员登陆 6快捷登陆
// loginName: // 手机号码
export function verificationCodeCreate(data) {
  return request({
    url: domain.Base_URL+'/login/verificationCode/create',
    method: 'post',
    data
  })
}

// 用户在不在线
export function userOnline(data) {
  return request({
    url: domain.Base_URL+'/login/user/online',
    method: 'post',
    data
  })
}
