import { parseDialogStyles } from './dialog'
import type { IModalStyleProps } from './interface'
import { parseOverayStyles } from './overlay'

export const parseModalStyles = (props: IModalStyleProps) => {
  const overlay = parseOverayStyles(props)
  const dialog = parseDialogStyles(props)
  return [overlay, dialog]
}
