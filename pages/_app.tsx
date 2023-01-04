import '../styles/globals.css'
import type { AppProps } from 'next/app'
import {AuthProvider} from "../src/context/authContext";

export default function App({ Component, pageProps }: AppProps) {
  return (
      <AuthProvider>
        <Component {...pageProps} />
      </AuthProvider>
  )
}
