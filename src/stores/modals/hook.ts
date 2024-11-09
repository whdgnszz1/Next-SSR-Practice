'use client'

import { v4 as uuidv4 } from 'uuid'
import { create } from 'zustand'

import { IModalState } from './interface'

/**
 * 모달 (전역)상태관리 스토어
 * - T: 모달 컨테이너 Props
 * - K: 모달 컴포넌트(default: React.ReactNode)
 */
export const useModalStore = create<IModalState>((set, get) => {
  /** 모달 닫기 */
  const closeModal = (id: string) => {
    set((state) => ({
      modals: state.modals.filter((modal) => modal.id !== id)
    }))
  }
  return {
    modals: [],
    /**
     * 모달 열기
     * - Component: 모달 컴포넌트
     * - options: 모달 옵션
     * @returns 모달 ID
     */
    openModal: (Component, options) => {
      const id = uuidv4()
      set((state) => ({
        modals: [...state.modals, { id, Component, ...options }]
      }))
      return id
    },
    /** 모달 - 오픈 여부 확인 */
    isOpenModal: (id) => {
      if (id == null) return false
      const content = get().modals.find((modal) => modal.id === id)
      return content != null
    },
    closeModal,
    /** 전체 모달 닫기 */
    closeAllModals: () => {
      get().modals.forEach((content) => closeModal(content.id))
    }
  }
})
