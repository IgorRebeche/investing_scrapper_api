import qs from 'querystring'
import { ivApi } from './api'
import SearchAsset from '../entities/asset/searchAsset/index'

class investingServices {
  constructor() {}

  async createAlert(
    assetTicker: string,
    frequency: string,
    value: number,
    alert_trigger: string
  ) {
    //Get pair_ID
    const searchAssetInfo = new SearchAsset(
      await this.getPairInfoByAssetName(assetTicker)
    )

    const data = qs.stringify({
      alertType: 'instrument',
      'alertParams[alert_trigger]': 'price',
      'alertParams[pair_ID]': searchAssetInfo.pair_ID,
      'alertParams[threshold]': 'over',
      'alertParams[frequency]': 'Once',
      'alertParams[value]': '68,64',
      'alertParams[platform]': 'desktopAlertsCenter',
      'alertParams[email_alert]': 'Yes',
    })

    ivApi.post('/useralerts/service/create', data)

    //Create Alert
  }

  async getPairInfoByAssetName(assetTicker: string) {
    const data = qs.stringify({
      search_text: assetTicker,
      term: assetTicker,
      country_id: 0,
      tab_id: 'All',
    })

    const options = {
      params: {
        searchType: 'alertCenterInstruments',
      },
    }
    try {
      const res = await ivApi.post('/search/service/search', data, options)

      return res.data.All[0]
    } catch (error) {
      console.log('Error getting Asset Id', error)
    }
  }
}
