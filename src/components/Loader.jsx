'use client'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { useEffect, useState } from 'react'

export default function Loader() {
  const [isVisible, setIsVisible] = useState(true)
  const [stage, setStage] = useState('loading') // 'loading' | 'completing' | 'exiting'

  useEffect(() => {
    // Stage 1: Loading phase
    const completeTimer = setTimeout(() => {
      setStage('completing')
    }, 600)

    // Stage 2: Exit phase
    const exitTimer = setTimeout(() => {
      setStage('exiting')
    }, 800)

    // Stage 3: Complete removal
    const removeTimer = setTimeout(() => {
      setIsVisible(false)
    }, 1200)

    return () => {
      clearTimeout(completeTimer)
      clearTimeout(exitTimer)
      clearTimeout(removeTimer)
    }
  }, [])

  return (
    <AnimatePresence mode="wait">
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0,
            scale: 1.02,
          }}
          transition={{ 
            opacity: { duration: 1, ease: [0.43, 0.13, 0.23, 0.96] },
            scale: { duration: 1, ease: [0.43, 0.13, 0.23, 0.96] }
          }}
          className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden"
          style={{ 
            background: 'linear-gradient(135deg, #180248 0%, #7102ba 100%)',
          }}
        >
          {/* Subtle gradient overlays */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/10" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.03),transparent_50%)]" />

          {/* Refined ambient orbs */}
          <motion.div
            animate={{
              scale: stage === 'exiting' ? 1.5 : [1, 1.15, 1],
              opacity: stage === 'exiting' ? 0 : [0.15, 0.25, 0.15],
            }}
            transition={{
              duration: stage === 'exiting' ? 1 : 6,
              repeat: stage === 'exiting' ? 0 : Infinity,
              ease: 'easeInOut',
            }}
            className="absolute top-1/3 left-1/3 w-[500px] h-[500px] rounded-full bg-purple-400/20 blur-[100px]"
          />
          <motion.div
            animate={{
              scale: stage === 'exiting' ? 1.5 : [1.15, 1, 1.15],
              opacity: stage === 'exiting' ? 0 : [0.12, 0.22, 0.12],
            }}
            transition={{
              duration: stage === 'exiting' ? 1 : 6,
              repeat: stage === 'exiting' ? 0 : Infinity,
              ease: 'easeInOut',
              delay: 0.8,
            }}
            className="absolute bottom-1/3 right-1/3 w-[500px] h-[500px] rounded-full bg-indigo-500/20 blur-[100px]"
          />

          {/* Main content container */}
          <motion.div 
            className="relative z-10 flex flex-col items-center gap-12"
            animate={{
              y: stage === 'exiting' ? -20 : 0,
              opacity: stage === 'exiting' ? 0 : 1,
            }}
            transition={{
              duration: 0.8,
              ease: [0.43, 0.13, 0.23, 0.96],
            }}
          >
            {/* Logo container with refined animations */}
            <motion.div
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ 
                scale: stage === 'completing' ? 1.03 : 1,
                opacity: 1,
              }}
              transition={{
                scale: {
                  duration: 0.6,
                  ease: [0.34, 1.56, 0.64, 1],
                },
                opacity: {
                  duration: 0.5,
                  ease: 'easeOut',
                }
              }}
              className="relative"
            >
              {/* Subtle glow effect */}
              <motion.div
                animate={{
                  scale: stage === 'loading' ? [1, 1.08, 1] : 1.08,
                  opacity: stage === 'loading' ? [0.3, 0.5, 0.3] : 0.5,
                }}
                transition={{
                  duration: 3,
                  repeat: stage === 'loading' ? Infinity : 0,
                  ease: 'easeInOut',
                }}
                className="absolute inset-[-20px] blur-[40px] bg-white/10 rounded-full"
              />
              
              {/* Logo */}
              <motion.div
                animate={{ 
                  scale: stage === 'loading' ? [1, 1.02, 1] : 1,
                }}
                transition={{
                  duration: 2.5,
                  repeat: stage === 'loading' ? Infinity : 0,
                  ease: 'easeInOut',
                }}
              >
                <Image
                  src="/homepage/20251107-184724.webp"
                  alt="Genie FX Logo"
                  width={220}
                  height={220}
                  priority
                  className="drop-shadow-[0_0_30px_rgba(255,255,255,0.15)] relative z-10"
                />
              </motion.div>
            </motion.div>

            {/* Refined loading indicator */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ 
                opacity: stage === 'exiting' ? 0 : 1, 
                y: stage === 'exiting' ? -8 : 0 
              }}
              transition={{ 
                delay: 0.3, 
                duration: 0.6,
                ease: 'easeOut'
              }}
              className="flex flex-col items-center gap-6"
            >
              {/* Minimal progress bar */}
              <div className="relative w-56 h-[2px] bg-white/8 rounded-full overflow-hidden">
                <motion.div
                  initial={{ x: '-100%' }}
                  animate={{ 
                    x: stage === 'completing' ? '0%' : stage === 'exiting' ? '100%' : ['0%', '100%'],
                  }}
                  transition={{
                    duration: stage === 'loading' ? 2 : 0.6,
                    repeat: stage === 'loading' ? Infinity : 0,
                    ease: stage === 'loading' ? 'linear' : [0.43, 0.13, 0.23, 0.96],
                  }}
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/60 to-transparent"
                  style={{
                    width: '40%',
                  }}
                />
              </div>

              {/* Elegant loading dots */}
              <div className="flex gap-[6px]">
                {[0, 1, 2].map((i) => (
                  <motion.div
                    key={i}
                    animate={{
                      opacity: stage === 'loading' ? [0.3, 1, 0.3] : 0.3,
                      scale: stage === 'loading' ? [0.8, 1, 0.8] : 0.8,
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: stage === 'loading' ? Infinity : 0,
                      ease: 'easeInOut',
                      delay: i * 0.2,
                    }}
                    className="w-1.5 h-1.5 rounded-full bg-white/70"
                  />
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Refined corner accents */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ 
              opacity: stage === 'exiting' ? 0 : 0.06,
              scale: 1 
            }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="absolute top-0 left-0 w-48 h-48"
            style={{
              borderLeft: '1px solid rgba(255,255,255,0.1)',
              borderTop: '1px solid rgba(255,255,255,0.1)',
            }}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ 
              opacity: stage === 'exiting' ? 0 : 0.06,
              scale: 1 
            }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="absolute bottom-0 right-0 w-48 h-48"
            style={{
              borderRight: '1px solid rgba(255,255,255,0.1)',
              borderBottom: '1px solid rgba(255,255,255,0.1)',
            }}
          />

          {/* Exit overlay for smooth transition */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: stage === 'exiting' ? 1 : 0,
            }}
            transition={{ duration: 0.8, ease: 'easeInOut' }}
            className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20"
          />
        </motion.div>
      )}
    </AnimatePresence>
  )
}