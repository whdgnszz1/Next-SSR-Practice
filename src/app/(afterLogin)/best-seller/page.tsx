import { BestSellerPage } from '@/components/pages/best-seller'
import { queryOptions as bestSellerQueryOptions } from '@/services/best-seller'
import { Hydrate, getDehydratedQueries } from '@/util/api/react-query'

const Page = async () => {
  // 베스트셀러 관련 초기 쿼리들
  const initialQueries = [bestSellerQueryOptions.bestsellers()]

  const queries = await getDehydratedQueries(
    initialQueries.map((q) => ({ 
      queryKey: q.queryKey, 
      queryFn: q.queryFn,
      getNextPageParam: q.getNextPageParam
    })),
    true
  )

  return (
    <Hydrate state={{ queries: [...queries] }}>
      <BestSellerPage />
    </Hydrate>
  )
}

export default Page
