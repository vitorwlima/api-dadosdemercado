import { Company } from 'src/types/company'
import { GetClosure } from 'src/types/getClosure'

export type GetCompanyArgs = {
  ticker: string
}

export const getCompany = async ({
  fetchMarket,
  ticker,
}: GetClosure<GetCompanyArgs>) => {
  const res = await fetchMarket<Company>({ url: `companies/${ticker}` })
  return res
}
