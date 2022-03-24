import request from '../utils/request'
import { baseUrl } from '../config/env'

export function getMetaBasicInfo(){
    return request({
        url: `${baseUrl}/meta/basic/info/`,
        method: "get"
    })
}


export function getImageInfoList(){
    return request({
        url: `${baseUrl}/image/list/`,
        method: "get",
    })
}


export function getImageInfoDetail(imageId){
    return request({
        url: `${baseUrl}/image/${imageId}/details/`,
        method: "get",
    })
}


export function getCloudDataDetail(){
    return request({
        url: `${baseUrl}/cloud/data/`,
        method: "get"
    })
}


export function postCloudDataDetail(imageId, cloudData){
    return request({
        url: `${baseUrl}/cloud/${imageId}/data/`,
        method: "POST",
        data: {cloudData: cloudData},
    })
}
