"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { AlertTriangle, Video, Shield, X } from "lucide-react"
import Link from "next/link"

export function VideoChatWarning() {
  const [isVisible, setIsVisible] = useState(true)
  const isClient = typeof window !== 'undefined'
  
  const messages = [
    {
      label: "알 수 없는 발신자",
      time: "방금 전",
      text: "안녕하세요, 화상통화 연결됐나요?",
      status: "의심스러운 활동 감지됨"
    },
    {
      label: "익명 사용자",
      time: "1분 전",
      text: "카메라 켜주세요. 얼굴이 안 보여요.",
      status: "보안 위험 경고"
    },
    {
      label: "미확인 연락처",
      time: "2분 전",
      text: "녹화 시작할게요. 괜찮죠?",
      status: "피싱 시도 의심"
    }
  ]

  // Don't render if component is hidden or if we're on the server
  if (!isClient || !isVisible) return null

  return (
    <div className="fixed bottom-[120px] right-5 z-50 w-full max-w-md">
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
          <div className="flex-1 overflow-hidden">
            <div className="messages-container h-full overflow-hidden relative">
              <div className="messages-scroll">
                {/* First set of messages */}
                {messages.map((message, index) => (
                  <div 
                    key={`first-${index}`}
                    className="bg-gray-800 rounded-lg p-3 border-l-2 border-red-500 mb-3"
                  >
                    <div className="flex justify-between items-start mb-2">
                      <div className="flex items-center gap-2">
                        <Video className="h-4 w-4 text-red-400" />
                        <span className="text-sm font-medium">{message.label}</span>
                      </div>
                      <span className="text-xs text-gray-400">{message.time}</span>
                    </div>
                    <p className="text-sm text-gray-300 mb-2">
                      "{message.text}"
                    </p>
                    <div className="flex items-center gap-2">
                      <AlertTriangle className="h-3 w-3 text-yellow-500" />
                      <span className="text-xs text-yellow-400">{message.status}</span>
                    </div>
                  </div>
                ))}
                
                {/* Duplicate messages for seamless scrolling */}
                {messages.map((message, index) => (
                  <div 
                    key={`second-${index}`}
                    className="bg-gray-800 rounded-lg p-3 border-l-2 border-red-500 mb-3"
                  >
                    <div className="flex justify-between items-start mb-2">
                      <div className="flex items-center gap-2">
                        <Video className="h-4 w-4 text-red-400" />
                        <span className="text-sm font-medium">{message.label}</span>
                      </div>
                      <span className="text-xs text-gray-400">{message.time}</span>
                    </div>
                    <p className="text-sm text-gray-300 mb-2">
                      "{message.text}"
                    </p>
                    <div className="flex items-center gap-2">
                      <AlertTriangle className="h-3 w-3 text-yellow-500" />
                      <span className="text-xs text-yellow-400">{message.status}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
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
        </CardContent>
      </Card>
    </div>
  )
}

export default function VideoChatWarningClient() {
  const [mounted, setMounted] = useState(false)
  
  useEffect(() => {
    setMounted(true)
  }, [])
  
  if (!mounted) return null
  
  return <VideoChatWarning />;
}