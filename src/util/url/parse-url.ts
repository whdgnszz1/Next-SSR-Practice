import { isEmpty } from '../type'

/**
 * URL에 Parameter를 추가하여 반환
 * @param url URL
 * @param params Parameter
 */
export const getSearchParam = (
  url: string,
  params?: Record<string, unknown>
) => {
  if (!params || isEmpty(params)) {
    return url
  }
  return [
    url,
    new URLSearchParams(params as Record<string, string>).toString()
  ].join('?')
}

/**
 * Full URL을 반환
 * - 앵커태그이름('#') 제거
 * - GET파라메터('?') 제거
 * - trailing slash 문자('/') 제거
 */
export const parseFullURL = (url: string): string | undefined => {
  if (url == null || !url.length) return
  if (url.indexOf('?') > 0) {
    url = url.replace(/\?.*/, '')
  } else if (url.indexOf('#') > 0) {
    url = url.replace(/#.*/, '')
  }
  return url.replace(/\/$/, '')
}

/**
 * 주어진 URL에서 호스트와 경로를 구분하는 함수
 * @param url 전체 URL 문자열
 * @returns { host: string, path: string } 호스트와 경로가 포함된 객체
 */
export const parseUrl = (
  url: string
): { host: string; path: string } | false => {
  try {
    const urlPattern = /^(https?:\/\/)?([a-zA-Z0-9\-.]+)(:[0-9]{1,5})?(\/.*)?$/

    if (!urlPattern.test(url)) {
      return false
    }
    const parsedUrl = new URL(url)
    const host = parsedUrl.host
    const path = parsedUrl.pathname

    return { host, path }
  } catch (error) {
    console.error('Invalid URL provided:', error)
    return false
  }
}
