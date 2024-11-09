/* eslint-disable react-hooks/exhaustive-deps */
'use client'

import { usePathname, useSearchParams } from 'next/navigation'
import { useEffect } from 'react'

/**
 * 스크롤 복구 이벤트 처리
 * @param isLoad 초기 스크롤 복구 이벤트 발생 여부
 * @returns
 */
export const useScrollRestoration = (isLoad = true) => {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  const scrollRestoration = () => {
    const url = `${pathname}?${searchParams}`
    const scrollDataStr = sessionStorage.getItem(url)
    if (scrollDataStr == null) return false
    const scrollData = JSON.parse(scrollDataStr)

    if (scrollData.path === url) {
      window.scrollTo(0, scrollData.scrollY)
      sessionStorage.removeItem(url)

      return true
    }

    return false
  }

  useEffect(() => {
    window.history.scrollRestoration = 'manual'
    /** 초기 로드할때 복구 이벤트 발생 여부 확인 */
    if (!isLoad) return
    scrollRestoration()
  }, [pathname, searchParams, isLoad])

  return {
    scrollRestoration
  }
}
