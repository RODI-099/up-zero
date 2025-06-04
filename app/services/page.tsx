import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Shield, Eye, Search, GraduationCap, Clock, Users, Award, Zap } from "lucide-react"
import Link from "next/link"

export default function ServicesPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">서비스 안내</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          최첨단 AI 기술과 전문 인력이 결합된 종합 디지털 보안 솔루션으로 다양한 디지털 위협으로부터 안전하게
          보호해드립니다.
        </p>
      </div>

      {/* Main Services */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader className="text-center">
            <Shield className="h-16 w-16 text-blue-600 mx-auto mb-4" />
            <CardTitle className="text-xl">몸캠피싱 차단</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription className="text-center mb-4">
              실시간 모니터링과 AI 분석을 통한 몸캠피싱 예방 및 즉시 대응 서비스
            </CardDescription>
            <ul className="text-sm space-y-2 mb-4">
              <li>• 24/7 실시간 모니터링</li>
              <li>• AI 기반 위협 탐지</li>
              <li>• 즉시 차단 및 신고</li>
              <li>• 피해자 상담 지원</li>
            </ul>
            <Button asChild className="w-full">
              <Link href="/consultation/bodycam">상담 신청</Link>
            </Button>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader className="text-center">
            <Eye className="h-16 w-16 text-blue-600 mx-auto mb-4" />
            <CardTitle className="text-xl">딥페이크 탐지</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription className="text-center mb-4">
              고도화된 딥러닝 기술로 딥페이크 콘텐츠를 실시간으로 탐지하고 차단
            </CardDescription>
            <ul className="text-sm space-y-2 mb-4">
              <li>• 고정밀 딥페이크 탐지</li>
              <li>• 실시간 분석 및 차단</li>
              <li>• 증거 수집 및 보관</li>
              <li>• 법적 대응 지원</li>
            </ul>
            <Button asChild className="w-full">
              <Link href="/consultation/deepfake">상담 신청</Link>
            </Button>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader className="text-center">
            <Search className="h-16 w-16 text-blue-600 mx-auto mb-4" />
            <CardTitle className="text-xl">디지털 포렌식</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription className="text-center mb-4">
              전문 포렌식 분석을 통한 디지털 증거 수집 및 법정 제출용 보고서 작성
            </CardDescription>
            <ul className="text-sm space-y-2 mb-4">
              <li>• 전문 포렌식 분석</li>
              <li>• 디지털 증거 수집</li>
              <li>• 법정 제출용 보고서</li>
              <li>• 전문가 증언 지원</li>
            </ul>
            <Button asChild className="w-full">
              <Link href="/consultation">상담 신청</Link>
            </Button>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader className="text-center">
            <GraduationCap className="h-16 w-16 text-blue-600 mx-auto mb-4" />
            <CardTitle className="text-xl">예방 교육</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription className="text-center mb-4">
              맞춤형 보안 교육과 인식 개선 프로그램으로 사전 예방 효과 극대화
            </CardDescription>
            <ul className="text-sm space-y-2 mb-4">
              <li>• 맞춤형 보안 교육</li>
              <li>• 인식 개선 프로그램</li>
              <li>• 정기 교육 및 점검</li>
              <li>• 교육 효과 측정</li>
            </ul>
            <Button asChild className="w-full">
              <Link href="/consultation">상담 신청</Link>
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Service Features */}
      <div className="bg-gray-50 rounded-lg p-8 mb-16">
        <h2 className="text-3xl font-bold text-center mb-8">서비스 특징</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center">
            <Clock className="h-12 w-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">24/7 모니터링</h3>
            <p className="text-gray-600">연중무휴 실시간 모니터링으로 즉시 대응</p>
          </div>
          <div className="text-center">
            <Zap className="h-12 w-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">빠른 대응</h3>
            <p className="text-gray-600">위협 탐지 후 5분 이내 즉시 차단</p>
          </div>
          <div className="text-center">
            <Users className="h-12 w-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">전문 상담</h3>
            <p className="text-gray-600">경험 풍부한 전문가의 1:1 맞춤 상담</p>
          </div>
          <div className="text-center">
            <Award className="h-12 w-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">높은 정확도</h3>
            <p className="text-gray-600">99.9% 이상의 높은 탐지 정확도</p>
          </div>
        </div>
      </div>

      {/* Process */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-8">서비스 프로세스</h2>
        <div className="grid md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
              1
            </div>
            <h3 className="text-lg font-semibold mb-2">상담 신청</h3>
            <p className="text-gray-600">온라인 또는 전화를 통한 무료 상담 신청</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
              2
            </div>
            <h3 className="text-lg font-semibold mb-2">상황 분석</h3>
            <p className="text-gray-600">전문가가 현재 상황을 정확히 분석</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
              3
            </div>
            <h3 className="text-lg font-semibold mb-2">맞춤 솔루션</h3>
            <p className="text-gray-600">상황에 맞는 최적의 솔루션 제안</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
              4
            </div>
            <h3 className="text-lg font-semibold mb-2">지속 관리</h3>
            <p className="text-gray-600">서비스 적용 후 지속적인 모니터링</p>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="bg-blue-600 text-white rounded-lg p-8 text-center">
        <h2 className="text-3xl font-bold mb-4">지금 바로 보호받으세요</h2>
        <p className="text-xl mb-6 text-blue-100">전문가와의 무료 상담을 통해 맞춤형 보안 솔루션을 확인해보세요</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-black">
            <Link href="/consultation">무료 상담 신청</Link>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="border-white text-white hover:bg-white hover:text-blue-600"
          >
            <Link href="/services/demo">데모 체험하기</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
