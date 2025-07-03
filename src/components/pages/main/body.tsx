'use client'

import { useInfiniteScroll, useItemNavigation } from '@/hooks'
import { IBestSeller } from '@/services/best-seller'
import { useGetBooks } from '@/services/book'
import Image from 'next/image'

export const MainBody = () => {
  const booksQuery = useGetBooks()
  const { navigateToBook } = useItemNavigation()
  const { ref } = useInfiniteScroll({ query: booksQuery })

  const items: IBestSeller[] =
    booksQuery.data?.pages.flatMap((page) => page.data) || []

  return (
    <div>
      <div className='grid grid-cols-5 gap-x-4 gap-y-10'>
        {items.map((item: IBestSeller) => (
          <div
            key={item.id}
            className='cursor-pointer'
            onClick={() => navigateToBook(item.id)}
          >
            <Image
              priority
              className='w-full object-cover'
              src={item.image}
              alt='상품 이미지'
              width={200}
              height={300}
            />
            <p className='mt-4 font-medium'>{item.title}</p>
            <p className='mt-[5px] text-[14px] text-[#595959]'>
              {item.author} · {item.pbcmName}
            </p>
          </div>
        ))}
      </div>
      <div ref={ref}></div>
    </div>
  )
}
