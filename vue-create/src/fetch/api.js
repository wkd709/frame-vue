import axios from 'axios'

axios.defaults.timeout = 8000
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'
axios.defaults.withCredentials = true

axios.defaults.baseURL = '//www.easy-mock.com/mock/5c2485795e41f925428ab20a/tmXcx';

// 添加请求拦截器
axios.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    return config;
}, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
});

// 添加响应拦截器
axios.interceptors.response.use(function (response) {
    // 对响应数据做点什么
    return response;
}, function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
});

export function fetch(method, url, params) { 
    return new Promise((resolve, reject) => {
       switch (method) {
            case 'post':
                axios.post(url, params)
                    .then(response => {
                        resolve(response.data);
                    }, err => {
                        reject(err);
                    })
                    .catch((error) => {
                        reject(error)
                    })
                break;
            case 'get':
                axios.get(url)
                    .then(response => {
                        resolve(response.data);
                    }, err => {
                        reject(err);
                    })
                    .catch((error) => {
                        reject(error)
                    })
                break;
            default:
                break;
        }
    });
}