import service from '@/utils/request'
/**
 * 封装axios请求
 * @param params 请求参数
 * @return promise
 */
const request = (params,showLoading) => {
    return new Promise((resolve, reject) => {
        if(showLoading==true) {
            this.$Spin.show({
                render: (h) => {
                    return h('div', [
                        h('Icon', {
                            'class': 'demo-spin-icon-load',
                            props: {
                                type: 'ios-loading',
                                size: 18
                            }
                        }),
                        h('div', 'Loading')
                    ])
                }
            });
        }
        service(params).then(res => {
            if(res==undefined){
            } else {
                resolve(res.data)
                if(showLoading==true&&res.code==200) {
                    setTimeout(()=>{
                        this.$Spin.hide()
                    },400)
                }
            }
        }).catch(error => {
            reject(error)
        })
    })
}

export default request


