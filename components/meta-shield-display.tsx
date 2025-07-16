"use client"

import { useState, useEffect } from "react"
import Image from "next/image"

export function MetaShieldDisplay() {
  const [mounted, setMounted] = useState(false)
  
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="relative max-w-md mx-auto">
      <div className="bg-blue-600 rounded-lg p-4 shadow-xl transform perspective-1000 rotate-y-[-5deg] rotate-x-[5deg]">
        <div className="bg-white rounded-lg overflow-hidden border-4 border-blue-700">
          <Image
            src="/images/meta-shield-hero.png"
            alt="Meta Shield Security System"
            width={600}
            height={500}
            className="w-full h-auto"
            priority
          />
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-blue-500 rounded-full shadow-lg animate-pulse"></div>
      <div className="absolute -top-2 -right-2 w-8 h-8 bg-purple-500 rounded-full shadow-lg animate-pulse"></div>
    </div>
  )
}