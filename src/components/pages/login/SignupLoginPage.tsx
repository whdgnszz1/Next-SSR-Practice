'use client'

import {
  ILoginRequestDto,
  ISignupRequestDto,
  useAuthMutation
} from '@/services/auth'
import { useLoadingStore } from '@/stores/loading'
import React, { useCallback, useState } from 'react'
import { useRouter } from 'next/navigation'

import { LoginForm } from './LoginForm'
import { SignUpForm } from './SignUpForm'
import { LoginPageHeader } from './header'
import { LoginPageFooter } from './footer'

export const SignUpLoginPage: React.FC = () => {
  const router = useRouter()
  const [tab, setTab] = useState<'login' | 'signup'>('login')
  const [loginValues, setLoginValues] = useState<ILoginRequestDto>({
    email: '',
    password: ''
  })
  const [signUpValues, setSignUpValues] = useState<ISignupRequestDto>({
    email: '',
    password: '',
    name: ''
  })
  const { setLoading } = useLoadingStore()
  const { signupMutate, loginMutate } = useAuthMutation()

  const handleTabChange = useCallback((selectedTab: 'login' | 'signup') => {
    setTab(selectedTab)
  }, [])

  const handleInputChange =
    (setter: React.Dispatch<React.SetStateAction<any>>) =>
    (field: string, value: string) => {
      setter((prev: any) => ({ ...prev, [field]: value }))
    }

  const handleSignUp = () => {
    setLoading(true)
    signupMutate.mutate(signUpValues, {
      onSuccess: () => setTab('login'),
      onSettled: () => setLoading(false)
    })
  }

  const handleLogin = () => {
    setLoading(true)
    loginMutate.mutate(loginValues, {
      onSuccess: () => router.push('/main'),
      onSettled: () => setLoading(false)
    })
  }

  return (
    <div className='flex min-h-screen items-center justify-center p-4'>
      <div className='flex w-full max-w-md flex-col gap-4 rounded-md bg-white p-6 shadow-lg'>
        <LoginPageHeader tab={tab} onTabChange={handleTabChange} />
        {tab === 'signup' ? (
          <SignUpForm
            onChange={handleInputChange(setSignUpValues)}
            onSubmit={handleSignUp}
            values={signUpValues}
          />
        ) : (
          <LoginForm
            onChange={handleInputChange(setLoginValues)}
            onSubmit={handleLogin}
            values={loginValues}
          />
        )}
        <LoginPageFooter />
      </div>
    </div>
  )
}
