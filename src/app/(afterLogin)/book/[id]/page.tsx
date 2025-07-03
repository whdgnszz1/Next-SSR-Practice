'use server'

import { BookPage } from '@/components/pages/book'
import { queryOptions } from '@/services/book'
import { Hydrate, getDehydratedQueries } from '@/util/api/react-query'

interface IPageProps {
  params: { id: string }
}

const Page = async ({ params }: IPageProps) => {
  const { id } = params

  // 책 상세 페이지 관련 초기 쿼리들
  const initialQueries = [queryOptions.book(id)]

  const queries = await getDehydratedQueries(
    initialQueries.map((q) => ({ queryKey: q.queryKey, queryFn: q.queryFn })),
    true
  )

  return (
    <Hydrate state={{ queries: [...queries] }}>
      <BookPage bookId={id} />
    </Hydrate>
  )
}

export default Page
