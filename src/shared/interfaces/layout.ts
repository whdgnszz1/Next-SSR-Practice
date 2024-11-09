import type { ReactNode } from 'react'

export interface ILayoutProps {
  children: ReactNode
}

export interface IBizLayoutProps extends ILayoutProps {
  params: string
}
