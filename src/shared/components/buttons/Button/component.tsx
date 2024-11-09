'use client'

import clsx from 'clsx'
import { ElementType } from 'react'

import { ExtendLink } from '../ExtendLink'
import { ButtonColor, ButtonSize } from './constant'
import { genBtnColorStyle } from './gen-color-style'
import { genBtnSizeStyle } from './gen-size-style'
import type { ButtonProps } from './interface'

/**
 * 버튼 컴포넌트
 */
export const Button = ({
  linkElement: CustomLink = ExtendLink,
  color = ButtonColor.BLUE,
  size = ButtonSize.MEDIUM,
  full,
  pill,
  outline,
  className,
  ...props
}: ButtonProps) => {
  const optional = clsx(className, {
    'rounded-full': pill,
    'w-full': full
  })

  const styles = clsx(
    'flex items-center justify-center',
    'transition-colors duration-200 ease-in-out',
    genBtnSizeStyle(size, optional).at(0),
    genBtnColorStyle(color, outline),
    optional
  )

  let CustomTag: ElementType = 'button'
  if (props.href != null) {
    CustomTag = CustomLink
    props.target = props.target ?? '_self'
  }

  return <CustomTag className={styles} {...props} />
}
