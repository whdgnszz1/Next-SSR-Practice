import { MainPage } from '@/components/pages/main'
import { queryOptions } from '@/services/book'
import { Hydrate, getDehydratedQueries } from '@/util/api/react-query'

const Page = async () => {
  const { queryKey: fetchBooksKey, queryFn: fetchBooksFn } =
    queryOptions.books()

  const queries = await getDehydratedQueries(
    [{ queryKey: fetchBooksKey, queryFn: fetchBooksFn }],
    true
  )

  return (
    <Hydrate state={{ queries: [...queries] }}>
      <MainPage />
    </Hydrate>
  )
}

export default Page
