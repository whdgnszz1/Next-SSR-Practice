import { BestSellerPage } from '@/components/pages/best-seller'
import { queryOptions } from '@/services/best-seller'
import { Hydrate, getDehydratedQueries } from '@/util/api/react-query'

const Page = async () => {
  const { queryKey: fetchBestSellersKey, queryFn: fetchBestSellersFn } =
    queryOptions.bestsellers()

  const queries = await getDehydratedQueries(
    [{ queryKey: fetchBestSellersKey, queryFn: fetchBestSellersFn }],
    true
  )

  return (
    <Hydrate state={{ queries: [...queries] }}>
      <BestSellerPage />
    </Hydrate>
  )
}

export default Page
