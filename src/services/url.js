// const proLocalService = '/web-api'
const proLocalService = 'http://pxsuzhou.xdf.cn/api'

let URL = {
  getSignRecordList: `${proLocalService}/signrecord/getall`,
  submitScannerInfo: `${proLocalService}/signrecord/submitform`,
  exchangeWorker: `${proLocalService}/signrecord/exchangework`,
  getTodayXungengResult: `${proLocalService}/signrecord/getadminviewlist`
}

export default URL
