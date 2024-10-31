import { Suspense } from 'react'
import { ParallaxScroll } from './parallexScroll/scroll'
import { getNocoDBData } from './lib/getData'

async function NocoDBData() {
  const data = await getNocoDBData()
 
  return <ParallaxScroll companies2={data} />
}

export default function ParallaxScrollDemo() {
  return (
    <div className="container mx-auto p-4">
      <Suspense
        fallback={
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
          </div>
        }
      >
        <NocoDBData />
      </Suspense>
    </div>
  )
}
