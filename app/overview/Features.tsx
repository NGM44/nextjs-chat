import FeatureCard from './card'

export type FeatureDataModel = {
  heading: string
  description: string
  author: string
  videoLink: string
  showLeft: boolean
  color: string
}
const featureData: FeatureDataModel[] = [
  {
    heading: 'Data-Driven Trading Strategies',
    description:
      'Give me a short term trade strategy for $NVDA with entry and exit points',
    author: 'quant pro ',
    videoLink:
      'https://framerusercontent.com/assets/gt9ceHJuUWhwK8FhkoAXCeRgkLs.mp4',
    showLeft: true,
    color: 'text-[#79C6F0]'
  },
  {
    heading: 'Your AI Portfolio Manager',
    description:
      'Can you create a portfolio with 70% stocks and 30% bonds using low cost ETFs',
    author: 'Strategy Whiz',
    videoLink:
      'https://framerusercontent.com/assets/wWzW6Xt0kZViREVLEpFEXZUrQ8.mp4',
    showLeft: false,
    color: 'text-[#F1953F]'
  },

  {
    heading: 'Perform deep Equity Research',
    description:
      'What If you were Warren Buffet, would you buy Ford? What would you buy in other case?',
    author: 'ANALYST pro',
    videoLink:
      'https://framerusercontent.com/assets/2I3ZYAG0G1xzMsmG5cLzAJUYfc4.mp4',
    showLeft: true,
    color: 'text-[#F2476F]'
  },
  {
    heading: 'Analyze News Sentiment',
    description:
      "Give me the last numbers from Palo Alto Networks' earnings from yesterday",
    author: 'NEWS GURU ',
    videoLink:
      'https://framerusercontent.com/assets/kk6Aqjcn2smPu5fLAytvzv6la8.mp4',
    showLeft: false,
    color: 'text-[#7FDA68]'
  }
]
export default function Feature() {
  return (
    <div className="relative isolate bg-gray-900 pb-32 pt-24 sm:pt-32">
      <div
        className="absolute inset-x-0 top-1/2 -z-10 -translate-y-1/2 transform-gpu overflow-hidden opacity-30 blur-3xl"
        aria-hidden="true"
      >
        <div
          className="ml-[max(50%,38rem)] aspect-[1313/771] w-[82.0625rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc]"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)'
          }}
        />
      </div>
      <div
        className="absolute inset-x-0 top-0 -z-10 flex transform-gpu overflow-hidden pt-32 opacity-25 blur-3xl sm:pt-40 xl:justify-end"
        aria-hidden="true"
      >
        <div
          className="ml-[-22rem] aspect-[1313/771] w-[82.0625rem] flex-none origin-top-right rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] xl:ml-0 xl:mr-[calc(50%-12rem)]"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)'
          }}
        />
      </div>

      <p className="mt-2 mx-8 md:mx-32 text-4xl font-bold tracking-tight text-gray-200 sm:text-4xl">
        Meet your AI Agents
      </p>
      {featureData.map(feature => (
        <FeatureCard feature={feature} />
      ))}
    </div>
  )
}
