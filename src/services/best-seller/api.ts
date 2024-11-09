import { QueryFunctionContext } from '@tanstack/react-query'
import { IPaginatedBestSeller } from '.'
import { nextFetch } from '../fetch'

export const fetchBestSellers = async ({
  pageParam = 1
}: QueryFunctionContext): Promise<IPaginatedBestSeller> => {
  const response = await nextFetch(`/api/best-seller?page=${pageParam}`)

  if (!response) {
    return { data: [], nextCursor: undefined }
  }

  return response
}
