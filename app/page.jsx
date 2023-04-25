
import Loader from './components/Loader';
import Memories from './components/Memories'
import { Suspense } from 'react'


export const metadata = {
  title: 'GEET',
  description: 'Share your Memories',
  keywords:
    '',
};

export default function Home() {
  return (
    <main className="">
      
      <div className="mx-5">
        <Suspense fallback={<Loader/>}>
          <Memories />
        </Suspense>
      </div>
    </main>
  )
}
