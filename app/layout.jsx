import Footer from './components/Footer'
import Header from './components/Header'
import './globals.css'
import { Poppins } from '@next/font/google'
import { GlobalContextProvider } from './Context/memories'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['200', '400', '700']
})


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.jsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className='bg-gray-800'>
        <div className={`${poppins.className}`}>
          <GlobalContextProvider>
            <div className="">
              <Header />
              {children}
              <Footer />
            </div>
          </GlobalContextProvider>
        </div>
      </body>
    </html >
  )
}
