'use client'
import { createContext, useContext, useEffect, useState } from 'react'

const HydrateContext = createContext(false)

/**
 * 테스트 환경이나 인터넷 속도가 느린환경인 경우 hydration 이전에 인터렉션이 일어날수 있습니다.
 * 그래서 hydration 이 된 후 인터렉션(ex) 버튼 활성화)을 활성화 하기 위해 현재 수화 상태를 알 수 있도록 하는 훅입니다.
 * https://playwright.dev/docs/navigations#hydration
 */
export function useIsHydrated() {
  return useContext(HydrateContext)
}

export function IsHydratedProvider({
  children
}: {
  children: React.ReactNode
}) {
  const [isHydrated, setIsHydrated] = useState(false)
  useEffect(() => {
    setIsHydrated(true)
  }, [])

  return (
    <HydrateContext.Provider value={isHydrated}>
      {children}
    </HydrateContext.Provider>
  )
}
