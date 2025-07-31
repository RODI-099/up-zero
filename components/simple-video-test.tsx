"use client"

import { useEffect, useRef, useState } from 'react'

export default function SimpleVideoTest() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [status, setStatus] = useState('Loading...')

  useEffect(() => {
    const video = videoRef.current
    if (video) {
      video.addEventListener('loadstart', () => setStatus('Load started'))
      video.addEventListener('loadedmetadata', () => setStatus('Metadata loaded'))
      video.addEventListener('loadeddata', () => setStatus('Data loaded'))
      video.addEventListener('canplay', () => setStatus('Can play'))
      video.addEventListener('canplaythrough', () => setStatus('Can play through'))
      video.addEventListener('playing', () => setStatus('Playing'))
      video.addEventListener('error', (e) => setStatus(`Error: ${e.message || 'Unknown error'}`))
      
      video.load()
      video.play().catch(e => setStatus(`Play error: ${e.message}`))
    }
  }, [])

  return (
    <div className="fixed top-0 left-0 w-full h-screen z-50 bg-black">
      <div className="absolute top-4 left-4 bg-white text-black p-4 rounded z-10">
        <p>Video Status: {status}</p>
        <p>Video Path: /videos/security-background.mp4</p>
      </div>
      <video
        ref={videoRef}
        className="w-full h-full object-cover"
        muted
        loop
        playsInline
        controls
      >
        <source src="/videos/security-background.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  )
}
