export interface ICloseHandleProps {
  onClose?: () => void
}

export interface IModalHandleProps {
  /** Modal Close 핸들러 */
  closeHandle?: () => void
}

export interface IModalCallbackProps
  extends ICloseHandleProps,
    IModalHandleProps {
  /** Modal 상태 변경 콜백 */
  onChange?: (bool: boolean) => void
  /** Modal Open 콜백 */
  onOpen?: () => void
}
