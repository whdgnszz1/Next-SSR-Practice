import clsx from 'clsx'

import { ModalCloseBtn } from '../../../buttons'
import { IModalProps } from '../interface'

type ModalHeaderProps = Pick<
  IModalProps,
  'title' | 'close' | 'onClose' | 'titleAlign'
>

export const ModalHeader = ({
  title,
  titleAlign,
  close,
  onClose
}: ModalHeaderProps) => {
  if (!title && !close) return null

  const CustomTitle = () => (
    <span
      className={clsx(
        'fz-20 fw-500 text-ellipsis whitespace-nowrap text-center',
        titleAlign === 'center' && 'text-center'
      )}
    >
      {title}
    </span>
  )

  return (
    <div
      className={clsx(
        'flex flex-shrink-0 items-center justify-between',
        'border-b border-gray-300 bg-white pb-5 pt-[25px]'
      )}
    >
      {title && <CustomTitle />}
      {close && <ModalCloseBtn onClose={onClose} />}
    </div>
  )
}
