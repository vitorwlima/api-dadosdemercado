import { Company, GetCompanyArgs } from './company'
import { FetchMarketResponse } from './fetchMarket'

export declare interface API {
  companies: {
    getCompany: (data: GetCompanyArgs) => Promise<FetchMarketResponse<Company>>
  }
}

export declare type APIArgs = {
  token: string
}
