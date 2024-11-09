'use client'

import { IBook } from '@/services/book'
import Image from 'next/image'

interface IBookPageProps {
  book: IBook
}

export const BookPage = ({ book }: IBookPageProps) => {
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
