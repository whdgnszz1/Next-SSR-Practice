'use client'

import { useItemNavigation } from '@/hooks'
import { IBestSeller, useGetBestSellers } from '@/services/best-seller'
import Image from 'next/image'

export const BestSellerBody = () => {
  const { navigateToBook } = useItemNavigation()
  const { data } = useGetBestSellers()

  const items: IBestSeller[] = data?.pages.flatMap((page) => page.data) || []

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
    </div>
  )
}
