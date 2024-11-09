import { useRegisterBookModal } from '../RegisterBookModal'

/** 책 관련 모달 처리 hook */
export const useBookModal = () => {
  const [registerBookModalOpen] = useRegisterBookModal()

  return {
    /** 책 등록 모달 열기 이벤트 */
    registerBookModalOpen
  }
}
