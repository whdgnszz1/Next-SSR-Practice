import type { MutableRefObject } from 'react'
import type { StoreApi } from 'zustand'

import type { UiHeaderCodeType } from './constant'

/**
 * GNB 헤더 정보
 */
export interface IUiHeaderProps {
  /** 헤더 타입 */
  type?: UiHeaderCodeType
  /** 헤더 타이틀
   * (모바일 심플헤더 타입 사용)
   */
  title?: string
}

/**
 * 로그인 세션 정보
 */
export interface IUiStoreProps {
  /** 헤더 타입 */
  header?: IUiHeaderProps
  /** 푸터 유무 */
  footer?: boolean
}

export interface IUiStoreState extends IUiStoreProps {
  // something todo
}

export interface IUiStoreActions {
  setHeader: (header: IUiStoreProps) => void
  setFooter: (bool: boolean) => void
}

export type UiStore = IUiStoreState & IUiStoreActions

export type UiStoreRef = MutableRefObject<StoreApi<UiStore>>

export type FnInitUiStore = () => IUiStoreState | null
