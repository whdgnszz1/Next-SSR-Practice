import { useInfiniteQuery } from '@tanstack/react-query'
import { BEST_SELLER_KEY, fetchBestSellers } from '..'
import { IPaginatedBestSeller } from '../types'

export const useGetBestSellers = () => {
  return useInfiniteQuery<IPaginatedBestSeller, Error>({
    queryKey: [BEST_SELLER_KEY],
    queryFn: fetchBestSellers,
    initialPageParam: 1,
    getNextPageParam: (lastPage) => lastPage.nextCursor
  })
}
