'use client'

import { useModalBehavior } from '@/hooks'
import { IModalProps } from '../interface'
import { ModalHeader } from './header'

export const ModalPc = ({
  children,
  overlayStyle,
  dialogStyle,
  onClose,
  escapeToClose = true,
  clickOutsideToClose = true,
  ...props
}: IModalProps) => {
  const { modalRef } = useModalBehavior({
    onClose,
    escapeToClose,
    clickOutsideToClose
  })

  return (
    <div className={overlayStyle}>
      <div ref={modalRef} className={dialogStyle}>
        <ModalHeader {...props} onClose={onClose} />
        {children}
      </div>
    </div>
  )
}
