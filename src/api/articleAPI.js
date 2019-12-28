import { getAxios } from './index'
import { BASE_URL } from './config'

const axios = getAxios({
  baseURL: BASE_URL
})

export default {
  getZxyAndLyArticleList (payload) {
    return axios.get(`/article/getZxyAndLyArticleByPaginate?currentPage=${payload.currentPage}&pageSize=${payload.pageSize}`)
  },
  getHomePageArticleList (payload) {
    return axios.get(`/article/getAllArticleByPaginate?currentPage=${payload.currentPage}&pageSize=${payload.pageSize}`)
  },
  getZxyArticleList (payload) {
    return axios.get(`/article/getZxyArticleByPaginate?currentPage=${payload.currentPage}&pageSize=${payload.pageSize}`)
  },
  getLyArticleList (payload) {
    return axios.get(`/article/getLyArticleByPaginate?currentPage=${payload.currentPage}&pageSize=${payload.pageSize}`)
  },
  getHotArticles () {
    return axios.get(`/article/getHotArticles`)
  },
  getArticleById (payload) {
    return axios.get(`/article/getArticleById/${payload}`)
  }
}
