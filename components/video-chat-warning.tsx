"use client"

import { useState, useEffect, useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { AlertTriangle, Video, Shield, X, Image as ImageIcon, Camera, Lock } from "lucide-react"
import Link from "next/link"
import { cn } from "@/lib/utils"

export function VideoChatWarning() {
  const [currentMessage, setCurrentMessage] = useState(0)
  const [isVisible, setIsVisible] = useState(true)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  
  const messages = [
    { sender: "unknown", text: "안녕하세요, 오랜만에 연락드려요. 영상통화 한번 할까요?" },
    { sender: "victim", text: "누구세요?" },
    { sender: "unknown", text: "저번에 만났던 사람인데 기억 안 나세요? 얼굴 보면 기억날 거예요." },
    { sender: "victim", text: "잘 기억이 안 나는데요..." },
    { sender: "unknown", text: "영상통화 한번만 해요. 제가 보고싶어요." },
    { sender: "unknown", text: "제 사진 보내드릴게요", type: "text" },
    { 
      sender: "unknown", 
      type: "image", 
      imageUrl: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg",
      text: "프로필 사진"
    },
    { sender: "victim", text: "음... 영상통화는 좀 그렇네요" },
    { sender: "unknown", text: "잠깐만 얼굴 보여주세요. 제가 먼저 보여드릴게요" },
    { sender: "system", text: "⚠️ 주의: 낯선 사람과의 영상통화는 몸캠피싱의 위험이 있습니다!" },
  ]

  useEffect(() => {
    if (currentMessage < messages.length - 1) {
      const timer = setTimeout(() => {
        setCurrentMessage(prev => prev + 1)
      }, 2000)
      return () => clearTimeout(timer)
    }
  }, [currentMessage, messages.length])

  useEffect(() => {
    // Scroll to bottom when new messages appear
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [currentMessage]);

  if (!isVisible) return null

  return (
    <div className="relative w-full max-w-md mx-auto">
      <Button 
        variant="ghost" 
        size="sm" 
        className="absolute -top-2 -right-2 h-8 w-8 rounded-full p-0 z-10"
        onClick={() => setIsVisible(false)}
      >
        <X className="h-4 w-4" />
      </Button>
      
      <Card className="bg-gray-900 text-white rounded-xl shadow-xl overflow-hidden border-0">
        <div className="bg-gray-800 p-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Video className="h-4 w-4 text-red-400" />
            <span className="text-sm font-medium">알 수 없는 발신자</span>
          </div>
          <AlertTriangle className="h-4 w-4 text-yellow-400" />
        </div>
        
        <CardContent className="p-4 h-[280px] flex flex-col">
          <div className="flex-1 space-y-3 overflow-y-auto flex flex-col">
            {messages.slice(0, currentMessage + 1).map((message, index) => (
              message.type === "image" ? (
                <div
                  key={index}
                  className="bg-gray-700 self-start rounded-lg rounded-bl-none max-w-[80%] overflow-hidden"
                >
                  <div className="relative h-32 w-full">
                    <img 
                      src={message.imageUrl} 
                      alt={message.text || "Shared image"} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-2 text-xs text-gray-300 flex items-center">
                    <Camera className="h-3 w-3 mr-1" />
                    {message.text}
                  </div>
                </div>
              ) : (
                <div
                  key={index}
                  className={cn(
                    "max-w-[80%] p-3 rounded-lg text-sm animate-in fade-in slide-in-from-top-5 duration-300",
                    message.sender === "unknown"
                      ? "bg-gray-700 self-start rounded-bl-none"
                      : message.sender === "victim"
                        ? "bg-blue-600 self-end rounded-br-none ml-auto"
                        : "bg-red-600 self-start w-full max-w-full"
                  )}
                >
                  {message.text}
                </div>
              )
            ))}
            <div ref={messagesEndRef} />
          </div>
          
          {currentMessage >= messages.length - 1 && (
            <div className="mt-4 space-y-2">
              <Button asChild className="w-full bg-red-600 hover:bg-red-700">
                <Link href="/consultation/bodycam">
                  <Shield className="mr-2 h-4 w-4" />
                  몸캠피싱 상담 신청
                </Link>
              </Button>
              <Button asChild variant="outline" className="w-full text-white border-gray-600 hover:bg-gray-800">
                <Link href="/magazine/case-study-1">
                  피해 사례 보기
                </Link>
              </Button>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}