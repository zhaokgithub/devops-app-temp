import axios from 'axios';

axios.interceptors.response.use(function (response) {
    return response
}, function (error) {
    return Promise.reject(error)
})

// 请求列表
const requestList = []
// 取消列表
const CancelToken = axios.CancelToken
let sources = {}
axios.interceptors.request.use((config) => {
  const request = JSON.stringify(config.url) + JSON.stringify(config.data)
  config.cancelToken = new CancelToken((cancel) => {
    sources[request] = cancel
  })
  if(requestList.includes(request)){
    sources[request]('取消重复请求')
  }else{
    requestList.push(request)
  }
  return config
}, function (error) {
  return Promise.reject(error)
})

const request = function (path, method = "get", data = {}) {
    axios.defaults.baseURL = '';
    axios.defaults.headers.post['Content-Type'] = 'application/json';
    return new Promise((resolve, reject) => {
        axios[method](path)
            .then(res => {
                resolve(res)
            })
            .catch(err => {
                console.log(err)
                resolve({
                    status:err.response.status
                })
            })
    })
}

export default request