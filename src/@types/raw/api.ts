import { Company } from '../data/company'
import { FetchMarketResponse } from './fetchMarket'
import { GetCompanyArgs } from './getCompany'

export interface API {
  companies: {
    getCompany: (data: GetCompanyArgs) => Promise<FetchMarketResponse<Company>>
  }
}
export type APIArgs = {
  token: string
}
