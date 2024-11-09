'use client'

import clsx from 'clsx'

import { ControlBar } from './controls'
import { IAlertModalProps } from './interface'
import { Message, SubText } from './util'

export const AlertContent = ({
  wrap,
  children,
  ...props
}: IAlertModalProps) => {
  return (
    <>
      <div
        aria-label={wrap?.ariaLabel}
        className={clsx(wrap?.className, 'mt-[24px]')}
      >
        {children}
        <Message
          className={clsx(
            'min-w-[45px] text-center text-[15px]',
            'font-medium leading-[23px] text-black',
            props.subtext ? 'mt-[16px]' : 'mt-[22px]'
          )}
          {...props}
        />
        {/* 'fz-14 mt-[6px] text-center text-gray-800' */}
        <SubText {...props} />
      </div>
      <ControlBar {...props} />
    </>
  )
}
