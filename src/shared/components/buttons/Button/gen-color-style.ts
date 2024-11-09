import clsx from 'clsx'

import { ButtonColor as Color } from './constant'
import type { ButtonColorType } from './constant'

/**
 * tailwindscss - safelist 패턴 추가 필수
 */
export const genBtnColorStyle = (
  color: ButtonColorType,
  isOutline: boolean = false
) => {
  const isNoGray = color !== Color.GRAY

  /**
   * 고스트 버튼
   */
  if (color === Color.GHOST) {
    return clsx(
      'bg-transparent',
      'border border-gray-500',
      'text-black',
      'hover:bg-gray-200',
      'active:bg-gray-200',
      'disabled:bg-white',
      'disabled:border-gray-300 disabled:text-gray-600'
    )
  }

  // 일반 버튼
  if (!isOutline) {
    return clsx(
      `bg-${color}-700`,
      'text-white',
      `hover:bg-${color}-${isNoGray ? '900' : '800'} :hover:text-white`,
      `active:bg-${color}-900`,
      `disabled:bg-${color}-400`,
      isNoGray ? `disabled:border-${color}-400 disabled:text-white` : undefined
    )
  }

  // 아웃라인 버튼
  return clsx(
    `border border-${color}-700`,
    isNoGray ? `text-${color}-700` : 'text-black',
    `hover:bg-${color}-200`,
    `active:bg-${color}-200`,
    'disabled:bg-white',
    // 'disabled:bg-transparent',
    `disabled:border-${color}-400 disabled:text-${color}-400`
  )
}
