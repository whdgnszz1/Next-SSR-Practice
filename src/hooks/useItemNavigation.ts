'use client'

import { useRouter } from 'next/navigation'
import { useCallback } from 'react'

export const useItemNavigation = () => {
  const router = useRouter()

  const navigateToBook = useCallback((id: string) => {
    router.push(`/book/${id}`)
  }, [router])

  const navigateToSearch = useCallback((query: string) => {
    router.push(`/search?query=${encodeURIComponent(query)}`)
  }, [router])

  const navigateToBestSeller = useCallback(() => {
    router.push('/best-seller')
  }, [router])

  const navigateToMain = useCallback(() => {
    router.push('/main')
  }, [router])

  return {
    navigateToBook,
    navigateToSearch,
    navigateToBestSeller,
    navigateToMain
  }
} 