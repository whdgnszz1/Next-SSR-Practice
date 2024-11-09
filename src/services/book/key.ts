import { commonQueryOptions } from '@/util/react-query/options'
import { fetchBooks, fetchBook } from '.'

export const BOOK_KEY = 'BOOK'

const queryKeys = {
  books: [BOOK_KEY],
  book: (bookId: string) => [BOOK_KEY, bookId]
}

export const queryOptions = {
  books: () => ({
    queryKey: [...queryKeys.books],
    queryFn: fetchBooks,
    ...commonQueryOptions
  }),
  book: (bookId: string) => ({
    queryKey: queryKeys.book(bookId),
    queryFn: () => fetchBook(bookId),
    ...commonQueryOptions
  })
}
