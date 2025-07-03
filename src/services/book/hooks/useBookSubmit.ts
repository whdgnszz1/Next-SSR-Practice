'use client'

import { useCallback } from 'react'
import { useGetBestSellers } from '@/services/best-seller'
import { useLoadingStore } from '@/stores/loading'
import { useToast } from '@/stores/toast'
import { uploadImage } from '@/util/image/uploadImage'
import { IBookData } from '../types'

interface IUseBookSubmitProps {
  bookData: IBookData
  imageFile: File | null
  onSuccess?: () => void
}

export const useBookSubmit = ({ bookData, imageFile, onSuccess }: IUseBookSubmitProps) => {
  const { setLoading } = useLoadingStore()
  const { toastOne } = useToast()
  const { refetch } = useGetBestSellers()

  const handleSubmit = useCallback(async () => {
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
        onSuccess?.()
      } else {
        throw new Error('서버 오류')
      }
    } catch (error) {
      console.error('책 등록 실패:', error)
      toastOne('책 등록에 실패했습니다.')
    } finally {
      setLoading(false)
    }
  }, [bookData, imageFile, setLoading, toastOne, refetch, onSuccess])

  return {
    handleSubmit
  }
} 