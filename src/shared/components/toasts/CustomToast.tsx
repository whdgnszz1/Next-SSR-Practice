'use client'

import clsx from 'clsx'
import { forwardRef } from 'react'

export interface ICustomToastProps
  extends React.HTMLAttributes<HTMLDivElement> {
  message?: string
}

export const CustomToast = forwardRef<HTMLDivElement, ICustomToastProps>(
  ({ children, className, message, ...props }: ICustomToastProps, ref) => {
    return (
      <div
        ref={ref}
        aria-label='toast'
        className={clsx(
          'flex items-center justify-center',
          'rounded-xl border bg-blue-700 bg-opacity-90',
          'px-[30px] shadow-md',
          // pb-[11px] pt-[15px]
          'fz-16 whitespace-nowrap text-center text-white',
          // {
          //   'top-1/2 -translate-y-1/2': pos === ToastPos.MIDDLE,
          //   'bottom-auto top-[36px]': pos === ToastPos.TOP,
          //   'bottom-[36px] top-auto': pos === ToastPos.BOTTOM
          // },
          className
        )}
        {...props}
      >
        {children}
        {message && <span className='whitespace-nowrap'>{message}</span>}
      </div>
    )
  }
)
