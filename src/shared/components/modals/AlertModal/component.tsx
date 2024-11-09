'use client'

import { Modal } from '../Modal'
import { IAlertModalProps } from './interface'
import { AlertContent } from './pc'

/**
 * AlertModal
 *
 */
export const AlertModal = ({
  modalProps,
  wrap: wrapper,
  ...props
}: IAlertModalProps) => {
  const wrap = Object.assign(
    {
      ariaLabel: 'alert-modal',
      className: 'max-h-[542px] overflow-y-auto'
    },
    wrapper
  )

  return (
    <Modal {...modalProps}>
      <AlertContent wrap={wrap} {...props} />
    </Modal>
  )
}
