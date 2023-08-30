import { FetchMarketArgs, FetchMarketResponse } from './fetchMarket'

export type GetClosure<A> = {
  fetchMarket: <T>(data: FetchMarketArgs) => Promise<FetchMarketResponse<T>>
} & A
