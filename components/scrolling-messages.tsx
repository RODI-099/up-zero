"use client"

import { useState, useEffect, useRef } from "react"
import { Shield, AlertTriangle } from "lucide-react"

type MessageType = {
  id: number
  sender: "victim" | "fraud"
  text: string
  time: string
}

export function ScrollingMessages() {
  const [messages, setMessages] = useState<MessageType[]>([])
  const [visibleMessages, setVisibleMessages] = useState<MessageType[]>([])
  const messagesEndRef = useRef<HTMLDivElement>(null)
  
  // Define conversation scenarios
  const conversations = [
    // Scenario 1: Dating app scam
    [
      { id: 1, sender: "fraud", text: "안녕하세요~ 프로필 보고 메시지 보냈어요. 반가워요 :)", time: "오후 2:30" },
      { id: 2, sender: "victim", text: "안녕하세요! 반갑습니다 ㅎㅎ", time: "오후 2:31" },
      { id: 3, sender: "fraud", text: "프로필 사진이 너무 멋져서 연락했어요. 혹시 지금 통화 가능하세요?", time: "오후 2:35" },
      { id: 4, sender: "victim", text: "갑자기요? 아직 서로 잘 모르는데...", time: "오후 2:36" },
      { id: 5, sender: "fraud", text: "목소리만 들어보고 싶어서요~ 영상통화 어때요?", time: "오후 2:37" },
      { id: 6, sender: "victim", text: "음... 잠깐이면 괜찮을 것 같아요", time: "오후 2:40" },
      { id: 7, sender: "fraud", text: "방금 통화 영상 저장했어요. 돈 보내지 않으면 모든 지인들에게 공유할 거예요.", time: "오후 3:10" },
      { id: 8, sender: "victim", text: "뭐라구요?? 제발 그러지 마세요!", time: "오후 3:11" },
      { id: 9, sender: "fraud", text: "1시간 안에 100만원 보내세요. 계좌번호는...", time: "오후 3:12" },
    ],
    // Scenario 2: Game chat scam
    [
      { id: 1, sender: "fraud", text: "오늘 게임 실력 대단하던데요! 같이 팀 하실래요?", time: "오후 7:15" },
      { id: 2, sender: "victim", text: "감사합니다! 네 좋아요 ㅎㅎ", time: "오후 7:16" },
      { id: 3, sender: "fraud", text: "카톡 아이디 알려주시면 더 편하게 대화할 수 있을 것 같아요", time: "오후 7:20" },
      { id: 4, sender: "victim", text: "네 제 아이디는 user123이에요", time: "오후 7:21" },
      { id: 5, sender: "fraud", text: "추가했어요! 혹시 지금 영상통화 가능하세요? 게임 전략 얘기하고 싶어요", time: "오후 7:30" },
      { id: 6, sender: "victim", text: "네 잠시 통화 가능해요", time: "오후 7:31" },
      { id: 7, sender: "fraud", text: "방금 통화 영상 캡처했어요. 게임 길드원들에게 모두 공유하겠습니다.", time: "오후 8:00" },
      { id: 8, sender: "victim", text: "뭐라구요?? 왜 그러시는 거죠??", time: "오후 8:01" },
      { id: 9, sender: "fraud", text: "비트코인으로 50만원 보내주시면 삭제하겠습니다.", time: "오후 8:02" },
    ],
    // Scenario 3: SNS friend request scam
    [
      { id: 1, sender: "fraud", text: "안녕하세요! 친구 추천에서 봤는데 취미가 비슷해서 친구 신청했어요", time: "오전 11:20" },
      { id: 2, sender: "victim", text: "안녕하세요~ 어떤 취미가 비슷하신가요?", time: "오전 11:25" },
      { id: 3, sender: "fraud", text: "사진 보니까 여행 좋아하시는 것 같던데, 저도 여행 너무 좋아해요!", time: "오전 11:27" },
      { id: 4, sender: "victim", text: "맞아요! 여행 정말 좋아해요 ㅎㅎ", time: "오전 11:30" },
      { id: 5, sender: "fraud", text: "다음 여행 계획 있으세요? 저도 다음 달에 제주도 가려고요", time: "오전 11:35" },
      { id: 6, sender: "fraud", text: "혹시 얼굴이 궁금한데 잠깐 영상통화 가능하세요?", time: "오전 11:40" },
      { id: 7, sender: "victim", text: "네 잠깐이면 괜찮아요", time: "오전 11:42" },
      { id: 8, sender: "fraud", text: "방금 통화 영상 저장했어요. 친구 목록에 있는 모든 사람에게 공유하겠습니다.", time: "오후 12:10" },
      { id: 9, sender: "victim", text: "뭐라구요?? 왜 이러시는 거죠??", time: "오후 12:11" },
      { id: 10, sender: "fraud", text: "200만원 보내주시면 영상 삭제하겠습니다. 계좌번호는...", time: "오후 12:12" },
    ]
  ]

  // Initialize with a random conversation
  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * conversations.length)
    setMessages(conversations[randomIndex])
  }, [])

  // Simulate message appearance over time
  useEffect(() => {
    if (messages.length === 0) return
    
    let currentIndex = 0
    
    const addMessage = () => {
      if (currentIndex < messages.length) {
        setVisibleMessages(prev => [...prev, messages[currentIndex]])
        currentIndex++
        
        // Schedule next message
        const delay = currentIndex < messages.length ? (messages[currentIndex].sender === "fraud" ? 1500 : 1200) : 0
        if (delay > 0) {
          setTimeout(addMessage, delay)
        }
      } else {
        // Reset after all messages are shown, with a delay
        setTimeout(() => {
          setVisibleMessages([])
          const nextConversationIndex = Math.floor(Math.random() * conversations.length)
          setMessages(conversations[nextConversationIndex])
          currentIndex = 0
          setTimeout(addMessage, 1000)
        }, 3000)
      }
    }
    
    // Start the message sequence
    setTimeout(addMessage, 1000)
    
    // Cleanup
    return () => {
      setVisibleMessages([])
    }
  }, [messages])

  // Auto-scroll to bottom when new messages appear
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" })
    }
  }, [visibleMessages])

  return (
    <div className="relative w-[280px] h-[560px] bg-gray-900 rounded-[40px] p-2 shadow-xl border-4 border-gray-800">
      {/* Phone notch */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1/3 h-7 bg-black rounded-b-xl z-10"></div>
      
      {/* Phone screen */}
      <div className="w-full h-full bg-gray-100 rounded-[32px] overflow-hidden flex flex-col">
        {/* Chat app header */}
        <div className="bg-blue-600 text-white p-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-700 rounded-full flex items-center justify-center">
              <Shield className="h-4 w-4" />
            </div>
            <div>
              <div className="text-sm font-bold">알 수 없는 사용자</div>
              <div className="text-xs opacity-80">온라인</div>
            </div>
          </div>
        </div>
        
        {/* Messages container */}
        <div className="flex-1 p-3 overflow-y-auto bg-gray-50">
          {visibleMessages.length === 0 && (
            <div className="h-full flex items-center justify-center text-gray-400 text-sm">
              <div className="text-center">
                <AlertTriangle className="h-8 w-8 mx-auto mb-2" />
                <p>대화가 시작되면 여기에 표시됩니다</p>
              </div>
            </div>
          )}
          
          {visibleMessages.map((msg) => (
            <div 
              key={msg.id} 
              className={`mb-3 flex ${msg.sender === "victim" ? "justify-end" : "justify-start"}`}
            >
              <div 
                className={`max-w-[80%] rounded-lg p-2.5 ${
                  msg.sender === "victim" 
                    ? "bg-blue-500 text-white rounded-br-none" 
                    : "bg-gray-200 text-gray-800 rounded-bl-none"
                }`}
              >
                <p className="text-sm">{msg.text}</p>
                <p className={`text-[10px] mt-1 ${msg.sender === "victim" ? "text-blue-100" : "text-gray-500"}`}>
                  {msg.time}
                </p>
              </div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>
        
        {/* Input area */}
        <div className="p-2 border-t border-gray-200 bg-white">
          <div className="bg-gray-100 rounded-full px-4 py-2 text-sm text-gray-400 flex items-center">
            <span>메시지 입력...</span>
          </div>
        </div>
      </div>
    </div>
  )
}