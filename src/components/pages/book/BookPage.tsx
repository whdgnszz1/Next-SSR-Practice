'use client'

import { useQuery } from '@tanstack/react-query'
import { queryOptions } from '@/services/book'
import Image from 'next/image'

interface IBookPageProps {
  bookId: string
}

export const BookPage = ({ bookId }: IBookPageProps) => {
  const { data: book } = useQuery(queryOptions.book(bookId))

  if (!book) {
    return <div>로딩중...</div>
  }

  return (
    <div className='flex w-full flex-col'>
      <div className='mx-auto flex w-[944px] flex-col items-center'>
        <h1 className='mb-[20px] text-[28px] font-bold'>{book.title}</h1>
        <Image
          priority
          src={book.image}
          alt='book_image'
          height={400}
          width={200}
        />
        <div className='mt-[24px] flex gap-1'>
          <p>{book.author} 저자 | </p>
          <p>{book.pbcmName} 출판사</p>
        </div>

        <div className='mt-[24px] flex gap-1'>
          <p>{book.description} </p>
        </div>
      </div>
    </div>
  )
}
