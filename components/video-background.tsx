"use client"

import { useState, useRef, useEffect } from 'react'
import { Play, Pause, Volume2, VolumeX } from 'lucide-react'

interface VideoBackgroundProps {
  videoSrc: string
  posterImage?: string
  className?: string
  overlay?: boolean
  showControls?: boolean
}

export default function VideoBackground({ 
  videoSrc, 
  posterImage, 
  className = "",
  overlay = true,
  showControls = false 
}: VideoBackgroundProps) {
  const [isPlaying, setIsPlaying] = useState(true)
  const [isMuted, setIsMuted] = useState(true)
  const [isLoaded, setIsLoaded] = useState(false)
  const [hasError, setHasError] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const video = videoRef.current
    if (video && !hasError) {
      video.muted = true
      video.play().catch(() => {
        // If video fails to autoplay, that's okay - fallback to CSS background
        setHasError(true)
      })
    }
  }, [hasError])

  const togglePlay = () => {
    const video = videoRef.current
    if (video && !hasError) {
      if (isPlaying) {
        video.pause()
      } else {
        video.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  const toggleMute = () => {
    const video = videoRef.current
    if (video && !hasError) {
      video.muted = !isMuted
      setIsMuted(!isMuted)
    }
  }

  const handleLoadedData = () => {
    setIsLoaded(true)
  }

  const handleError = () => {
    setHasError(true)
  }

  // If video fails to load, render nothing (fallback to CSS background)
  if (hasError) {
    return null
  }

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* Video Element */}
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
        poster={posterImage}
        onLoadedData={handleLoadedData}
        onError={handleError}
        style={{
          filter: isLoaded ? 'none' : 'blur(5px)',
          transition: 'filter 0.5s ease-in-out'
        }}
      >
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      {overlay && (
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60 z-10"></div>
      )}

      {/* Video Controls */}
      {showControls && !hasError && (
        <div className="absolute bottom-4 right-4 z-20 flex gap-2">
          <button
            onClick={togglePlay}
            className="bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
            aria-label={isPlaying ? "Pause video" : "Play video"}
          >
            {isPlaying ? <Pause size={16} /> : <Play size={16} />}
          </button>
          <button
            onClick={toggleMute}
            className="bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
            aria-label={isMuted ? "Unmute video" : "Mute video"}
          >
            {isMuted ? <VolumeX size={16} /> : <Volume2 size={16} />}
          </button>
        </div>
      )}

      {/* Loading State */}
      {!isLoaded && !hasError && (
        <div className="absolute inset-0 bg-gray-900/20 flex items-center justify-center z-30">
          <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-white/50"></div>
        </div>
      )}
    </div>
  )
}
