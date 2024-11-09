import { HttpContentType, HttpHeader } from '@/shared/constants/http'

import type { IFetchInit } from './interface'

/**
 * API 호출 헤더 바인딩
 * - Authorization 헤더 추가
 */
export const bindAuthHeader = (
  init: IFetchInit = {},
  accessToken?: string | null
): IFetchInit => {
  if (!accessToken || init.auth === false) return init

  const headers = Object.assign(
    {
      [HttpHeader.AUTHORIZATION]: `Bearer ${accessToken}`,
      [HttpHeader.CONTENT_TYPE]: HttpContentType.JSON
    },
    init.headers
  )

  return { ...init, headers }
}

/**
 * API 호출 결과 파싱
 * - json 파싱 후 data 필드 반환
 */
export async function parseApiResult<T>(res: Response): Promise<T> {
  try {
    const raw = await res.json()
    return raw?.data ?? raw
  } catch (error) {
    console.error('Error fetching data:', error)
    throw new Error('Error fetching data')
  }
}
