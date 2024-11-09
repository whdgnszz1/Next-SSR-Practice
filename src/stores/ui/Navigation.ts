/* eslint-disable react-hooks/exhaustive-deps */
'use client'

import { usePathname } from 'next/navigation'
import { useEffect } from 'react'
import { useModalStore } from '@/stores/modals'

export const NavigationEvents = () => {
  const pathname = usePathname()
  const { modals, closeAllModals } = useModalStore()

  /** 페이지 이동시 모달이 열린 경우 모두 닫기 */
  useEffect(() => {
    if (modals.length === 0) return
    closeAllModals()
  }, [pathname])

  return null
}
