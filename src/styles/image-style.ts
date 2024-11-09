import { CSSProperties } from 'react'
import Header_Bg from '@/assets/images/bg_shape.svg'

export const headerBg: CSSProperties = {
  background: `url(${Header_Bg.src}) no-repeat center 20px/1920px 122px,
    linear-gradient(#fff, #fff) no-repeat 0 20px / calc(50% - 800px) 44px,
    linear-gradient(#f2f2f2, #f2f2f2) no-repeat 0 0/100% 64px`
}
