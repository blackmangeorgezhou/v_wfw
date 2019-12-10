import URL from './url'
import request from './request'

// const get = request.get
const post = request.post

let API = {
  // name + date
  getSignRecordList: async (data) => {
    const reqParams = {
      ...data,
      Page: 1,
      Limit: 100
    }
    const result = await post(URL.getSignRecordList, reqParams)
    return result
  },

  submitScannerInfo: async (data) => {
    const result = await post(URL.submitScannerInfo, data)
    return result
  },

  exchangeWorker: async (data) => {
    const result = await post(URL.exchangeWorker, data)
    return result
  },

  getTodayXungengResult: async (data) => {
    const result = await post(URL.getTodayXungengResult, data)
    return result
  }
}

export default API
