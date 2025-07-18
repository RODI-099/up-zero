"use client"

import { useState, useEffect, useRef } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { ArrowLeft, Send, Phone, Video, Shield, MoreVertical } from 'lucide-react'
import Link from 'next/link'
import { useAuth } from '@/components/auth/auth-context'
import { createClient } from '@supabase/supabase-js'

interface Message {
  id: string
  sender_id: string
  sender_name: string
  sender_type: 'user' | 'agent' | 'system'
  message: string
  timestamp: string
  read: boolean
}

export default function ChatPage() {
  const [messages, setMessages] = useState<Message[]>([])
  const [newMessage, setNewMessage] = useState('')
  const [isConnected, setIsConnected] = useState(false)
  const [agentInfo, setAgentInfo] = useState({ name: '김보안 상담사', status: 'online' })
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const { user } = useAuth()

  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  )

  useEffect(() => {
    if (user) {
      loadMessages()
      subscribeToMessages()
      setIsConnected(true)
    }
  }, [user])

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const loadMessages = async () => {
    if (!user) return

    try {
      const { data, error } = await supabase
        .from('chat_messages')
        .select('*')
        .eq('consultation_id', user.id)
        .order('timestamp', { ascending: true })

      if (error) throw error
      setMessages(data || [])
    } catch (error) {
      console.error('Error loading messages:', error)
    }
  }

  const subscribeToMessages = () => {
    if (!user) return

    const channel = supabase
      .channel(`chat-${user.id}`)
      .on(
        'postgres_changes',
        {
          event: 'INSERT',
          schema: 'public',
          table: 'chat_messages',
          filter: `consultation_id=eq.${user.id}`
        },
        (payload) => {
          const newMsg = payload.new as Message
          setMessages(prev => [...prev, newMsg])
        }
      )
      .subscribe()

    return () => {
      channel.unsubscribe()
    }
  }

  const sendMessage = async () => {
    if (!newMessage.trim() || !user) return

    const message = {
      consultation_id: user.id,
      sender_id: user.id,
      sender_name: user.name || user.email,
      sender_type: 'user' as const,
      message: newMessage.trim(),
      timestamp: new Date().toISOString(),
      read: false
    }

    try {
      const { error } = await supabase
        .from('chat_messages')
        .insert([message])

      if (error) throw error
      setNewMessage('')

      // Simulate agent response
      setTimeout(() => {
        simulateAgentResponse()
      }, 2000)

    } catch (error) {
      console.error('Error sending message:', error)
    }
  }

  const simulateAgentResponse = async () => {
    if (!user) return

    const responses = [
      "말씀해주신 상황을 정확히 파악했습니다. 지금 바로 도움을 드리겠습니다.",
      "우선 가해자와의 모든 연락을 즉시 차단해주시고, 증거를 보전해주세요.",
      "이런 상황에서는 빠른 대응이 중요합니다. 경찰 신고와 함께 저희가 법적 지원을 해드리겠습니다.",
      "추가로 필요한 정보가 있으시면 언제든 말씀해주세요. 24시간 지원해드립니다.",
      "상담 내용을 바탕으로 맞춤형 대응 방안을 준비해드리겠습니다."
    ]

    const randomResponse = responses[Math.floor(Math.random() * responses.length)]

    const agentMessage = {
      consultation_id: user.id,
      sender_id: 'agent-001',
      sender_name: '김보안 상담사',
      sender_type: 'agent' as const,
      message: randomResponse,
      timestamp: new Date().toISOString(),
      read: false
    }

    try {
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

  if (!user) {
    return (
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-md mx-auto text-center">
          <Shield className="h-16 w-16 mx-auto mb-4 text-blue-600" />
          <h1 className="text-2xl font-bold mb-4">로그인이 필요합니다</h1>
          <p className="text-gray-600 mb-6">실시간 상담을 위해 먼저 로그인해주세요.</p>
          <Button asChild>
            <Link href="/auth/login">로그인하기</Link>
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="h-screen flex flex-col bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b p-4">
        <div className="container mx-auto max-w-4xl flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" asChild>
              <Link href="/">
                <ArrowLeft className="h-5 w-5" />
              </Link>
            </Button>
            <div className="flex items-center gap-3">
              <Avatar>
                <AvatarFallback className="bg-blue-600 text-white">상담</AvatarFallback>
              </Avatar>
              <div>
                <h1 className="font-semibold">{agentInfo.name}</h1>
                <div className="flex items-center gap-2">
                  <div className={`w-2 h-2 rounded-full ${
                    agentInfo.status === 'online' ? 'bg-green-500' : 'bg-gray-400'
                  }`}></div>
                  <span className="text-sm text-gray-600">
                    {agentInfo.status === 'online' ? '온라인' : '오프라인'}
                  </span>
                  <Badge variant="secondary" className="text-xs">전문가</Badge>
                </div>
              </div>
            </div>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="icon">
              <Phone className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon">
              <Video className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon">
              <MoreVertical className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto">
        <div className="container mx-auto max-w-4xl p-4">
          {messages.length === 0 ? (
            <div className="text-center py-12">
              <Shield className="h-16 w-16 mx-auto mb-4 text-blue-600" />
              <h2 className="text-xl font-semibold mb-2">안전한 실시간 상담</h2>
              <p className="text-gray-600 mb-4">
                upoZero 전문 상담사와 1:1 암호화된 대화를 시작하세요
              </p>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 max-w-md mx-auto">
                <p className="text-sm text-blue-800">
                  <strong>보안 안내:</strong> 모든 대화는 end-to-end 암호화되어 보호되며, 
                  상담 완료 후 안전하게 삭제됩니다.
                </p>
              </div>
            </div>
          ) : (
            <div className="space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.sender_type === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`max-w-[70%] ${message.sender_type === 'user' ? 'order-2' : 'order-1'}`}>
                    {message.sender_type !== 'user' && (
                      <div className="flex items-center gap-2 mb-2">
                        <Avatar className="h-8 w-8">
                          <AvatarFallback className="bg-blue-600 text-white text-xs">
                            {message.sender_type === 'agent' ? '상담' : '시스템'}
                          </AvatarFallback>
                        </Avatar>
                        <span className="text-sm text-gray-600">{message.sender_name}</span>
                        {message.sender_type === 'agent' && (
                          <Badge variant="secondary" className="text-xs">전문가</Badge>
                        )}
                      </div>
                    )}
                    <div
                      className={`p-4 rounded-lg ${
                        message.sender_type === 'user'
                          ? 'bg-blue-600 text-white rounded-br-none'
                          : message.sender_type === 'system'
                          ? 'bg-yellow-50 border border-yellow-200 text-yellow-800 rounded-bl-none'
                          : 'bg-white border rounded-bl-none shadow-sm'
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
              ))}
              <div ref={messagesEndRef} />
            </div>
          )}
        </div>
      </div>

      {/* Input */}
      <div className="bg-white border-t p-4">
        <div className="container mx-auto max-w-4xl">
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
              className="bg-blue-600 hover:bg-blue-700"
            >
              <Send className="h-4 w-4" />
            </Button>
          </div>
          <div className="flex justify-between items-center mt-2 text-xs text-gray-500">
            <span>Enter로 전송, Shift+Enter로 줄바꿈</span>
            <div className={`flex items-center gap-1 ${isConnected ? 'text-green-600' : 'text-red-600'}`}>
              <div className={`w-2 h-2 rounded-full ${isConnected ? 'bg-green-500' : 'bg-red-500'}`}></div>
              {isConnected ? '연결됨' : '연결 끊김'}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
