import request from './http'
import {domain} from '@/host_url.js'

export default class Api {
    // 获取公告
    static getNoticeList(data,accessToken) {
        return request({
            url: domain.Base_URL+'/msg/notice/findList',
            method: 'get',
            params: data,
            headers: {
                accessToken: accessToken
            }
        })
    }

    // 更改公告状态
    static updateNoticeStatus(data,id,accessToken) {
        return request({
            url: domain.Base_URL+'/msg/noticeMemberMapping/updateStatus/'+id,
            method: 'POST',
            data: data,
            headers: {
                accessToken: accessToken
            }
        })
    }
    
}