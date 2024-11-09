export interface IBestSeller {
  id: string
  image: string
  title: string
  author: string
  pbcmName: string
  description: string
  createdAt?: string
}

export interface IPaginatedBestSeller {
  data: IBestSeller[]
  nextCursor?: number
}
