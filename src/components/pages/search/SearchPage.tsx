'use client'

import { useGetSearchResults } from '@/services/search'
import { useInfiniteScrollWithLoading } from '@/hooks'
import { SearchResultList } from './list'

export const SearchPage = ({ query }: { query: string }) => {
  const searchQuery = useGetSearchResults(query)
  const { ref } = useInfiniteScrollWithLoading({ query: searchQuery })

  if (!searchQuery.data) {
    return (
      <div className='flex w-full flex-col'>
        <div className='mx-auto flex w-[944px] flex-col'>
          <p className='text-[24px] font-bold'>
            <span className='text-[#3C9A17]'>{`'${query}'`}</span> 검색결과
          </p>
        </div>
      </div>
    )
  }

  return (
    <div className='flex w-full flex-col'>
      <div className='mx-auto flex w-[944px] flex-col'>
        <p className='text-[24px] font-bold'>
          <span className='text-[#3C9A17]'>{`'${query}'`}</span> 검색결과
        </p>
        <div className='mt-[20px]'>
          {searchQuery.data?.pages.map((page) =>
            page.data.map((book) => (
              <SearchResultList key={book.id} item={book} />
            ))
          )}
        </div>
      </div>
      <div ref={ref}></div>
    </div>
  )
}
