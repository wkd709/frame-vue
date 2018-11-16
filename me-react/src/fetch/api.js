import axios from 'axios';

axios.defaults.timeout = 8000;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';
axios.defaults.withCredentials = true;


var typeHttp = '';
//POST传参序列化
axios.interceptors.request.use((config) => {
    // if(config.method  === 'post'){
    //     if (typeHttp == 'json') {
    //        config.data = config.data;
    //     } else {
    //        config.data = qs.stringify(config.data);
    //     }
    // }
    return config;
},(error) =>{
    return Promise.reject(error);
});

//返回状态判断
axios.interceptors.response.use((res) =>{
    if(res.status !== 200){
        return Promise.reject(res);
    }
    return res;
}, (error) => {
    return Promise.reject(error);
});

export function fetch(method, url, params,type) {
    // if (type == 'json') {
    //    typeHttp = type;
    // } else {
    //    typeHttp = ''
    // }
    return new Promise((resolve, reject) => {
        switch (method){
            case 'post' :
                axios.post(url, params)
                    .then(response => {
                        console.log(response,'response');
                        resolve(response.data);
                    }, err => {
                        reject(err);
                    })
                    .catch((error) => {
                        reject(error)
                })
                break;
            case 'get' :
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
            default :
                break;
        }
    })
}