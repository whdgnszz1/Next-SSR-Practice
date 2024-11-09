import { DefaultStyleProp } from './constant'
import type { DefaultStylePropType } from './constant'

type DefaultStylePatternType = {
  [key in DefaultStylePropType]?: RegExp[]
}

/**
 * Button 컴포넌트의 기본 스타일과 중복되는 스타일을 판별하기 위한 정규식 패턴
 */
export const DefaultStylePattern: DefaultStylePatternType = {
  [DefaultStyleProp.SIZE]: [
    /\b(text-[\d]+)/,
    /\bfz-[\d]+/,
    /\bfont-(title|text)-/
  ],
  [DefaultStyleProp.LEADING]: [/\bleading-\[/, /\bfz-[\d]+/],
  [DefaultStyleProp.WEIGHT]: [
    // font-title-, font-text- 예외처리
    // https://tailwindcss.com/docs/font-family
    /\bfont-(?!title-|text-|sans|serif|roboto|mono)/,
    /\bfw-[\d]+/
    // /\bfont-weight-\[/
  ],
  [DefaultStyleProp.HEIGHT]: [/\bh-\[/],
  [DefaultStyleProp.MIN_WIDTH]: [/\b(min-)?w-/],
  [DefaultStyleProp.ROUNDED]: [/\brounded/],
  [DefaultStyleProp.PADDING_X]: [/\bpx-[\d.]+/],
  [DefaultStyleProp.PADDING_Y]: [/\bpy-[\d.]+/]
} as const

export const isDefinedStyle = (
  className: string | undefined,
  regex: RegExp | RegExp[] | undefined
): boolean => {
  if (className == null || regex == null) return false
  const regexList = Array.isArray(regex) ? regex : [regex]
  for (const re of regexList) {
    if (re.test(className)) return true
  }
  return false
}
