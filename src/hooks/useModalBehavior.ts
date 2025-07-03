'use client'

import { useEffect, useRef } from 'react'
import { useEscKey } from './esc'

interface IUseModalBehaviorProps {
  /** 모달 닫기 함수 */
  onClose?: () => void
  /** ESC 키로 닫기 활성화 여부 */
  escapeToClose?: boolean
  /** 외부 클릭으로 닫기 활성화 여부 */
  clickOutsideToClose?: boolean
}

export const useModalBehavior = ({
  onClose,
  escapeToClose = true,
  clickOutsideToClose = true
}: IUseModalBehaviorProps) => {
  const modalRef = useRef<HTMLDivElement>(null)

  // ESC 키로 모달 닫기
  useEscKey(escapeToClose ? onClose : undefined)

  // 외부 클릭으로 모달 닫기
  useEffect(() => {
    if (!clickOutsideToClose || !onClose) return

    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        onClose()
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [onClose, clickOutsideToClose])

  return { modalRef }
} 