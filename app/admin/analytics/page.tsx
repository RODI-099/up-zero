export const dynamic = 'force-dynamic'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { TrendingUp, Users, Eye, MessageSquare, Download, Calendar, BarChart3, PieChart, Activity } from "lucide-react"

export default function AnalyticsPage() {
  const overviewStats = [
    { label: "총 방문자", value: "45,231", change: "+12.5%", trend: "up" },
    { label: "페이지뷰", value: "128,492", change: "+8.2%", trend: "up" },
    { label: "상담 전환율", value: "3.4%", change: "+0.8%", trend: "up" },
    { label: "평균 세션 시간", value: "4:32", change: "-0:15", trend: "down" },
  ]

  const topPages = [
    { page: "홈페이지", views: "23,451", percentage: "18.3%" },
    { page: "서비스 안내", views: "18,234", percentage: "14.2%" },
    { page: "상담 신청", views: "12,876", percentage: "10.0%" },
    { page: "매거진", views: "9,543", percentage: "7.4%" },
    { page: "회사 소개", views: "7,892", percentage: "6.1%" },
  ]

  const consultationStats = [
    { type: "몸캠피싱", count: 89, percentage: "35.6%" },
    { type: "딥페이크", count: 67, percentage: "26.8%" },
    { type: "일반 보안", count: 45, percentage: "18.0%" },
    { type: "기업 상담", count: 32, percentage: "12.8%" },
    { type: "교육 문의", count: 17, percentage: "6.8%" },
  ]

  const trafficSources = [
    { source: "직접 방문", visitors: "18,234", percentage: "40.3%" },
    { source: "검색 엔진", visitors: "12,876", percentage: "28.5%" },
    { source: "소셜 미디어", visitors: "7,892", percentage: "17.4%" },
    { source: "추천 사이트", visitors: "4,321", percentage: "9.6%" },
    { source: "이메일", visitors: "1,908", percentage: "4.2%" },
  ]

  const deviceStats = [
    { device: "데스크톱", users: "25,432", percentage: "56.2%" },
    { device: "모바일", users: "17,891", percentage: "39.6%" },
    { device: "태블릿", users: "1,908", percentage: "4.2%" },
  ]

  return (
    <div className="space-y-6">
      {/* Overview Stats */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {overviewStats.map((stat) => (
          <Card key={stat.label}>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">{stat.label}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <p className={`text-xs flex items-center ${stat.trend === "up" ? "text-green-600" : "text-red-600"}`}>
                <TrendingUp className={`h-3 w-3 mr-1 ${stat.trend === "down" ? "rotate-180" : ""}`} />
                {stat.change} 지난 달 대비
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Charts Section */}
      <div className="grid gap-6 lg:grid-cols-2">
        {/* Website Traffic */}
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="flex items-center gap-2">
                  <BarChart3 className="h-5 w-5 text-blue-500" />
                  웹사이트 트래픽
                </CardTitle>
                <CardDescription>최근 30일간 방문자 추이</CardDescription>
              </div>
              <Button size="sm" variant="outline">
                <Download className="h-4 w-4 mr-2" />
                내보내기
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="h-64 bg-gray-50 rounded-lg flex items-center justify-center">
              <div className="text-center text-gray-500">
                <BarChart3 className="h-12 w-12 mx-auto mb-2" />
                <p>트래픽 차트가 여기에 표시됩니다</p>
                <p className="text-sm">실제 구현 시 Chart.js 또는 Recharts 사용</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Consultation Types */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <PieChart className="h-5 w-5 text-green-500" />
              상담 유형별 분석
            </CardTitle>
            <CardDescription>상담 유형별 비율 (최근 30일)</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {consultationStats.map((stat, index) => (
                <div key={stat.type} className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div
                      className={`w-3 h-3 rounded-full ${
                        index === 0
                          ? "bg-blue-500"
                          : index === 1
                            ? "bg-green-500"
                            : index === 2
                              ? "bg-yellow-500"
                              : index === 3
                                ? "bg-purple-500"
                                : "bg-gray-500"
                      }`}
                    />
                    <span className="font-medium">{stat.type}</span>
                  </div>
                  <div className="text-right">
                    <div className="font-bold">{stat.count}</div>
                    <div className="text-sm text-gray-500">{stat.percentage}</div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {/* Top Pages */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Eye className="h-5 w-5 text-purple-500" />
              인기 페이지
            </CardTitle>
            <CardDescription>가장 많이 방문한 페이지</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {topPages.map((page, index) => (
                <div key={page.page} className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center text-xs font-bold text-blue-600">
                      {index + 1}
                    </div>
                    <span className="font-medium">{page.page}</span>
                  </div>
                  <div className="text-right">
                    <div className="font-bold">{page.views}</div>
                    <div className="text-sm text-gray-500">{page.percentage}</div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Traffic Sources */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Activity className="h-5 w-5 text-orange-500" />
              트래픽 소스
            </CardTitle>
            <CardDescription>방문자 유입 경로</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {trafficSources.map((source) => (
                <div key={source.source} className="flex items-center justify-between">
                  <span className="font-medium">{source.source}</span>
                  <div className="text-right">
                    <div className="font-bold">{source.visitors}</div>
                    <div className="text-sm text-gray-500">{source.percentage}</div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {/* Device Statistics */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="h-5 w-5 text-indigo-500" />
              기기별 사용자
            </CardTitle>
            <CardDescription>접속 기기 분석</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {deviceStats.map((device) => (
                <div key={device.device} className="flex items-center justify-between">
                  <span className="font-medium">{device.device}</span>
                  <div className="text-right">
                    <div className="font-bold">{device.users}</div>
                    <div className="text-sm text-gray-500">{device.percentage}</div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Conversion Metrics */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MessageSquare className="h-5 w-5 text-teal-500" />
              전환 지표
            </CardTitle>
            <CardDescription>상담 전환 성과</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="text-center p-4 border rounded-lg">
                <div className="text-2xl font-bold text-blue-600">3.4%</div>
                <div className="text-sm text-gray-500">전체 전환율</div>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>홈페이지 → 상담</span>
                  <span className="font-medium">4.2%</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>서비스 → 상담</span>
                  <span className="font-medium">6.8%</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>매거진 → 상담</span>
                  <span className="font-medium">2.1%</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Performance Metrics */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-red-500" />
              성과 지표
            </CardTitle>
            <CardDescription>주요 성과 측정</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="text-center p-4 border rounded-lg">
                <div className="text-2xl font-bold text-green-600">89%</div>
                <div className="text-sm text-gray-500">고객 만족도</div>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>응답 시간</span>
                  <span className="font-medium">&lt; 2시간</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>해결율</span>
                  <span className="font-medium">94.2%</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>재방문율</span>
                  <span className="font-medium">67.8%</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Report Generation */}
      <Card>
        <CardHeader>
          <CardTitle>보고서 생성</CardTitle>
          <CardDescription>맞춤형 분석 보고서를 생성하고 다운로드하세요</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Button variant="outline" className="justify-start">
              <Calendar className="mr-2 h-4 w-4" />
              월간 보고서
            </Button>
            <Button variant="outline" className="justify-start">
              <Users className="mr-2 h-4 w-4" />
              사용자 분석
            </Button>
            <Button variant="outline" className="justify-start">
              <MessageSquare className="mr-2 h-4 w-4" />
              상담 통계
            </Button>
            <Button variant="outline" className="justify-start">
              <TrendingUp className="mr-2 h-4 w-4" />
              성과 리포트
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}