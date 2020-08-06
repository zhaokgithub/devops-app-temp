import axios from 'axios';

const request = function (url, method = "get", data = {}) {
    let baseURL = Window.CONFIG ? Window.CONFIG.URL : window.location.origin; 
    let config = {url,method,baseURL}
    let instance = axios.create()
    instance.interceptors.response.use(beforeResponse,beforeError)
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