import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Header from '../components/Layout/Header'
import PageLayout from '../components/Layout/PageLayout'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />

      {/* <div className="max-w-6xl mx-auto flex relative">
        <Header />
      </div>
      <div className="max-w-6xl  mx-auto ">
        <Component {...pageProps} />
      </div> */}
    </>
  )
}
