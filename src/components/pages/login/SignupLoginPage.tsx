'use client'

import { useAuthForm, useAuthHandlers } from '@/services/auth'
import React from 'react'

import { LoginForm } from './LoginForm'
import { SignUpForm } from './SignUpForm'
import { LoginPageFooter } from './footer'
import { LoginPageHeader } from './header'

export const SignUpLoginPage = () => {
  const {
    tab,
    loginValues,
    signUpValues,
    setTab,
    setLoginValues,
    setSignUpValues,
    handleTabChange,
    handleInputChange
  } = useAuthForm()

  const { handleSignUp, handleLogin } = useAuthHandlers({
    loginValues,
    signUpValues,
    onSignUpSuccess: () => setTab('login')
  })

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
