import { ButtonSize } from '../constant'
import type { ButtonSizeType } from '../constant'
import { DefaultStyleProp } from './constant'
import type { DefButtonStyleProps } from './interface'

const {
  SIZE,
  LEADING,
  WEIGHT,
  HEIGHT,
  MIN_WIDTH,
  ROUNDED,
  PADDING_X,
  PADDING_Y
} = DefaultStyleProp

type DefButtonStyleType = {
  [key in ButtonSizeType]: DefButtonStyleProps
}

/**
 * fz- 클래스의 line-height를 적용하지 않기 위해 font size를 별도로 지정
 */
export const ButtonDefaultStyle: DefButtonStyleType = {
  // fz-16
  [ButtonSize.LARGE]: {
    [SIZE]: 'fz-16', // text-[16px]
    [LEADING]: 'leading-6', // leading-[24px]
    [WEIGHT]: 'font-bold',
    [HEIGHT]: 'h-12.5', // h-[50px]
    [ROUNDED]: 'rounded-lg',
    [MIN_WIDTH]: 'min-w-50' // min-w-[200px]
  },
  [ButtonSize.MEDIUM]: {
    [SIZE]: 'fz-14', // text-[14px]
    [WEIGHT]: 'font-bold',
    [HEIGHT]: 'h-11', // h-[44px]
    [ROUNDED]: 'rounded-lg',
    [MIN_WIDTH]: 'min-w-35' // min-w-[140px]
  },
  [ButtonSize.SMALL]: {
    [SIZE]: 'text-sm', // text-[14px]
    [WEIGHT]: 'font-bold',
    [HEIGHT]: 'h-9.5', // h-[38px]
    [ROUNDED]: 'rounded-lg',
    [PADDING_X]: 'px-3.5', // px-[14px]
    [PADDING_Y]: 'py-2.25' // py-[9px]
  },
  [ButtonSize.EXTRA_SMALL]: {
    [SIZE]: 'text-xs', // text-[12px]
    [WEIGHT]: 'font-medium',
    [HEIGHT]: 'h-7.5', // h-[30px]
    [ROUNDED]: 'rounded',
    [PADDING_X]: 'px-2.5' // px-[10px]
  },
  [ButtonSize.DOUBLE_EXTRA_SMALL]: {
    [SIZE]: 'text-xs', // text-[12px]
    [WEIGHT]: 'font-medium',
    [HEIGHT]: 'h-6', // h-[24px]
    [ROUNDED]: 'rounded',
    [PADDING_X]: 'px-1.25', // px-[5px]
    [PADDING_Y]: 'py-0.25' // py-[1px]
  }
}
