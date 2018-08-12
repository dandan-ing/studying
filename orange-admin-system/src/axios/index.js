// import JsonP from 'jsonp';
import axios from 'axios';
import {Modal} from 'antd';

// export function jsonp(){
//     return new Promise((resolve, reject)=>{
//         JsonP(options.url, {
//             param: 'callback',
//         },function(err, res){
//             if (res.status == 'success') {
//                 resolve(res);
//             } else {
//                 reject(res.msg);
//             }
//         });
//     })
// }

export function getRequestData(linkName) {
    let r = axios.get(linkName)
    return r;
}

export function postRequestData(linkName,param) {
    let r = axios.post(linkName,param)
    return r;
}

export function ajax(options) {
    let loading;
    if (options.data && options.data.isShowLoading !== false) {
        loading = document.getElementById('ajaxLoading');
        loading.style.display = 'block';
    }
    let baseApi = "";
    return  new Promise((resolve, reject)=>{
        axios({
            url: options.url,
            method:'get',
            baseURL:baseApi,
            timeout:5000,
            params:(options.data && options.data.params) || ''
        }).then((response)=>{
            if (options.data && options.data.isShowLoading !== false) {
                loading = document.getElementById('ajaxLoading');
                loading.style.display = 'none';
            }
            if (response.status == '200') {
                let res = response.data;
                if (res.success) {
                    resolve(res.data);
                } else {
                    Modal.info({
                        title:'提示',
                        content:res.msg
                    })
                }
            } else {
                reject(response.data);
            }    
        })
    })
}

