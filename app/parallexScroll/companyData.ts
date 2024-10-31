export interface CompanyModel {
  name: string
  subtitle: string
  description: string
  link: string
  key?: string[]
  category: string
  image: string
}

export const transformedCompanyData: CompanyModel[] = [
  // Fixed Income
  {
    name: 'JIRAAF',
    subtitle:
      'Listed & Secured Bond Investments | Online Bond Platform | Jiraaf',
    description:
      'Invest online in highly rated and secured listed corporate bonds by India’s trusted fixed-income online bond platform. One platform for investing in Bonds, G-Sec, SDL, Treasury bills (T-Bills), Sovereign Gold Bonds, and Structured Debts. High returns and relatively low-risk investment options. Regulated by SEBI & RBI. Buy Bonds on Jiraaf platform with ease and convenience.',
    link: 'https://www.jiraaf.com/',
    key: [
      'Regulated Bond Investment',
      'Online Bond Platform',
      'Fixed Income Investments',
      'High Return Investments',
      'Low-risk Investments',
      'T-bills',
      'Gold Bonds',
      'Listed Corporate Bonds',
      'SDL',
      'State Development Loan',
      'government Securities',
      'Govt Bonds',
      'RBI regulated bonds',
      'Safe Investments',
      'Listed Corporate Bonds',
      'Buy Govt Bonds',
      'SEBI Regulated Bonds',
      'Regulated Bonds',
      'Best bond Investments',
      'High Yield investments',
      'Secured investments',
      'Government safe investments'
    ],
    category: 'Fixed Income',
    image: 'https://www.jiraaf.com/images/logo.svg'
  },
  {
    name: 'Golden PI',
    subtitle: 'GoldenPi: Buy Bonds, Debentures & Other Fixed Income Assets',
    description:
      "GoldenPi is India's Trusted online platform to buy Bonds, Debentures, and other fixed-income assets in India. To know more about online bond investment, Get started!",
    link: 'https://goldenpi.com/',
    category: 'Fixed Income',
    image:
      'https://d2zny4996dl67j.cloudfront.net/blogs/wp-content/uploads/2023/05/18105628/GoldenPi-Lean-Logo.png'
  },

  {
    name: 'Wint Wealth',
    subtitle: 'Invest in Bonds with higher returns: Start with ₹10,000',
    description: 'Earn higher returns than FD, lower risk than equity.',
    link: 'https://www.wintwealth.com/',
    category: 'Fixed Income',
    image: 'https://davf9otgz7zc8.cloudfront.net/images//Wint_Capital_3e79c94ac0.png?'
  },
  {
    name: 'The Fixed Income',
    subtitle: 'Fixed Income Investment Platform',
    description: 'Fixed income investment opportunities',
    link: 'https://www.thefixedincome.com/',
    category: 'Fixed Income',
    image: '/api/placeholder/200/200'
  },
  {
    name: 'India Bonds',
    subtitle: 'Fixed Income Investment Platform',
    description: 'Fixed income investment opportunities',
    link: 'https://www.indiabonds.com/',
    category: 'Fixed Income',
    image: '/api/placeholder/200/200'
  },
  {
    name: 'Bonds Kart',
    subtitle: 'Fixed Income Investment Platform',
    description: 'Fixed income investment opportunities',
    link: 'https://bondskart.com/',
    category: 'Fixed Income',
    image: '/api/placeholder/200/200'
  },
  {
    name: 'Bonds India',
    subtitle: 'Fixed Income Investment Platform',
    description: 'Fixed income investment opportunities',
    link: 'https://www.bondsindia.com/',
    category: 'Fixed Income',
    image: '/api/placeholder/200/200'
  },

  // Fractional Real Estate
  {
    name: 'Property Share',
    subtitle: 'Fractional Real Estate Investment Platform',
    description: 'Fractional real estate investment opportunities',
    link: 'https://www.propertyshare.in/',
    category: 'Fractional Real Estate',
    image: '/api/placeholder/200/200'
  },
  {
    name: 'Strata',
    subtitle: 'Fractional Real Estate Investment Platform',
    description: 'Fractional real estate investment opportunities',
    link: 'https://strataprop.com/',
    category: 'Fractional Real Estate',
    image: '/api/placeholder/200/200'
  },
  {
    name: 'Bhive Alts',
    subtitle: 'Fractional Real Estate Investment Platform',
    description: 'Fractional real estate investment opportunities',
    link: 'https://bhivealts.com/',
    category: 'Fractional Real Estate',
    image: '/api/placeholder/200/200'
  },
  {
    name: 'Restack',
    subtitle: 'Fractional Real Estate Investment Platform',
    description: 'Fractional real estate investment opportunities',
    link: 'https://restack.com/',
    category: 'Fractional Real Estate',
    image: '/api/placeholder/200/200'
  },
  {
    name: 'Prop Returns',
    subtitle: 'Fractional Real Estate Investment Platform',
    description: 'Fractional real estate investment opportunities',
    link: 'https://www.propreturns.com/',
    category: 'Fractional Real Estate',
    image: '/api/placeholder/200/200'
  },
  {
    name: 'Hbits',
    subtitle: 'Fractional Real Estate Investment Platform',
    description: 'Fractional real estate investment opportunities',
    link: 'https://hbits.co/',
    category: 'Fractional Real Estate',
    image: '/api/placeholder/200/200'
  },

  // Peer-to-Peer Lending
  {
    name: 'Lenden Club',
    subtitle: 'P2P Lending Platform',
    description: 'Peer-to-peer lending investment opportunities',
    link: 'https://app.lendenclub.com/',
    category: 'Peer-to-Peer Lending',
    image: '/api/placeholder/200/200'
  },
  {
    name: 'FairCent',
    subtitle:
      'Faircent: Peer to Peer Lending India | P2P Loan | P2P Lending India',
    description:
      'Faircent is India’s First RBI registered Peer to Peer Lending platform. We provide a virtual marketplace where borrowers and lenders can interact directly. Get P2P Loan online or Lend money to earn high returns with Peer to Peer (P2P) lending India.',
    link: 'https://www.faircent.com/',
    category: 'Peer-to-Peer Lending',
    key: [
      'Faircent',
      'P2P Loans India',
      'P2P Lending',
      'Peer to Peer',
      'P2P Lending India',
      'Peer to Peer Lending',
      'Online Lending',
      'Instant Loan',
      'Peer to Peer Lending India',
      'Online Money Lenders in India',
      'P2P Loan',
      'Peer to Peer Lending in India'
    ],
    image: 'https://fcimage.s3.ap-south-1.amazonaws.com/Faircent/logo_new.png'
  },
  {
    name: 'LiquiLoans',
    subtitle: 'P2P Lending Platform',
    description:
      "Invest in India's first-rated P2P NBFC; licensed and regulated by the Reserve Bank of India. Earn up to 10% Returns on Your Investment on our investment platform.",
    link: 'https://www.liquiloans.com/',
    category: 'Peer-to-Peer Lending',
    key: [
      "Invest in India's first-rated P2P NBFC; licensed and regulated by the Reserve Bank of India. Earn up to 10% Returns on Your Investment on our investment platform."
    ],
    image: 'https://www.liquiloans.com/investment-assets/img/logo_new.png'
  },
  {
    name: 'Cred Mint',
    subtitle: 'CRED mint - apply for early access',
    description:
      'accelerate the growth of your wealth by earning as high as 9% interest on your investment',
    link: 'https://cred.club/mint',
    category: 'Peer-to-Peer Lending',
    image: 'https://web-images.credcdn.in/_next/assets/images/mint/mint.png'
  },
  {
    name: 'India P2P',
    subtitle: "India's RBI Certified P2P Lending Platform ~ IndiaP2P",
    description:
      'IndiaP2P is one of the best P2P Lending Platforms in India. Earn up to 18% p.a. by investing in retail loans curated by IndiaP2P. Invest and Borrow today.',
    link: 'https://www.indiap2p.com/',
    category: 'Peer-to-Peer Lending',

    key: [
      'IndiaP2P',
      'Peer to Peer Lending in India',
      'Best P2P in India',
      'Innovative Investment Product',
      'High Return',
      'Low Risk',
      'Lending Platform',
      'peer-to-peer lending',
      'P2P investments',
      'financial growth',
      'online lending platform',
      'alternative investments',
      'investment opportunities'
    ],
    image: 'https://www.indiap2p.com/_nuxt/Logo2.WlgypYZI.svg'
  },
  {
    name: 'Monexo',
    subtitle: 'P2P Lending Platform',
    description: 'Peer-to-peer lending investment opportunities',
    link: 'https://monexo.co/',
    category: 'Peer-to-Peer Lending',
    image: '/api/placeholder/200/200'
  },
  {
    name: 'Finzy',
    subtitle: 'P2P Lending Platform',
    description: 'Peer-to-peer lending investment opportunities',
    link: 'https://finzy.com/invest',
    category: 'Peer-to-Peer Lending',
    image: '/api/placeholder/200/200'
  },

  // Litigation Finance
  {
    name: 'Legal Pay',
    subtitle: 'Litigation Finance Platform',
    description: 'Litigation finance investment opportunities',
    link: 'https://www.legalpay.in/',
    category: 'Litigation Finance',
    image: '/api/placeholder/200/200'
  },
  {
    name: 'Legal Financing',
    subtitle: 'Litigation Finance Platform',
    description: 'Litigation finance investment opportunities',
    link: 'https://legalfund.in/',
    category: 'Litigation Finance',
    image: '/api/placeholder/200/200'
  },

  // Renewable Energy
  {
    name: 'Pyse',
    subtitle: 'Renewable Energy Investment Platform',
    description: 'Renewable energy investment opportunities',
    link: 'https://pyse.in/',
    category: 'Renewable Energy',
    image: '/api/placeholder/200/200'
  },
  {
    name: 'Sunday Grids',
    subtitle: 'Renewable Energy Investment Platform',
    description: 'Renewable energy investment opportunities',
    link: 'https://www.sundaygrids.com/',
    category: 'Renewable Energy',
    image: '/api/placeholder/200/200'
  },
  {
    name: 'Sust Vest',
    subtitle: 'Renewable Energy Investment Platform',
    description: 'Renewable energy investment opportunities',
    link: 'https://sustvest.com/',
    category: 'Renewable Energy',
    image: '/api/placeholder/200/200'
  },
  {
    name: 'Race energy',
    subtitle: 'Renewable Energy Investment Platform',
    description: 'Renewable energy investment opportunities',
    link: 'https://race.energy/vault',
    category: 'Renewable Energy',
    image: '/api/placeholder/200/200'
  },

  // Alternative Investments
  {
    name: 'Grip Invest',
    subtitle: 'High Yield Investment Platform | Grip Invest',
    description:
      'Invest in rated & regulated fixed-income opportunities that provide high returns of up to 16%* annually',
    link: 'https://www.gripinvest.in/',
    category: 'Alternative Investments',
    key: [
      'Passive Income',
      'Alternative Investment India',
      'Online investing',
      'Grip Invest',
      'Startup India'
    ],
    image: 'https://img.gripinvest.in/Grip_4th_f22a7e2aab.svg'
  },
  {
    name: 'AurumWise X',
    subtitle: 'Alternative Investment Platform',
    description: 'Alternative investment opportunities',
    link: 'https://aurumwisex.com/',
    category: 'Alternative Investments',
    image: '/api/placeholder/200/200'
  },
  {
    name: 'Alt Graaf',
    subtitle: 'Alternative Investment Platform',
    description:
      'altGraaf is the best online investment platform for alternative fixed-income investments. Explore Unlisted Corporate Bonds (Non-Convertible Debentures - NCD), Commercial Papers, Venture Debt, Asset-backed Leasing, and Invoice Discounting.',
    link: 'https://www.altgraaf.com/',
    key: [
      'altgraaf',
      'best fixed income investments in india',
      'investment opportunities in india',
      'investing in bonds',
      'best assets to invest in india',
      'fixed income',
      'best investment options in india',
      'best invoice discounting platform in india',
      'alternative investment opportunities',
      'alternative fixed income investments'
    ],
    category: 'Alternative Investments',
    image: 'https://www.altgraaf.com/images/logo.svg'
  },
  {
    name: 'Better Invest',
    subtitle:
      'Easy funding solutions for content creators & producers - BetterInvest',
    description:
      'Get funding in just 5 days. BetterInvest offers financing solutions tailored for content producers. Convert your receivables into immediate cash to fuel your projects. Participate in entertainment debt and earn attractive returns.',
    link: 'https://www.betterinvest.club/',
    category: 'Alternative Investments',
    image:
      'https://cdn.prod.website-files.com/660fec29bd77a271c07eb5b6/66c4260f2d3e96ee045d73e2_BI%20Logo%201%20(2).svg'
  },
  {
    name: 'Yield Street',
    subtitle: "Learn about Yieldstreet's mission and values - Yieldstreet",
    description:
      'Meet the Yieldstreet leadership team. Find out about our mission to help investors grow wealth outside the stock market through access to private market alternatives.',
    link: 'https://www.yieldstreet.com/about/',
    category: 'Alternative Investments',
    image:
      'https://www.yieldstreet.com/gatsby-assets/images/yieldstreet-logo.jpg'
  },
  {
    name: 'Monytics',
    subtitle: 'Monytics',
    description:
      'We offer a Invoice Discouting platform where businesses can raise capital against their unpaid invoices to fulfil its financial needs.',
    link: 'https://www.monytics.com/',
    category: 'Alternative Investments',
    image:
      'https://www.monytics.com/_next/static/media/altgrowwLogo.5477f621.svg'
  },
  {
    name: 'ALT DRX',
    subtitle: 'Alternative Investment Platform',
    description: 'Alternative investment opportunities',
    link: 'https://altdrx.com/',
    category: 'Alternative Investments',
    image: '/api/placeholder/200/200'
  },
  {
    name: 'ALT Case',
    subtitle: 'Alternative Investment Platform',
    description: 'Alternative investment opportunities',
    link: 'https://altcase.com/',
    category: 'Alternative Investments',
    image: '/api/placeholder/200/200'
  },

  // Invoice Discounting
  {
    name: 'KredX',
    subtitle: 'Invoice Discounting Platform',
    description: 'Invoice discounting investment opportunities',
    link: 'https://www.kredx.com/terms',
    category: 'Invoice Discounting',
    image: '/api/placeholder/200/200'
  },
  {
    name: 'Trade Cred',
    subtitle: 'Invoice Discounting Platform',
    description: 'Invoice discounting investment opportunities',
    link: 'https://buy.tradecred.com/login',
    category: 'Invoice Discounting',
    image: '/api/placeholder/200/200'
  },

  // Gold Investment
  {
    name: 'Jar',
    subtitle: 'Gold Investment Platform',
    description: 'Gold investment opportunities',
    link: 'https://www.myjar.app/',
    category: 'Gold Investment',
    image: '/api/placeholder/200/200'
  },
  {
    name: '13karat',
    subtitle: 'Gold Investment Platform',
    description: 'Gold investment opportunities',
    link: 'https://13karat.in/',
    category: 'Gold Investment',
    image: '/api/placeholder/200/200'
  },

  // Investment Platforms
  {
    name: '1invest',
    subtitle: 'Investment Platform',
    description: 'General investment opportunities',
    link: 'https://www.1invest.in/',
    category: 'Investment Platforms',
    image: '/api/placeholder/200/200'
  },
  {
    name: 'Kuvera',
    subtitle: 'Investment Platform',
    description: 'General investment opportunities',
    link: 'https://www.kuvera.in/fixed-deposit/all',
    category: 'Investment Platforms',
    image: '/api/placeholder/200/200'
  },
  {
    name: 'Incred Money',
    subtitle: 'Investment Platform',
    description: 'General investment opportunities',
    link: 'https://www.incredmoney.com/',
    category: 'Investment Platforms',
    image: '/api/placeholder/200/200'
  },
  {
    name: 'Altifi',
    subtitle: 'Investment Platform',
    description: 'General investment opportunities',
    link: 'https://altifi.ai/',
    category: 'Investment Platforms',
    image: '/api/placeholder/200/200'
  },
  {
    name: 'Tap Invest',
    subtitle: 'Tap Invest - Home to your fixed income investments',
    description:
      'Our aim is to make high-quality debt products accessible to all',
    link: 'https://tapinvest.in',
    category: 'Investment Platforms',
    image:
      'https://images.yourstory.com/cs/images/companies/1697605228080-1697700437313.jpg?fm=auto&ar=1%3A1&mode=fill&fill=solid&fill-color=fff&format=auto&w=1920&q=75'
  },
  {
    name: 'Tyke Invest',
    subtitle: 'Lockated: Innovative & Smart Mobile Solutions for Real Estate',
    description:
      'Real Estate App offering solutions in Marketing, Lead Generation, Customer Loyalty, Project Automation, Smart Homes, Property and Building Management',
    link: 'https://tykeinvest.com/',
    category: 'Investment Platforms',
    image:
      'https://ds0zssdpdgkzg.cloudfront.net/Logos/Logo_with_text.svg'
  },
  {
    name: 'FI Money',
    subtitle: 'Grow Your Money With Jump P2P Investing | Fi.Money',
    description:
      'Looking for an alternative investment option? Here’s Jump to grow your savings and get returns up to 9%* per year on your investment. Join now!',
    link: 'https://fi.money/features/jump',
    category: 'Investment Platforms',
    image: 'https://dza2kd7rioahk.cloudfront.net/assets/svgs/logo.svg'
  },

  // Other
  {
    name: 'Stable Money',
    subtitle:
      'Invest in Fixed Deposit Online | Best FD Returns | Best Fixed Deposit Schemes',
    description:
      "Start your FD Investment journey with Stable Money. Compare India's Best FD Interest Rates and choose the best suitable FD for you.",
    link: 'https://stablemoney.in/',
    category: 'Other',
    image:
      'https://assets.stablemoney.in/web-frontend/website/sm-logo-new-website.webp'
  },
  {
    name: 'Rang De',
    subtitle: 'Investment Platform',
    description: 'Various investment opportunities',
    link: 'https://rangde.in/',
    category: 'Other',
    image: '/api/placeholder/200/200'
  },
  {
    name: 'Aspero',
    subtitle: 'Investment Platform',
    description: 'Various investment opportunities',
    link: 'https://www.aspero.in/',
    category: 'Other',
    image: '/api/placeholder/200/200'
  },
  {
    name: 'Falcon',
    subtitle: 'Investment Platform',
    description: 'Various investment opportunities',
    link: 'https://www.falconsgrup.com/',
    category: 'Other',
    image: '/api/placeholder/200/200'
  },
  {
    name: 'Brik IT',
    subtitle: 'Investment Platform',
    description: 'Various investment opportunities',
    link: 'https://brikitt.com/',
    category: 'Other',
    image: '/api/placeholder/200/200'
  },
  {
    name: 'FRXNL',
    subtitle: 'Investment Platform',
    description: 'Various investment opportunities',
    link: 'https://360frxnl.com/',
    category: 'Other',
    image: '/api/placeholder/200/200'
  },
  {
    name: 'Dexif',
    subtitle: 'Investment Platform',
    description: 'Various investment opportunities',
    link: 'https://www.dexif.in/investors',
    category: 'Other',
    image: '/api/placeholder/200/200'
  },
  {
    name: 'Atum Capital',
    subtitle: 'Investment Platform',
    description: 'Various investment opportunities',
    link: 'https://atumcapital.com/',
    category: 'Other',
    image: '/api/placeholder/200/200'
  },
  {
    name: 'Asset monk',
    subtitle: 'Investment Platform',
    description: 'Various investment opportunities',
    link: 'https://assetmonk.com/',
    category: 'Other',
    image: '/api/placeholder/200/200'
  }
]
