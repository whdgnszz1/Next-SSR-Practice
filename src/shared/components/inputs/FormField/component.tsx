import React, { ChangeEvent } from 'react'
import { CustomInput } from '../CustomInput'
import { CustomTextArea } from '../CustomTextArea'
import { ImageUpload } from '../ImageUpload'
import { IFormFieldProps } from './interface'

export const FormField: React.FC<IFormFieldProps> = ({
  label,
  placeholderText,
  fieldType,
  value,
  onFieldChange,
  className
}) => {
  const renderField = () => {
    switch (fieldType) {
      case 'textarea':
        return (
          <CustomTextArea
            value={value as string}
            placeholderText={placeholderText}
            handleOnChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
              onFieldChange(e.target.value)
            }
            className={className}
          />
        )
      case 'image':
        return (
          <ImageUpload
            value={value}
            onImageChange={onFieldChange}
            className={className}
          />
        )
      case 'password':
        return (
          <CustomInput
            value={value as string}
            placeholderText={placeholderText}
            size='M'
            handleOnChange={(e: ChangeEvent<HTMLInputElement>) =>
              onFieldChange(e.target.value)
            }
            className={className}
            type='password'
          />
        )
      default:
        return (
          <CustomInput
            value={value as string}
            placeholderText={placeholderText}
            size='M'
            handleOnChange={(e: ChangeEvent<HTMLInputElement>) =>
              onFieldChange(e.target.value)
            }
            className={className}
            type='text'
          />
        )
    }
  }

  return (
    <div className='space-y-2'>
      <label className='block text-sm font-medium text-gray-700'>{label}</label>
      {renderField()}
    </div>
  )
}
