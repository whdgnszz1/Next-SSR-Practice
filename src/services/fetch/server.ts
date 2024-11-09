'use server'

import type { FetchUrlParam, IFetchInit } from './interface'
import { bindAuthHeader } from './util'

/**
 * API 호출 - server-side 전용
 */
export async function nextFetch(
  url: FetchUrlParam,
  init: IFetchInit = {}
): Promise<any> {
  const options = bindAuthHeader(init)

  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'
  const res = await fetch(`${baseUrl}${url}`, options)

  if (!res.ok) {
    throw new Error(`API 요청 실패: ${res.status}`)
  }
  const data = await res.json()
  return data
}
