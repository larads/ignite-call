import { DefaultSeo } from 'next-seo'
import type { AppProps } from 'next/app'
import { SessionProvider } from 'next-auth/react'
import { QueryClientProvider } from '@tanstack/react-query'

import '@/lib/dayjs'
import { globalStyles } from "@/styles/global"
import { queryClient } from '@/lib/react-query'


  globalStyles()

  export default function App({
    Component,
    pageProps: { session, ...pageProps },
  }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <SessionProvider session={session}>
        <DefaultSeo
          openGraph={{
            type: 'website',
            locale: 'pt_BR',
            url: 'https://www.ignite-call.rocketseat.com.br',
            siteName: 'Ignite Call',
          }}
        />
        <Component {...pageProps} />
      </SessionProvider>
    </QueryClientProvider>
  )
}
