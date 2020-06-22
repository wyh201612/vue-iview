import { verificationCodeCkeck, login,userOnline } from '@/api/user'
import { getCookie, setCookie, removeCookie } from '@/utils/auth'
import qs from 'qs'

const state = {
  accessToken: getCookie('accessToken'),
  loginName: getCookie('loginName'),
  mobile: getCookie('mobile'),
  avatar: getCookie('avatar'),
  userId: getCookie('userId'),
  bindCard: getCookie('bindCard'), // 是否绑卡 1：是 2：否
  bindAddress: getCookie('bindAddress'), // 是否设置收货地址 1：是 2：否
  bindPayPassword: getCookie('bindPayPassword'), // 是否设置交易密码 1：是 2：否
  goldPrice: getCookie('goldPrice')
}

const mutations = {
  SET_ACCESSTOKEN: (state, accessToken) => {
    state.accessToken = accessToken;
  },
  SET_NAME: (state, loginName) => {
    state.loginName = loginName;
  },
  SET_MOBILE: (state, mobile) => {
    state.mobile = mobile;
  },
  SET_AVATAR: (state, avatar) => {
    state.avatar = avatar;
  },
  SET_USERID: (state, userId) => {
    state.userId = userId;
  },
  SET_BINDCARD: (state, bindCard) => {
    state.bindCard = bindCard;
  },
  SET_BINDADDRESS: (state, bindAddress) => {
    state.bindAddress = bindAddress;
  },
  SET_BINDPAYPASSWORD: (state, bindPayPassword) => {
    state.bindPayPassword = bindPayPassword;
  },
  SET_GOLDPRICE: (state, goldPrice) => {
    state.goldPrice = goldPrice;
    setCookie('goldPrice', goldPrice);
  }
}

const actions = {
  // user login
  login({ commit }, userInfo) {
    let obj = {
        loginType: "3",
        loginSource: 1,
        type: "6",
        loginName: userInfo.loginName,
        code: userInfo.code
    }
    let submitData = {
      loginSource: 1,
      loginName: userInfo.loginName,
      code: userInfo.code
    };
    return new Promise((resolve, reject) => {
      verificationCodeCkeck(qs.stringify(obj)).then(res => {
        login(qs.stringify(submitData)).then(response => {
          const { data } = response;
          commit('SET_ACCESSTOKEN', data);
          setCookie('accessToken', data);
          let submitData2 = {
            accessToken: data
          };
          userOnline(qs.stringify(submitData2)).then(res1 => {
            commit('SET_ACCESSTOKEN', res1.data.accessToken);
            setCookie('accessToken', res1.data.accessToken);
            commit('SET_USERID', res1.data.id);
            setCookie('userId', res1.data.id);
            commit('SET_NAME', res1.data.loginName);
            setCookie('loginName', res1.data.loginName);
            commit('SET_MOBILE', res1.data.mobile);
            setCookie('mobile', res1.data.mobile);
            commit('SET_BINDCARD', res1.data.bindCard);
            setCookie('bindCard', res1.data.bindCard);
            commit('SET_BINDADDRESS', res1.data.bindAddress);
            setCookie('bindAddress', res1.data.bindAddress);
            commit('SET_BINDPAYPASSWORD', res1.data.bindPayPassword);
            setCookie('bindPayPassword', res1.data.bindPayPassword);
          })
          resolve();
        }).catch(error => {
          reject(error);
        })
      }).catch(error => {
        reject(error);
      })
    })
  },

  // user logout
  logout({ commit, state }) {
    clearInterval(window.timer);
    commit('SET_ACCESSTOKEN', '')
    removeCookie('accessToken')
    removeCookie('bindAddress')
    removeCookie('bindPayPassword')
    removeCookie('bindCard')
    removeCookie('loginName')
    if(getCookie('rememberAccount') != '1') {
      removeCookie('mobile')
    }
    removeCookie('userId')
    removeCookie('avatar')
  },

  // remove token
  resetToken({ commit }) {
    return new Promise(resolve => {
      clearInterval(window.timer);
      commit('SET_ACCESSTOKEN', '');
      setCookie('accessToken', '');
      commit('SET_USERID', '');
      setCookie('userId','');
      removeCookie('loginName')
      commit('SET_NAME', '');
      if(getCookie('rememberAccount') != '1') {
        commit('SET_MOBILE', '');
        setCookie('mobile', '');
      }
      commit('SET_BINDCARD','');
      setCookie('bindCard', '');
      commit('SET_BINDADDRESS', '');
      setCookie('bindAddress', '');
      commit('SET_BINDPAYPASSWORD', '');
      setCookie('bindPayPassword', '');
      resolve()
    })
  },
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
