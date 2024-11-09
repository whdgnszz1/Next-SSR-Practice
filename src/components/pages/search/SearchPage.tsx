'use client'

import { useGetSearchResults } from '@/services/search'
import { useLoadingStore } from '@/stores/loading'
import { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import { SearchResultList } from './list'

export const SearchPage = ({ query }: { query: string }) => {
  const { ref, inView } = useInView()
  const { loading, setLoading } = useLoadingStore()

  const { data, fetchNextPage, hasNextPage } = useGetSearchResults(query)

  useEffect(() => {
    if (inView && hasNextPage && !loading && data) {
      setLoading(true)
      fetchNextPage()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView, hasNextPage, loading, data])

  useEffect(() => {
    if (data) {
      setLoading(false)
    }
  }, [data, setLoading])

  if (!data) {
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
          {data?.pages.map((page) =>
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
