'use client'

import { useKeyEvent } from './keyboard'

type EscKeyHandler = (e: KeyboardEvent) => void

/**
 * 드롭다운, 모달처럼 특정 요소가 active한 상태에서 ESC를 클릭할 때 callback을 동작시키는 hook
 * useBlurRef와 같이 native event를 사용함.
 * -- callback이 없을 경우 동작하지 않음
 */
export const useEscKey = (callback?: EscKeyHandler) => {
  if (callback == null) return
  useKeyEvent({ key: 'Escape', callback })
}
