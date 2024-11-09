import React, { ChangeEvent } from 'react'
import { clsx } from 'clsx'
import { ISearchBarSize } from './interface'

interface CustomInputProps {
  value: string
  placeholderText?: string
  size?: ISearchBarSize
  className?: string
  handleOnChange?: (e: ChangeEvent<HTMLInputElement>) => void
  type?: string
}

export const CustomInput: React.FC<CustomInputProps> = ({
  value,
  placeholderText = '',
  size = 'M',
  className = '',
  handleOnChange,
  type = 'text'
}) => {
  const sectionClass = clsx(
    'flex w-full flex-row items-center justify-between rounded-[22px] border border-gray-400 bg-white',
    INPUT_SIZE[size],
    className
  )

  return (
    <div className={sectionClass}>
      <input
        value={value}
        className='flex w-full text-[14px] font-normal tracking-[-0.01] text-gray-700 focus:outline-none'
        placeholder={placeholderText}
        onChange={handleOnChange}
        type={type}
      />
    </div>
  )
}

const INPUT_SIZE: { [key in ISearchBarSize]: string } = {
  M: 'h-[44px] px-4 py-[11px]',
  S: 'h-[38px] px-4 py-2'
}
