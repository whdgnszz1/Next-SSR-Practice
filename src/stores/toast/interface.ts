export enum CustomToastPos {
  TOP = 'top',
  BOTTOM = 'bottom',
  MIDDLE = 'center'
}

export type CustomToastPosType = `${CustomToastPos}`

interface ICustomToastPosProps {
  /** 토스트 위치 */
  position?: CustomToastPos | CustomToastPosType
}

export interface ICustomToastOptions extends ICustomToastPosProps {
  /** 지속시간(ms) */
  duration?: number
  /** 토스트 메시지 완료 콜백 */
  done?: () => void
}

export interface ICustomToastProps extends ICustomToastOptions {
  /** 토스트 메시지 */
  message: string
}

export interface ICustomToastItem extends ICustomToastProps {
  id: string
  duration: number
  position: CustomToastPosType
  timeoutId?: ReturnType<typeof setTimeout>
}

interface ICustomToastActionResult {
  id: string
  promise: Promise<string>
}

type ICustomToastActionParams = string | ICustomToastProps

export interface IToastState {
  items: ICustomToastItem[]
  isShow: (id: string | null | undefined) => boolean
  /** 토스트를 생성 */
  toast: (
    params: ICustomToastActionParams,
    options?: ICustomToastOptions
  ) => ICustomToastActionResult
  /** 모든 토스트를 제거하고, 토스트를 생성 */
  toastOne: (
    params: ICustomToastActionParams,
    options?: ICustomToastOptions
  ) => void
  /** 해당 id의 토스트를 제거 */
  dispose: (id: string) => void
  /** 마지막 토스트를 제거 */
  disposeLast: () => void
  /** 모든 토스트를 제거 */
  disposeAll: () => void
}
