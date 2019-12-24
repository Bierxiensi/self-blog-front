import { getAxios } from './index'
import { BASE_URL } from './config'

const axios = getAxios({
  baseURL: BASE_URL
})

export default {
  getTagList (payload) {
    return axios.get(`/tags/getAllTags?currentPage=${payload.currentPage}&pageSize=${payload.pageSize}`)
  }
}
