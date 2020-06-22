import service from '@/utils/request'
// import { Loading } from 'element-ui'
// let loading;
// function startLoading() {    //使用Element loading-start 方法
//   loading = Loading.service({ fullscreen: true,background: 'rgba(0, 0, 0, 0.4)',customClass: 'loadingImg' });
// }
// function endLoading(Loading) {    //使用Element loading-close 方法
//   Loading.close()
// }
/**
 * 封装axios请求
 * @param params 请求参数
 * @return promise
 */
const request = (params,showLoading) => {
    return new Promise((resolve, reject) => {
        // if(showLoading==true) {
        //     startLoading();
        // }
        service(params).then(res => {
            if(res==undefined){
            } else {
                resolve(res.data)
                // if(showLoading==true&&res.code==200) {
                //     setTimeout(()=>{
                //         endLoading(loading)
                //     },400)
                // }
            }
        }).catch(error => {
            reject(error)
        })
    })
}

export default request


