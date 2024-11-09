import type { JWTPayload } from 'jose'

export interface IUser {
  name: string
  email: string
}

/**
 * 사용자 토큰 정보
 */
export interface IUserPayload extends JWTPayload {
  token_type: 'access' | 'refresh'
  accessToken: string
  user: IUser
}

export interface ISignupRequestDto {
  email: string
  password: string
  name: string
}

export interface ILoginRequestDto {
  email: string
  password: string
}

export interface ILoginResponseDto extends IUserPayload {}
