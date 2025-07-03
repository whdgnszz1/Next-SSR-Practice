export interface IBook {
  id: string
  image: string
  title: string
  author: string
  pbcmName: string
  description: string
  createdAt?: string
}

export interface IPaginatedBooks {
  data: IBook[]
  nextCursor?: number
}

export interface IBookData {
  image: string | null
  title: string
  author: string
  pbcmName: string
  description: string
}
