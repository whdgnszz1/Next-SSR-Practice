import { createStore } from 'zustand/vanilla'
// import type { StoreApi } from 'zustand'

import { IGlobalState, GlobalStore, IGlobalStateEssential } from './interface'
import { IUserPayload } from '@/services/auth'

export const DefaultInitState: IGlobalStateEssential = {
  user: null
  // authorized: false,
} as const

export const parseGlobalStoreData = (
  data: IGlobalStateEssential
): IGlobalState => {
  return {
    ...data,
    authorized: data.user != null
  }
}

export const createGlobalStore = (
  initState: IGlobalStateEssential = DefaultInitState
) => {
  const fnStore = createStore<GlobalStore>()
  const store = fnStore((set) => {
    return {
      ...parseGlobalStoreData(initState),
      setUser: (user: IUserPayload | null) => {
        set(() => ({ user, authorized: user != null }))
      }
    }
  })

  return store
}
