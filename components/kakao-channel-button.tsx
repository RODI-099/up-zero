"use client"

import { useEffect } from "react"
import { Button } from "@/components/ui/button"

// Custom KakaoTalk Logo Component
function KakaoTalkLogo() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Speech bubble background */}
      <path
        d="M12 2C6.48 2 2 5.58 2 10c0 2.89 1.96 5.49 5 6.74V22l4.5-3.5c.83.11 1.66.17 2.5.17 5.52 0 10-3.58 10-8S17.52 2 12 2z"
        fill="currentColor"
      />
      {/* TALK text */}
      <text
        x="12"
        y="11"
        textAnchor="middle"
        dominantBaseline="middle"
        fontSize="6"
        fontWeight="bold"
        fill="#3C1E1E"
        fontFamily="Arial, sans-serif"
      >
        TALK
      </text>
    </svg>
  )
}

export function KakaoChannelButton() {
  useEffect(() => {
    // Add Google Tag Manager
    const script = document.createElement('script')
    script.innerHTML = `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer','GTM-5WRSPHMS');`
    document.head.appendChild(script)
    
    return () => {
      document.head.removeChild(script)
    }
  }, [])

  const handleKakaoChannelClick = () => {
    // Open KakaoTalk channel in a new window
    window.open('http://pf.kakao.com/_xnxhXrn', '_blank', 'noopener,noreferrer')
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Button
        onClick={handleKakaoChannelClick}
        className="h-14 w-14 rounded-full bg-yellow-400 hover:bg-yellow-500 text-yellow-900 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
        size="icon"
        aria-label="카카오톡 채널로 문의하기"
      >
        <KakaoTalkLogo />
      </Button>
      
      {/* Tooltip */}
      <div className="absolute bottom-16 right-0 bg-black text-white text-xs px-2 py-1 rounded opacity-0 hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none">
        카카오톡 채널로 문의
      </div>
    </div>
  )
}