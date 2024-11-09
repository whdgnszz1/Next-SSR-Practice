import clsx from 'clsx'

import { ModalLayout, ModalSize } from '../constant'
import type { IModalStyleProps } from './interface'

/**
 * 다이얼로그 사이즈 스타일 파싱
 */
const parseSizeStyles = ({ size = ModalSize.DEFAULT }: IModalStyleProps) => {
  // only ModalSize.DEFAULT
  if (size === ModalSize.DEFAULT) {
    return clsx({
      'h-auto w-[360px] px-[37px]': true
    })
  }

  // only ModalSize.FULL
  if (size === ModalSize.FULL) {
    return
  }

  // SMALL, MEDIUM, LARGE
  return clsx({
    'max-h-[840px] px-[34px]': true,
    'w-[400px]': size === ModalSize.SMALL,
    'w-[560px]': size === ModalSize.MEDIUM,
    'w-[920px]': size === ModalSize.LARGE
  })
}

/**
 * 다이얼로그 스타일 파싱
 */
export const parseDialogStyles = ({ layout, size }: IModalStyleProps) => {
  const styles = clsx({
    'relative border border-black bg-white pb-[30px] text-black': true,
    'rounded-2xl': layout !== ModalLayout.FULL
  })

  if (layout === ModalLayout.BOTTOM_SHEET) {
    return styles
  }

  return clsx(styles, parseSizeStyles({ size }))
}
