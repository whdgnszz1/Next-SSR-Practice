'use client'

import clsx from 'clsx'

import { Button, ButtonProps } from '../../buttons'
import { IModalControls } from './interface'
import { useEscKey } from '@/hooks'

export const ControlBar = ({
  confirm = '확인',
  cancel = false,
  esc = true,
  closeHandle,
  resolve
}: IModalControls) => {
  const confirmLabel = typeof confirm === 'string' ? confirm : '확인'
  const cancelLabel = typeof cancel === 'string' ? cancel : '취소'
  const hasCancel = cancel !== false || resolve !== undefined

  let cancelHandle: (() => void) | undefined
  if (hasCancel) {
    cancelHandle = () => {
      if (resolve) resolve(false)
      if (typeof cancel === 'function') cancel()
      return closeHandle?.()
    }
  }

  esc && useEscKey(hasCancel ? cancelHandle : closeHandle)

  const confirmHandle = () => {
    if (resolve) {
      const bool = resolve(true)
      if (bool === false) return
    }
    if (typeof confirm === 'function') confirm()
    return closeHandle?.()
  }

  const CustomButton = ({ onClick, color, children }: ButtonProps) => (
    <Button
      className={undefined}
      color={color}
      full={undefined}
      size={undefined}
      onClick={onClick}
    >
      {children}
    </Button>
  )

  return (
    <div
      className={clsx({
        'mt-[34px] flex items-center justify-center space-x-1.5': true
      })}
    >
      {hasCancel && (
        <CustomButton color='gray' onClick={cancelHandle}>
          {cancelLabel}
        </CustomButton>
      )}
      <CustomButton onClick={confirmHandle}>{confirmLabel}</CustomButton>
    </div>
  )
}
