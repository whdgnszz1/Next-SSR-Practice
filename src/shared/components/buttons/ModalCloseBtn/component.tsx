'use client'
import btn_dialog_close from '@/assets/images/btn_dialog_close@2x.png'
import clsx from 'clsx'

import { ICloseHandleProps } from '@/shared'
import Image from 'next/image'

interface IModalCloseBtnProps
  extends ICloseHandleProps,
    React.BaseHTMLAttributes<HTMLButtonElement> {
  size?: number
}

/** 기본 스타일(Dialog) */
const DefaultStyle = clsx(
  'h-[30px] w-[30px] border-none bg-transparent text-black'
)

export const ModalCloseBtn = ({
  size = 24,
  onClose,
  className,
  ...props
}: IModalCloseBtnProps) => (
  <button className={className ?? DefaultStyle} onClick={onClose} {...props}>
    <Image
      src={btn_dialog_close.src}
      alt='btn_dialog_close'
      width={20}
      height={20}
    />
  </button>
)
