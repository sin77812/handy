'use client'

import { useEffect, useState } from 'react'

export default function StickyBottomBar() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  if (!isVisible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-neutral-border bg-white/95 backdrop-blur-sm">
      <div className="flex h-16">
        <a
          href="tel:01035490325"
          className="flex flex-1 items-center justify-center gap-sm bg-accent text-white transition-all hover:bg-accent-hover"
        >
          <span className="text-2xl">📞</span>
          <span className="font-semibold">전화하기</span>
        </a>
        <a
          href="#contact"
          className="flex flex-1 items-center justify-center gap-sm bg-primary text-white transition-all hover:bg-primary-dark"
        >
          <span className="text-2xl">💬</span>
          <span className="font-semibold">카톡하기</span>
        </a>
      </div>
    </div>
  )
}