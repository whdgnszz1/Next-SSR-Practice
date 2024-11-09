import type { UrlObject } from 'url'

import type { LinkProps } from 'next/link'
import type { AnchorHTMLAttributes, ReactNode } from 'react'

type CutomAnchorAttrs = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href'>
type CutomLinkProps = Pick<LinkProps, 'scroll' | 'prefetch'>

interface ILoadingProps {
  /** 로딩여부 */
  loading?: boolean
  /** 로딩타임아웃(sec) */
  loadingTimeout?: number
}

type CustomGtagData = Record<string, unknown> | null | undefined

interface IGTagProps<GTaagData = CustomGtagData> {
  /** GA데이터 */
  gtag?: GTaagData
  /** GA데이터 핸들 */
  gtagHandler?: (data: GTaagData) => void
}

/**
 * Link Props
 */
export interface ILinkProps<GTagData = CustomGtagData>
  extends CutomAnchorAttrs,
    ILoadingProps,
    IGTagProps<GTagData>,
    CutomLinkProps {
  href?: string | UrlObject
  /**
   * URL 매핑 함수
   * - URL 매핑 함수를 사용하여 URL을 변경
   * - ex) (url: string) => url.replace('https://', 'http://')
   */
  urlMapper?: (url: string) => string
  children: ReactNode
}
