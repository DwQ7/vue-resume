import axios from 'axios'

export function request(config) {
    return new Promise((resolve, reject) => {
        // 1.创建axios的实例对象
        const instance = axios.create({
            baseURL: 'http://123.207.32.32:8000',
            timeout: 5000
        })
        //2.过滤器(拦截器)
        //请求拦截
        instance.interceptors.request.use(config =>{
            //a.config中信息不符合要求(设置请求头)
            //b.可以用于添加加载请求的动画
            //c.某些网络请求需要携带一些信息，比如token.没有登录就跳转到登录
            console.log(config);//处理结果
            return config;//返回结果
        },error =>{
            console.log(error);
        })
        //响应拦截
        instance.interceptors.response.use(res => {
            console.log(res.data);
            return res.data//返回结果
        },error =>{
            console.log(error);
        })
        //3.发送网络请求
        return instance(config);

        //
        // // 通过实例发送网络请求
        // instance(options)
        //     .then(res => {
        //         resolve(res)
        //     }).catch(err => {
        //     reject(err)
        // })
    })
}