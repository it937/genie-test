'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaWhatsapp } from 'react-icons/fa'

const WA_URL =
  'https://wa.me/447476698787?text=Hello%2C%20I%20need%20to%20ask%20something%20related%20to%20GenieFX'

export default function WhatsAppButton () {
  const [hovered, setHovered] = useState(false)

  return (
    <motion.a
      href={WA_URL}
      target='_blank'
      rel='noopener noreferrer'
      aria-label='Chat with us on WhatsApp'
      className='fixed bottom-6 right-6 z-50 flex items-center overflow-hidden rounded-full shadow-xl cursor-pointer'
      style={{ height: 56, backgroundColor: '#25D366' }}
      animate={{ width: hovered ? 140 : 56 }}
      transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
    >
      <div
        style={{
          width: 56,
          height: 56,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexShrink: 0
        }}
      >
        <FaWhatsapp size={26} color='white' />
      </div>

      <AnimatePresence>
        {hovered && (
          <motion.span
            style={{
              color: 'white',
              fontWeight: 600,
              fontSize: 18,
              letterSpacing: '0.12em',
              whiteSpace: 'nowrap',
              paddingRight: 18
            }}
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 10 }}
            transition={{ duration: 0.2, delay: 0.15 }}
          >
            CHAT
          </motion.span>
        )}
      </AnimatePresence>
    </motion.a>
  )
}
