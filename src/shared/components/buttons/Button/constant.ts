/**
 * 버튼 색상
 * - TODO: black theme 추가
 */
export enum ButtonColor {
  BLUE = 'blue',
  BLUE_LIGHT = 'bluelight',
  GREEN = 'green',
  RED = 'red',
  GRAY = 'gray',
  /** white color?? */
  GHOST = 'ghost'
}

/**
 * TODO: black theme 추가
 * - Exclude<keyof typeof colors, 'black' | 'white'>
 * @see {@link ButtonColor}
 */
export type ButtonColorType = `${ButtonColor}`

/**
 * 버튼 사이즈
 */
export const ButtonSize = {
  /** 대버튼 */
  LARGE: 'lg',
  /** 중버튼 */
  MEDIUM: 'md',
  /** 소버튼 */
  SMALL: 'sm',
  /** 부가버튼 */
  EXTRA_SMALL: 'xs',
  /** 안내버튼 */
  DOUBLE_EXTRA_SMALL: 'xxs'
} as const

export type ButtonSizeType = (typeof ButtonSize)[keyof typeof ButtonSize]
