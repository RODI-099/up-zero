"use client"

import { Phone } from "lucide-react"
import { Button } from "@/components/ui/button"

export function PhoneCallButton() {
  const handlePhoneCall = () => {
    // Make a phone call
    window.location.href = 'tel:1668-2293'
  }

  return (
    <div className="fixed bottom-24 right-6 z-50">
      <Button
        onClick={handlePhoneCall}
        className="h-14 w-14 rounded-full bg-green-500 hover:bg-green-600 text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
        size="icon"
        aria-label="전화로 문의하기"
      >
        <Phone className="h-6 w-6" />
      </Button>
      
      {/* Tooltip */}
      <div className="absolute bottom-16 right-0 bg-black text-white text-xs px-2 py-1 rounded opacity-0 hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none">
        전화로 문의 (1668-2293)
      </div>
    </div>
  )
}