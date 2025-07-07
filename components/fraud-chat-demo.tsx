"use client"

import { useEffect, useState, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { ArrowUp, Check, CheckCheck, Image as ImageIcon, Paperclip, Send, Smile } from "lucide-react"

// Message types
type MessageType = "text" | "image" | "system"
type MessageSender = "victim" | "criminal" | "system"

interface Message {
  id: number
  type: MessageType
  sender: MessageSender
  content: string
  timestamp: string
  status?: "sent" | "delivered" | "read"
}

export function FraudChatDemo() {
  const [messages, setMessages] = useState<Message[]>([])
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  // Sample conversation
  const conversationScript: Message[] = [
    {
      id: 1,
      type: "system",
      sender: "system",
      content: "오늘",
      timestamp: "10:30 AM",
    },
    {
      id: 2,
      type: "text",
      sender: "criminal",
      content: "안녕하세요~ 반갑습니다 ^^",
      timestamp: "10:30 AM",
      status: "read",
    },
    {
      id: 3,
      type: "text",
      sender: "victim",
      content: "안녕하세요! 누구신가요?",
      timestamp: "10:31 AM",
      status: "read",
    },
    {
      id: 4,
      type: "text",
      sender: "criminal",
      content: "소개팅 어플에서 프로필 봤어요! 정말 매력적이시더라구요 ㅎㅎ",
      timestamp: "10:32 AM",
      status: "read",
    },
    {
      id: 5,
      type: "text",
      sender: "victim",
      content: "아 그렇군요. 감사합니다 ㅎㅎ",
      timestamp: "10:33 AM",
      status: "read",
    },
    {
      id: 6,
      type: "text",
      sender: "criminal",
      content: "저도 서울에 살고 있는데, 혹시 지금 통화 가능하세요? 목소리가 궁금해요~",
      timestamp: "10:35 AM",
      status: "read",
    },
    {
      id: 7,
      type: "text",
      sender: "victim",
      content: "갑자기 통화는 좀 그렇지 않나요?",
      timestamp: "10:36 AM",
      status: "read",
    },
    {
      id: 8,
      type: "text",
      sender: "criminal",
      content: "아 그렇죠? 죄송해요 ㅠㅠ 그냥 얼굴이랑 목소리가 너무 궁금해서요. 제가 먼저 사진 보낼게요!",
      timestamp: "10:37 AM",
      status: "read",
    },
    {
      id: 9,
      type: "image",
      sender: "criminal",
      content: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      timestamp: "10:38 AM",
      status: "read",
    },
    {
      id: 10,
      type: "text",
      sender: "criminal",
      content: "영상통화 한번만 해주세요~ 5분만이라도요 ㅠㅠ",
      timestamp: "10:40 AM",
      status: "read",
    },
    {
      id: 11,
      type: "text",
      sender: "victim",
      content: "음... 잘 모르겠네요",
      timestamp: "10:42 AM",
      status: "read",
    },
    {
      id: 12,
      type: "text",
      sender: "criminal",
      content: "진짜 딱 5분만이에요! 제가 진짜 사람인지 확인하시라구요 ㅎㅎ",
      timestamp: "10:43 AM",
      status: "read",
    },
    {
      id: 13,
      type: "system",
      sender: "system",
      content: "영상통화 시작 - 5분 후",
      timestamp: "10:48 AM",
    },
    {
      id: 14,
      type: "text",
      sender: "criminal",
      content: "방금 통화 내용 다 녹화했습니다. 돈 보내지 않으면 지인들에게 영상 전송하겠습니다.",
      timestamp: "10:50 AM",
      status: "read",
    },
    {
      id: 15,
      type: "image",
      sender: "criminal",
      content: "https://images.pexels.com/photos/5473298/pexels-photo-5473298.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      timestamp: "10:51 AM",
      status: "read",
    },
    {
      id: 16,
      type: "text",
      sender: "criminal",
      content: "30분 안에 100만원 보내세요. 계좌번호는 110-123-456789 입니다.",
      timestamp: "10:52 AM",
      status: "read",
    },
    {
      id: 17,
      type: "text",
      sender: "victim",
      content: "이게 무슨 소리죠? 협박하시는 건가요?",
      timestamp: "10:53 AM",
      status: "read",
    },
    {
      id: 18,
      type: "text",
      sender: "criminal",
      content: "장난 아닙니다. 친구, 가족, 직장 동료 모두에게 보낼 겁니다. 시간 얼마 없습니다.",
      timestamp: "10:54 AM",
      status: "read",
    },
    {
      id: 19,
      type: "system",
      sender: "system",
      content: "이것은 몸캠피싱 사례입니다. 이런 상황이 발생하면 즉시 대화를 중단하고 경찰에 신고하세요.",
      timestamp: "10:55 AM",
    },
  ]

  // Scroll to bottom when messages update
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  // Start the conversation
  useEffect(() => {
    setIsVisible(true)
    
    const timer = setTimeout(() => {
      addNextMessage()
    }, 1000)
    
    return () => clearTimeout(timer)
  }, [])

  // Add next message with typing animation
  const addNextMessage = () => {
    if (currentIndex >= conversationScript.length) return
    
    const nextMessage = conversationScript[currentIndex]
    
    if (nextMessage.sender === "criminal") {
      setIsTyping(true)
      setTimeout(() => {
        setIsTyping(false)
        setMessages(prev => [...prev, nextMessage])
        setCurrentIndex(prev => prev + 1)
        
        // Schedule next message
        setTimeout(addNextMessage, nextMessage.type === "image" ? 2000 : 1500)
      }, 1500)
    } else {
      setMessages(prev => [...prev, nextMessage])
      setCurrentIndex(prev => prev + 1)
      
      // Schedule next message
      setTimeout(addNextMessage, 1500)
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8 }}
      className="max-w-sm mx-auto"
    >
      {/* Phone Frame */}
      <div className="relative border-[14px] border-black rounded-[40px] shadow-xl bg-white overflow-hidden">
        {/* Status Bar */}
        <div className="bg-gray-800 text-white py-2 px-4 flex justify-between items-center">
          <div className="text-xs">10:30</div>
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-20 h-6 bg-black rounded-b-xl"></div>
          <div className="flex items-center space-x-1">
            <div className="w-3 h-3 rounded-full bg-white"></div>
            <div className="w-3 h-3 rounded-full bg-white"></div>
            <div className="w-3 h-3 rounded-full bg-white"></div>
          </div>
        </div>
        
        {/* Chat Header */}
        <div className="bg-blue-600 text-white p-3 flex items-center justify-between">
          <div className="flex items-center">
            <div className="w-8 h-8 bg-blue-400 rounded-full flex items-center justify-center text-white font-bold mr-2">
              ?
            </div>
            <div>
              <div className="font-medium">알 수 없는 사용자</div>
              <div className="text-xs text-blue-200">온라인</div>
            </div>
          </div>
          <Badge variant="secondary" className="bg-red-500 text-white">위험</Badge>
        </div>
        
        {/* Chat Messages */}
        <div className="h-[400px] bg-gray-100 p-3 overflow-y-auto">
          <AnimatePresence>
            {messages.map((message) => (
              <motion.div
                key={message.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="mb-3"
              >
                {message.type === "system" ? (
                  <div className="flex justify-center my-2">
                    <div className="bg-gray-200 text-gray-600 text-xs px-2 py-1 rounded-full">
                      {message.content}
                    </div>
                  </div>
                ) : (
                  <div className={`flex ${message.sender === "victim" ? "justify-end" : "justify-start"}`}>
                    <div className="max-w-[70%]">
                      {message.type === "text" ? (
                        <div 
                          className={`p-3 rounded-lg ${
                            message.sender === "victim" 
                              ? "bg-blue-500 text-white rounded-br-none" 
                              : "bg-white text-gray-800 rounded-bl-none"
                          }`}
                        >
                          {message.content}
                        </div>
                      ) : message.type === "image" ? (
                        <div 
                          className={`p-1 rounded-lg ${
                            message.sender === "victim" 
                              ? "bg-blue-500 rounded-br-none" 
                              : "bg-white rounded-bl-none"
                          }`}
                        >
                          <img 
                            src={message.content} 
                            alt="Shared image" 
                            className="w-full h-32 object-cover rounded"
                          />
                        </div>
                      ) : null}
                      
                      <div className="flex items-center mt-1 text-xs text-gray-500">
                        <span>{message.timestamp}</span>
                        {message.sender === "victim" && message.status && (
                          <span className="ml-1">
                            {message.status === "sent" ? (
                              <Check className="h-3 w-3" />
                            ) : message.status === "delivered" ? (
                              <Check className="h-3 w-3" />
                            ) : (
                              <CheckCheck className="h-3 w-3 text-blue-500" />
                            )}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
            
            {isTyping && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex justify-start mb-3"
              >
                <div className="bg-white p-3 rounded-lg rounded-bl-none">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-gray-300 rounded-full animate-bounce" style={{ animationDelay: "0ms" }}></div>
                    <div className="w-2 h-2 bg-gray-300 rounded-full animate-bounce" style={{ animationDelay: "150ms" }}></div>
                    <div className="w-2 h-2 bg-gray-300 rounded-full animate-bounce" style={{ animationDelay: "300ms" }}></div>
                  </div>
                </div>
              </motion.div>
            )}
            
            <div ref={messagesEndRef}></div>
          </AnimatePresence>
        </div>
        
        {/* Chat Input */}
        <div className="bg-white p-3 flex items-center border-t">
          <button className="text-gray-500 p-2">
            <Smile className="h-5 w-5" />
          </button>
          <div className="flex-1 bg-gray-100 rounded-full px-4 py-2 mx-2">메시지를 입력하세요...</div>
          <button className="text-gray-500 p-2">
            <Paperclip className="h-5 w-5" />
          </button>
          <button className="bg-blue-500 text-white p-2 rounded-full">
            <Send className="h-5 w-5" />
          </button>
        </div>
        
        {/* Home Button */}
        <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-1/3 h-1 bg-gray-800 rounded-full"></div>
      </div>
      
      {/* Warning Label */}
      <div className="mt-4 bg-red-50 border border-red-200 rounded-lg p-3 text-center">
        <p className="text-red-600 text-sm font-medium">이것은 몸캠피싱 시뮬레이션입니다. 실제 상황에서는 즉시 대화를 중단하세요.</p>
      </div>
    </motion.div>
  )
}