import type {
  ButtonHTMLAttributes,
  ElementType,
  HTMLAttributeAnchorTarget
} from 'react'

import { ICustomLinkProps } from '@/shared'
import type { ButtonColorType, ButtonSizeType } from './constant'

interface IButtonLinkProps extends ICustomLinkProps {
  linkElement?: ElementType
  /** Link URL */
  href?: string
  /** HTMLAttributeAnchorTarget */
  target?: HTMLAttributeAnchorTarget
}

interface IButtonStyleOptions {
  /** 버튼 컬러 */
  color?: ButtonColorType
  /** 버튼 사이즈(Default: 'md') */
  size?: ButtonSizeType
  /** Outline 스타일 여부 */
  outline?: boolean
  /**
   * Pill 스타일 여부
   * - rounded-full 클래스로 대체 가능
   */
  pill?: boolean
  /**
   * 너비 채우기 여부
   * - w-full 클래스로 대체 가능
   */
  full?: boolean
}

export interface IButtonOptions extends IButtonStyleOptions, IButtonLinkProps {}

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  IButtonOptions
