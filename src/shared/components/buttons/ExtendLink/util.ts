import { isString } from '@/util/type'
import { parseFullURL } from '@/util/url'
import { UrlObject } from 'url'

/**
 * URL (pathname)매치
 */
export const matchURL = (...urls: (string | UrlObject)[]): boolean => {
  const filtered = urls.filter((url) => isString(url) || url.pathname)
  if (filtered.length < 2) return false
  const list = filtered.map((url) => {
    const prop = isString(url) ? url : url.pathname
    return parseFullURL(prop as string)
  })
  const firstURL = list[0]
  return list.every((url) => {
    return url === firstURL
  })
}
