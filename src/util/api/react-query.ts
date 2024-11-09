import {
  HydrationBoundary,
  QueryClient,
  QueryFunctionContext,
  QueryKey,
  QueryState,
  dehydrate
} from '@tanstack/react-query'
import { isEqual } from '../object'

type UnwrapPromise<T> = T extends Promise<infer U> ? U : T

interface IQueryProps<ResponseType = unknown> {
  queryKey: QueryKey
  queryFn: (context: QueryFunctionContext) => Promise<ResponseType>
  getNextPageParam?: (lastPage: any, allPages: any) => any
}

interface IDehydratedQueryExtended<TData = unknown, TError = unknown> {
  state: QueryState<TData, TError>
}

/** 단일 쿼리를 미리 패칭(prefetch)하고, dehydrated된 쿼리를 반환하는 함수. */
export async function getDehydratedQuery<Q extends IQueryProps>({
  queryKey,
  queryFn
}: Q) {
  const queryClient = new QueryClient()
  await queryClient.prefetchQuery({ queryKey, queryFn })

  const { queries } = dehydrate(queryClient)
  const [dehydratedQuery] = queries.filter((query) =>
    isEqual(query.queryKey, queryKey)
  )

  return dehydratedQuery as IDehydratedQueryExtended<
    UnwrapPromise<ReturnType<Q['queryFn']>>
  >
}

/** 여러 쿼리를 미리 패칭(prefetch)하고, dehydrated된 쿼리를 반환하는 함수.
 * @param isInfinite 무한 쿼리 여부
 */
export async function getDehydratedQueries<Q extends IQueryProps[]>(
  queries: Q,
  isInfinite?: boolean
) {
  const queryClient = new QueryClient()
  await Promise.allSettled(
    queries.map(({ queryKey, queryFn, getNextPageParam }) =>
      isInfinite
        ? queryClient.prefetchInfiniteQuery({
            queryKey,
            queryFn,
            initialPageParam: 1,
            getNextPageParam
          })
        : queryClient.prefetchQuery({ queryKey, queryFn })
    )
  )

  return dehydrate(queryClient).queries as IDehydratedQueryExtended<
    UnwrapPromise<ReturnType<Q[number]['queryFn']>>
  >[]
}

export const Hydrate = HydrationBoundary
