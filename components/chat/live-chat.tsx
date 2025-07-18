"use client"

import { useState, useEffect, useRef } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { MessageSquare, Send, Phone, Video, Shield, X, Minimize2, UserPlus } from 'lucide-react'
import { createClient } from '@supabase/supabase-js'
import { useAuth } from '@/components/auth/auth-context'
import Link from 'next/link'

interface Message {
  id: string
  sender_id: string
  sender_name: string
  sender_type: 'user' | 'agent' | 'system'
  message: string
  timestamp: string
  read: boolean
}

interface LiveChatProps {
  consultationId?: string
  userId?: string
  userName?: string
  onClose?: () => void
}

export function LiveChat({ consultationId, userId, userName = "사용자", onClose }: LiveChatProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [isMinimized, setIsMinimized] = useState(false)
  const [messages, setMessages] = useState<Message[]>([])
  const [newMessage, setNewMessage] = useState('')
  const [isConnected, setIsConnected] = useState(false)
  const [agentOnline, setAgentOnline] = useState(false)
  const [typing, setTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  
  const { user } = useAuth()
  const isAnonymous = !user
  
  // Initialize Supabase client
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  )

  useEffect(() => {
    if (isOpen && userId) {
      // For demo purposes, skip real-time subscriptions if tables don't exist yet
      // Uncomment this when database migration is complete:
      /*
      // Subscribe to real-time messages
      const channel = supabase
        .channel(`chat-${consultationId || userId}`)
        .on(
          'postgres_changes',
          {
            event: 'INSERT',
            schema: 'public',
            table: 'chat_messages',
            filter: `consultation_id=eq.${consultationId || userId}`
          },
          (payload) => {
            const newMsg = payload.new as Message
            setMessages(prev => [...prev, newMsg])
          }
        )
        .subscribe()
      */

      // Load existing messages
      loadMessages()

      setIsConnected(true)

      // Uncomment when real-time is enabled:
      // return () => {
      //   channel.unsubscribe()
      // }
    }
  }, [isOpen, userId, consultationId])

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const loadMessages = async () => {
    try {
      // For anonymous users, try to load from localStorage first
      if (isAnonymous) {
        const localMessages = localStorage.getItem(`chat_messages_${consultationId || userId}`)
        if (localMessages) {
          setMessages(JSON.parse(localMessages))
          return
        }
      }

      // Try to load from database (might fail if tables don't exist yet)
      try {
        const { data, error } = await supabase
          .from('chat_messages')
          .select('*')
          .eq('consultation_id', consultationId || userId)
          .order('timestamp', { ascending: true })

        if (error) throw error
        setMessages(data || [])
      } catch (dbError) {
        console.log('Database not ready yet, using local storage fallback')
        // Fallback to localStorage for all users if database isn't ready
        const localMessages = localStorage.getItem(`chat_messages_${consultationId || userId}`)
        if (localMessages) {
          setMessages(JSON.parse(localMessages))
        } else {
          setMessages([])
        }
      }
    } catch (error) {
      console.error('Error loading messages:', error)
      setMessages([])
    }
  }

  const sendMessage = async () => {
    if (!newMessage.trim() || !userId) return

    const message: Omit<Message, 'id'> = {
      sender_id: userId,
      sender_name: userName,
      sender_type: 'user',
      message: newMessage.trim(),
      timestamp: new Date().toISOString(),
      read: false
    }

    const messageWithId = {
      ...message,
      id: `msg_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      consultation_id: consultationId || userId
    }

    try {
      // For anonymous users, store locally and try to sync
      if (isAnonymous) {
        const newMessages = [...messages, messageWithId]
        setMessages(newMessages)
        localStorage.setItem(`chat_messages_${consultationId || userId}`, JSON.stringify(newMessages))
        setNewMessage('')
        
        // Try to store in database (might fail due to permissions)
        try {
          await supabase.from('chat_messages').insert([messageWithId])
        } catch (dbError) {
          console.log('Database storage failed for anonymous user, using local storage')
        }
        
        // Simulate agent response
        setTimeout(() => {
          simulateAgentResponse()
        }, 2000)
        
        return
      }

      // For logged-in users, store in database
      const { error } = await supabase
        .from('chat_messages')
        .insert([messageWithId])

      if (error) throw error

      setNewMessage('')
      
      // Simulate agent response for demo
      setTimeout(() => {
        simulateAgentResponse()
      }, 2000)

    } catch (error) {
      console.error('Error sending message:', error)
    }
  }

  const simulateAgentResponse = async () => {
    const responses = [
      "안녕하세요! upoZero 전문 상담사입니다. 어떤 도움이 필요하신가요?",
      "피해 상황에 대해 자세히 알려주시면 적절한 대응 방안을 제시해드리겠습니다.",
      "지금 말씀해주신 상황은 전형적인 몸캠피싱 수법입니다. 우선 가해자와의 모든 연락을 차단해주세요.",
      "증거 보전이 중요합니다. 대화 내용을 스크린샷으로 저장해주시고, 절대 돈을 송금하지 마세요.",
      "즉시 경찰서에 신고하시고, 저희가 법적 대응을 도와드리겠습니다."
    ]

    const randomResponse = responses[Math.floor(Math.random() * responses.length)]

    const agentMessage = {
      id: `agent_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      sender_id: 'agent-001',
      sender_name: '김보안 상담사',
      sender_type: 'agent' as const,
      message: randomResponse,
      timestamp: new Date().toISOString(),
      read: false,
      consultation_id: consultationId || userId
    }

    try {
      // For anonymous users, store locally
      if (isAnonymous) {
        const newMessages = [...messages, agentMessage]
        setMessages(newMessages)
        localStorage.setItem(`chat_messages_${consultationId || userId}`, JSON.stringify(newMessages))
        
        // Try to store in database (might fail)
        try {
          await supabase.from('chat_messages').insert([agentMessage])
        } catch (dbError) {
          console.log('Database storage failed for anonymous user')
        }
        return
      }

      // For logged-in users
      await supabase
        .from('chat_messages')
        .insert([agentMessage])
    } catch (error) {
      console.error('Error sending agent message:', error)
    }
  }

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      sendMessage()
    }
  }

  if (!isOpen) {
    return (
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          onClick={() => setIsOpen(true)}
          className="h-14 w-14 rounded-full bg-blue-600 hover:bg-blue-700 shadow-lg"
          size="icon"
        >
          <MessageSquare className="h-6 w-6" />
        </Button>
        <div className="absolute -top-2 -right-2">
          <div className="h-4 w-4 bg-red-500 rounded-full animate-pulse"></div>
        </div>
      </div>
    )
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Card className={`w-80 shadow-xl transition-all duration-300 ${isMinimized ? 'h-16' : 'h-96'}`}>
        <CardHeader className="p-4 bg-blue-600 text-white rounded-t-lg">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Shield className="h-5 w-5" />
              <div>
                <CardTitle className="text-sm">upoZero 실시간 상담</CardTitle>
                <div className="flex items-center gap-2 text-xs">
                  <div className={`w-2 h-2 rounded-full ${agentOnline ? 'bg-green-400' : 'bg-gray-400'}`}></div>
                  {agentOnline ? '상담사 온라인' : '상담사 연결중...'}
                </div>
              </div>
            </div>
            <div className="flex gap-1">
              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8 text-white hover:bg-blue-700"
                onClick={() => setIsMinimized(!isMinimized)}
              >
                <Minimize2 className="h-4 w-4" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8 text-white hover:bg-blue-700"
                onClick={() => {
                  setIsOpen(false)
                  onClose?.()
                }}
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </CardHeader>

        {!isMinimized && (
          <>
            <CardContent className="p-0 h-64 overflow-y-auto bg-gray-50">
              <div className="p-4 space-y-3">
                {isAnonymous && (
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 mb-4">
                    <div className="flex items-center gap-2 mb-2">
                      <UserPlus className="h-4 w-4 text-blue-600" />
                      <span className="text-sm font-semibold text-blue-800">더 나은 상담을 위해</span>
                    </div>
                    <p className="text-xs text-blue-700 mb-3">
                      로그인하시면 상담 기록 저장, 파일 전송, 전문가 연결 등 모든 기능을 이용하실 수 있습니다.
                    </p>
                    <div className="flex gap-2">
                      <Button asChild size="sm" className="text-xs bg-blue-600 hover:bg-blue-700">
                        <Link href="/auth/login">로그인</Link>
                      </Button>
                      <Button asChild variant="outline" size="sm" className="text-xs">
                        <Link href="/auth/signup">회원가입</Link>
                      </Button>
                    </div>
                  </div>
                )}
                
                {messages.length === 0 ? (
                  <div className="text-center text-gray-500 text-sm py-8">
                    <Shield className="h-8 w-8 mx-auto mb-2 text-blue-600" />
                    <p>안전한 실시간 상담을 시작하세요</p>
                    <p className="text-xs mt-1">
                      {isAnonymous 
                        ? "익명으로 상담 가능 (일부 기능 제한)" 
                        : "모든 대화는 암호화되어 보호됩니다"
                      }
                    </p>
                  </div>
                ) : (
                  messages.map((message) => (
                    <div
                      key={message.id}
                      className={`flex ${message.sender_type === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                      <div className={`max-w-[70%] ${message.sender_type === 'user' ? 'order-2' : 'order-1'}`}>
                        {message.sender_type === 'agent' && (
                          <div className="flex items-center gap-2 mb-1">
                            <Avatar className="h-6 w-6">
                              <AvatarFallback className="bg-blue-600 text-white text-xs">
                                상담
                              </AvatarFallback>
                            </Avatar>
                            <span className="text-xs text-gray-600">{message.sender_name}</span>
                            <Badge variant="secondary" className="text-xs">전문가</Badge>
                          </div>
                        )}
                        <div
                          className={`p-3 rounded-lg text-sm ${
                            message.sender_type === 'user'
                              ? 'bg-blue-600 text-white rounded-br-none'
                              : 'bg-white border rounded-bl-none'
                          }`}
                        >
                          {message.message}
                        </div>
                        <div className="text-xs text-gray-500 mt-1">
                          {new Date(message.timestamp).toLocaleTimeString('ko-KR', {
                            hour: '2-digit',
                            minute: '2-digit'
                          })}
                        </div>
                      </div>
                    </div>
                  ))
                )}
                {typing && (
                  <div className="flex items-center gap-2 text-gray-500">
                    <div className="flex gap-1">
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    </div>
                    <span className="text-xs">상담사가 입력중...</span>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>
            </CardContent>

            <div className="p-4 border-t bg-white rounded-b-lg">
              <div className="flex gap-2">
                <Input
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="메시지를 입력하세요..."
                  className="flex-1"
                />
                <Button
                  onClick={sendMessage}
                  disabled={!newMessage.trim()}
                  size="icon"
                  className="bg-blue-600 hover:bg-blue-700"
                >
                  <Send className="h-4 w-4" />
                </Button>
              </div>
              <div className="flex justify-between items-center mt-2">
                <div className="flex gap-2">
                  <Button variant="ghost" size="sm" className="text-xs">
                    <Phone className="h-3 w-3 mr-1" />
                    긴급통화
                  </Button>
                  {!isAnonymous && (
                    <Button variant="ghost" size="sm" className="text-xs">
                      <Video className="h-3 w-3 mr-1" />
                      화상상담
                    </Button>
                  )}
                </div>
                <div className={`text-xs ${isConnected ? 'text-green-600' : 'text-red-600'}`}>
                  {isAnonymous ? '익명 모드' : isConnected ? '연결됨' : '연결 끊김'}
                </div>
              </div>
            </div>
          </>
        )}
      </Card>
    </div>
  )
}
