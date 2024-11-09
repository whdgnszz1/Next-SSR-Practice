import type { CustomUrlParam } from './interface'

export type JoinUrlParam<T = any> =
  | string
  | undefined
  | null
  | CustomUrlParam<T>

const isString = (value: any): value is string => typeof value === 'string'

/**
 * URL을 조합하여 반환
 * - slash 구분자 중복 제거
 * - ?문자로 시작하는 쿼리스트링은 유지
 * - 마지막 인자가 오브젝트인 경우 쿼리스트링으로 변환
 */
export function joinURL<T = any>(...urls: JoinUrlParam<T>[]): string {
  if (!urls.length) return ''
  const lastParam = urls.at(-1)
  let params = ''

  const popUrlParam = (urlparam: string) => {
    params = urlparam
    urls.pop()
  }

  if (lastParam != null) {
    if (isString(lastParam) && lastParam.startsWith('?')) {
      popUrlParam(lastParam)
    } else if (typeof lastParam === 'object') {
      const entries = Object.entries(lastParam)
      if (entries.length) {
        const urlparam =
          '?' +
          new URLSearchParams(
            entries.map(([key, value]) => [key, String(value)])
          ).toString()
        popUrlParam(urlparam)
      }
    }
  }

  let url = (urls as string[])
    .map((url, ndx) => {
      if (url == null || !isString(url)) return undefined
      url = url.trim()
      if (!url.length) return undefined
      const re = !ndx ? /^[\s\t]+|[\s\t]+$/g : /[\s\t/]+$/
      return url.replace(re, '')
    })
    .filter(Boolean)
    .join('/')

  url = url.replace(/(https?:\/\/)|(\/{2,})/g, (_m, p1) => {
    return p1 || '/'
  })

  return url + params
}
