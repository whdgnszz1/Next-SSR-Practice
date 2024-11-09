import React from 'react'
import { MainPageHeaderProps } from './interface'

export const LoginPageHeader: React.FC<MainPageHeaderProps> = ({
  tab,
  onTabChange
}) => {
  return (
    <>
      <h2 className='text-2xl font-bold'>Next-SSR-Practice</h2>

      <div className='flex justify-around rounded-lg border font-semibold'>
        <button
          className={`w-full py-2 ${tab === 'signup' ? 'bg-gray-200' : ''}`}
          onClick={() => onTabChange('signup')}
        >
          회원가입
        </button>
        <button
          className={`w-full py-2 ${tab === 'login' ? 'bg-gray-200' : ''}`}
          onClick={() => onTabChange('login')}
        >
          로그인
        </button>
      </div>
    </>
  )
}
