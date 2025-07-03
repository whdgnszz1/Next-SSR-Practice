'use client'

import { useState, useCallback } from 'react'
import { ILoginRequestDto, ISignupRequestDto } from '../types'

export const useAuthForm = () => {
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

  const handleTabChange = useCallback((selectedTab: 'login' | 'signup') => {
    setTab(selectedTab)
  }, [])

  const handleInputChange =
    (setter: React.Dispatch<React.SetStateAction<any>>) =>
    (field: string, value: string) => {
      setter((prev: any) => ({ ...prev, [field]: value }))
    }

  const handleLoginInputChange = useCallback(
    (field: string, value: string) => {
      setLoginValues((prev) => ({ ...prev, [field]: value }))
    },
    []
  )

  const handleSignUpInputChange = useCallback(
    (field: string, value: string) => {
      setSignUpValues((prev) => ({ ...prev, [field]: value }))
    },
    []
  )

  return {
    tab,
    loginValues,
    signUpValues,
    setTab,
    setLoginValues,
    setSignUpValues,
    handleTabChange,
    handleInputChange,
    handleLoginInputChange,
    handleSignUpInputChange
  }
} 