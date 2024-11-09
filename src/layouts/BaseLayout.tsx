'use server'

import '../styles/globals.css'

import { parseGlobalState } from '@/shared/actions'
import { Loading } from '@/shared/components/loading'
import { CustomToastContainer } from '@/shared/components/toasts'
import { ILayoutProps, ReacHtmlProps } from '@/shared/interfaces'
import { UiStoreProvider } from '@/stores'
import { GlobalStoreProvider } from '@/stores/global'
import { QueryProvider } from '@/stores/query'

type NoChildrenBodyProps = Omit<ReacHtmlProps<HTMLBodyElement>, 'children'>

export interface IBaseLayoutProps extends ILayoutProps, NoChildrenBodyProps {}

export async function BaseLayout({
  children,
  ...props
}: Readonly<IBaseLayoutProps>) {
  const globalState = await parseGlobalState()

  return (
    <html lang='ko'>
      <GlobalStoreProvider data={globalState}>
        <UiStoreProvider {...props}>
          {/* main content */}
          <QueryProvider>{children}</QueryProvider>
          {/* toast layer */}
          <CustomToastContainer />
          {/* loading */}
          <Loading />
        </UiStoreProvider>
      </GlobalStoreProvider>
    </html>
  )
}
