'use client'

import { create } from 'zustand'

interface ILoadingStore {
  /** 로딩 여부 */
  loading: boolean
  /** 로딩 상태 업데이트 */
  setLoading: (loading: boolean) => void
}

/**
 * 페이지 로딩 여부를 업데이트
 * - 데이터 패치, 페이지 이동 등의 로딩 상태를 관리
 */
export const useLoadingStore = create<ILoadingStore>((set, get) => ({
  loading: false,
  setLoading: (loading: boolean) => {
    if (loading === get().loading) return
    set(() => ({ loading }))
  }
}))
