'use client'

import { IBook } from '@/services/book'
import { useItemNavigation } from '@/hooks'
import Image from 'next/image'
import React from 'react'

export const SearchResultList = ({ item }: { item: IBook }) => {
  const { navigateToBook } = useItemNavigation()

  const handleItemClick = () => {
    navigateToBook(item.id)
  }

  return (
    <div
      key={item.id}
      className='flex w-full border-t border-[#EAEAEA] py-[36px]'
    >
      <div className='flex w-[684px]'>
        <div
          className='h-[205px] w-[140px] flex-shrink-0 cursor-pointer'
          onClick={handleItemClick}
        >
          <Image
            priority
            src={`${item.image}`}
            alt='product_img'
            width={140}
            height={200}
            style={{ objectFit: 'cover' }}
          />
        </div>

        <div className='ml-[16px]'>
          <p
            className='cursor-pointer text-[20px] font-bold hover:underline'
            onClick={handleItemClick}
          >
            {item.title}
          </p>
          <div className='flex text-[14px]'>
            <p>{item.author} |</p> <p>&nbsp;{item.pbcmName}</p>
          </div>

          <p className='mt-[8px] line-clamp-3 overflow-hidden overflow-ellipsis text-[14px]'>
            {item.description}
          </p>
        </div>
      </div>
    </div>
  )
}
