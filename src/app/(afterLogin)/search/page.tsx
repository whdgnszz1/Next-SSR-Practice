import { SearchPage } from '@/components/pages/search'
import { queryOptions } from '@/services/search'
import { Hydrate, getDehydratedQueries } from '@/util/api/react-query'

interface IPageProps {
  searchParams: { query: string }
}

const Page = async ({ searchParams }: IPageProps) => {
  const query = searchParams.query || ''

  // 검색 페이지 관련 초기 쿼리들
  const initialQueries = [queryOptions.search()]

  const queries = await getDehydratedQueries(
    initialQueries.map((q) => ({
      queryKey: [q.queryKey, query],
      queryFn: q.queryFn
    })),
    true
  )

  return (
    <Hydrate state={{ queries: [...queries] }}>
      <SearchPage query={query} />
    </Hydrate>
  )
}

export default Page
