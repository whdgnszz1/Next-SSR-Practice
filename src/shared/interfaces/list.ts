import { QueryFunction, QueryKey, QueryOptions } from '@tanstack/react-query'

export interface IListQuerySectionData<T> {
  list: T[]
  total: number
  [key: string]: any
}

export type QueryFunc<T> = QueryFunction<
  IListQuerySectionData<T>,
  QueryKey,
  unknown
>

export interface IListQueryProps<T>
  extends Omit<QueryOptions<IListQuerySectionData<T>>, 'meta' | 'queryFn'> {
  queryKey: QueryKey
  queryFn?: QueryFunction<IListQuerySectionData<T>, QueryKey, unknown>
}

export interface IInfiniteListQueryProps<T>
  extends Omit<QueryOptions<T>, 'meta' | 'queryFn'> {
  queryKey: QueryKey
  queryFn?: QueryFunction<IListQuerySectionData<T>, QueryKey, unknown>
}

export type TQueryType<T> = IListQueryProps<T> | IInfiniteListQueryProps<T>
