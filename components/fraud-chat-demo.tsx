"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import { Phone, Wifi, BatteryCharging } from "lucide-react"

interface Message {
  sender: "fraud" | "victim"
  text: string
}

const messages: Message[] = [
  { sender: "fraud", text: "안녕하세요, 오랜만에 연락드리네요." },
  { sender: "victim", text: "누구세요?" },
  { sender: "fraud", text: "저번에 만났던 ○○이에요. 혹시 저 기억 안 나세요?" },
  { sender: "victim", text: "아... 네. 무슨 일로 연락하셨어요?" },
  { sender: "fraud", text: "다름이 아니라, 그때 저희 영상통화했던 거 기억나세요? 제가 실수로 녹화를 눌러버렸네요..." },
  { sender: "victim", text: "네? 녹화요? 무슨 소리예요?" },
  { sender: "fraud", text: "혹시 이 영상이 친구들한테 퍼지면 곤란하시겠죠? 제가 실수로 보낼 뻔 했네요." },
  { sender: "victim", text: "협박하는 거예요? 당장 지워요!" },
  { sender: "fraud", text: "지우는 건 어렵지 않아요. 대신 제 부탁 하나만 들어주시면 됩니다." },
  { sender: "victim", text: "무슨 부탁이요?" },
  { sender: "fraud", text: "지금 당장 500만원만 보내주세요. 그럼 영상은 깨끗하게 지워드릴게요." },
  { sender: "victim", text: "말도 안 돼! 신고할 거예요!" },
  { sender: "fraud", text: "신고하면 영상은 바로 유포됩니다. 잘 생각해보세요. 연락처 목록 다 가지고 있어요." },
]

export function FraudChatDemo() {
  const [visibleMessages, setVisibleMessages] = useState<Message[]>([])
  const [messageIndex, setMessageIndex] = useState(0)

  useEffect(() => {
    if (messageIndex < messages.length) {
      const timer = setTimeout(() => {
        setVisibleMessages((prev) => [...prev, messages[messageIndex]])
        setMessageIndex((prev) => prev + 1)
      }, 1500) // Adjust typing speed here

      return () => clearTimeout(timer)
    }
  }, [messageIndex])

  return (
    <Card className="relative w-full max-w-sm mx-auto bg-gray-900 text-white rounded-3xl shadow-2xl overflow-hidden">
      {/* Phone Bezel */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-4 bg-gray-800 rounded-b-lg z-10"></div>
      <div className="absolute top-4 right-4 text-xs flex items-center space-x-1 text-gray-400">
        <Wifi className="h-3 w-3" />
        <BatteryCharging className="h-3 w-3" />
        <span>100%</span>
      </div>
      <div className="absolute top-4 left-4 text-xs text-gray-400">
        9:41 AM
      </div>

      <CardHeader className="bg-gray-800 p-4 pt-8 text-center">
        <CardTitle className="text-lg font-semibold text-white">
          <Phone className="inline-block h-4 w-4 mr-2 text-blue-400" />
          알 수 없는 발신자
        </CardTitle>
      </CardHeader>
      <CardContent className="p-4 h-80 overflow-y-auto flex flex-col space-y-3">
        {visibleMessages.map((msg, index) => (
          <div
            key={`msg-${index}`}
            className={cn(
              "max-w-[80%] p-3 rounded-lg text-sm",
              msg.sender === "fraud"
                ? "bg-gray-700 self-start rounded-bl-none"
                : "bg-blue-600 self-end rounded-br-none"
            )}
          >
            {msg.text}
          </div>
        ))}
      </CardContent>
      <div className="p-4 bg-gray-800 border-t border-gray-700">
        <input
          type="text"
          placeholder="메시지 입력..."
          className="w-full p-2 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none"
          disabled
        />
      </div>
    </Card>
  )
}