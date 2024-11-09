import type { ILinkDataProps } from './nav-items'

/**
 * 링크 엘리먼트 대체 속성
 */
export interface ICustomLinkProps {
  /** 링크 컴포넌트 */
  linkElement?: React.ElementType
}

/**
 * React.HtmlHTMLAttributes<T> 대체 속성
 */
export type ReacHtmlProps<T = HTMLDivElement> = React.HtmlHTMLAttributes<T>

/**
 * 링크 데이터 엘레먼트 대체 속성
 * - React.HtmlHTMLAttributes<T>
 * - ILinkDataProps -- { data: ILinkItem }
 * - ILinkItem
 */
export type ReactLinkDataProps<T = HTMLDivElement> = ReacHtmlProps<T> &
  ILinkDataProps
