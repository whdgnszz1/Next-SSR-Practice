'use client'

import { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import { InfiniteData, UseInfiniteQueryResult } from '@tanstack/react-query'

interface UseInfiniteScrollProps<T> {
  query: UseInfiniteQueryResult<InfiniteData<T, unknown>, Error>
  rootMargin?: string
  enabled?: boolean
}

export const useInfiniteScroll = <T>({
  query,
  rootMargin = '20px',
  enabled = true
}: UseInfiniteScrollProps<T>) => {
  const { ref, inView } = useInView({
    rootMargin
  })

  const { fetchNextPage, hasNextPage } = query

  useEffect(() => {
    if (inView && hasNextPage && enabled) {
      fetchNextPage()
    }
  }, [inView, hasNextPage, enabled, fetchNextPage])

  return { ref, inView }
} 