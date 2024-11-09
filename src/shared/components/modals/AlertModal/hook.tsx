import { useModalStore } from '@/stores/modals'
import { AlertModal } from './component'
import type { IAlertContentProps, IAlertModalProps } from './interface'
import { IModalProps } from '..'

type AlertProps = string | IAlertContentProps
type AlertOptions =
  | string
  | Omit<IAlertModalProps, 'message' | 'subtext' | 'children'>

/**
 * use AlertModal
 * - 메시지만 전달하면 간단하게 사용 가능
 * - 객체로 전달하면 더 많은 옵션을 사용 가능
 * - useModalStore
 * - IAlertContentProps
 */
export const useAlertModal = (modalOptions?: IModalProps) => {
  const { openModal } = useModalStore()

  /**
   * 알림팝업 열기(AlertModal)
   * @param message - 'message' | 'subtext' | 'children'
   * @param options - 'subtext' | other options
   */
  const openAlert = (message: AlertProps, options?: AlertOptions) => {
    const props: IAlertModalProps =
      typeof message === 'string' ? { message } : message
    if (options) {
      if (typeof options === 'string') {
        props.subtext = options
      } else {
        Object.assign(props, options)
      }
    }
    if (modalOptions) {
      props.modalProps = modalOptions
    }
    openModal<IAlertContentProps>(AlertModal, { props })
  }

  return [openAlert]
}
