import React from 'react'
import Head from 'next/head'
import { Footer, Page } from '../src/components/sections'

export default function Home() {
  return (
    <div className="min-h-full flex flex-col items-center h-full bg-bg w-screen overflow-hidden ">
      <Head>
        <title>Carmen Chapa</title>
        <meta
          name="description"
          content="Carmen Chapa personal website - Full Stack developer"
        />
        {/* <link rel="icon" href="/favicon.ico" /> */}
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>👩🏻‍💻</text></svg>"
        />
        <link
          rel="preload"
          href="public/fonts/DMSans-Regular.woff2"
          as="font"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="public/fonts/DMSans-Medium.woff2"
          as="font"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="public/fonts/DMSans-Bold.woff2"
          as="font"
          crossOrigin=""
        />
      </Head>

      <main className="flex flex-col max-w-full">
        <Page />
      </main>

      <Footer />
    </div>
  )
}
