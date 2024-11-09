import { ILoginRequestDto, ISignupRequestDto } from '@/services/auth'

export interface MainPageHeaderProps {
  tab: 'login' | 'signup'
  onTabChange: (selectedTab: 'login' | 'signup') => void
}

export interface ILoginFormProps {
  onChange: (field: string, value: string) => void
  onSubmit: () => void
  values: ILoginRequestDto
}

export interface ISignUpFormProps {
  onChange: (field: string, value: string) => void
  onSubmit: () => void
  values: ISignupRequestDto
}
