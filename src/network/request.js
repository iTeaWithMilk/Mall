import axios from 'axios'

export function request(config) {
    const instance = axios.create({
        baseURL: 'http://152.136.185.210:8000/api/w6',
        timeout: 5000,
    })
    // 请求拦击处理
    instance.interceptors.request.use(config => config, err => console.log(err))
    //响应拦截处理
    instance.interceptors.response.use(res => res.data, err => console.log(err));
    return instance(config)
}