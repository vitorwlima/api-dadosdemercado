export declare type FetchMarketArgs = {
  url: string
}

export declare type FetchMarketResponse<T> =
  | {
      ok: false
      error: unknown
    }
  | {
      ok: true
      data: T
    }
