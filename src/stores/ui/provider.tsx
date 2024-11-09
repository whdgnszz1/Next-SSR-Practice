'use client'

import type { ReacHtmlProps } from '@/shared/interfaces'
import { useModalStore } from '@/stores/modals'
import clsx from 'clsx'
import { Suspense, useEffect, useRef, useState } from 'react'
import type { StoreApi } from 'zustand'

import { UiStoreContext } from './context'
import type { FnInitUiStore, IUiStoreProps, UiStore } from './interface'
import { NavigationEvents } from './Navigation'
import { createUiStore } from './store'

interface IUiStoreProviderProps extends ReacHtmlProps<HTMLBodyElement> {
  children: React.ReactNode
  onInit?: FnInitUiStore
  data?: IUiStoreProps
}

/**
 * Body 태그 내부에서 사용할 UiStore를 제공하는 Provider
 */
export const UiStoreProvider = ({
  children,
  data = {},
  onInit,
  className,
  style = {},
  ...props
}: IUiStoreProviderProps) => {
  const ref = useRef<StoreApi<UiStore>>()
  const { modals } = useModalStore()
  const [scrollbarWidth, setScrollbarWidth] = useState(0)

  if (!ref.current) {
    data = Object.assign(data, onInit?.())
    ref.current = createUiStore(data)
  }

  /**
   * 스크롤바 너비 계산
   */
  useEffect(() => {
    const calculateScrollbarWidth = () => {
      const hasVerticalScrollbar =
        document.body.scrollHeight > window.innerHeight
      const nScrollbarWidth = hasVerticalScrollbar
        ? window.innerWidth - document.documentElement.clientWidth
        : 0
      setScrollbarWidth(nScrollbarWidth)
    }

    calculateScrollbarWidth()

    window.addEventListener('resize', calculateScrollbarWidth)
    return () => window.removeEventListener('resize', calculateScrollbarWidth)
  }, [])

  return (
    <UiStoreContext.Provider value={ref.current}>
      <Suspense fallback={null}>
        <NavigationEvents />
      </Suspense>
      <body
        className={clsx({
          'overflow-hidden': modals.length
        })}
        style={{
          marginRight: modals.length ? scrollbarWidth : undefined,
          ...style
        }}
        {...props}
      >
        {children}
      </body>
    </UiStoreContext.Provider>
  )
}
