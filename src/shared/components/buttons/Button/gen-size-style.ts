import clsx from 'clsx'

import type { ButtonSizeType } from './constant'
import {
  DefaultStylePattern,
  DefaultStyleProp,
  ButtonDefaultStyle,
  isDefinedStyle
} from './data'
import type { DefaultStylePropType } from './data'

/**
 * Button 컴포넌트의 사이즈에 따른 스타일을 생성
 * - 사용자 속성을 제외한 스타일을 반환
 */
export const genBtnSizeStyle = (
  size: ButtonSizeType,
  className?: string
): [string | undefined, string[]] => {
  let styles: string = ''

  const defaultStyle = ButtonDefaultStyle[size]
  const excluded: string[] = []

  Object.keys(DefaultStyleProp).forEach((key) => {
    const code = key as DefaultStylePropType
    if (!Object.keys(defaultStyle).includes(code)) return
    const style = defaultStyle[code]
    if (style == null) return
    const patterns = DefaultStylePattern[code]
    // className에 해당하는 스타일이 존재하지 않을 때만 적용
    if (isDefinedStyle(className, patterns)) {
      excluded.push(style)
      return
    }
    styles = clsx(styles, style)
  })

  return [styles.length ? styles : undefined, excluded]
}
