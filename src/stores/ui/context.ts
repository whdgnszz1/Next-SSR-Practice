'use client'

import { createContext } from 'react'
import type { StoreApi } from 'zustand'

import type { UiStore } from './interface'

export const UiStoreContext = createContext<StoreApi<UiStore> | null>(null)
