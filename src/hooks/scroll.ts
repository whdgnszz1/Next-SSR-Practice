'use client'

/**
 * 페이지 이동시 스크롤 위치를 저장
 * - sessionStorage 사용
 * - `${pathname}?${params}` 키로 저장
 * @param path 스크롤 위치 저장 키
 */
export const setUserScrollPos = (path: string) => {
  if (typeof window === 'undefined') return
  const { scrollY } = window
  window.sessionStorage.setItem(
    path,
    JSON.stringify({
      path,
      scrollY
    })
  )
}
