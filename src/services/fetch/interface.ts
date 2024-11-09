export interface IFetchInit extends RequestInit {
  /**
   * 인증 헤더 추가 여부(기본값: true)
   * - Authorization 헤더 매핑
   * - false로 설정 시 인증 헤더 추가하지 않음
   */
  auth?: boolean
}

export type FetchUrlParam = string
