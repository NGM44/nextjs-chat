import FeatureCard from './card'
import Dashboard from './Investment'
import Dashboard2 from './Investment2'

export type FeatureDataModel = {
  heading: string
  description: string
  author: string
  videoLink: string
  showLeft: boolean
  color: string
  image: boolean
}
const featureData: FeatureDataModel[] = [
  {
    heading: 'ACCESS PREMIUM OPPORTUNITIES',
    description:
      'Invest in high quality, alternative investments beating the normal industry returns. Our tech enables you to compare across 1000+ alternate investment opportunities across 50+ platforms',
    author: 'CURATED INVESTMENTS',
    videoLink:
      'https://img.freepik.com/premium-photo/stock-exchange-market-economy-financial-dark-theme-global-business-investment_733288-63.jpg',
    showLeft: true,
    image: true,
    color: 'text-[#79C6F0]'
  },
  {
    heading: 'MEET YOUR AI CONCIERGE',
    description:
      'Use XIRR AI for bespoke answers to your investment strategies in alternative assets, designed to boost your confidence in your alternative investment strategy',
    author: 'YOUR NEW SUPERPOWER',
    videoLink:
      'https://framerusercontent.com/assets/wWzW6Xt0kZViREVLEpFEXZUrQ8.mp4',
    showLeft: false,
    image: false,
    color: 'text-[#F1953F]'
  },

  {
    heading: 'JOIN A PRIVATE ALTERNATE INVESTMENT COMMUNITY',
    description:
      'Our membership is a diverse group of individuals and family offices passionate about learning alternate investment opportunities in India, share the perspectives about the the risk and return profile of this relatively new asset class.',
    author: 'An EXCLUSIVE NETWORK',
    videoLink: '/investment.jpeg',
    image: true,
    showLeft: true,
    color: 'text-[#F2476F]'
  }
]
export default function Feature() {
  return (
    <div id="Offerings" className="relative isolate bg-gray-900 pb-32 pt-24 sm:pt-32">
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

      {/* <Dashboard /> */}
      {/* <Dashboard2 /> */}
      <p className="mt-2 mx-8 md:mx-32 text-4xl font-bold tracking-tight text-gray-200 sm:text-4xl">
        What we offer
      </p>
      {featureData.map(feature => (
        <FeatureCard key={feature.heading} feature={feature} />
      ))}
    </div>
  )
}
