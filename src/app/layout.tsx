import { BaseLayout } from '@/layouts'
import type { Metadata } from 'next'
import '@/styles/globals.css'
import { IsHydratedProvider } from '@/stores/hydration'
import { ModalContainer } from '@/shared/components'

export const metadata: Metadata = {
  title: 'Next-SSR-Practice',
  description: 'SSR 연습'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <BaseLayout>
      <IsHydratedProvider>
        <div className='min-w-[944px] overflow-x-hidden'>{children}</div>
      </IsHydratedProvider>
      <ModalContainer />
    </BaseLayout>
  )
}
