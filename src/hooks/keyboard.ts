'use client'

import { useEffect } from 'react'

import { onceDocumentEvent } from './util'

type KeyboardEventType = 'keydown' | 'keyup' | 'keypress'

export interface IKeyEventHookProps {
  /** 매핑 키 */
  key: string
  /** 키보드 이벤트 callback */
  callback: (e: KeyboardEvent) => void
  /** 키보드 이벤트 유형 */
  event?: KeyboardEventType
}

/**
 * 키보드 매핑 이벤트를 사용하는 hook
 */
export const useKeyEvent = ({
  key,
  event = 'keyup',
  callback
}: IKeyEventHookProps) => {
  useEffect(() => {
    const listener = (e: KeyboardEvent) => {
      if (e.key !== key) return
      callback(e)
    }

    return onceDocumentEvent(event, listener)
  }, [key, event, callback])
}
