import { useInfiniteQuery } from '@tanstack/react-query'
import { SEARCH_KEY, fetchSearchResults } from '..'
import { IPaginatedBooks } from '../types'

export const useGetSearchResults = (query: string) => {
  return useInfiniteQuery<IPaginatedBooks, Error>({
    queryKey: [SEARCH_KEY, query],
    queryFn: fetchSearchResults,
    initialPageParam: 1,
    getNextPageParam: (lastPage) => lastPage.nextCursor
  })
}
