"use client"

import { useEffect, useRef, useState } from 'react'

interface DirectVideoBackgroundProps {
  className?: string
}

export default function DirectVideoBackground({ className = "" }: DirectVideoBackgroundProps) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [videoLoaded, setVideoLoaded] = useState(false)

  useEffect(() => {
    const video = videoRef.current
    if (video) {
      const handleCanPlay = () => {
        setVideoLoaded(true)
        video.play().catch(() => {
          // Autoplay failed, but that's okay
          console.log('Video autoplay blocked by browser')
        })
      }

      video.addEventListener('canplay', handleCanPlay)
      video.load()

      return () => {
        video.removeEventListener('canplay', handleCanPlay)
      }
    }
  }, [])

  return (
    <div className={`relative ${className}`}>
      {/* Video Background */}
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        style={{
          opacity: videoLoaded ? 1 : 0,
          transition: 'opacity 1s ease-in-out'
        }}
      >
        <source src="/videos/security-background.mp4" type="video/mp4" />
      </video>

      {/* CSS Animation Fallback (shows while video loads or if video fails) */}
      <div 
        className="absolute inset-0 bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f3460] animate-gradient-xy"
        style={{
          opacity: videoLoaded ? 0 : 1,
          transition: 'opacity 1s ease-in-out'
        }}
      />
      
      {/* Digital Grid Animation Overlay */}
      <div className="absolute inset-0 opacity-20">
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
        />
      </div>

      {/* Floating Security Icons */}
      <div className="absolute inset-0 overflow-hidden opacity-60">
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
      </div>
    </div>
  )
}
