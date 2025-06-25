import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Users,
  MessageSquare,
  Shield,
  TrendingUp,
  AlertTriangle,
  CheckCircle,
  Clock,
  Eye,
  FileText,
  Settings,
  LogOut,
} from "lucide-react"
import Link from "next/link"

export default function AdminDashboard() {
  const stats = [
    {
      title: "총 사용자",
      value: "12,847",
      change: "+12%",
      changeType: "increase" as const,
      icon: Users,
    },
    {
      title: "활성 상담",
      value: "156",
      change: "+8%",
      changeType: "increase" as const,
      icon: MessageSquare,
    },
    {
      title: "보안 위협 차단",
      value: "2,341",
      change: "+23%",
      changeType: "increase" as const,
      icon: Shield,
    },
    {
      title: "시스템 가동률",
      value: "99.9%",
      change: "0%",
      changeType: "neutral" as const,
      icon: TrendingUp,
    },
  ]

  const recentConsultations = [
    {
      id: "C-2024-001",
      type: "몸캠피싱",
      status: "진행중",
      priority: "긴급",
      createdAt: "2024-01-20 14:30",
      user: "김**",
    },
    {
      id: "C-2024-002",
      type: "딥페이크",
      status: "완료",
      priority: "높음",
      createdAt: "2024-01-20 13:15",
      user: "이**",
    },
    {
      id: "C-2024-003",
      type: "일반 보안",
      status: "대기",
      priority: "보통",
      createdAt: "2024-01-20 12:45",
      user: "박**",
    },
    {
      id: "C-2024-004",
      type: "기업 상담",
      status: "진행중",
      priority: "높음",
      createdAt: "2024-01-20 11:20",
      user: "삼성전자",
    },
  ]

  const securityAlerts = [
    {
      id: "A-001",
      type: "딥페이크 탐지",
      message: "의심스러운 딥페이크 콘텐츠 5건 탐지됨",
      severity: "high",
      time: "5분 전",
    },
    {
      id: "A-002",
      type: "시스템 모니터링",
      message: "서버 CPU 사용률 85% 도달",
      severity: "medium",
      time: "15분 전",
    },
    {
      id: "A-003",
      type: "사용자 활동",
      message: "비정상적인 로그인 시도 감지",
      severity: "high",
      time: "1시간 전",
    },
  ]

  const systemStatus = [
    { name: "웹 서버", status: "정상", uptime: "99.9%" },
    { name: "데이터베이스", status: "정상", uptime: "99.8%" },
    { name: "AI 분석 엔진", status: "정상", uptime: "99.7%" },
    { name: "모니터링 시스템", status: "점검중", uptime: "98.5%" },
  ]

  return (
    <div className="space-y-6">
      {/* Stats Cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <Card key={stat.title}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
              <stat.icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <p
                className={`text-xs ${
                  stat.changeType === "increase"
                    ? "text-green-600"
                    : stat.changeType === "decrease"
                      ? "text-red-600"
                      : "text-gray-600"
                }`}
              >
                {stat.change} 지난 달 대비
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {/* Recent Consultations */}
        <Card>
          <CardHeader>
            <CardTitle>최근 상담 요청</CardTitle>
            <CardDescription>최근 접수된 상담 요청 현황</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentConsultations.map((consultation) => (
                <div key={consultation.id} className="flex items-center justify-between p-3 border rounded-lg">
                  <div className="space-y-1">
                    <div className="flex items-center space-x-2">
                      <span className="font-medium">{consultation.id}</span>
                      <Badge variant="outline">{consultation.type}</Badge>
                      <Badge
                        variant={
                          consultation.priority === "긴급"
                            ? "destructive"
                            : consultation.priority === "높음"
                              ? "default"
                              : "secondary"
                        }
                      >
                        {consultation.priority}
                      </Badge>
                    </div>
                    <div className="text-sm text-gray-600">
                      {consultation.user} • {consultation.createdAt}
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Badge
                      variant={
                        consultation.status === "완료"
                          ? "default"
                          : consultation.status === "진행중"
                            ? "secondary"
                            : "outline"
                      }
                    >
                      {consultation.status}
                    </Badge>
                    <Button size="sm" variant="ghost">
                      <Eye className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-4">
              <Button asChild variant="outline" className="w-full">
                <Link href="/admin/consultations">모든 상담 보기</Link>
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Security Alerts */}
        <Card>
          <CardHeader>
            <CardTitle>보안 알림</CardTitle>
            <CardDescription>실시간 보안 모니터링 알림</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {securityAlerts.map((alert) => (
                <div key={alert.id} className="flex items-start space-x-3 p-3 border rounded-lg">
                  <div
                    className={`mt-1 h-2 w-2 rounded-full ${
                      alert.severity === "high"
                        ? "bg-red-500"
                        : alert.severity === "medium"
                          ? "bg-yellow-500"
                          : "bg-green-500"
                    }`}
                  />
                  <div className="flex-1 space-y-1">
                    <div className="flex items-center justify-between">
                      <span className="font-medium text-sm">{alert.type}</span>
                      <span className="text-xs text-gray-500">{alert.time}</span>
                    </div>
                    <p className="text-sm text-gray-600">{alert.message}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-4">
              <Button asChild variant="outline" className="w-full">
                <Link href="/admin/security">보안 모니터링 보기</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {/* System Status */}
        <Card>
          <CardHeader>
            <CardTitle>시스템 상태</CardTitle>
            <CardDescription>주요 시스템 컴포넌트 상태</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {systemStatus.map((system) => (
                <div key={system.name} className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    {system.status === "정상" ? (
                      <CheckCircle className="h-5 w-5 text-green-500" />
                    ) : system.status === "점검중" ? (
                      <Clock className="h-5 w-5 text-yellow-500" />
                    ) : (
                      <AlertTriangle className="h-5 w-5 text-red-500" />
                    )}
                    <span className="font-medium">{system.name}</span>
                  </div>
                  <div className="text-right">
                    <div
                      className={`text-sm font-medium ${
                        system.status === "정상"
                          ? "text-green-600"
                          : system.status === "점검중"
                            ? "text-yellow-600"
                            : "text-red-600"
                      }`}
                    >
                      {system.status}
                    </div>
                    <div className="text-xs text-gray-500">가동률 {system.uptime}</div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <Card>
          <CardHeader>
            <CardTitle>빠른 작업</CardTitle>
            <CardDescription>자주 사용하는 관리 기능</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-3">
              <Button asChild variant="outline" className="justify-start">
                <Link href="/admin/consultations/new">
                  <MessageSquare className="mr-2 h-4 w-4" />새 상담 등록
                </Link>
              </Button>
              <Button asChild variant="outline" className="justify-start">
                <Link href="/admin/content/articles/new">
                  <FileText className="mr-2 h-4 w-4" />새 글 작성
                </Link>
              </Button>
              <Button asChild variant="outline" className="justify-start">
                <Link href="/admin/users">
                  <Users className="mr-2 h-4 w-4" />
                  사용자 관리
                </Link>
              </Button>
              <Button asChild variant="outline" className="justify-start">
                <Link href="/admin/security">
                  <Shield className="mr-2 h-4 w-4" />
                  보안 모니터링
                </Link>
              </Button>
              <Button asChild variant="outline" className="justify-start">
                <Link href="/admin/analytics">
                  <TrendingUp className="mr-2 h-4 w-4" />
                  분석 보고서
                </Link>
              </Button>
              <Button asChild variant="outline" className="justify-start">
                <Link href="/admin/settings">
                  <Settings className="mr-2 h-4 w-4" />
                  시스템 설정
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}