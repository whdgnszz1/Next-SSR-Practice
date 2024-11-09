import clsx from 'clsx'

import type { IAlertModalProps } from './interface'

const splitTextToElem = (text: string, tag: 'p' | 'span' = 'p') => {
  return text.split('\n').map((line, ndx) => {
    const Tag = tag
    return <Tag key={ndx}>{line}</Tag>
  })
}

export const Message = ({
  message,
  className
}: Pick<IAlertModalProps, 'className' | 'message'>) => {
  if (!message) return null
  return <div className={className}>{splitTextToElem(message)}</div>
}

export const SubText = ({
  subtext,
  className
}: Pick<IAlertModalProps, 'className' | 'subtext'>) => {
  if (!subtext) return null
  return (
    <p className={clsx(className, 'fz-14 mt-[6px] text-center text-gray-800')}>
      {splitTextToElem(subtext, 'span')}
    </p>
  )
}
