'use client'

import { useState, useCallback } from 'react'
import { IBookData } from '../types'

export const useBookForm = () => {
  const [bookData, setBookData] = useState<IBookData>({
    image: null,
    title: '',
    author: '',
    pbcmName: '',
    description: ''
  })
  const [imageFile, setImageFile] = useState<File | null>(null)

  const handleChange = useCallback((field: keyof IBookData, value: string | File | null) => {
    if (field === 'image') {
      setImageFile(value as File)
    } else {
      setBookData((prev) => ({
        ...prev,
        [field]: value as string
      }))
    }
  }, [])

  const resetForm = useCallback(() => {
    setBookData({
      image: null,
      title: '',
      author: '',
      pbcmName: '',
      description: ''
    })
    setImageFile(null)
  }, [])

  return {
    bookData,
    imageFile,
    handleChange,
    resetForm
  }
} 