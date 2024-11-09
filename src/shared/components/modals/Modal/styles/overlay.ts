import clsx from 'clsx'

import { ModalLayout } from '../constant'
import type { IModalStyleProps } from './interface'

/**
 * 모달 오버레이 레이아웃 스타일 파싱
 */
const parseLayoutStyles = ({ layout }: IModalStyleProps) => {
  if (layout === ModalLayout.FULL) {
    return clsx('overflow-scroll')
  }

  if (layout === ModalLayout.BOTTOM_SHEET) return

  return clsx('items-center justify-center')
}

/**
 * 모달 오버레이 스타일 파싱
 */
export const parseOverayStyles = ({ layout }: IModalStyleProps) => {
  const layoutStyle = parseLayoutStyles({ layout })

  return clsx(['flex h-full items-center justify-center'], layoutStyle)
}
