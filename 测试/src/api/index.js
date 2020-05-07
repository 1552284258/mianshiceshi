// import http from './http'
import axios from 'axios'
//请求部门列表数据
// export function getImgData() {
//     return axios.post('https://beimei.oyaoyi.com/index/market/appindex', { api: 1 })
// }

// export function getImgData(option) {
//     return axios.post('http://beimei.oyaoyi.com/index/market/appindex', option)
// }
export function getImgData(option) {
    return axios({
        url: 'http://beimei.oyaoyi.com/index/market/appindex',
        method: 'post',
        data: option,
        headers: { 'content-type': 'application/x-www-form-urlencoded' }
    })
}