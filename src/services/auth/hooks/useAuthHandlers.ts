'use client'

import { useLoadingStore } from '@/stores/loading'
import { useItemNavigation } from '@/hooks'
import { ILoginRequestDto, ISignupRequestDto } from '../types'
import { useAuthMutation } from './auth'

interface IUseAuthHandlersProps {
  loginValues: ILoginRequestDto
  signUpValues: ISignupRequestDto
  onSignUpSuccess?: () => void
}

export const useAuthHandlers = ({
  loginValues,
  signUpValues,
  onSignUpSuccess
}: IUseAuthHandlersProps) => {
  const { setLoading } = useLoadingStore()
  const { navigateToMain } = useItemNavigation()
  const { signupMutate, loginMutate } = useAuthMutation()

  const handleSignUp = () => {
    setLoading(true)
    signupMutate.mutate(signUpValues, {
      onSuccess: () => {
        onSignUpSuccess?.()
      },
      onSettled: () => setLoading(false)
    })
  }

  const handleLogin = () => {
    setLoading(true)
    loginMutate.mutate(loginValues, {
      onSuccess: () => navigateToMain(),
      onSettled: () => setLoading(false)
    })
  }

  return {
    handleSignUp,
    handleLogin
  }
} 