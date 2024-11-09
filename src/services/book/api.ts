import { QueryFunctionContext } from '@tanstack/react-query'
import { IBook, IPaginatedBooks } from '.'
import { nextFetch } from '../fetch'

export const fetchBook = async (bookId: string): Promise<IBook | undefined> => {
  const response = await nextFetch(`/api/book/${bookId}`)

  if (!response) {
    return {} as IBook
  }

  return response
}

export const fetchBooks = async ({
  pageParam = 1
}: QueryFunctionContext): Promise<IPaginatedBooks> => {
  const response = await nextFetch(`/api/book?page=${pageParam}`)

  if (!response) {
    return { data: [], nextCursor: undefined }
  }

  return response
}
