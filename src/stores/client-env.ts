'use client'

import { create } from 'zustand'

interface IClientEnvStore {
  readonly envs: Record<string, string>
  setEnv: (key: string, value: string) => void
}

export const ClientEnv = {
  /** 서비스 호스트 */
  SERVICE_HOST: process.env.NEXT_PUBLIC_SERVICE_HOST ?? ''
} as const

/**
 * 클라이언트 환경변수를 저장하는 store
 * - 한번 설정된 환경변수는 변경할 수 없음
 */
export const useClientEnvStore = create<IClientEnvStore>((set, get) => {
  // const HOSTNAME = process.env.NEXT_PUBLIC_HOSTNAME ?? ''
  // const PORT = process.env.NEXT_PUBLIC_PORT ?? ''

  return {
    envs: {
      ...ClientEnv
    },
    setEnv: (key, value) => {
      if (get().envs[key] === undefined) {
        set((state) => ({
          envs: {
            ...state.envs,
            [key]: value
          }
        }))
      } else {
        console.warn(
          `Environment variable ${key} is already set and cannot be changed.`
        )
      }
    }
  }
})
