import Axios from 'axios'
import { Message } from 'iview'

function getAxios (config) {
  const axiosInstance = Axios.create(config)
  axiosInstance.interceptors.request.use(function (config) {
    // intercept auth header here
    // const token = localStorage.getItem('access_token')
    // if (token) {
    //   config.headers.Authorization = `Bearer ${token}`
    // }
    return config
  })
  axiosInstance.interceptors.response.use(function (response) {
    if (response.data && response.status !== 200) {
      Message.error(response.data.res)
    }
    if (response.status === 200) {
      return response.data
    // } else if (response.status === 401) {
    //   Router.push('/login')
    //   return Promise.reject(response)
    }
  },
  function ({ response }) {
    if (!response) {
      Message.error('!response')
      return
    }
    if (response.data && response.data.code !== 0) {
      if (response.status === 500) {
        Message.error('服务器连接出错')
      }
    }
    return Promise.reject(response.data.res)
  })
  return axiosInstance
}

export { getAxios }
