'use client'
import { motion } from 'framer-motion'

export default function PageTransition({ children, isLoading }) {
  return (
    <motion.main
      initial={{ opacity: 0, y: 10 }}
      animate={{
        opacity: isLoading ? 0 : 1,
        y: isLoading ? 10 : 0,
      }}
      transition={{
        delay: isLoading ? 0 : 0.2,
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      className="transition-all"
    >
      {children}
    </motion.main>
  )
}
