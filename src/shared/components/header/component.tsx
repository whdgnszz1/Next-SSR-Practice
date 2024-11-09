'use client'

import { headerBg } from '@/styles'
import { useRouter } from 'next/navigation'
import { Gnb } from '../gnb'
import { UtilNav } from '../util-nav'
import Image from 'next/image'
import logo from '@/assets/images/logo.png'

export const Header = () => {
  const router = useRouter()

  const goHome = () => {
    router.push('/main')
  }

  return (
    <div className={`mb-[40px] h-[168px] w-full min-w-[1004px]`}>
      <div
        className='z-1000 relative min-w-[1004px] overflow-hidden'
        style={headerBg}
      >
        <div className='relative mx-auto h-[104px] w-[944px]'>
          <div className='absolute left-0 top-[40px]'>
            <Image
              src={logo}
              alt='logo'
              width={40}
              height={40}
              onClick={goHome}
              className='cursor-pointer'
            />
          </div>

          <div className='absolute right-0 top-[34px]'>
            <UtilNav />
          </div>
        </div>
      </div>
      <Gnb />
    </div>
  )
}
