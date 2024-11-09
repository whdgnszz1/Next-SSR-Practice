'use client'

import { useGetBestSellers } from '@/services/best-seller'
import { Button, FormField } from '@/shared/components'
import { useLoadingStore } from '@/stores/loading'
import { useToast } from '@/stores/toast'
import { uploadImage } from '@/util/image/uploadImage'
import React, { useState } from 'react'

interface BookData {
  image: string | null
  title: string
  author: string
  pbcmName: string
  description: string
}

interface RegisterBookModalProps {
  onClose: () => void
}

export const RegisterBookModal: React.FC<RegisterBookModalProps> = ({
  onClose
}) => {
  const { setLoading } = useLoadingStore()
  const { toastOne } = useToast()

  const { refetch } = useGetBestSellers()
  const [bookData, setBookData] = useState<BookData>({
    image: null,
    title: '',
    author: '',
    pbcmName: '',
    description: ''
  })
  const [imageFile, setImageFile] = useState<File | null>(null)

  const handleChange = (field: keyof BookData, value: string | File | null) => {
    if (field === 'image') {
      setImageFile(value as File)
    } else {
      setBookData((prev) => ({
        ...prev,
        [field]: value as string
      }))
    }
  }

  const handleSubmit = async () => {
    setLoading(true)
    try {
      let imageUrl: string | null = ''
      if (imageFile) {
        imageUrl = await uploadImage(imageFile)
      }

      const response = await fetch('/api/book', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          ...bookData,
          image: imageUrl || ''
        })
      })

      if (response.ok) {
        toastOne('책이 성공적으로 등록되었습니다.')
        refetch()
        onClose()
      } else {
        throw new Error('서버 오류')
      }
    } catch (error) {
      console.error('책 등록 실패:', error)
      alert('책 등록에 실패했습니다.')
    } finally {
      setLoading(false)
    }
  }

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
