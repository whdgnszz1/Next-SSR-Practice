import { commonQueryOptions } from '@/util/react-query/options'
import { fetchSearchResults } from '.'

export const SEARCH_KEY = 'SEARCH'

const queryKeys = {
  search: [SEARCH_KEY]
}

export const queryOptions = {
  search: () => ({
    queryKey: [...queryKeys.search],
    queryFn: fetchSearchResults,
    ...commonQueryOptions
  })
}
