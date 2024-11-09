import { IModalProps } from '..'

interface IModalControlOptions {
  label?: string
  onClick?: () => void
}

type ConfirmFn = <T = boolean>(bool?: T) => void
type VoidFunc = () => void
type ModalControlType = boolean | string | IModalControlOptions

export interface IModalControls {
  confirm?: ModalControlType | ConfirmFn
  cancel?: ModalControlType | VoidFunc
  /**
   * esckey 입력시 닫기 여부
   */
  esc?: boolean
  closeHandle?: () => void
  /**
   * confirm callback
   * - 취소 버튼 활성화
   * - 반환값이 true일 경우 모달이 닫힘
   */
  resolve?: (result?: boolean) => boolean
}

export interface IAlertContentProps {
  message?: string
  subtext?: string
  children?: React.ReactNode
}

export interface IAlertWrapProps {
  className?: string
  ariaLabel?: string
}

export interface IAlertModalProps extends IAlertContentProps, IModalControls {
  wrap?: IAlertWrapProps
  className?: string
  Controller?: React.FC<IModalControls>
  modalProps?: IModalProps
}
