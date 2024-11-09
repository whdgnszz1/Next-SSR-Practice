/* eslint-disable react-hooks/exhaustive-deps */
'use client'

import { useInfiniteQuery, useIsRestoring } from '@tanstack/react-query'
import { useEffect, useRef, useState } from 'react'

import {
  IInfiniteListQueryProps,
  IListQuerySectionData
} from '@/shared/interfaces'
import { useScrollRestoration } from './scroll-restoration'

export const useBaseInfiniteListQuery = <T>({
  queryKey,
  queryFn
}: IInfiniteListQueryProps<T>) => {
  const [isScrollRestore, setScrollRestore] = useState(false)
  const isPersistRestor = useRef(false)

  const isRestoring = useIsRestoring()
  const { scrollRestoration } = useScrollRestoration(false)

  const {
    data,
    isLoading,
    isFetching,
    isError,
    isFetchingNextPage,
    fetchNextPage,
    ...opt
  } = useInfiniteQuery<IListQuerySectionData<T>>({
    queryKey,
    queryFn,
    initialPageParam: 1,
    getNextPageParam: (lastPage, pages) => {
      const list = pages?.flatMap((page) => page?.list) || []
      const lastList = pages[pages?.length - 1]?.list || []
      if (list.length === lastPage?.total || lastList.length === 0) {
        return null
      }
      return pages?.length + 1
    }
  })

  useEffect(() => {
    if (!isRestoring) return
    isPersistRestor.current = true
  }, [isRestoring])

  /** 스크롤 복구 처리 */
  useEffect(() => {
    if (isRestoring || isScrollRestore) return
    const isScroll = scrollRestoration()
    setScrollRestore(isScroll)
  }, [isRestoring, isScrollRestore])

  return {
    data,
    isLoading,
    isError,
    isFetching,
    isFetchingNextPage,
    fetchNextPage,
    ...opt
  }
}
