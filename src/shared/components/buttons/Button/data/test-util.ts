import { DefaultStyleProp } from './constant'
import type { DefaultStylePropType } from './constant'
import type { DefButtonStyleProps } from './interface'
import { DefaultStylePattern, isDefinedStyle } from './patterns'

/**
 * 'text-[14px] font-light h-[38px]'
 * -> { SIZE: 'text-[14px]', WEIGHT: 'font-light', HEIGHT: 'h-[38px]' }
 */
export const cvtStr2DefStyle = (className: string): DefButtonStyleProps => {
  const aStyles = className.split(' ')
  const result: DefButtonStyleProps = {}

  aStyles.forEach((style) => {
    for (const key in DefaultStylePattern) {
      let prop = key as DefaultStylePropType
      const relist = DefaultStylePattern[prop]
      const match = isDefinedStyle(style, relist)
      if (!match) {
        prop = DefaultStyleProp.CUSTOM as unknown as DefaultStylePropType
        if (result[prop] != null) result[prop] += ` ${style}`
      }
      result[prop] = style
    }
  })

  return result
}
