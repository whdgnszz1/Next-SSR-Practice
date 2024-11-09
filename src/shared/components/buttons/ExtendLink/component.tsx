'use client'

import Link from 'next/link'
import { usePathname, useSearchParams } from 'next/navigation'
import { type MouseEvent } from 'react'

import { HtmlAnchorTarget } from '@/shared/constants'
import { useLoadingStore } from '@/stores/loading'
import { isString } from '@/util/type'
import { ILinkProps } from './interface'
import { matchURL } from './util'
import { setUserScrollPos } from '@/hooks'

/** 로딩 타임아웃(sec) */
const LOADING_TIMEOUT = 1.5

/**
 * - next/link 컴포넌트 확장
 */
export function ExtendLink<CustomProps = undefined, GTagData = undefined>({
  loading = true,
  loadingTimeout = LOADING_TIMEOUT,
  gtag,
  gtagHandler,
  urlMapper,
  href = '#',
  /**
   * 스크롤 위치를 유지
   * @see https://nextjs.org/docs/pages/api-reference/components/link#scroll
   */
  scroll = true,
  target,
  onClick,
  children,
  ...props
}: ILinkProps<GTagData> & CustomProps) {
  const { setLoading } = useLoadingStore()
  const pathname = usePathname()
  const params = useSearchParams()

  let sTargetURL = href
  if (isString(href)) {
    if (href.length && urlMapper) {
      sTargetURL = urlMapper(href)
    } else {
      loading = false
    }
  }

  /** 로딩 핸들러 */
  const fnLoadingHandle = () => {
    if (!loading || target === HtmlAnchorTarget.BLANK) return
    setLoading(true)
    // LOADING_TIMEOUT 이후 로딩 해제
    setTimeout(() => {
      if (!loading) return
      setLoading(false)
    }, loadingTimeout * 1000)
  }

  /**
   * 스크롤 핸들러
   */
  const fnScrollHandle = () => {
    if (!scroll) return
    // 사용자 스크롤 위치 저장(for useScrollRestoration)
    setUserScrollPos(`${pathname}?${params}`)
  }

  /** gtag 핸들러 */
  const fnGtagHandle = () => {
    if (gtag == null) return
    gtagHandler && gtagHandler(gtag)
  }

  /** 현재 URL과 대상 URL 매치 */
  const bMatchCurrentURL = matchURL(pathname, sTargetURL)

  const handlerList = [
    fnLoadingHandle,
    fnScrollHandle,
    onClick,
    fnGtagHandle
  ].filter(Boolean)

  /** 버튼(클릭) 핸들러 */
  const fnClickHandle = (evt: MouseEvent<HTMLAnchorElement>) => {
    if (bMatchCurrentURL) {
      evt.preventDefault()
      return
    }

    handlerList.forEach((fn) => fn && fn(evt))
  }

  return (
    <Link
      href={sTargetURL}
      target={target}
      scroll={scroll}
      onClick={fnClickHandle}
      {...props}
    >
      {children}
    </Link>
  )
}
