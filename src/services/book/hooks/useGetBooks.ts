import { useInfiniteQuery } from '@tanstack/react-query'
import { BOOK_KEY, fetchBooks } from '..'
import { IPaginatedBooks } from '../types'

export const useGetBooks = () => {
  return useInfiniteQuery<IPaginatedBooks, Error>({
    queryKey: [BOOK_KEY],
    queryFn: fetchBooks,
    initialPageParam: 1,
    getNextPageParam: (lastPage) => lastPage.nextCursor
  })
}
