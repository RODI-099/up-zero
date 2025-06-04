import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Play, Shield, Eye, Search, Monitor, CheckCircle, AlertTriangle } from "lucide-react"

export default function DemoPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">실시간 데모 체험</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          upoZero의 핵심 기술을 직접 체험해보세요. 실제 환경과 동일한 조건에서 테스트할 수 있습니다.
        </p>
      </div>

      {/* Demo Options */}
      <div className="grid lg:grid-cols-3 gap-8 mb-16">
        <Card className="relative overflow-hidden">
          <Badge className="absolute top-4 right-4">인기</Badge>
          <CardHeader>
            <Shield className="h-12 w-12 text-blue-600 mb-4" />
            <CardTitle>몸캠피싱 탐지 데모</CardTitle>
            <CardDescription>실시간으로 몸캠피싱 위협을 탐지하고 차단하는 과정을 체험해보세요</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="bg-gray-100 rounded-lg p-4">
                <div className="flex items-center gap-2 mb-2">
                  <Monitor className="h-5 w-5 text-green-600" />
                  <span className="text-sm font-medium">실시간 모니터링</span>
                </div>
                <div className="text-xs text-gray-600">AI가 실시간으로 위험 상황을 분석하고 있습니다...</div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span className="text-sm">패턴 분석 완료</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span className="text-sm">위협 요소 탐지</span>
                </div>
                <div className="flex items-center gap-2">
                  <AlertTriangle className="h-4 w-4 text-orange-500" />
                  <span className="text-sm">의심 활동 감지됨</span>
                </div>
              </div>
              <Button className="w-full">
                <Play className="mr-2 h-4 w-4" />
                데모 시작하기
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card className="relative overflow-hidden">
          <Badge className="absolute top-4 right-4" variant="secondary">
            신기술
          </Badge>
          <CardHeader>
            <Eye className="h-12 w-12 text-blue-600 mb-4" />
            <CardTitle>딥페이크 탐지 데모</CardTitle>
            <CardDescription>최신 AI 기술로 딥페이크 콘텐츠를 실시간으로 분석하고 탐지합니다</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="bg-gray-100 rounded-lg p-4">
                <div className="flex items-center gap-2 mb-2">
                  <Eye className="h-5 w-5 text-blue-600" />
                  <span className="text-sm font-medium">딥페이크 분석 중</span>
                </div>
                <div className="text-xs text-gray-600">고도화된 AI가 영상의 진위를 판별하고 있습니다...</div>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>진위 판별률</span>
                  <span className="font-semibold">99.7%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-blue-600 h-2 rounded-full" style={{ width: "99.7%" }}></div>
                </div>
              </div>
              <Button className="w-full">
                <Play className="mr-2 h-4 w-4" />
                데모 시작하기
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <Search className="h-12 w-12 text-blue-600 mb-4" />
            <CardTitle>포렌식 분석 데모</CardTitle>
            <CardDescription>디지털 증거 수집과 분석 과정을 단계별로 체험해보세요</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="bg-gray-100 rounded-lg p-4">
                <div className="flex items-center gap-2 mb-2">
                  <Search className="h-5 w-5 text-purple-600" />
                  <span className="text-sm font-medium">증거 수집 중</span>
                </div>
                <div className="text-xs text-gray-600">디지털 흔적을 체계적으로 수집하고 있습니다...</div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span className="text-sm">메타데이터 추출</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span className="text-sm">타임라인 구성</span>
                </div>
                <div className="flex items-center gap-2">
                  <Monitor className="h-4 w-4 text-blue-600" />
                  <span className="text-sm">보고서 생성 중</span>
                </div>
              </div>
              <Button className="w-full">
                <Play className="mr-2 h-4 w-4" />
                데모 시작하기
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Interactive Demo Section */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-8">대화형 데모 체험</h2>
        <Card className="max-w-4xl mx-auto">
          <CardHeader>
            <CardTitle>실제 시나리오 기반 체험</CardTitle>
            <CardDescription>
              실제 발생할 수 있는 상황을 시뮬레이션하여 upoZero의 대응 과정을 체험해보세요
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-4">시나리오 선택</h3>
                <div className="space-y-3">
                  <Button variant="outline" className="w-full justify-start">
                    <Shield className="mr-2 h-4 w-4" />
                    몸캠피싱 공격 시나리오
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <Eye className="mr-2 h-4 w-4" />
                    딥페이크 영상 유포 시나리오
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <Search className="mr-2 h-4 w-4" />
                    디지털 증거 수집 시나리오
                  </Button>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">데모 진행 상황</h3>
                <div className="bg-gray-50 rounded-lg p-4 h-48 flex items-center justify-center">
                  <div className="text-center text-gray-500">
                    <Monitor className="h-12 w-12 mx-auto mb-2" />
                    <p>시나리오를 선택하면 데모가 시작됩니다</p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Demo Request Form */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-8">맞춤형 데모 신청</h2>
        <Card className="max-w-2xl mx-auto">
          <CardHeader>
            <CardTitle>개인화된 데모 체험</CardTitle>
            <CardDescription>귀하의 특정 요구사항에 맞춘 맞춤형 데모를 신청하세요</CardDescription>
          </CardHeader>
          <CardContent>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="company">회사명</Label>
                  <Input id="company" placeholder="회사명을 입력하세요" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="name">담당자명</Label>
                  <Input id="name" placeholder="이름을 입력하세요" />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="email">이메일</Label>
                  <Input id="email" type="email" placeholder="이메일을 입력하세요" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">연락처</Label>
                  <Input id="phone" placeholder="연락처를 입력하세요" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="demo-type">관심 있는 데모</Label>
                <div className="grid grid-cols-1 gap-2">
                  <label className="flex items-center space-x-2">
                    <input type="checkbox" className="rounded" />
                    <span className="text-sm">몸캠피싱 탐지 및 차단</span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <input type="checkbox" className="rounded" />
                    <span className="text-sm">딥페이크 콘텐츠 탐지</span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <input type="checkbox" className="rounded" />
                    <span className="text-sm">디지털 포렌식 분석</span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <input type="checkbox" className="rounded" />
                    <span className="text-sm">통합 보안 대시보드</span>
                  </label>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="requirements">특별 요구사항</Label>
                <Textarea
                  id="requirements"
                  placeholder="데모에서 특별히 확인하고 싶은 기능이나 시나리오가 있다면 설명해주세요"
                  rows={4}
                />
              </div>

              <Button type="submit" className="w-full" size="lg">
                맞춤형 데모 신청하기
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>

      {/* Demo Benefits */}
      <div className="bg-blue-50 rounded-lg p-8">
        <h2 className="text-3xl font-bold text-center mb-8">데모 체험의 장점</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Play className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="font-semibold mb-2">실제 환경 체험</h3>
            <p className="text-sm text-gray-600">실제 운영 환경과 동일한 조건에서 시스템을 체험할 수 있습니다</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="font-semibold mb-2">안전한 테스트</h3>
            <p className="text-sm text-gray-600">격리된 환경에서 안전하게 모든 기능을 테스트할 수 있습니다</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="font-semibold mb-2">전문가 지원</h3>
            <p className="text-sm text-gray-600">데모 진행 중 전문가의 실시간 설명과 지원을 받을 수 있습니다</p>
          </div>
        </div>
      </div>
    </div>
  )
}
