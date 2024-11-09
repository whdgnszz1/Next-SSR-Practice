'use server'

import { BookPage } from '@/components/pages/book'
import { fetchBook } from '@/services/book'

interface IPageProps {
  params: { id: string }
}

const Page = async ({ params }: IPageProps) => {
  const { id } = params
  const book = await fetchBook(id)

  if (!book) {
    return <div>로딩중</div>
  }

  return <BookPage book={book} />
}

export default Page
