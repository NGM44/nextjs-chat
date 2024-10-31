import React from 'react'
import { motion, useSpring, MotionValue } from 'framer-motion'
import Image from 'next/image'
import { CompanyModel } from './companyData'

interface HoverCardProps {
  /** URL of the image to display */
  companyDetail: CompanyModel
  /** Optional vertical translation value for animation */
  /** Optional additional CSS classes */
  className?: string

  motionValue: MotionValue<number>
  keys: string
}

/**
 * Limits a string to a specified number of characters and adds ellipsis if truncated
 * @param str - The string to limit
 * @param limit - Maximum number of characters
 * @returns The truncated string with ellipsis if necessary
 */
const limitString = (str: string, limit: number): string => {
  if (str.length <= limit) return str
  return str.slice(0, limit) + '...'
}

/**
 * A card component that reveals additional information on hover with smooth animations
 */
const HoverCard: React.FC<HoverCardProps> = ({
  companyDetail,
  className = '',
  motionValue,
  keys
}) => {
  return (
    <motion.div
      style={{ y: motionValue }}
      key={keys}
      className=" relative w-full h-80 items-center justify-center rounded-3xl"
    >
      <Image
        src={companyDetail.image}
        className="h-80 w-full object-contain bg-gradient-to-tr rounded-3xl from-gray-300/30 via-gray-200/20 to-gray-200/30 items-center !m-0 !px-4"
        height={400}
        width={400}
        alt={`${name} logo`}
      />
      <div
        className={`relative group cursor-pointer overflow-hidden ${className}`}
      >
        <div className="absolute inset-0 bg-black/70 opacity-0 rounded-3xl group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-6">
          <div>
            <h3 className="text-white text-xl font-bold transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
              {companyDetail.name}
            </h3>
            {/* <p className="text-white/90 text-lg mb-1 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
              {limitString(subtitle, 20)}
            </p> */}
          </div>
          <p className="text-white/90 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-100">
            {limitString(companyDetail.description, 150)}
          </p>
          <span className="text-white/70 text-sm mt-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-150">
            {companyDetail.category}
          </span>
        </div>
      </div>
    </motion.div>
  )
}

export default HoverCard
