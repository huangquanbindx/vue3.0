import axios from "axios";

//封装get请求方法
export function fetchGet(requestUrl:any,params?:any){
    return axios({
        url:requestUrl,
        method:"get",
        params,
    })
}

//封装post请求方法
export function fetch(requestUrl:any,params?:any,options?:any,resType?:any,){
    return axios({
        headers:options,
        url:requestUrl,
        method:"post",
        data:params,
        withCredentials:true,
        responseType:resType,
    })
}