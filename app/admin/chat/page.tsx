"use client"

import { useState, useEffect } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { MessageSquare, Users, Clock, TrendingUp, Phone, Video } from 'lucide-react'
import Link from 'next/link'

interface ChatSession {
  id: string
  user_name: string
  user_email: string
  status: 'active' | 'waiting' | 'ended'
  started_at: string
  last_message: string
  urgency: 'emergency' | 'urgent' | 'normal'
  unread_count: number
}

export default function AdminChatPage() {
  const [sessions, setSessions] = useState<ChatSession[]>([
    {
      id: '1',
      user_name: '김민수',
      user_email: 'user1@example.com',
      status: 'active',
      started_at: '2024-01-18T14:30:00Z',
      last_message: '도움이 필요합니다. 몸캠피싱 피해를 당했어요.',
      urgency: 'emergency',
      unread_count: 3
    },
    {
      id: '2',
      user_name: '이지은',
      user_email: 'user2@example.com',
      status: 'waiting',
      started_at: '2024-01-18T15:45:00Z',
      last_message: '딥페이크 영상 탐지 문의드립니다.',
      urgency: 'normal',
      unread_count: 1
    },
    {
      id: '3',
      user_name: '박철수',
      user_email: 'user3@example.com',
      status: 'active',
      started_at: '2024-01-18T16:20:00Z',
      last_message: '상담 감사했습니다.',
      urgency: 'urgent',
      unread_count: 0
    }
  ])

  const [stats, setStats] = useState({
    active_sessions: 2,
    waiting_sessions: 1,
    today_sessions: 15,
    response_time: '2분'
  })

  const getUrgencyColor = (urgency: string) => {
    switch (urgency) {
      case 'emergency': return 'bg-red-500'
      case 'urgent': return 'bg-orange-500'
      default: return 'bg-green-500'
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'text-green-600 bg-green-50'
      case 'waiting': return 'text-orange-600 bg-orange-50'
      case 'ended': return 'text-gray-600 bg-gray-50'
      default: return 'text-gray-600 bg-gray-50'
    }
  }

  const formatTime = (timestamp: string) => {
    const date = new Date(timestamp)
    const now = new Date()
    const diff = now.getTime() - date.getTime()
    const minutes = Math.floor(diff / (1000 * 60))
    
    if (minutes < 60) {
      return `${minutes}분 전`
    } else if (minutes < 1440) {
      return `${Math.floor(minutes / 60)}시간 전`
    } else {
      return date.toLocaleDateString('ko-KR')
    }
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">실시간 상담 관리</h1>
        <p className="text-gray-600">진행 중인 상담 세션을 관리하고 모니터링하세요</p>
      </div>

      {/* Stats */}
      <div className="grid md:grid-cols-4 gap-6 mb-8">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">활성 상담</p>
                <p className="text-2xl font-bold text-green-600">{stats.active_sessions}</p>
              </div>
              <MessageSquare className="h-8 w-8 text-green-600" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">대기 중</p>
                <p className="text-2xl font-bold text-orange-600">{stats.waiting_sessions}</p>
              </div>
              <Clock className="h-8 w-8 text-orange-600" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">오늘 상담</p>
                <p className="text-2xl font-bold text-blue-600">{stats.today_sessions}</p>
              </div>
              <Users className="h-8 w-8 text-blue-600" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">평균 응답시간</p>
                <p className="text-2xl font-bold text-purple-600">{stats.response_time}</p>
              </div>
              <TrendingUp className="h-8 w-8 text-purple-600" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Active Sessions */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MessageSquare className="h-5 w-5" />
            상담 세션 목록
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {sessions.map((session) => (
              <div
                key={session.id}
                className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <div className="relative">
                    <Avatar>
                      <AvatarFallback className="bg-blue-600 text-white">
                        {session.user_name.charAt(0)}
                      </AvatarFallback>
                    </Avatar>
                    <div className={`absolute -top-1 -right-1 w-4 h-4 rounded-full ${getUrgencyColor(session.urgency)}`}></div>
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-semibold">{session.user_name}</h3>
                      <Badge className={getStatusColor(session.status)}>
                        {session.status === 'active' ? '진행중' : 
                         session.status === 'waiting' ? '대기중' : '종료'}
                      </Badge>
                      {session.urgency === 'emergency' && (
                        <Badge variant="destructive" className="text-xs">긴급</Badge>
                      )}
                      {session.unread_count > 0 && (
                        <Badge variant="secondary" className="text-xs">
                          {session.unread_count}개 메시지
                        </Badge>
                      )}
                    </div>
                    <p className="text-sm text-gray-600 mb-1">{session.user_email}</p>
                    <p className="text-sm text-gray-800 truncate max-w-md">{session.last_message}</p>
                    <p className="text-xs text-gray-500 mt-1">{formatTime(session.started_at)}</p>
                  </div>
                </div>

                <div className="flex gap-2">
                  <Button variant="outline" size="sm">
                    <Phone className="h-4 w-4 mr-1" />
                    통화
                  </Button>
                  <Button variant="outline" size="sm">
                    <Video className="h-4 w-4 mr-1" />
                    화상
                  </Button>
                  <Button asChild>
                    <Link href={`/admin/chat/${session.id}`}>
                      <MessageSquare className="h-4 w-4 mr-1" />
                      상담하기
                    </Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>

          {sessions.length === 0 && (
            <div className="text-center py-12">
              <MessageSquare className="h-16 w-16 mx-auto mb-4 text-gray-400" />
              <h3 className="text-lg font-semibold text-gray-600 mb-2">진행 중인 상담이 없습니다</h3>
              <p className="text-gray-500">새로운 상담 요청을 기다리고 있습니다.</p>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Quick Actions */}
      <div className="mt-8 grid md:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">빠른 작업</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <Button className="w-full" variant="outline">
              <Users className="h-4 w-4 mr-2" />
              모든 대기 상담 확인
            </Button>
            <Button className="w-full" variant="outline">
              <Clock className="h-4 w-4 mr-2" />
              응답 시간 통계
            </Button>
            <Button className="w-full" variant="outline">
              <TrendingUp className="h-4 w-4 mr-2" />
              상담 분석 리포트
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg">상담사 상태</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm">김보안 상담사</span>
                <Badge className="bg-green-100 text-green-800">온라인</Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">박전문 상담사</span>
                <Badge className="bg-green-100 text-green-800">온라인</Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">이상담 상담사</span>
                <Badge className="bg-gray-100 text-gray-800">오프라인</Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg">긴급 연락처</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="text-sm">
              <p className="font-semibold">경찰청 사이버수사대</p>
              <p className="text-gray-600">182 (24시간)</p>
            </div>
            <div className="text-sm">
              <p className="font-semibold">upoZero 긴급 핫라인</p>
              <p className="text-gray-600">1668-2293</p>
            </div>
            <Button variant="destructive" size="sm" className="w-full">
              <Phone className="h-4 w-4 mr-2" />
              긴급 상황 신고
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
