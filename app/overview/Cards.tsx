import React from 'react';
import Image from 'next/image';
import { parse } from 'node-html-parser';
import axios from 'axios';

// Helper function to fetch meta details
async function fetchMetaDetails(url) {
  try {
    const response = await axios.get(url);
    const root = parse(response.data);
    
    const title = root.querySelector('title')?.text || 'No title';
    const description = root.querySelector('meta[name="description"]')?.getAttribute('content') || 'No description';
    const image = root.querySelector('meta[property="og:image"]')?.getAttribute('content') || '/api/placeholder/400/300';
    
    return { url, title, description, image };
  } catch (error) {
    console.error(`Error fetching data for ${url}:`, error);
    return { url, title: 'Error', description: 'Failed to fetch data', image: '/api/placeholder/400/300' };
  }
}

// Server-side props function
export async function getServerSideProps() {
  const urls = [
    'https://restack.com/',
    'https://www.propreturns.com/',
    'https://www.altgraaf.com/',
    'https://www.betterinvest.club/'
  ];

  const metaData = await Promise.all(urls.map(fetchMetaDetails));

  return {
    props: { metaData },
  };
}

// Card component
const Card = ({ url, title, description, image }) => (
  <div className="max-w-sm rounded overflow-hidden shadow-lg m-4">
    <Image src={image} alt={title} width={400} height={300} className="w-full" />
    <div className="px-6 py-4">
      <div className="font-bold text-xl mb-2">{title}</div>
      <p className="text-gray-700 text-base">{description}</p>
    </div>
    <div className="px-6 pt-4 pb-2">
      <a href={url} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
        Visit Website
      </a>
    </div>
  </div>
);

// Main component
const MetaCards = ({ metaData }) => (
  <div className="container mx-auto px-4">
    <h1 className="text-3xl font-bold my-8">Website Meta Information</h1>
    <div className="flex flex-wrap justify-center">
      {metaData.map((data, index) => (
        <Card key={index} {...data} />
      ))}
    </div>
  </div>
);

export default MetaCards;