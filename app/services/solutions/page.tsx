import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Building2, Users, Shield, Zap, CheckCircle, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function SolutionsPage() {
  const solutions = [
    {
      title: "기업용 종합 보안 솔루션",
      description: "대기업을 위한 통합 디지털 보안 플랫폼",
      icon: Building2,
      features: [
        "실시간 위협 모니터링",
        "AI 기반 이상 행동 탐지",
        "통합 보안 대시보드",
        "24/7 전문가 지원",
        "컴플라이언스 관리",
        "사고 대응 자동화",
      ],
      pricing: "월 500만원부터",
      target: "대기업, 금융기관",
      badge: "인기",
    },
    {
      title: "중소기업 맞춤 솔루션",
      description: "중소기업을 위한 경제적이고 효율적인 보안 솔루션",
      icon: Users,
      features: [
        "핵심 보안 기능 제공",
        "간편한 설치 및 관리",
        "클라우드 기반 서비스",
        "원격 지원 서비스",
        "단계별 보안 강화",
        "교육 프로그램 포함",
      ],
      pricing: "월 50만원부터",
      target: "중소기업, 스타트업",
      badge: "추천",
    },
    {
      title: "개인용 프리미엄 보안",
      description: "개인 사용자를 위한 고급 보안 서비스",
      icon: Shield,
      features: [
        "개인정보 보호",
        "몸캠피싱 실시간 차단",
        "딥페이크 탐지 알림",
        "개인 상담 서비스",
        "가족 보호 기능",
        "모바일 앱 제공",
      ],
      pricing: "월 9만원부터",
      target: "개인, 가족",
      badge: "신규",
    },
    {
      title: "긴급 대응 서비스",
      description: "피해 발생 시 즉시 대응하는 전문 서비스",
      icon: Zap,
      features: [
        "24시간 긴급 대응",
        "전문가 즉시 투입",
        "피해 최소화 조치",
        "법적 대응 지원",
        "증거 수집 및 보전",
        "사후 관리 서비스",
      ],
      pricing: "건당 100만원부터",
      target: "긴급상황 대응",
      badge: "긴급",
    },
  ]

  const industries = [
    { name: "금융", description: "은행, 증권, 보험사를 위한 특화 솔루션" },
    { name: "교육", description: "학교, 대학교를 위한 안전한 교육 환경" },
    { name: "의료", description: "병원, 의료기관의 민감정보 보호" },
    { name: "제조", description: "제조업체의 산업기밀 보호" },
    { name: "유통", description: "유통업체의 고객정보 보안" },
    { name: "공공", description: "정부기관, 공공기관 보안 강화" },
  ]

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">맞춤형 솔루션</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          다양한 규모와 업종에 맞는 최적화된 보안 솔루션을 제공합니다
        </p>
      </div>

      {/* Solutions Grid */}
      <div className="grid lg:grid-cols-2 gap-8 mb-16">
        {solutions.map((solution, index) => (
          <Card key={index} className="relative overflow-hidden hover:shadow-lg transition-shadow">
            {solution.badge && (
              <Badge
                className="absolute top-4 right-4 z-10"
                variant={
                  solution.badge === "인기"
                    ? "default"
                    : solution.badge === "추천"
                      ? "secondary"
                      : solution.badge === "긴급"
                        ? "destructive"
                        : "outline"
                }
              >
                {solution.badge}
              </Badge>
            )}
            <CardHeader>
              <div className="flex items-center gap-3 mb-4">
                <solution.icon className="h-10 w-10 text-blue-600" />
                <div>
                  <CardTitle className="text-xl">{solution.title}</CardTitle>
                  <CardDescription className="text-sm text-gray-500">{solution.target}</CardDescription>
                </div>
              </div>
              <CardDescription className="text-base">{solution.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-3">주요 기능</h4>
                  <div className="grid grid-cols-1 gap-2">
                    {solution.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="border-t pt-4">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm text-gray-600">시작 가격</span>
                    <span className="text-lg font-bold text-blue-600">{solution.pricing}</span>
                  </div>
                  <div className="flex gap-2">
                    <Button asChild className="flex-1">
                      <Link href="/consultation">
                        상담 신청 <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                    <Button variant="outline" asChild>
                      <Link href="/services/demo">데모</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Industry Solutions */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-8">업종별 특화 솔루션</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((industry, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-lg">{industry.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-4">{industry.description}</CardDescription>
                <Button variant="outline" size="sm" asChild>
                  <Link href="/consultation">자세히 보기</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Implementation Process */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-8">구축 프로세스</h2>
        <div className="grid md:grid-cols-5 gap-4">
          {[
            { step: "1", title: "요구사항 분석", desc: "현재 보안 상태 진단" },
            { step: "2", title: "솔루션 설계", desc: "맞춤형 보안 아키텍처 설계" },
            { step: "3", title: "시스템 구축", desc: "보안 시스템 설치 및 구성" },
            { step: "4", title: "테스트 및 검증", desc: "시스템 안정성 검증" },
            { step: "5", title: "운영 및 지원", desc: "지속적인 모니터링 및 지원" },
          ].map((process, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                {process.step}
              </div>
              <h3 className="font-semibold mb-2">{process.title}</h3>
              <p className="text-sm text-gray-600">{process.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Benefits */}
      <div className="bg-gray-50 rounded-lg p-8 mb-16">
        <h2 className="text-3xl font-bold text-center mb-8">upoZero 솔루션의 장점</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="font-semibold mb-2">높은 보안성</h3>
            <p className="text-sm text-gray-600">99.9% 이상의 위협 탐지율</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Zap className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="font-semibold mb-2">빠른 대응</h3>
            <p className="text-sm text-gray-600">실시간 위협 탐지 및 차단</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="font-semibold mb-2">전문 지원</h3>
            <p className="text-sm text-gray-600">24/7 전문가 지원 서비스</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Building2 className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="font-semibold mb-2">확장성</h3>
            <p className="text-sm text-gray-600">기업 성장에 맞춘 유연한 확장</p>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="bg-blue-600 text-white rounded-lg p-8 text-center">
        <h2 className="text-3xl font-bold mb-4">맞춤형 솔루션 상담받기</h2>
        <p className="text-xl mb-6 text-blue-100">귀하의 조직에 최적화된 보안 솔루션을 제안해드립니다</p>
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
