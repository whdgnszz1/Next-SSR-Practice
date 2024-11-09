'use client'

import type { ReacHtmlProps } from '@/shared/interfaces'
import { useModalStore } from '@/stores/modals'
import clsx from 'clsx'

/**
 * 모달 컨테이너
 *
 */
export const ModalContainer = ({ className, ...props }: ReacHtmlProps) => {
  const { modals, closeModal } = useModalStore()
  // const { IS_MOBILE } = useViewStore()

  return (
    <div
      className={clsx('z-notification', 'fixed inset-0', 'bg-opacity-50', {
        hidden: !modals.length
      })}
      {...props}
    >
      {modals.map(({ id, Component: Modal, props: modalProps }, indx) => {
        const handleClose = () => closeModal(id)
        return <Modal key={indx} closeHandle={handleClose} {...modalProps} />
      })}
    </div>
  )
}
