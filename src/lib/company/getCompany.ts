import { Company, GetCompanyArgs } from 'src/types/company'
import { WithFetch } from 'src/types/withFetch'

export const getCompany = async ({
  fetchMarket,
  ticker,
}: WithFetch<GetCompanyArgs>) => {
  const res = await fetchMarket<Company>({ url: `companies/${ticker}` })
  return res
}
