import { Company } from '../../@types/data/company'
import { GetCompanyArgs } from '../../@types/raw/getCompany'
import { WithFetch } from '../../@types/utils/withFetch'

export const getCompany = async ({
  fetchMarket,
  ticker,
}: WithFetch<GetCompanyArgs>) => {
  const res = await fetchMarket<Company>({ url: `companies/${ticker}` })
  return res
}
