import { Company } from 'src/@types/data/company'
import { GetCompanyArgs } from 'src/@types/raw/getCompany'
import { WithFetch } from 'src/@types/utils/withFetch'

export const getCompany = async ({
  fetchMarket,
  ticker,
}: WithFetch<GetCompanyArgs>) => {
  const res = await fetchMarket<Company>({ url: `companies/${ticker}` })
  return res
}
