import { API, APIArgs } from './@types/raw/api'
import { FetchMarketArgs, FetchMarketResponse } from './@types/raw/fetchMarket'
import { GetCompanyArgs } from './@types/raw/getCompany'
import { getCompany } from './lib/company/getCompany'

class APIDadosDeMercado implements API {
  private readonly fetchMarket: <T>(
    data: FetchMarketArgs,
  ) => Promise<FetchMarketResponse<T>>

  constructor(APIData: APIArgs) {
    this.fetchMarket = async function <T>({
      url,
    }: FetchMarketArgs): Promise<FetchMarketResponse<T>> {
      try {
        const data = await fetch(
          `https://api.dadosdemercado.com.br/v1/${url}`,
          {
            headers: {
              Authorization: `Bearer ${APIData.token}}`,
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

  public readonly companies = {
    getCompany: async (data: GetCompanyArgs) =>
      getCompany({ fetchMarket: this.fetchMarket, ...data }),
  }
}

export default APIDadosDeMercado
