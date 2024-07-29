import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const calculateGrowth = (principal:any, rate:any, years:any) => {
  return Math.round(principal * Math.pow((1 + rate / 100), years));
};

const generateData = () => {
  const investments = [
    { name: 'Fixed Deposit', cagr: 7, color: '#81C784' },
    { name: 'Gold', cagr: 9, color: '#FFD54F' },
    { name: 'Alternative', cagr: 12, color: '#64B5F6' },
  ];

  return Array.from({ length: 11 }, (_, year) => {
    const dataPoint:any = { year };
    investments.forEach(inv => {
      dataPoint[inv.name] = calculateGrowth(100000, inv.cagr, year);
    });
    return dataPoint;
  });
};

const data = generateData();

// Custom Card components
const Card = ({ className, style, children }:{ className:any, style:any, children:any }) => (
  <div className={`rounded-lg shadow-lg p-4 ${className}`} style={style}>
    {children}
  </div>
);

const CardHeader = ({ className, style, children }:{ className?:any, style:any, children?:any }) => (
  <div className={`text-lg font-bold mb-2 ${className}`} style={style}>
    {children}
  </div>
);

const CardContent = ({ children }:{ children:any }) => (
  <div>{children}</div>
);

// Custom AlertCircle icon
const AlertCircle = ({ size, className }:{ size:any, className:any, }) => (
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
);

const InvestmentCard = ({ name, cagr, growth, color, highlight }:{ name:any, cagr:any, growth:any, color:any, highlight:any, }) => (
  <Card 
    className={`w-full bg-gray-800 text-white ${highlight ? 'bg-blue-900 border-blue-500' : ''}`} 
    style={{ borderTop: `4px solid ${color}` }}
  >
    <CardHeader style={{ color }}>
      {name}
      {highlight && <AlertCircle className="inline-block ml-2 text-blue-400" size={20} />}
    </CardHeader>
    <CardContent>
      <p className="text-xl font-semibold">{cagr}% CAGR</p>
      <p className="text-sm mt-2 text-gray-400">1 Lakh growth over 10 years:</p>
      <p className="text-lg font-semibold">₹{growth.toLocaleString('en-IN')}</p>
    </CardContent>
  </Card>
);

const Dashboard2 = () => {
  const investments = [
    { name: 'Fixed Deposit', cagr: 7, color: '#81C784' },
    { name: 'Gold', cagr: 9, color: '#FFD54F' },
    { name: 'Alternative', cagr: 12, color: '#64B5F6' },
  ];

  return (
    <div id="Comparison" className="relative isolate bg-gray-900  pb-16">
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
   <div className="p-6 px-12 rounded-3xl  shadow-2xl shadow-pink-300 max-w-7xl  mx-auto bg-gray-900 text-white" style={{fontFamily: 'Arial, sans-serif'}}>
      <h1 className="text-2xl font-bold mb-6">Investment Opportunity Comparison</h1>
      <div className="flex flex-col sm:flex-row gap-4 mb-8">
        {investments.map((item) => (
          <div key={item.name} className="flex-1">
            <InvestmentCard
              name={item.name}
              cagr={item.cagr}
              growth={calculateGrowth(100000, item.cagr, 10)}
              color={item.color}
              highlight={item.name === 'Alternative'}
            />
          </div>
        ))}
      </div>
      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="#555" />
            <XAxis dataKey="year" stroke="#fff" />
            <YAxis stroke="#fff" />
            <Tooltip contentStyle={{ backgroundColor: '#333', border: 'none', color: '#fff' }} />
            <Legend />
            {investments.map((inv) => (
              <Line 
                key={inv.name}
                type="monotone" 
                dataKey={inv.name} 
                stroke={inv.color} 
                strokeWidth={2}
                dot={false}
              />
            ))}
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
    </div>
  );
};

export default Dashboard2;