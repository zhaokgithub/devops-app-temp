import axios from 'axios';

const requestList = []
// const CancelToken = axios.CancelToken
// let sources = {}
// //避免重复请求
// axios.interceptors.request.use((config) => {
//   const request = JSON.stringify(config.url) + JSON.stringify(config.data)
//   config.cancelToken = new CancelToken((cancel) => {
//     sources[request] = cancel
//   })
//   if(requestList.includes(request)){
//     sources[request]('取消重复请求')
//   }else{
//     requestList.push(request)
//   }
//   return config
// }, function (error) {
//   return Promise.reject(error)
// })

const request = function (url, method = "get", data = {}) {
    let baseURL = Window.CONFIG ? Window.CONFIG.URL : window.location.origin; 
    let config = {url,method,baseURL}
    let instance = axios.create()
    instance.interceptors.response(beforeResponse,beforeError)
    return instance.request(config)
}
const beforeError = (err)=>{
  let response = err.response
  return response
}
const beforeResponse = (response)=>{
  return response
}

export default request