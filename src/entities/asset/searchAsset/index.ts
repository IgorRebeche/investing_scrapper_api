import { SearchAssetResponse } from './HttpResponse'

class SearchAsset {
  public pair_ID: number
  public tab_ID: string
  public popularity_rank: number
  public link: string
  public symbol: string
  public name: string
  public trans_name: string
  public pair_type: string
  public exchange_name_short: string
  public pair_type_label: string
  public aql_link: string
  public aql_pre_link: string
  public country_ID: number
  public flag: string
  public exchange_popular_symbol: string
  public override_country_ID: number
  public isCrypto: boolean

  constructor(data: SearchAssetResponse) {
    this.pair_ID = data.pair_ID
    this.tab_ID = data.tab_ID
    this.popularity_rank = data.popularity_rank
    this.link = data.link
    this.symbol = data.symbol
    this.name = data.name
    this.trans_name = data.trans_name
    this.pair_type = data.pair_type
    this.exchange_name_short = data.exchange_name_short
    this.pair_type_label = data.pair_type_label
    this.aql_link = data.aql_link
    this.aql_pre_link = data.aql_pre_link
    this.country_ID = data.country_ID
    this.flag = data.flag
    this.exchange_popular_symbol = data.exchange_popular_symbol
    this.override_country_ID = data.override_country_ID
    this.isCrypto = data.isCrypto
  }
}

export default SearchAsset
