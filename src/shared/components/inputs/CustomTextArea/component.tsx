import { clsx } from 'clsx'
import React from 'react'
import { CustomTextAreaProps } from './interface'

export const CustomTextArea: React.FC<CustomTextAreaProps> = ({
  value,
  placeholderText = '',
  className = '',
  handleOnChange
}) => {
  const textareaClass = clsx(
    'w-full rounded-[22px] border border-gray-400 bg-white p-4',
    'min-h-[120px] resize-none',
    'text-[14px] font-normal tracking-[-0.01] text-gray-700 focus:outline-none',
    className
  )

  return (
    <textarea
      value={value}
      className={textareaClass}
      placeholder={placeholderText}
      onChange={handleOnChange}
    />
  )
}
