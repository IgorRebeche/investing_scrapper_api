import qs from 'querystring'
import { ivApi } from './api'
import SearchAsset from '../entities/asset/searchAsset/index'

type AlertTrigger = 'change_percent' | 'volume' | 'price'

type Threshold = 'over' | 'under' | 'both'

type Frequency = 'Once' | 'Recurring'

export class InvestingServices {
  constructor() {}

  async createAlert(
    assetTicker: string,
    threshold: Threshold,
    frequency: Frequency,
    value: number,
    alert_trigger: AlertTrigger
  ) {
    const searchAssetInfo = await this.getPairInfoByAssetName(assetTicker)

    const data = qs.stringify({
      alertType: 'instrument',
      'alertParams[alert_trigger]': alert_trigger,
      'alertParams[pair_ID]': searchAssetInfo.pair_ID,
      'alertParams[threshold]': threshold,
      'alertParams[frequency]': frequency,
      'alertParams[value]': value,
      'alertParams[platform]': 'desktopAlertsCenter',
      'alertParams[email_alert]': 'Yes',
    })

    try {
      const res = await ivApi.post('/useralerts/service/create', data)

      if (typeof res.data === 'number' && res.status == 200) {
        console.log('Alert Created!')
      } else {
        console.log(res.data)
      }
    } catch (error) {
      console.log('Error when creating alert', error)
    }
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

      return new SearchAsset(res.data.All[0])
    } catch (error) {
      console.log('Error getting Asset Id', error)
    }
  }
}
