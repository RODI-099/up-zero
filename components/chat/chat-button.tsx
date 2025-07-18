"use client"

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { MessageSquare } from 'lucide-react'
import { LiveChat } from './live-chat'
import { useAuth } from '@/components/auth/auth-context'
import { useChat } from './chat-context'

interface ChatButtonProps {
  consultationId?: string
  className?: string
}

export function ChatButton({ consultationId, className }: ChatButtonProps) {
  const [isOpen, setIsOpen] = useState(false)
  const { user } = useAuth()
  const { unreadCount, agentOnline } = useChat()

  // Generate anonymous session ID if not logged in
  const sessionId = user?.id || `anonymous_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
  const userName = user?.name || user?.email || "익명 사용자"

  return (
    <>
      <div className={`fixed bottom-6 right-6 z-40 ${className}`}>
        <Button
          onClick={() => setIsOpen(true)}
          className="h-14 w-14 rounded-full bg-blue-600 hover:bg-blue-700 shadow-lg relative"
          size="icon"
        >
          <MessageSquare className="h-6 w-6" />
          {unreadCount > 0 && (
            <div className="absolute -top-2 -right-2 h-6 w-6 bg-red-500 text-white rounded-full flex items-center justify-center text-xs font-bold">
              {unreadCount > 9 ? '9+' : unreadCount}
            </div>
          )}
          {agentOnline && (
            <div className="absolute -bottom-1 -right-1 h-4 w-4 bg-green-500 border-2 border-white rounded-full"></div>
          )}
        </Button>
      </div>

      {isOpen && (
        <LiveChat
          consultationId={consultationId}
          userId={sessionId}
          userName={userName}
          onClose={() => setIsOpen(false)}
        />
      )}
    </>
  )
}
