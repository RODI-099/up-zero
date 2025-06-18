"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  User,
  FileText,
  Shield,
  Download,
  MessageSquare,
  Bell,
  Settings,
  LogOut,
  AlertTriangle,
  CheckCircle,
  Clock,
  Eye,
  Calendar,
  Phone,
} from "lucide-react"

interface Consultation {
  id: number
  userId: string | null
  name: string
  email: string
  phone: string
  consultationType: string
  urgency: string
  preferredContact: string
  preferredTime: string
  details: string
  status: string
  submittedAt: string
  assignedTo: string | null
  notes: any[]
}

export default function DashboardPage() {
  const [userInfo, setUserInfo] = useState({ email: "", name: "" })
  const [consultations, setConsultations] = useState<Consultation[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    const checkAuth = () => {
      // Check if user is logged in
      const userSession = document.cookie.split("; ").find((row) => row.startsWith("user_session="))

      if (!userSession) {
        router.push("/auth/login")
        return
      }

      // Get user info from cookies
      const email =
        document.cookie
          .split("; ")
          .find((row) => row.startsWith("user_email="))
          ?.split("=")[1] || ""

      const name =
        document.cookie
          .split("; ")
          .find((row) => row.startsWith("user_name="))
          ?.split("=")[1] || ""

      setUserInfo({ email, name: name || email.split("@")[0] })

      // Load user's consultations
      const userConsultations = JSON.parse(localStorage.getItem(`user_consultations_${email}`) || "[]")
      setConsultations(userConsultations)
      setIsLoading(false)
    }

    checkAuth()
  }, [])

  const handleLogout = () => {
    // Clear cookies
    document.cookie = "user_session=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT"
    document.cookie = "user_email=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT"
    document.cookie = "user_name=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT"

    router.push("/")
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "긴급 처리중":
        return "destructive"
      case "진행중":
        return "secondary"
      case "완료":
        return "default"
      case "접수 완료":
        return "outline"
      default:
        return "secondary"
    }
  }

  const getConsultationIcon = (type: string) => {
    switch (type) {
      case "몸캠피싱":
        return <AlertTriangle className="h-8 w-8 text-red-600" />
      case "딥페이크":
        return <Shield className="h-8 w-8 text-blue-600" />
      case "일반 보안":
        return <Shield className="h-8 w-8 text-green-600" />
      case "보안 교육":
        return <FileText className="h-8 w-8 text-purple-600" />
      default:
        return <MessageSquare className="h-8 w-8 text-gray-600" />
    }
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("ko-KR", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    })
  }

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-2 text-gray-600">로딩 중...</p>
        </div>
      </div>
    )
  }

  const completedConsultations = consultations.filter((c) => c.status === "완료").length
  const inProgressConsultations = consultations.filter(
    (c) => c.status === "진행중" || c.status === "긴급 처리중",
  ).length
  const totalConsultations = consultations.length

  const recentActivity = consultations
    .map((consultation) => ({
      id: consultation.id,
      action: "상담 신청",
      description: `${consultation.consultationType} 상담을 신청했습니다`,
      time: formatDate(consultation.submittedAt),
    }))
    .slice(0, 3)

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link href="/" className="text-2xl font-bold text-blue-600">
                upoZero
              </Link>
              <Badge variant="secondary">대시보드</Badge>
            </div>

            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="icon">
                <Bell className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon">
                <Settings className="h-4 w-4" />
              </Button>
              <Button variant="ghost" onClick={handleLogout}>
                <LogOut className="h-4 w-4 mr-2" />
                로그아웃
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">안녕하세요, {userInfo.name}님! 👋</h1>
          <p className="text-gray-600">upoZero 대시보드에서 상담 현황과 보안 정보를 확인하세요.</p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <MessageSquare className="h-8 w-8 text-blue-600" />
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">총 상담</p>
                  <p className="text-2xl font-bold">{totalConsultations}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <Clock className="h-8 w-8 text-orange-600" />
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">진행중</p>
                  <p className="text-2xl font-bold">{inProgressConsultations}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <CheckCircle className="h-8 w-8 text-green-600" />
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">완료</p>
                  <p className="text-2xl font-bold">{completedConsultations}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <Download className="h-8 w-8 text-purple-600" />
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">다운로드</p>
                  <p className="text-2xl font-bold">3</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Consultations */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <MessageSquare className="h-5 w-5 mr-2" />
                  나의 상담 현황
                </CardTitle>
                <CardDescription>신청한 상담의 진행 상황을 확인하세요</CardDescription>
              </CardHeader>
              <CardContent>
                {consultations.length === 0 ? (
                  <div className="text-center py-8">
                    <MessageSquare className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                    <p className="text-gray-600 mb-4">아직 신청한 상담이 없습니다.</p>
                    <Button asChild>
                      <Link href="/consultation">첫 상담 신청하기</Link>
                    </Button>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {consultations.map((consultation) => (
                      <div key={consultation.id} className="border rounded-lg p-4">
                        <div className="flex items-start justify-between">
                          <div className="flex items-start space-x-4">
                            <div className="flex-shrink-0">{getConsultationIcon(consultation.consultationType)}</div>
                            <div className="flex-1">
                              <div className="flex items-center space-x-2 mb-2">
                                <h3 className="font-medium">{consultation.consultationType} 상담</h3>
                                <Badge variant={getStatusColor(consultation.status)}>{consultation.status}</Badge>
                              </div>
                              <p className="text-sm text-gray-600 mb-2">
                                {consultation.details || "상담 내용이 없습니다."}
                              </p>
                              <div className="flex items-center space-x-4 text-xs text-gray-500">
                                <div className="flex items-center">
                                  <Calendar className="h-3 w-3 mr-1" />
                                  {formatDate(consultation.submittedAt)}
                                </div>
                                <div className="flex items-center">
                                  <Phone className="h-3 w-3 mr-1" />
                                  {consultation.preferredContact || "연락 방법 미지정"}
                                </div>
                                {consultation.urgency && (
                                  <div className="flex items-center">
                                    <AlertTriangle className="h-3 w-3 mr-1" />
                                    {consultation.urgency}
                                  </div>
                                )}
                              </div>
                            </div>
                          </div>
                          <Button variant="ghost" size="sm">
                            <Eye className="h-4 w-4 mr-1" />
                            상세보기
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                <div className="mt-6">
                  <Button asChild className="w-full">
                    <Link href="/consultation">새 상담 신청</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle>빠른 실행</CardTitle>
                <CardDescription>자주 사용하는 기능들을 빠르게 이용하세요</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  <Button variant="outline" asChild className="h-20 flex-col">
                    <Link href="/consultation/bodycam">
                      <AlertTriangle className="h-6 w-6 mb-2" />
                      몸캠피싱 상담
                    </Link>
                  </Button>

                  <Button variant="outline" asChild className="h-20 flex-col">
                    <Link href="/consultation/deepfake">
                      <Shield className="h-6 w-6 mb-2" />
                      딥페이크 상담
                    </Link>
                  </Button>

                  <Button variant="outline" asChild className="h-20 flex-col">
                    <Link href="/pr/brochure">
                      <Download className="h-6 w-6 mb-2" />
                      자료 다운로드
                    </Link>
                  </Button>

                  <Button variant="outline" asChild className="h-20 flex-col">
                    <Link href="/services">
                      <FileText className="h-6 w-6 mb-2" />
                      서비스 안내
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Profile Card */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <User className="h-5 w-5 mr-2" />
                  프로필
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm font-medium text-gray-600">이름</p>
                    <p className="text-lg">{userInfo.name}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-600">이메일</p>
                    <p className="text-sm">{userInfo.email}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-600">가입일</p>
                    <p className="text-sm">2024년 6월</p>
                  </div>
                  <Button variant="outline" className="w-full">
                    프로필 수정
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Recent Activity */}
            <Card>
              <CardHeader>
                <CardTitle>최근 활동</CardTitle>
              </CardHeader>
              <CardContent>
                {recentActivity.length === 0 ? (
                  <p className="text-gray-600 text-sm">최근 활동이 없습니다.</p>
                ) : (
                  <div className="space-y-4">
                    {recentActivity.map((activity) => (
                      <div key={activity.id} className="flex items-start space-x-3">
                        <div className="flex-shrink-0 w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium">{activity.action}</p>
                          <p className="text-xs text-gray-600">{activity.description}</p>
                          <p className="text-xs text-gray-400 mt-1">{activity.time}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Security Tips */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Shield className="h-5 w-5 mr-2" />
                  보안 팁
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="p-3 bg-blue-50 rounded-lg">
                    <p className="text-sm font-medium text-blue-900">정기적인 비밀번호 변경</p>
                    <p className="text-xs text-blue-700 mt-1">계정 보안을 위해 3개월마다 비밀번호를 변경하세요.</p>
                  </div>
                  <div className="p-3 bg-green-50 rounded-lg">
                    <p className="text-sm font-medium text-green-900">의심스러운 링크 주의</p>
                    <p className="text-xs text-green-700 mt-1">출처가 불분명한 링크는 클릭하지 마세요.</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
