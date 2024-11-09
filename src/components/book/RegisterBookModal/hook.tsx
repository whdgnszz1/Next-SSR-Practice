import { Modal, ModalLayout, ModalSize } from '@/shared/components'
import { RegisterBookModal } from './component'
import { IRegisterBookModalProps } from './interface'
import { useModalStore } from '@/stores/modals'

/** 책 등록 모달 hook */
export const useRegisterBookModal = () => {
  const { openModal, closeAllModals } = useModalStore()

  const open = (props: IRegisterBookModalProps) => {
    openModal(Modal, {
      props: {
        layout: ModalLayout.DEFAULT,
        size: ModalSize.MEDIUM,
        title: '책 등록하기',
        close: true,
        children: <RegisterBookModal {...props} onClose={closeAllModals} />,
        onClose: closeAllModals
      }
    })
  }

  return [open]
}
