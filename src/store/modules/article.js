import articleAPI from '@/api/articleAPI'
import showdown from 'showdown'
import { GET_ZXY_AND_LY_ARTICLE_LIST, GET_HOME_PAGE_ARTICLE_LIST, GET_ZXY_ARTICLE_LIST, GET_LY_ARTICLE_LIST, GET_ARTICLE_BY_ID, GET_HOT_ARTICLES } from '../actions'

const state = {
  zxyAndLyArticleList: [],
  homePageArticleList: [],
  zxyArticleList: [],
  lyArticleList: [],
  hotArticlesList: [],
  article: ''
}
const actions = {
  async [GET_ZXY_AND_LY_ARTICLE_LIST]  ({ commit }, payload) {
    if (state.zxyAndLyArticleList.length === 0) {
      let { data } = await articleAPI.getZxyAndLyArticleList(payload)
      commit('SET_ZXY_AND_LY_ARTICLE_LIST', data)
    }
  },
  async [GET_HOME_PAGE_ARTICLE_LIST] ({ commit }, payload) {
    if (state.homePageArticleList.length === 0) {
      let { data, total } = await articleAPI.getHomePageArticleList(payload)
      commit('SET_HOME_PAGE_ARTICLE_LIST', data)
      return total
    }
  },
  async [GET_ZXY_ARTICLE_LIST] ({ commit }, payload) {
    if (state.zxyArticleList.length === 0) {
      let { data } = await articleAPI.getZxyArticleList(payload)
      commit('SET_ZXY_ARTICLE_LIST', data)
    }
  },
  async [GET_LY_ARTICLE_LIST] ({ commit }, payload) {
    if (state.lyArticleList.length === 0) {
      let { data } = await articleAPI.getLyArticleList(payload)
      commit('SET_LY_ARTICLE_LIST', data)
    }
  },
  async [GET_HOT_ARTICLES] ({ commit }) {
    if (state.hotArticlesList.length === 0) {
      let { data } = await articleAPI.getHotArticles()
      commit('SET_HOT_ARTICLE_LIST', data)
    }
  },
  async [GET_ARTICLE_BY_ID] ({commit}, payload) {
    let { data } = await articleAPI.getArticleById(payload)
    let Convertor = new showdown.Converter()
    data.content = Convertor.makeHtml(data.content)
    commit('set_article', data)
  }
}
const mutations = {
  SET_ZXY_AND_LY_ARTICLE_LIST (state, zxyAndLyArticleList) {
    state.zxyAndLyArticleList = zxyAndLyArticleList
  },
  SET_HOME_PAGE_ARTICLE_LIST (state, homePageArticleList) {
    state.homePageArticleList = homePageArticleList
  },
  SET_ZXY_ARTICLE_LIST (state, zxyArticleList) {
    state.zxyArticleList = zxyArticleList
  },
  SET_LY_ARTICLE_LIST (state, lyArticleList) {
    state.lyArticleList = lyArticleList
  },
  SET_HOT_ARTICLE_LIST (state, data) {
    state.hotArticlesList = data
  },
  set_article (state, data) {
    state.article = data
  }
}
export default {
  namespaced: true,
  state,
  actions,
  mutations
}
