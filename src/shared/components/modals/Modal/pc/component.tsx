import { IModalProps } from '../interface'
import { ModalHeader } from './header'

export const ModalPc = ({
  children,
  overlayStyle,
  dialogStyle,
  ...props
}: IModalProps) => {
  return (
    <div className={overlayStyle}>
      <div className={dialogStyle}>
        <ModalHeader {...props} />
        {children}
      </div>
    </div>
  )
}
