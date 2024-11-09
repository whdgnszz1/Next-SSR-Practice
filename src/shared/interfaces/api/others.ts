interface IApiBase<T = unknown> {
  data: T
  resultCode: string
}

export interface IApiJson<T> extends IApiBase<T> {
  statusCode?: number
  resultMessage?: string
  detailMessage?: string | null
}

export type FnCustomFetch = <T = unknown>(
  url: string,
  option?: RequestInit
) => Promise<T>
