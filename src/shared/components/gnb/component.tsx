import clearIcon from '@/assets/images/btn_ip_reset@2x.png'
import searchIcon from '@/assets/images/btn_ip_search@2x.png'
import { useSearchInput } from '@/hooks/search-input'
import { useSearchParams } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'
export const Gnb = () => {
  const searchParams = useSearchParams()
  const query = searchParams.get('query') || ''
  const inputRef = useRef<HTMLInputElement>(null)

  const [inputValue, setInputValue] = useState<string>('')
  const { handleSearch } = useSearchInput()

  useEffect(() => {
    setInputValue(query)
  }, [query, setInputValue])

  const handleClearInput = () => {
    setInputValue('')
    if (inputRef.current) {
      inputRef.current.focus()
    }
  }

  const handleKeyDown = async (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSearch(inputValue)
    }
  }

  const handleInputChange = (value: string) => {
    setInputValue(value)
  }

  return (
    <div className='relative mx-auto w-[944px]'>
      <div className='relative flex items-center justify-around gap-[6px]'>
        <div className='relative mr-[8px]'>
          <div
            className={`relative flex h-[64px] w-[676px] items-center rounded-full`}
          >
            <div
              className={`gradient-border pointer-events-none absolute inset-0 rounded-full`}
            ></div>
            <input
              type='search'
              className='relative h-full w-full bg-transparent px-10 pr-[80px] text-[20px] placeholder-[#767676] focus:outline-none'
              placeholder='검색어를 입력해주세요'
              value={inputValue}
              onChange={(e) => handleInputChange(e.target.value)}
              ref={inputRef}
              onKeyDown={handleKeyDown}
            />

            <div className='absolute right-[44px] top-1/2 flex -translate-y-1/2 transform items-center'>
              {inputValue && (
                <button
                  type='button'
                  className='mr-[15px] h-[24px] w-[24px] bg-contain bg-center bg-no-repeat'
                  style={{ backgroundImage: `url(${clearIcon.src})` }}
                  onClick={handleClearInput}
                >
                  <span className='hidden'>초기화</span>
                </button>
              )}
              <button
                type='button'
                className='h-[30px] w-[30px] bg-contain bg-center bg-no-repeat'
                style={{ backgroundImage: `url(${searchIcon.src})` }}
                onClick={() => {
                  handleSearch(inputValue)
                }}
              >
                <span className='hidden'>검색</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
