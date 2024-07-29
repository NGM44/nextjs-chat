import React from 'react'
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from 'recharts'

const calculateGrowth = (principal: any, rate: any, years: any) => {
  return Math.round(principal * Math.pow(1 + rate / 100, years))
}

const data = [
  {
    name: 'Fixed Deposit',
    cagr: 7,
    growth: calculateGrowth(100000, 7, 10),
    color: '#81C784'
  },
  {
    name: 'Gold',
    cagr: 9,
    growth: calculateGrowth(100000, 9, 10),
    color: '#FFD54F'
  },
  {
    name: 'Alternative',
    cagr: 12,
    growth: calculateGrowth(100000, 12, 10),
    color: 'rgb(100,181,245)'
  }
]

// Custom Card components
const Card = ({
  className,
  style,
  children
}: {
  className: any
  style: any
  children: any
}) => (
  <div className={`rounded-lg shadow-lg p-4 ${className}`} style={style}>
    {children}
  </div>
)

const CardHeader = ({
  style,
  className,
  children
}: {
  className?: any
  style: any
  children?: any
}) => (
  <div className={`text-lg font-bold mb-2 ${className}`} style={style}>
    {children}
  </div>
)

const CardContent = ({ children }: { children: any }) => <div>{children}</div>

// Custom AlertCircle icon
const AlertCircle = ({ size, className }: { size: any; className: any }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <circle cx="12" cy="12" r="10"></circle>
    <line x1="12" y1="8" x2="12" y2="12"></line>
    <line x1="12" y1="16" x2="12.01" y2="16"></line>
  </svg>
)

const InvestmentCard = ({
  name,
  cagr,
  growth,
  color,
  highlight
}: {
  name: any
  cagr: any
  growth: any
  color: any
  highlight: any
}) => (
  <Card
    className={`w-full bg-gray-800 text-white ${highlight ? 'bg-blue-900 border-blue-500' : ''}`}
    style={{ borderTop: `4px solid ${color}` }}
  >
    <CardHeader style={{ color }}>
      {name}
      {highlight && (
        <AlertCircle className="inline-block ml-2 text-blue-400" size={20} />
      )}
    </CardHeader>
    <CardContent>
      <p className="text-xl font-semibold">{cagr}% CAGR</p>
      <p className="text-sm mt-2 text-gray-400">1 Lakh growth over 10 years:</p>
      <p className="text-lg font-semibold">₹{growth.toLocaleString('en-IN')}</p>
    </CardContent>
  </Card>
)

const Dashboard = () => {
  return (
    <div
      className="p-6 max-w-6xl mx-auto bg-gray-900 text-white"
      style={{ fontFamily: 'Arial, sans-serif' }}
    >
      <h1 className="text-2xl font-bold mb-6">
        Investment Opportunity Comparison
      </h1>
      <div className="flex flex-col sm:flex-row gap-4 mb-8">
        {data.map(item => (
          <div key={item.name} className="flex-1">
            <InvestmentCard
              name={item.name}
              cagr={item.cagr}
              growth={item.growth}
              color={item.color}
              highlight={item.name === 'Alternative'}
            />
          </div>
        ))}
      </div>
      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="#555" />
            <XAxis dataKey="name" stroke="#fff" />
            <YAxis
              label={{
                value: 'CAGR (%)',
                angle: -90,
                position: 'insideLeft',
                fill: '#fff'
              }}
              stroke="#fff"
            />
            <Tooltip
              contentStyle={{ backgroundColor: '#333', border: 'none' }}
            />
            <Bar dataKey="cagr">
              {data.map((entry, index) => (
                <Bar
                  key={`bar-${index}`}
                  dataKey="cagr"
                  fill={`${entry.color}`}
                />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}

export default Dashboard
