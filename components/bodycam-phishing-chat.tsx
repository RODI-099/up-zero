"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Shield, Send, AtSign, Smile, Paperclip, Hash, Bell, Pin, Users, Search, PlusCircle } from "lucide-react"
import { cn } from "@/lib/utils"

interface Message {
  id: number
  sender: string
  avatar: string
  content: string
  timestamp: string
  isAdmin?: boolean
}

const initialMessages: Message[] = [
  {
    id: 1,
    sender: "시스템",
    avatar: "S",
    content: "몸캠피싱 피해 예방 채널에 오신 것을 환영합니다! 이곳에서는 몸캠피싱 피해 사례와 예방법을 공유합니다.",
    timestamp: "오늘 오전 9:00",
    isAdmin: true
  },
  {
    id: 2,
    sender: "보안전문가",
    avatar: "P",
    content: "최근 몸캠피싱 수법이 더욱 교묘해지고 있습니다. 특히 영상통화 중 녹화된 내용을 이용한 협박이 증가하고 있으니 주의하세요.",
    timestamp: "오늘 오전 10:15",
    isAdmin: true
  },
  {
    id: 3,
    sender: "사용자1",
    avatar: "U",
    content: "모르는 사람의 영상통화 요청은 무조건 거절해야 하나요?",
    timestamp: "오늘 오전 10:30"
  },
  {
    id: 4,
    sender: "보안전문가",
    avatar: "P",
    content: "네, 모르는 사람의 영상통화는 반드시 거절하세요. 특히 SNS에서 갑자기 친해지려는 사람들을 주의하세요.",
    timestamp: "오늘 오전 10:32",
    isAdmin: true
  },
  {
    id: 5,
    sender: "사용자2",
    avatar: "J",
    content: "이미 영상통화를 했는데 협박을 받고 있다면 어떻게 해야 할까요? 친구가 지금 이런 상황이라 급해요.",
    timestamp: "오늘 오전 10:45"
  },
  {
    id: 6,
    sender: "보안전문가",
    avatar: "P",
    content: "즉시 경찰청 사이버 범죄 신고 센터(☎182)에 신고하세요. 절대 금전 요구에 응하지 마시고, 모든 대화 내용을 증거로 보관하세요. 필요하면 1:1 상담 채널로 안내해 드리겠습니다.",
    timestamp: "오늘 오전 10:47",
    isAdmin: true
  },
  {
    id: 7,
    sender: "시스템",
    avatar: "S",
    content: "몸캠피싱 피해 예방을 위한 체크리스트:\n1. 모르는 사람과의 영상통화 거부하기\n2. 사회공학적 접근에 주의하기 (갑작스러운 친밀감 표현 등)\n3. 개인정보 및 사생활 노출 주의하기\n4. 의심스러운 링크 클릭하지 않기\n5. 협박 발생 시 즉시 신고하기",
    timestamp: "오늘 오전 11:00",
    isAdmin: true
  }
]

export function BodycamPhishingChat() {
  const [messages, setMessages] = useState<Message[]>(initialMessages)
  const [newMessage, setNewMessage] = useState("")
  const [onlineCount, setOnlineCount] = useState(213)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!newMessage.trim()) return
    
    const userMessage: Message = {
      id: messages.length + 1,
      sender: "방문자",
      avatar: "V",
      content: newMessage.trim(),
      timestamp: "방금 전"
    }
    
    setMessages([...messages, userMessage])
    setNewMessage("")
    
    // Simulate automated response
    setTimeout(() => {
      const response: Message = {
        id: messages.length + 2,
        sender: "보안전문가",
        avatar: "P",
        content: "좋은 질문입니다. 더 자세한 정보가 필요하시면 1:1 상담을 신청해 주세요. 전문가가 도와드리겠습니다.",
        timestamp: "방금 전",
        isAdmin: true
      }
      
      setMessages(prev => [...prev, response])
    }, 1000)
  }

  return (
    <div className="bg-[#36393F] rounded-xl shadow-xl overflow-hidden flex flex-col h-[500px]">
      {/* Channel Header */}
      <div className="bg-[#36393F] border-b border-[#202225] p-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Hash className="h-5 w-5 text-gray-400" />
          <span className="font-medium text-white">몸캠피싱-예방</span>
          <Bell className="h-4 w-4 text-gray-400 ml-2" />
          <Pin className="h-4 w-4 text-gray-400" />
        </div>
        <div className="flex items-center gap-3">
          <Users className="h-5 w-5 text-gray-400" />
          <Search className="h-5 w-5 text-gray-400" />
          <div className="w-8 h-8 bg-[#5865F2] rounded-full flex items-center justify-center">
            <Shield className="h-4 w-4 text-white" />
          </div>
        </div>
      </div>
      
      {/* Messages Area */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-[#36393F]">
        {messages.map((msg) => (
          <div key={msg.id} className="flex gap-3 group">
            <div className={cn(
              "w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0",
              msg.isAdmin ? "bg-[#5865F2]" : "bg-gray-600"
            )}>
              <span className="text-white font-medium">{msg.avatar}</span>
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2">
                <span className={cn(
                  "font-medium",
                  msg.isAdmin ? "text-[#5865F2]" : "text-white"
                )}>
                  {msg.sender}
                </span>
                <span className="text-gray-400 text-xs">{msg.timestamp}</span>
              </div>
              <div className="text-gray-100 mt-1 whitespace-pre-line">
                {msg.content}
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Input Area */}
      <form onSubmit={handleSubmit} className="p-4 bg-[#40444B] flex items-center gap-3">
        <PlusCircle className="h-5 w-5 text-gray-400" />
        <input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          placeholder="몸캠피싱에 대한 질문이나 정보를 공유해주세요..."
          className="bg-transparent flex-1 text-white outline-none placeholder:text-gray-400"
        />
        <Button 
          type="submit" 
          size="sm" 
          className="bg-[#5865F2] hover:bg-[#4752C4] p-2 rounded-full"
        >
          <Send className="h-4 w-4" />
        </Button>
      </form>
      
      {/* Online Status Indicator */}
      <div className="absolute top-4 right-4 bg-green-500 text-white rounded-full px-3 py-1 shadow-lg">
        <div className="flex items-center gap-1">
          <div className="w-2 h-2 bg-white rounded-full"></div>
          <span className="text-sm font-medium">{onlineCount} 온라인</span>
        </div>
      </div>
    </div>
  )
}
