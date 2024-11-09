// import { IModalHandleProps } from '../../interfaces'

// type DivElementProps = React.HtmlHTMLAttributes<HTMLDivElement>

export interface IModalOptions<T = any> {
  /** NOT_YET_USED */
  title?: string
  /** 모달 컴포넌트 Props */
  props?: T
}

type CustomModalType<T = any> = React.ElementType<T>

export interface IModalItem extends IModalOptions {
  id: string
  /** 모달 컴포넌트 */
  Component: CustomModalType
}

export interface IModalState {
  modals: IModalItem[]
  openModal: <T = any>(
    Component: CustomModalType<T>,
    options?: IModalOptions<T>
  ) => string
  isOpenModal: (id: string | null | undefined) => boolean
  closeModal: (id: string) => void
  closeAllModals: () => void
}
