import { QueryFunctionContext } from '@tanstack/react-query'
import { IPaginatedBooks } from '.'
import { nextFetch } from '../fetch'

export const fetchSearchResults = async ({
  queryKey,
  pageParam = 1
}: QueryFunctionContext): Promise<IPaginatedBooks> => {
  const [, query] = queryKey
  const response = await nextFetch(
    `/api/search?page=${pageParam}&query=${query}`
  )

  if (!response) {
    return { data: [], nextCursor: undefined }
  }

  return response
}
