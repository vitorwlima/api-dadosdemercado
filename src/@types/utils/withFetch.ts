import { FetchMarketArgs, FetchMarketResponse } from '../raw/fetchMarket'

export type WithFetch<A> = {
  fetchMarket: <T>(data: FetchMarketArgs) => Promise<FetchMarketResponse<T>>
} & A
