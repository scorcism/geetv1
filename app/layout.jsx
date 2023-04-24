import Footer from './components/Footer'
import Header from './components/Header'
import './globals.css'
import { Montserrat } from '@next/font/google'

const montserrat = Montserrat({
  varient: ['200', '300', '400', '700'],
  subsets: ['latin']
})


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.jsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <div className={`bg-gray-800 `}>
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html >
  )
}
