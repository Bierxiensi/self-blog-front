import tagAPI from '@/api/tagAPI'
import {GET_TAG_LIST} from '../actions'

const state = {
  tagList: []
}

const actions = {
  async [GET_TAG_LIST] ({ commit }, payload) {
    if (state.tagList.length === 0) {
      let { data } = await tagAPI.getTagList(payload)
      commit('SET_TAG_LIST', data)
    }
  }
}
const mutations = {
  SET_TAG_LIST (state, data) {
    state.tagList = data
  }
}

export default {
  namespaced: true,
  state,
  actions,
  mutations
}
