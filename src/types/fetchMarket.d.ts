export type FetchMarketArgs = {
  url: string
}

export type FetchMarketResponse<T> =
  | {
      ok: false
      error: unknown
    }
  | {
      ok: true
      data: T
    }
