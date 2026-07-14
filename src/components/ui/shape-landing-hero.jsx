'use client'

import { motion } from 'framer-motion'
import { Circle } from 'lucide-react'
import { cn } from '@/lib/utils'

function ElegantShape({
  className,
  delay = 0,
  width = 400,
  height = 100,
  rotate = 0,
  gradient = 'from-white/[0.08]',
}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: -150,
        rotate: rotate - 15,
      }}
      animate={{
        opacity: 1,
        y: 0,
        rotate,
      }}
      transition={{
        duration: 2.4,
        delay,
        ease: [0.23, 0.86, 0.39, 0.96],
        opacity: { duration: 1.2 },
      }}
      className={cn('absolute', className)}
    >
      <motion.div
        animate={{
          y: [0, 15, 0],
        }}
        transition={{
          duration: 12,
          repeat: Number.POSITIVE_INFINITY,
          ease: 'easeInOut',
        }}
        style={{
          width,
          height,
        }}
        className='relative'
      >
        <div
          className={cn(
            'absolute inset-0 rounded-full',
            'bg-gradient-to-r to-transparent',
            gradient,
            'border-2 border-white/[0.15] backdrop-blur-[2px]',
            'shadow-[0_8px_32px_0_rgba(255,255,255,0.1)]',
            'after:absolute after:inset-0 after:rounded-full',
            'after:bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.2),transparent_70%)]'
          )}
        />
      </motion.div>
    </motion.div>
  )
}

function GeometricBlogBackground({ className = '' }) {
  return (
    <div className={cn('pointer-events-none absolute inset-0 overflow-hidden bg-[#10002f]', className)}>
      <div className='absolute inset-0 bg-gradient-to-br from-[#7102ba]/[0.22] via-[#180248]/[0.18] to-[#03000d]/[0.7] blur-3xl' />

      <div className='absolute inset-0 overflow-hidden'>
        <ElegantShape
          delay={0.3}
          width={620}
          height={140}
          rotate={12}
          gradient='from-[#7102ba]/[0.2]'
          className='left-[-18%] top-[18%] md:left-[-7%] md:top-[28%]'
        />

        <ElegantShape
          delay={0.5}
          width={520}
          height={120}
          rotate={-15}
          gradient='from-[#22d3ee]/[0.13]'
          className='right-[-20%] top-[70%] md:right-[-2%] md:top-[72%]'
        />

        <ElegantShape
          delay={0.4}
          width={320}
          height={80}
          rotate={-8}
          gradient='from-[#c084fc]/[0.16]'
          className='bottom-[8%] left-[2%] md:left-[10%]'
        />

        <ElegantShape
          delay={0.6}
          width={220}
          height={60}
          rotate={20}
          gradient='from-[#d9b8ff]/[0.12]'
          className='right-[10%] top-[18%] md:right-[18%]'
        />

        <ElegantShape
          delay={0.7}
          width={160}
          height={42}
          rotate={-25}
          gradient='from-[#67e8f9]/[0.12]'
          className='left-[18%] top-[16%] md:left-[26%]'
        />
      </div>

      <div className='pointer-events-none absolute inset-0 bg-gradient-to-t from-[#10002f] via-transparent to-[#10002f]/85' />
    </div>
  )
}

function HeroGeometric({
  badge = 'Genie Insights',
  title1 = 'Market',
  title2 = 'Perspectives',
  description = 'Market perspectives, platform updates, and trading education from the Genie team.',
  dir = 'ltr',
}) {
  const fadeUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        delay: 0.5 + i * 0.2,
        ease: [0.25, 0.4, 0.25, 1],
      },
    }),
  }

  return (
    <section
      className='relative flex min-h-[520px] w-full items-center justify-center overflow-hidden bg-[#10002f]'
      dir={dir === 'ar' ? 'rtl' : 'ltr'}
    >
      <GeometricBlogBackground />

      <div className='relative z-10 mx-auto w-full max-w-6xl px-4 md:px-6'>
        <div
          className={cn(
            'max-w-3xl',
            dir === 'ar' ? 'ml-auto text-right' : 'text-left'
          )}
        >
          <motion.div
            custom={0}
            variants={fadeUpVariants}
            initial='hidden'
            animate='visible'
            className='mb-8 inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.03] px-3 py-1 md:mb-6'
          >
            <Circle className='h-2 w-2 fill-[#d9b8ff] text-[#d9b8ff]' />
            <span className='text-sm tracking-wide text-white/65'>{badge}</span>
          </motion.div>

          <motion.div
            custom={1}
            variants={fadeUpVariants}
            initial='hidden'
            animate='visible'
          >
            <h1 className='mb-2 text-4xl font-black tracking-tight sm:text-4xl md:text-6xl'>
              <span className='bg-gradient-to-b from-white to-white/80 bg-clip-text text-transparent'>
                {title1}
              </span>
              <br />
              <span className='bg-gradient-to-r from-[#d9b8ff] via-white/90 to-[#67e8f9] bg-clip-text text-transparent'>
                {title2}
              </span>
            </h1>
          </motion.div>

          <motion.div
            custom={2}
            variants={fadeUpVariants}
            initial='hidden'
            animate='visible'
          >
            <p className='max-w-2xl text-base font-light leading-relaxed tracking-wide text-white/55 sm:text-lg md:text-xl'>
              {description}
            </p>
          </motion.div>
        </div>
      </div>

    </section>
  )
}

export { GeometricBlogBackground, HeroGeometric }
