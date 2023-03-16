import '@/styles/globals.css'
import Layout from './components/Layout'
import { Kanit } from "next/font/google";

const kanit = Kanit({
  weight: ['400','700'],
  subsets: ['thai']
})

export default function App({ Component, pageProps }) {
  return (
    <main className={kanit.className}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </main>
  )
}
