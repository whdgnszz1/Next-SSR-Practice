'use client'

import React, { createContext, useContext, useRef } from 'react'
import type { StoreApi } from 'zustand'
import { useStore } from 'zustand'

import type {
  FnInitGlobalStore,
  GlobalStore,
  IGlobalStateEssential
} from './interface'
import { createGlobalStore } from './store'

export const GlobalStoreContext = createContext<StoreApi<GlobalStore> | null>(
  null
)

interface IProps {
  children: React.ReactNode
  onInit?: FnInitGlobalStore
  data?: IGlobalStateEssential
}

export const GlobalStoreProvider = ({ children, data }: IProps) => {
  const globalStoreRef = useRef<StoreApi<GlobalStore>>()
  if (!globalStoreRef.current) {
    globalStoreRef.current = createGlobalStore(data)
  }

  return (
    <GlobalStoreContext.Provider value={globalStoreRef.current}>
      {children}
    </GlobalStoreContext.Provider>
  )
}

export const useGlobalStore = <T,>(selector: (store: GlobalStore) => T): T => {
  const context = useContext(GlobalStoreContext)

  if (!context) {
    throw new Error('useGlobalStore must be use within GlobalStoreProvider')
  }

  return useStore(context, selector)
}
