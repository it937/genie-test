'use client'

import { motion } from 'framer-motion'

const MARKET_PATHS = [
  [
    0, 280, 70, 250, 112, 310, 176, 210, 238, 235, 310, 145, 390, 185, 448,
    112, 520, 92, 590, 135, 662, 78, 760, 54, 900, 24,
  ],
  [
    0, 330, 76, 296, 128, 345, 188, 275, 248, 304, 318, 214, 394, 246, 468,
    170, 530, 198, 610, 116, 706, 138, 790, 66, 900, 92,
  ],
  [
    0, 220, 62, 186, 126, 260, 190, 165, 250, 206, 330, 122, 396, 158, 468,
    88, 548, 126, 628, 52, 706, 82, 792, 30, 900, 48,
  ],
  [
    0, 375, 80, 342, 148, 392, 214, 306, 280, 326, 350, 248, 420, 282, 496,
    202, 570, 232, 646, 150, 728, 184, 810, 104, 900, 126,
  ],
  [
    0, 258, 74, 232, 130, 292, 204, 198, 272, 228, 344, 154, 414, 186, 492,
    112, 570, 144, 646, 72, 724, 102, 804, 38, 900, 62,
  ],
]

const toPath = (points) =>
  points.reduce((path, point, index) => {
    if (index % 2 === 1) return path
    const command = index === 0 ? 'M' : 'L'
    return `${path} ${command} ${point} ${points[index + 1]}`
  }, '')

function TradingLine({ points, index }) {
  const opacity = 0.48 + index * 0.06
  const duration = 8.5 + index * 1.15

  return (
    <g>
      <motion.path
        d={toPath(points)}
        stroke={`url(#marketLine${index})`}
        strokeWidth={2.6 + index * 0.22}
        strokeLinecap='round'
        strokeLinejoin='round'
        vectorEffect='non-scaling-stroke'
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{
          pathLength: [0, 1, 1],
          opacity: [0, opacity, 0],
        }}
        transition={{
          duration,
          delay: index * 1.25,
          times: [0, 0.78, 1],
          repeat: Number.POSITIVE_INFINITY,
          repeatDelay: 1.1,
          ease: 'linear',
        }}
      />
    </g>
  )
}

export default function TradingBackgroundPaths() {
  return (
    <div className='pointer-events-none absolute inset-0 z-0 overflow-hidden bg-[#180248]'>
      <div className='absolute inset-0 bg-[radial-gradient(circle_at_25%_10%,rgba(113,2,186,0.32),transparent_34%),radial-gradient(circle_at_76%_22%,rgba(34,211,238,0.12),transparent_28%)]' />
      <svg
        className='absolute inset-0 h-full w-full'
        viewBox='0 0 900 430'
        fill='none'
        preserveAspectRatio='xMidYMid slice'
        aria-hidden='true'
      >
        <defs>
          {MARKET_PATHS.map((_, index) => (
            <linearGradient
              key={index}
              id={`marketLine${index}`}
              x1='0'
              x2='1'
              y1='0'
              y2='0'
            >
              <stop offset='0%' stopColor='#ffffff' stopOpacity='0' />
              <stop offset='10%' stopColor='#22d3ee' stopOpacity='0.72' />
              <stop offset='52%' stopColor='#c084fc' stopOpacity='0.86' />
              <stop offset='88%' stopColor='#67e8f9' stopOpacity='0.78' />
              <stop offset='100%' stopColor='#ffffff' stopOpacity='0.16' />
            </linearGradient>
          ))}
        </defs>

        {MARKET_PATHS.map((points, index) => (
          <TradingLine key={index} points={points} index={index} />
        ))}
      </svg>
      <div className='absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[#180248] to-transparent' />
      <div className='absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#180248] to-transparent' />
      <div className='absolute inset-0 bg-[#180248]/18' />
    </div>
  )
}
