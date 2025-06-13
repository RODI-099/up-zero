"use client"

import { MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

export function KakaoChannelButton() {
  const handleKakaoChannelClick = () => {
    // Open KakaoTalk channel in a new window
    window.open('http://pf.kakao.com/_xnxhXrn/chat', '_blank', 'noopener,noreferrer')
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Button
        onClick={handleKakaoChannelClick}
        className="h-14 w-14 rounded-full bg-yellow-400 hover:bg-yellow-500 text-black shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
        size="icon"
        aria-label="카카오톡 채널로 문의하기"
      >
        <MessageCircle className="h-6 w-6" />
      </Button>
      
      {/* Tooltip */}
      <div className="absolute bottom-16 right-0 bg-black text-white text-xs px-2 py-1 rounded opacity-0 hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none">
        카카오톡 채널로 문의
      </div>
    </div>
  )
}