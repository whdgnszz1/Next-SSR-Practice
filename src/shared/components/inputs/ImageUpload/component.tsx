'use client'

import React, { ChangeEvent, useState } from 'react'
import { clsx } from 'clsx'
import { ImageUploadProps } from './interface'

export const ImageUpload: React.FC<ImageUploadProps> = ({
  value,
  onImageChange,
  className = ''
}) => {
  const [preview, setPreview] = useState<string | null>(value || null)

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setPreview(reader.result as string)
        onImageChange(file)
      }
      reader.readAsDataURL(file)
    }
  }

  const handleRemoveImage = () => {
    setPreview(null)
    onImageChange(null)
  }

  const containerClass = clsx(
    'flex flex-col items-center justify-center',
    'h-[200px] w-full rounded-[22px] border-2 border-dashed border-gray-400',
    'cursor-pointer bg-white hover:border-gray-500',
    className
  )

  return (
    <div className={containerClass}>
      {preview ? (
        <div className='relative h-full w-full'>
          <img
            src={preview}
            alt='Preview'
            className='h-full w-full rounded-[22px] object-contain'
          />
          <button
            onClick={handleRemoveImage}
            className='absolute right-2 top-2 rounded-full bg-red-500 p-1 text-white'
          >
            ✕
          </button>
        </div>
      ) : (
        <label className='flex h-full w-full cursor-pointer flex-col items-center justify-center'>
          <div className='flex flex-col items-center justify-center'>
            <span className='text-gray-500'>이미지를 업로드해주세요</span>
            <span className='text-sm text-gray-400'>클릭하여 선택</span>
          </div>
          <input
            type='file'
            className='hidden'
            accept='image/*'
            onChange={handleImageChange}
          />
        </label>
      )}
    </div>
  )
}
