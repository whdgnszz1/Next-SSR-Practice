'use client'

import clsx from 'clsx'
import { AnimatePresence, motion } from 'framer-motion'
import type { HTMLAttributes } from 'react'

import { CustomToastPos, useToast } from '@/stores/toast'
import type { ICustomToastProps } from '../CustomToast'
import { CustomToast } from '../CustomToast'
import { animationByPos } from './animation'

interface IPositionProps {
  position: CustomToastPos
}

const PositionContainer = ({
  position,
  children
}: HTMLAttributes<HTMLDivElement> & IPositionProps) => {
  return (
    <div
      className={clsx('z-notification fixed', 'left-1/2 -translate-x-1/2', {
        'top-1/2 -translate-y-1/2': position === CustomToastPos.MIDDLE,
        'bottom-auto top-[36px]': position === CustomToastPos.TOP,
        'bottom-[36px] top-auto': position === CustomToastPos.BOTTOM
      })}
    >
      <AnimatePresence>
        <div className={clsx('flex flex-col gap-2')}>{children}</div>
      </AnimatePresence>
    </div>
  )
}

const MotionToast = ({
  position: pos,
  ...props
}: ICustomToastProps & IPositionProps) => {
  return (
    <motion.div transition={{ duration: 0.2 }} {...animationByPos(pos)}>
      <CustomToast {...props} />
    </motion.div>
  )
}

/**
 * 토스트 컨테이너
 * - useToast 훅을 통해 등록된 토스트를 화면에 표시
 */
export const CustomToastContainer = () => {
  const { items } = useToast()

  const renderItems = (pos: CustomToastPos) => {
    const filteredItems = items.filter((item) => item.position === pos)

    // 하단토스트의 경우 아이템이 위로 쌓이게
    if (pos === CustomToastPos.BOTTOM) {
      filteredItems.reverse()
    }

    return filteredItems.map(({ id, message }) => {
      return (
        <MotionToast key={id} position={pos}>
          <span>{message}</span>
        </MotionToast>
      )
    })
  }

  return (
    <>
      {Object.values(CustomToastPos).map((pos) => (
        <PositionContainer key={pos} position={pos as CustomToastPos}>
          {renderItems(pos)}
        </PositionContainer>
      ))}
    </>
  )
}
