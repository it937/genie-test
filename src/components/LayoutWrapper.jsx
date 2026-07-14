'use client'
import { useState, useEffect } from 'react'
import Loader from '@/components/Loader'

export default function LayoutWrapper({ children }) {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500) // 1.5 s delay
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      {loading ? <Loader /> : children}
    </>
  )
}
