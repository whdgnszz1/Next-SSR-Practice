'use client'

import { IBestSeller } from '@/services/best-seller'
import { useGetBooks } from '@/services/book'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React, { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'

export const MainBody: React.FC = () => {
  const { ref, inView } = useInView({
    rootMargin: '20px'
  })
  const router = useRouter()

  const { data, fetchNextPage, hasNextPage } = useGetBooks()

  const items: IBestSeller[] = data?.pages.flatMap((page) => page.data) || []

  useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView, hasNextPage])

  const handleItemClick = (id: string) => {
    router.push(`/book/${id}`)
  }

  return (
    <div>
      <div className='grid grid-cols-5 gap-x-4 gap-y-10'>
        {items.map((item: IBestSeller) => (
          <div
            key={item.id}
            className='cursor-pointer'
            onClick={() => handleItemClick(item.id)}
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
