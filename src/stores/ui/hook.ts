'use client'

import { useContext } from 'react'
import { useStore } from 'zustand'

import { UiStoreContext } from './context'
import type { UiStore } from './interface'

type UiStoreSelector<T> = (store: UiStore) => T

export function useUiStore<T = UiStore>(selector?: UiStoreSelector<T>): T {
  const context = useContext(UiStoreContext)

  if (!context) {
    throw new Error('useUiStore must be use within UiStoreProvider')
  }

  if (selector == null) {
    selector = (store) => store as unknown as T
  }

  return useStore(context, selector)
}
