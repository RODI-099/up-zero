"use client"

import { useState, useEffect } from 'react'
import VideoBackground from './video-background'

interface SecurityVideoHeroProps {
  className?: string
}

export default function SecurityVideoHero({ className = "" }: SecurityVideoHeroProps) {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  if (!isClient) {
    return <div className={`relative ${className}`}></div>
  }

  return (
    <div className={`relative ${className}`}>
      {/* Video Background with CSS Animation Fallback */}
      <VideoBackground 
        videoSrc="/videos/security-background.mp4"
        posterImage="/images/meta-shield-hero.png"
        className="absolute inset-0 w-full h-full z-0"
        overlay={false}
        showControls={false}
      />
      
      {/* CSS Animation Fallback (will show if video fails to load) */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f3460] animate-gradient-xy z-0"></div>
      
      {/* Video Overlay for Better Text Readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70 z-10"></div>
      
      {/* Digital Grid Animation Overlay */}
      <div className="absolute inset-0 opacity-10 z-20">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent animate-scan"></div>
        <div 
          className="absolute inset-0 bg-repeat opacity-30"
          style={{
            backgroundImage: `
              linear-gradient(rgba(0,255,255,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0,255,255,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
            animation: 'grid-move 20s linear infinite'
          }}
        ></div>
      </div>
      
      {/* Floating Security Icons */}
      <div className="absolute inset-0 overflow-hidden z-30">
        <div className="absolute top-20 left-10 text-cyan-400/40 animate-float">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12,1L3,5V11C3,16.55 6.84,21.74 12,23C17.16,21.74 21,16.55 21,11V5L12,1M12,7C13.4,7 14.8,8.6 14.8,10V11H16V15H8V11H9.2V10C9.2,8.6 10.6,7 12,7M12,8.2C11.2,8.2 10.4,8.7 10.4,10V11H13.6V10C13.6,8.7 12.8,8.2 12,8.2Z" />
          </svg>
        </div>
        <div className="absolute top-40 right-20 text-blue-400/40 animate-float-delay-1">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12,1L3,5V11C3,16.55 6.84,21.74 12,23C17.16,21.74 21,16.55 21,11V5L12,1M10,17L6,13L7.41,11.59L10,14.17L16.59,7.58L18,9L10,17Z" />
          </svg>
        </div>
        <div className="absolute bottom-32 left-20 text-purple-400/40 animate-float-delay-2">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12,1L3,5V11C3,16.55 6.84,21.74 12,23C17.16,21.74 21,16.55 21,11V5L12,1M11,14H13V16H11V14M11,6H13V12H11V6Z" />
          </svg>
        </div>
        <div className="absolute top-60 left-1/2 text-emerald-400/40 animate-float">
          <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12,1L3,5V11C3,16.55 6.84,21.74 12,23C17.16,21.74 21,16.55 21,11V5L12,1M12,8A3,3 0 0,1 15,11A3,3 0 0,1 12,14A3,3 0 0,1 9,11A3,3 0 0,1 12,8Z" />
          </svg>
        </div>
        <div className="absolute bottom-20 right-10 text-amber-400/40 animate-float-delay-1">
          <svg width="30" height="30" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12,1L3,5V11C3,16.55 6.84,21.74 12,23C17.16,21.74 21,16.55 21,11V5L12,1M12,7A2,2 0 0,1 14,9C14,10.11 13.1,11 12,11C10.89,11 10,10.1 10,9A2,2 0 0,1 12,7Z" />
          </svg>
        </div>
      </div>
    </div>
  )
}
