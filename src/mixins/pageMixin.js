export default {
  created () {
    this._requestListData()
  },
  data () {
    return {
      currentPage: 0,
      total: 0,
      pageSize: 10,
      loadingRequest: false
    }
  },
  watch: {
    currentPage () {
      this._safelyCallHook(this._pageChanged)
      this._requestListData()
    },
    pageSize () {
      this._safelyCallHook(this._pageSizeChanged)
      this._requestListData()
    }
  },
  methods: {
    _purgeEmptyKeys (obj) {
      const newObj = { ...obj }
      for (let key in newObj) {
        if (newObj.hasOwnProperty(key) && (newObj[key] === '' || newObj[key] === null)) {
          delete newObj[key]
        }
      }
      return newObj
    },
    _safelyCallHook (fn) {
      fn && fn instanceof Function && fn()
    },
    async _safelyAwaitFn (fn) {
      fn && fn instanceof Function && await fn()
    },
    async _requestListData () {
      this.loadingRequest = true
      try {
        await this._safelyAwaitFn(this.requestListData)
      } finally {
        this.loadingRequest = false
      }
    },
    handlePageChange (newPage) {
      this.currentPage = newPage - 1
    },
    handlePageSizeChange (newPageSize) {
      this.pageSize = newPageSize
    },
    _pageChanged () {},
    _pageSizeChanged () {}
  }
}
