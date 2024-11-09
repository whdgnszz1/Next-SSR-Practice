export interface IFormFieldProps {
  label: string
  placeholderText?: string
  fieldType: 'text' | 'password' | 'textarea' | 'image'
  value: string | null
  onFieldChange: (value: string | File | null) => void
  className?: string
}
