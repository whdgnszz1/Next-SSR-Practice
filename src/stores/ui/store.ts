import { createStore } from 'zustand/vanilla'

import { UiHeaderCode } from './constant'
import type {
  IUiHeaderProps,
  IUiStoreProps,
  IUiStoreState,
  UiStore
} from './interface'

const DefaultInitState: IUiStoreProps = {
  header: {
    type: UiHeaderCode.DEFAULT
  },
  footer: true
} as const

export const parseUiStoreData = (data: IUiStoreProps): IUiStoreState => {
  return {
    ...data
  }
}

export const createUiStore = (initState: IUiStoreProps = {}) => {
  return createStore<UiStore>()((set) => {
    return {
      ...parseUiStoreData(Object.assign({}, DefaultInitState, initState)),
      setHeader: (header: IUiHeaderProps) => set({ header }),
      setFooter: (footer: boolean) => set({ footer })
    }
  })
}
