'use client'

import { useBookModal } from '@/components/book'
import { Button, ButtonColor, ButtonSize } from '@/shared/components'
import React from 'react'

export const MainHeader: React.FC = () => {
  const { registerBookModalOpen } = useBookModal()

  return (
    <div className='flex w-full justify-between pb-[30px]'>
      <p className='flex items-center justify-center text-[30px] font-bold'>
        전체 상품
      </p>
      <Button
        color={ButtonColor.GHOST}
        size={ButtonSize.EXTRA_SMALL}
        onClick={() => registerBookModalOpen({})}
      >
        상품 등록
      </Button>
    </div>
  )
}
