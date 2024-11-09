import { Button, FormField } from '@/shared/components'
import { ILoginFormProps } from './interface'

export const LoginForm: React.FC<ILoginFormProps> = ({
  onChange,
  onSubmit,
  values
}) => {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()
        onSubmit()
      }}
      className='space-y-4'
    >
      <FormField
        label='이메일'
        value={values.email}
        placeholderText='test@example.com'
        fieldType='text'
        onFieldChange={(value) => onChange('email', value as string)}
      />
      <FormField
        label='비밀번호'
        value={values.password}
        placeholderText='비밀번호를 입력하세요'
        fieldType='password'
        onFieldChange={(value) => onChange('password', value as string)}
      />
      <div className='flex justify-center'>
        <Button type='submit' color='blue' size='lg' className='h-[40px] w-1/3'>
          로그인
        </Button>
      </div>
    </form>
  )
}
