import '../styles/globals.css';
import type { AppProps } from 'next/app';

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
  );
}
