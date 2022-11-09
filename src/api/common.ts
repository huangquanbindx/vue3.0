//存放接口
import { fetch } from "@/axios/request";

export function getData(url:any,params:any){
    return fetch(url,params);
}