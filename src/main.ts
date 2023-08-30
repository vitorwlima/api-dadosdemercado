import { GetCompanyArgs, getCompany } from 'src/lib/company/getCompany'
import { FetchMarketArgs, FetchMarketResponse } from 'src/types/fetchMarket'

type APIArgs = {
  token: string
}

class APIDadosDeMercado {
  private readonly token: string
  private readonly fetchMarket: <T>(
    data: FetchMarketArgs,
  ) => Promise<FetchMarketResponse<T>>

  constructor(data: APIArgs) {
    this.token = data.token
    this.fetchMarket = async function <T>({
      url,
    }: FetchMarketArgs): Promise<FetchMarketResponse<T>> {
      try {
        const data = await fetch(
          `https://api.dadosdemercado.com.br/v1/${url}`,
          {
            headers: {
              Authorization: `Bearer ${this.token}}`,
              Accept: 'application/json',
            },
            method: 'GET',
            cache: 'no-cache',
          },
        )

        const json = (await data.json()) as T

        return {
          ok: true,
          data: json,
        }
      } catch (error) {
        return {
          ok: false,
          error,
        }
      }
    }
  }

  public companies = {
    getCompany: async (data: GetCompanyArgs) =>
      getCompany({ fetchMarket: this.fetchMarket, ...data }),
  }
}

export default APIDadosDeMercado
