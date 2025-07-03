'use client'

import { useBookForm, useBookSubmit } from '@/services/book'
import { Button, FormField } from '@/shared/components'

interface IRegisterBookModalProps {
  onClose: () => void
}

export const RegisterBookModal = ({
  onClose
}: IRegisterBookModalProps) => {
  const { bookData, imageFile, handleChange, resetForm } = useBookForm()
  const { handleSubmit } = useBookSubmit({
    bookData,
    imageFile,
    onSuccess: () => {
      resetForm()
      onClose()
    }
  })

  return (
    <div className='mt-4 space-y-4'>
      <FormField
        label='책 표지'
        fieldType='image'
        value={bookData.image || ''}
        onFieldChange={(file) => handleChange('image', file)}
      />
      <FormField
        label='책 제목'
        placeholderText='책 제목을 입력해주세요.'
        fieldType='text'
        value={bookData.title}
        onFieldChange={(value) => handleChange('title', value)}
      />
      <FormField
        label='저자'
        placeholderText='저자명을 입력해주세요.'
        fieldType='text'
        value={bookData.author}
        onFieldChange={(value) => handleChange('author', value)}
      />
      <FormField
        label='출판사'
        placeholderText='출판사를 입력해주세요.'
        fieldType='text'
        value={bookData.pbcmName}
        onFieldChange={(value) => handleChange('pbcmName', value)}
      />
      <FormField
        label='책 설명'
        placeholderText='책에 대한 설명을 입력해주세요'
        fieldType='textarea'
        value={bookData.description}
        onFieldChange={(value) => handleChange('description', value)}
      />

      <div className='flex items-center justify-center'>
        <Button className='px-[40px]' onClick={handleSubmit}>
          등록하기
        </Button>
      </div>
    </div>
  )
}
