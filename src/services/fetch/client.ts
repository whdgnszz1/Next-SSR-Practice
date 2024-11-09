'use client'

import Cookies from 'js-cookie'
import type { FetchUrlParam, IFetchInit } from './interface'
import { bindAuthHeader, parseApiResult } from './util'

/**
 * API 호출
 * - client-side 전용
 */
export function useFetch<T = Record<string, any>>() {
  const accessToken = Cookies.get('accessToken')

  const windowFetch = async <K = T>(
    url: FetchUrlParam,
    init: IFetchInit = {}
  ): Promise<K> => {
    const options = bindAuthHeader(init, accessToken)
    const res: Response = await fetch(url, options)
    return parseApiResult<K>(res)
  }

  return [windowFetch]
}
