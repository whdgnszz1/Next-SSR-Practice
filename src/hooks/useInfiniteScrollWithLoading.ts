'use client'

import { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import { InfiniteData, UseInfiniteQueryResult } from '@tanstack/react-query'
import { useLoadingStore } from '@/stores/loading'

interface UseInfiniteScrollWithLoadingProps<T> {
  query: UseInfiniteQueryResult<InfiniteData<T, unknown>, Error>
  rootMargin?: string
}

export const useInfiniteScrollWithLoading = <T>({
  query,
  rootMargin = '20px'
}: UseInfiniteScrollWithLoadingProps<T>) => {
  const { ref, inView } = useInView({
    rootMargin
  })

  const { loading, setLoading } = useLoadingStore()
  const { data, fetchNextPage, hasNextPage } = query

  useEffect(() => {
    if (inView && hasNextPage && !loading && data) {
      setLoading(true)
      fetchNextPage()
    }
  }, [inView, hasNextPage, loading, data, setLoading, fetchNextPage])

  useEffect(() => {
    if (data) {
      setLoading(false)
    }
  }, [data, setLoading])

  return { ref, inView, loading }
} 