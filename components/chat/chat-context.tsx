"use client"

import { createContext, useContext, useState, useEffect, ReactNode } from 'react'
import { createClient } from '@supabase/supabase-js'
import { useAuth } from '@/components/auth/auth-context'

interface ChatContextType {
  isConnected: boolean
  agentOnline: boolean
  unreadCount: number
  startChat: (consultationId?: string) => Promise<string>
  endChat: (sessionId: string) => Promise<void>
  markAsRead: (consultationId: string) => Promise<void>
}

const ChatContext = createContext<ChatContextType | undefined>(undefined)

export function ChatProvider({ children }: { children: ReactNode }) {
  const [isConnected, setIsConnected] = useState(false)
  const [agentOnline, setAgentOnline] = useState(false)
  const [unreadCount, setUnreadCount] = useState(0)
  const { user } = useAuth()

  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  )

  useEffect(() => {
    if (user) {
      checkAgentAvailability()
      subscribeToUnreadMessages()
      setIsConnected(true)
    }
  }, [user])

  const checkAgentAvailability = async () => {
    try {
      // Simulate agent availability for now (since we haven't run the migration yet)
      // In production, this would query the chat_agents table
      setAgentOnline(true) // Simulated: agents are always online for demo
      
      // Uncomment this when the database migration is complete:
      /*
      const { data, error } = await supabase
        .from('chat_agents')
        .select('status')
        .eq('status', 'online')
        .limit(1)

      if (error) throw error
      setAgentOnline((data?.length || 0) > 0)
      */
    } catch (error) {
      console.error('Error checking agent availability:', error)
      // Fallback to assuming agents are available
      setAgentOnline(true)
    }
  }

  const subscribeToUnreadMessages = () => {
    if (!user) return

    // Simulate unread messages for demo
    // In production, this would subscribe to actual database changes
    setUnreadCount(0)
    
    // Uncomment this when the database migration is complete:
    /*
    const channel = supabase
      .channel(`unread-${user.id}`)
      .on(
        'postgres_changes',
        {
          event: 'INSERT',
          schema: 'public',
          table: 'chat_messages',
          filter: `consultation_id=eq.${user.id}`
        },
        (payload) => {
          if (payload.new.sender_type !== 'user') {
            setUnreadCount(prev => prev + 1)
          }
        }
      )
      .subscribe()

    return () => {
      channel.unsubscribe()
    }
    */
  }

  const startChat = async (consultationId?: string): Promise<string> => {
    if (!user) throw new Error('User not authenticated')

    try {
      // For demo purposes, return a simple session ID
      const sessionId = consultationId || user.id
      
      // Uncomment this when the database migration is complete:
      /*
      // Get available agent
      const { data: agentData, error: agentError } = await supabase
        .rpc('assign_chat_agent', { consultation_type: 'general' })

      if (agentError) throw agentError
      
      // Create chat session
      const { data: sessionData, error: sessionError } = await supabase
        .from('chat_sessions')
        .insert([{
          consultation_id: sessionId,
          user_id: user.id,
          agent_id: agentData || null,
          status: 'active'
        }])
        .select()
        .single()

      if (sessionError) throw sessionError

      // Send welcome message
      await supabase.rpc('send_welcome_message', {
        session_consultation_id: sessionId,
        agent_name: agentData ? '전문 상담사' : '상담사'
      })
      */

      return sessionId
    } catch (error) {
      console.error('Error starting chat:', error)
      throw error
    }
  }

  const endChat = async (sessionId: string): Promise<void> => {
    try {
      await supabase
        .from('chat_sessions')
        .update({
          status: 'ended',
          ended_at: new Date().toISOString()
        })
        .eq('id', sessionId)
    } catch (error) {
      console.error('Error ending chat:', error)
      throw error
    }
  }

  const markAsRead = async (consultationId: string): Promise<void> => {
    try {
      await supabase
        .from('chat_messages')
        .update({ read: true })
        .eq('consultation_id', consultationId)
        .eq('read', false)
        .neq('sender_type', 'user')

      setUnreadCount(0)
    } catch (error) {
      console.error('Error marking messages as read:', error)
    }
  }

  return (
    <ChatContext.Provider value={{
      isConnected,
      agentOnline,
      unreadCount,
      startChat,
      endChat,
      markAsRead
    }}>
      {children}
    </ChatContext.Provider>
  )
}

export function useChat() {
  const context = useContext(ChatContext)
  if (context === undefined) {
    throw new Error('useChat must be used within a ChatProvider')
  }
  return context
}
