import { SearchPage } from '@/components/pages/search'
import { queryOptions } from '@/services/search'
import { Hydrate, getDehydratedQueries } from '@/util/api/react-query'

interface IPageProps {
  searchParams: { query: string }
}

const Page = async ({ searchParams }: IPageProps) => {
  const query = searchParams.query || ''
  const { queryKey: fetchSearchResultsKey, queryFn: fetchSearchResultsFn } =
    queryOptions.search()

  const queries = await getDehydratedQueries(
    [
      {
        queryKey: [fetchSearchResultsKey, query],
        queryFn: fetchSearchResultsFn
      }
    ],
    true
  )

  return (
    <Hydrate state={{ queries: [...queries] }}>
      <SearchPage query={query} />
    </Hydrate>
  )
}

export default Page
