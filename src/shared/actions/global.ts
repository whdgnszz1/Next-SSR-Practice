'use server'

import { IGlobalState, parseGlobalStoreData } from '@/stores/global'
import { authorize } from './user'

export async function parseGlobalState(): Promise<IGlobalState> {
  const user = await authorize()

  return parseGlobalStoreData({ user })
}
