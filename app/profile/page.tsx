"use client"

import { useAuth } from "@/components/auth/auth-context"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import { User, Mail, Calendar, Shield, FileText, Settings } from "lucide-react"
import { useRouter } from "next/navigation"
import { useEffect } from "react"

export const dynamic = 'force-dynamic'

export default function ProfilePage() {
  const { user } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (!user) {
      router.push('/')
    }
  }, [user, router])

  if (!user) {
    return null
  }

  const joinDate = new Date().toLocaleDateString('ko-KR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-2">내 프로필</h1>
          <p className="text-gray-600">계정 정보 및 서비스 이용 현황을 확인하세요</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Profile Info */}
          <div className="lg:col-span-2 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <User className="h-5 w-5" />
                  기본 정보
                </CardTitle>
                <CardDescription>계정의 기본 정보를 관리합니다</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">이름</Label>
                    <Input id="name" value={user.name} readOnly />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">이메일</Label>
                    <Input id="email" value={user.email} readOnly />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="join-date">가입일</Label>
                  <Input id="join-date" value={joinDate} readOnly />
                </div>
                <Button>
                  <Settings className="mr-2 h-4 w-4" />
                  정보 수정
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="h-5 w-5" />
                  보안 설정
                </CardTitle>
                <CardDescription>계정 보안을 강화하세요</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium">비밀번호</h3>
                    <p className="text-sm text-gray-600">마지막 변경: 2024년 1월 20일</p>
                  </div>
                  <Button variant="outline" size="sm">변경</Button>
                </div>
                <Separator />
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium">2단계 인증</h3>
                    <p className="text-sm text-gray-600">추가 보안을 위해 2단계 인증을 설정하세요</p>
                  </div>
                  <Button variant="outline" size="sm">설정</Button>
                </div>
                <Separator />
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium">로그인 알림</h3>
                    <p className="text-sm text-gray-600">새로운 기기에서 로그인 시 알림 받기</p>
                  </div>
                  <Badge variant="secondary">활성화</Badge>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="h-5 w-5" />
                  상담 내역
                </CardTitle>
                <CardDescription>최근 상담 및 서비스 이용 내역</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 border rounded-lg">
                    <div>
                      <h3 className="font-medium">몸캠피싱 상담</h3>
                      <p className="text-sm text-gray-600">2024년 1월 15일</p>
                    </div>
                    <Badge>완료</Badge>
                  </div>
                  <div className="flex items-center justify-between p-4 border rounded-lg">
                    <div>
                      <h3 className="font-medium">딥페이크 탐지 서비스</h3>
                      <p className="text-sm text-gray-600">2024년 1월 10일</p>
                    </div>
                    <Badge variant="secondary">진행중</Badge>
                  </div>
                  <Button variant="outline" className="w-full">
                    전체 내역 보기
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>계정 상태</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">계정 유형</span>
                    <Badge>일반 회원</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">인증 상태</span>
                    <Badge variant="secondary">이메일 인증</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">보안 점수</span>
                    <Badge variant="outline">85/100</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>빠른 액션</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <Button variant="outline" className="w-full justify-start">
                  <Shield className="mr-2 h-4 w-4" />
                  긴급 상담 신청
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <FileText className="mr-2 h-4 w-4" />
                  서비스 신청
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Mail className="mr-2 h-4 w-4" />
                  문의하기
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>알림 설정</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">이메일 알림</span>
                    <Badge>ON</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">보안 알림</span>
                    <Badge>ON</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">마케팅 알림</span>
                    <Badge variant="outline">OFF</Badge>
                  </div>
                  <Button variant="outline" size="sm" className="w-full">
                    설정 변경
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}