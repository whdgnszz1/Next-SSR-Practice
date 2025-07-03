import { commonQueryOptions } from '@/util/react-query/options'
import { fetchBestSellers } from '.'

export const BEST_SELLER_KEY = 'BEST_SELLER'

const queryKeys = {
  bestSellers: [BEST_SELLER_KEY]
}

export const queryOptions = {
  bestsellers: () => ({
    queryKey: [...queryKeys.bestSellers],
    queryFn: fetchBestSellers,
    initialPageParam: 1,
    getNextPageParam: (lastPage: any) => lastPage.nextCursor,
    ...commonQueryOptions
  })
}
