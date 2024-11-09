import { ICloseHandleProps } from '@/shared'
import type { ModalLayoutType, ModalSizeType } from './constant'

/**
 * Modal Props
 */
export interface IModalProps extends ICloseHandleProps {
  /** 모달 레이아웃 */
  layout?: ModalLayoutType
  /** 모달 제목 */
  title?: string
  // 제목 정렬
  titleAlign?: 'center' | 'left'
  /** 모달 크기 */
  size?: ModalSizeType
  /** 닫기 버튼 */
  close?: boolean
  /** 패딩 여부 */
  padding?: boolean
  /**  헤더 마진 여부 */
  headerMargin?: boolean | string
  /** 모달이 결과와 함께 닫힐 때 호출되는 함수 */
  onResolve?: <T>(value: T) => void
  /** TODO: 애니메이션 옵션 */
  animation?: any
  /** 다이얼로그 오버레이 스타일 */
  overlayStyle?: string
  /** 다이얼로그(박스) 스타일 */
  dialogStyle?: string
  children?: React.ReactNode
  className?: string
}
