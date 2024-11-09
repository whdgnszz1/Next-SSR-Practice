import { getParamValue, setQuery } from '@/util/url/query'
import { usePathname, useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

export const useSearchInput = () => {
  const [inputValue, setInputValue] = useState<string>('')
  const [isSearchAlertVisible, setSearchAlertVisible] = useState<boolean>(false)
  const searchParams = getParamValue('query') || ''
  const pathname = usePathname()
  const router = useRouter()

  useEffect(() => {
    setInputValue(searchParams)
  }, [searchParams, pathname])

  const handleInputChange = (value: string) => {
    setInputValue(value)
  }

  const handleSearch = (inputValue: string) => {
    if (!inputValue.trim()) {
      setSearchAlertVisible(true)
      return
    }

    const updatedParams = setQuery(window.location.search, [
      { key: 'query', value: inputValue.trim() }
    ])

    router.push(`/search?${updatedParams.toString()}`)
  }

  const closeSearchAlert = () => {
    setSearchAlertVisible(false)
  }

  return {
    inputValue,
    setInputValue,
    handleInputChange,
    handleSearch,
    isSearchAlertVisible,
    setSearchAlertVisible,
    closeSearchAlert
  }
}
