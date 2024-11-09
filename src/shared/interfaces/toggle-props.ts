import type { InputHTMLAttributes, MouseEvent } from 'react'
// export interface IToggleChecked {
//   checked: boolean
// }

// interface IInitChecked {
//   /** (초기화)체크 여부 */
//   initChecked: boolean
// }

export interface ICheckInput
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'onClick' | 'onChange'> {
  onClick?: (evt: MouseEvent<HTMLLabelElement>) => void
  onChange?: (checked: boolean) => void
}
