import {
  ILoginRequestDto,
  ILoginResponseDto,
  ISignupRequestDto,
  IUser
} from '@/services/auth'
import { useFetch } from '@/services/fetch'
import { AuthCookie, HttpMethod } from '@/shared'
import { useToast } from '@/stores/toast'
import { useMutation } from '@tanstack/react-query'
import Cookies from 'js-cookie'

export const useAuthMutation = () => {
  const { toastOne } = useToast()
  const [fetch] = useFetch()

  const signupMutate = useMutation({
    mutationFn: async (data: ISignupRequestDto) => {
      const response = await fetch<IUser>('/api/auth/signup', {
        method: HttpMethod.POST,
        body: JSON.stringify(data)
      })
      return response
    },
    onSuccess: () => {
      toastOne('회원가입 성공')
    },
    onError: () => {
      toastOne('회원가입 실패')
    }
  })

  const loginMutate = useMutation({
    mutationFn: async (data: ILoginRequestDto) => {
      const response = await fetch<ILoginResponseDto>('/api/auth/login', {
        method: HttpMethod.POST,
        body: JSON.stringify(data)
      })
      return response
    },
    onSuccess: (data) => {
      Cookies.set(AuthCookie.ACCESS_TOKEN, data.accessToken, { expires: 1 })
      toastOne('로그인 성공')
    },
    onError: () => {
      toastOne('로그인 실패. 이메일과 비밀번호를 확인해주세요.')
    }
  })

  return {
    signupMutate,
    loginMutate
  }
}
