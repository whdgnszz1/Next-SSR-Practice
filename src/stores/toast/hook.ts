'use client'

import { v4 as uuidv4 } from 'uuid'
import { create } from 'zustand'

import { ICustomToastItem, IToastState, CustomToastPos } from './interface'

const DEFAULT_DURATION = 3000

export const useToast = create<IToastState>((set, get) => {
  const dispose = (id: string) => {
    set((state) => ({
      items: state.items.filter((item) => {
        if (item.id !== id) return true
        item.timeoutId && clearTimeout(item.timeoutId)
        return false
      })
    }))
  }

  return {
    items: [],
    toast: (params, options) => {
      const id = uuidv4()

      const {
        message,
        done,
        duration = DEFAULT_DURATION,
        position = CustomToastPos.BOTTOM
      } = Object.assign(
        typeof params === 'string'
          ? {
              message: params
            }
          : params,
        options
      )

      let timeoutId: ReturnType<typeof setTimeout>
      const promise = new Promise<string>((resolve) => {
        timeoutId = setTimeout(() => {
          dispose(id)
          resolve(id)
          done?.()
        }, duration)
      })

      set((state) => {
        const newItem = { id, timeoutId, message, duration, position }
        return {
          items: [...state.items, newItem]
        }
      })

      return { id, promise }
    },
    toastOne: (params, options) => {
      const { items, toast, disposeAll } = get()
      if (items.length) disposeAll()
      toast(params, options)
    },
    isShow: (id) => {
      if (id == null) return false
      return get().items.some((item) => item.id === id)
    },
    dispose,
    disposeLast: () => {
      const items = get().items
      if (!items.length) return
      const lastItem = items.at(-1) as ICustomToastItem
      dispose(lastItem.id)
    },
    disposeAll: () => {
      get().items.forEach((item) => dispose(item.id))
    }
  }
})
