/**
 * 모달 종류
 */
export enum ModalLayout {
  DEFAULT = 'default',
  BOTTOM_SHEET = 'bottom-sheet',
  FULL = 'full'
}

export type ModalLayoutType = ModalLayout | `${ModalLayout}`

/**
 * 모달 사이즈
 */
export enum ModalSize {
  SMALL = 'sm',
  MEDIUM = 'md',
  LARGE = 'lg',
  DEFAULT = 'default',
  FULL = 'full'
}

export type ModalSizeType = ModalSize | `${ModalSize}`
