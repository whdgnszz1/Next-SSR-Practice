export interface ImageUploadProps {
  value: string | null
  onImageChange: (value: string | File | null) => void
  className?: string
}
