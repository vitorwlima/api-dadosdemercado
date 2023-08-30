import { FetchMarketArgs, FetchMarketResponse } from './fetchMarket'

export type WithFetch<A> = {
  fetchMarket: <T>(data: FetchMarketArgs) => Promise<FetchMarketResponse<T>>
} & A
