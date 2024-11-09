'use client'

import { lazy } from 'react'

import { useLoadingStore } from '@/stores/loading'
import { LoadingProps } from './interface'
import animationData from './loading.json'

const DynamicLottie = lazy(() => import('lottie-light-react'))

export const Loading = ({ isDimmed = false }: LoadingProps) => {
  const { loading } = useLoadingStore()

  if (!loading) return null

  return (
    <div
      className={`z-notification fixed bottom-0 left-0 right-0 top-0 flex items-center justify-center ${isDimmed ? 'bg-[rgba(255,255,255,0.9)]' : ''} `}
    >
      <div className='h-[100px] w-[100px] shrink-0'>
        <DynamicLottie
          animationData={animationData}
          loop={true}
          className='h-full w-full'
        />
      </div>
    </div>
  )
}
