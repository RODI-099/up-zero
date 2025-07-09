export const dynamic = 'force-dynamic'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Shield, AlertTriangle, Eye, Activity, Server, Lock, Wifi, Database, RefreshCw } from "lucide-react"

export default function SecurityPage() {
  const securityMetrics = [
    { label: "위협 탐지", value: "2,341", change: "+23%", status: "high" },
    { label: "차단된 공격", value: "1,892", change: "+18%", status: "success" },
    { label: "활성 모니터링", value: "99.9%", change: "0%", status: "success" },
    { label: "보안 알림", value: "47", change: "+12%", status: "warning" },
  ]

  const threatDetections = [
    {
      id: "T-001",
      type: "딥페이크 탐지",
      severity: "높음",
      source: "YouTube",
      description: "의심스러운 딥페이크 영상 5건 탐지",
      time: "5분 전",
      status: "처리중",
    },
    {
      id: "T-002",
      type: "몸캠피싱 시도",
      severity: "긴급",
      source: "Telegram",
      description: "몸캠피싱 공격 패턴 감지",
      time: "12분 전",
      status: "차단됨",
    },
    {
      id: "T-003",
      type: "비정상 접근",
      severity: "중간",
      source: "웹 서버",
      description: "비정상적인 로그인 시도 감지",
      time: "1시간 전",
      status: "모니터링",
    },
    {
      id: "T-004",
      type: "악성 URL",
      severity: "높음",
      source: "이메일",
      description: "피싱 이메일 내 악성 링크 탐지",
      time: "2시간 전",
      status: "차단됨",
    },
  ]

  const systemHealth = [
    { name: "AI 탐지 엔진", status: "정상", cpu: "45%", memory: "62%", uptime: "99.9%" },
    { name: "모니터링 시스템", status: "정상", cpu: "32%", memory: "48%", uptime: "99.8%" },
    { name: "데이터베이스", status: "정상", cpu: "28%", memory: "71%", uptime: "99.7%" },
    { name: "웹 서버", status: "점검중", cpu: "85%", memory: "89%", uptime: "98.5%" },
  ]

  const securityPolicies = [
    { name: "딥페이크 탐지 정책", status: "활성", lastUpdate: "2024-01-15" },
    { name: "몸캠피싱 차단 정책", status: "활성", lastUpdate: "2024-01-18" },
    { name: "접근 제어 정책", status: "활성", lastUpdate: "2024-01-10" },
    { name: "데이터 보호 정책", status: "비활성", lastUpdate: "2024-01-05" },
  ]

  return (
    <div className="space-y-6">
      {/* Security Metrics */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {securityMetrics.map((metric) => (
          <Card key={metric.label}>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">{metric.label}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{metric.value}</div>
              <p
                className={`text-xs ${
                  metric.status === "success"
                    ? "text-green-600"
                    : metric.status === "warning"
                      ? "text-yellow-600"
                      : "text-red-600"
                }`}
              >
                {metric.change} 지난 달 대비
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {/* Real-time Threat Detection */}
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="flex items-center gap-2">
                  <AlertTriangle className="h-5 w-5 text-red-500" />
                  실시간 위협 탐지
                </CardTitle>
                <CardDescription>최근 탐지된 보안 위협 현황</CardDescription>
              </div>
              <Button size="sm" variant="outline">
                <RefreshCw className="h-4 w-4 mr-2" />
                새로고침
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {threatDetections.map((threat) => (
                <div key={threat.id} className="border rounded-lg p-4">
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex items-center space-x-2">
                      <Badge
                        variant={
                          threat.severity === "긴급"
                            ? "destructive"
                            : threat.severity === "높음"
                              ? "default"
                              : "secondary"
                        }
                      >
                        {threat.severity}
                      </Badge>
                      <span className="font-medium">{threat.type}</span>
                    </div>
                    <span className="text-xs text-gray-500">{threat.time}</span>
                  </div>
                  <p className="text-sm text-gray-600 mb-2">{threat.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-500">출처: {threat.source}</span>
                    <Badge
                      variant={
                        threat.status === "차단됨" ? "default" : threat.status === "처리중" ? "secondary" : "outline"
                      }
                    >
                      {threat.status}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* System Health */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Activity className="h-5 w-5 text-green-500" />
              시스템 상태
            </CardTitle>
            <CardDescription>보안 시스템 컴포넌트 상태</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {systemHealth.map((system) => (
                <div key={system.name} className="border rounded-lg p-4">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-2">
                      <Server className="h-4 w-4 text-gray-500" />
                      <span className="font-medium">{system.name}</span>
                    </div>
                    <Badge
                      variant={
                        system.status === "정상" ? "default" : system.status === "점검중" ? "secondary" : "destructive"
                      }
                    >
                      {system.status}
                    </Badge>
                  </div>
                  <div className="grid grid-cols-3 gap-4 text-sm">
                    <div>
                      <div className="text-gray-500">CPU</div>
                      <div className="font-medium">{system.cpu}</div>
                    </div>
                    <div>
                      <div className="text-gray-500">메모리</div>
                      <div className="font-medium">{system.memory}</div>
                    </div>
                    <div>
                      <div className="text-gray-500">가동률</div>
                      <div className="font-medium">{system.uptime}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {/* Security Policies */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Lock className="h-5 w-5 text-blue-500" />
              보안 정책
            </CardTitle>
            <CardDescription>활성화된 보안 정책 현황</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {securityPolicies.map((policy) => (
                <div key={policy.name} className="flex items-center justify-between p-3 border rounded-lg">
                  <div>
                    <div className="font-medium">{policy.name}</div>
                    <div className="text-sm text-gray-500">최근 업데이트: {policy.lastUpdate}</div>
                  </div>
                  <Badge variant={policy.status === "활성" ? "default" : "secondary"}>{policy.status}</Badge>
                </div>
              ))}
            </div>
            <Button className="w-full mt-4" variant="outline">
              정책 관리
            </Button>
          </CardContent>
        </Card>

        {/* Network Security */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Wifi className="h-5 w-5 text-purple-500" />
              네트워크 보안
            </CardTitle>
            <CardDescription>네트워크 트래픽 및 보안 상태</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 border rounded-lg">
                  <div className="text-2xl font-bold text-green-600">1.2TB</div>
                  <div className="text-sm text-gray-500">일일 트래픽</div>
                </div>
                <div className="text-center p-4 border rounded-lg">
                  <div className="text-2xl font-bold text-blue-600">99.9%</div>
                  <div className="text-sm text-gray-500">보안 점수</div>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>방화벽 상태</span>
                  <Badge variant="default">활성</Badge>
                </div>
                <div className="flex justify-between text-sm">
                  <span>DDoS 보호</span>
                  <Badge variant="default">활성</Badge>
                </div>
                <div className="flex justify-between text-sm">
                  <span>SSL 인증서</span>
                  <Badge variant="default">유효</Badge>
                </div>
                <div className="flex justify-between text-sm">
                  <span>침입 탐지</span>
                  <Badge variant="default">모니터링</Badge>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle>보안 관리 작업</CardTitle>
          <CardDescription>자주 사용하는 보안 관리 기능</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-4">
            <Button variant="outline" className="justify-start">
              <Shield className="mr-2 h-4 w-4" />
              보안 스캔 실행
            </Button>
            <Button variant="outline" className="justify-start">
              <Eye className="mr-2 h-4 w-4" />
              로그 분석
            </Button>
            <Button variant="outline" className="justify-start">
              <Database className="mr-2 h-4 w-4" />
              백업 실행
            </Button>
            <Button variant="outline" className="justify-start">
              <AlertTriangle className="mr-2 h-4 w-4" />
              알림 설정
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}