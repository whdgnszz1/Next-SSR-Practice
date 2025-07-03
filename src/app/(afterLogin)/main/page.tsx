import { MainPage } from '@/components/pages/main'
import { queryOptions } from '@/services/book'
import { Hydrate, getDehydratedQueries } from '@/util/api/react-query'

const Page = async () => {
  // 메인 페이지 관련 초기 쿼리들
  const initialQueries = [queryOptions.books()]

  const queries = await getDehydratedQueries(
    initialQueries.map((q) => ({ queryKey: q.queryKey, queryFn: q.queryFn })),
    true
  )

  return (
    <Hydrate state={{ queries: [...queries] }}>
      <MainPage />
    </Hydrate>
  )
}

export default Page
