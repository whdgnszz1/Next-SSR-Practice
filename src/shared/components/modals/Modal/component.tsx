'use client'

import { IModalProps } from './interface'
import { ModalPc } from './pc'
import { parseModalStyles } from './styles'

/**
 *  모달 Wrapper
 */
export const Modal = ({ 
  layout, 
  size, 
  escapeToClose = true,
  clickOutsideToClose = true,
  ...props 
}: IModalProps) => {
  const [overay, dialog] = parseModalStyles({ layout, size })

  return (
    <ModalPc
      layout={layout}
      overlayStyle={overay}
      dialogStyle={dialog}
      escapeToClose={escapeToClose}
      clickOutsideToClose={clickOutsideToClose}
      {...props}
    />
  )
}
