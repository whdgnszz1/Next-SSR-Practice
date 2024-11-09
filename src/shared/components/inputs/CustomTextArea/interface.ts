import { ChangeEvent } from 'react'

export interface CustomTextAreaProps {
  value: string
  placeholderText?: string
  className?: string
  handleOnChange?: (e: ChangeEvent<HTMLTextAreaElement>) => void
}
