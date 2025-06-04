import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Award, Users, Building2, Globe, Calendar } from "lucide-react"
import Image from "next/image"

export default function AwardsPage() {
  const awards = [
    {
      title: "2024 정보보호 기술혁신상",
      organization: "한국정보보호학회",
      date: "2024.02.15",
      category: "기술 혁신",
      description: "딥페이크 탐지 기술의 혁신성과 사회적 기여도를 인정받아 수상",
      image: `/placeholder.svg?height=300&width=400&text=Award:${encodeURIComponent("2024 정보보호 기술혁신상")}`,
      badge: "최신",
    },
    {
      title: "2023 AI 우수연구상",
      organization: "한국인공지능학회",
      date: "2023.12.10",
      category: "연구 성과",
      description: "AI 기반 사이버 보안 기술 연구의 우수성을 인정받아 수상",
      image: `/placeholder.svg?height=300&width=400&text=Award:${encodeURIComponent("2023 AI 우수연구상")}`,
      badge: "연구",
    },
    {
      title: "2023 벤처기업 기술혁신상",
      organization: "중소벤처기업부",
      date: "2023.11.20",
      category: "정부 포상",
      description: "기술 혁신을 통한 사회적 가치 창출과 일자리 창출 공로 인정",
      image: `/placeholder.svg?height=300&width=400&text=Award:${encodeURIComponent("2023 벤처기업 기술혁신상")}`,
      badge: "정부",
    },
    {
      title: "2023 사이버보안 우수기업상",
      organization: "국가정보원",
      date: "2023.10.15",
      category: "보안 기술",
      description: "국가 사이버보안 강화에 기여한 공로를 인정받아 수상",
      image: `/placeholder.svg?height=300&width=400&text=Award:${encodeURIComponent("2023 사이버보안 우수기업상")}`,
      badge: "보안",
    },
    {
      title: "2022 스타트업 대상",
      organization: "창업진흥원",
      date: "2022.12.05",
      category: "창업 성과",
      description: "혁신적인 기술과 빠른 성장을 통한 창업 생태계 기여 인정",
      image: `/placeholder.svg?height=300&width=400&text=Award:${encodeURIComponent("2022 스타트업 대상")}`,
      badge: "창업",
    },
    {
      title: "2022 디지털 혁신상",
      organization: "과학기술정보통신부",
      date: "2022.11.18",
      category: "디지털 혁신",
      description: "디지털 전환 시대의 보안 기술 혁신 공로 인정",
      image: `/placeholder.svg?height=300&width=400&text=Award:${encodeURIComponent("2022 디지털 혁신상")}`,
      badge: "혁신",
    },
  ]

  const partnerships = [
    {
      title: "Microsoft Korea",
      type: "기술 파트너십",
      date: "2024.01",
      description: "Azure 클라우드 기반 보안 솔루션 공동 개발",
      logo: `/placeholder.svg?height=80&width=120&text=${encodeURIComponent("Microsoft Korea")}`,
      status: "진행중",
    },
    {
      title: "삼성SDS",
      type: "전략적 제휴",
      date: "2023.12",
      description: "기업용 통합 보안 솔루션 공동 마케팅",
      logo: `/placeholder.svg?height=80&width=120&text=${encodeURIComponent("삼성SDS")}`,
      status: "활성",
    },
    {
      title: "KAIST",
      type: "연구 협력",
      date: "2023.11",
      description: "AI 보안 기술 공동 연구개발",
      logo: `/placeholder.svg?height=80&width=120&text=${encodeURIComponent("KAIST")}`,
      status: "진행중",
    },
    {
      title: "NHN",
      type: "기술 협력",
      date: "2023.10",
      description: "클라우드 보안 서비스 기술 협력",
      logo: `/placeholder.svg?height=80&width=120&text=${encodeURIComponent("NHN")}`,
      status: "활성",
    },
    {
      title: "일본 CyberAgent",
      type: "해외 파트너십",
      date: "2023.09",
      description: "일본 시장 진출을 위한 전략적 파트너십",
      logo: `/placeholder.svg?height=80&width=120&text=${encodeURIComponent("일본 CyberAgent")}`,
      status: "활성",
    },
    {
      title: "한국인터넷진흥원(KISA)",
      type: "정부 협력",
      date: "2023.08",
      description: "국가 사이버보안 정책 수립 협력",
      logo: `/placeholder.svg?height=80&width=120&text=${encodeURIComponent("한국인터넷진흥원(KISA)")}`,
      status: "진행중",
    },
  ]

  const certifications = [
    {
      title: "ISO 27001",
      description: "정보보안 관리체계 국제 표준 인증",
      date: "2023.06",
      validity: "2026.06",
      image: `/placeholder.svg?height=100&width=100&text=${encodeURIComponent("ISO 27001")}`,
    },
    {
      title: "GS 인증 1등급",
      description: "소프트웨어 품질 우수성 인증",
      date: "2023.05",
      validity: "2026.05",
      image: `/placeholder.svg?height=100&width=100&text=${encodeURIComponent("GS 인증 1등급")}`,
    },
    {
      title: "CC 인증",
      description: "Common Criteria 보안 평가 인증",
      date: "2023.04",
      validity: "2028.04",
      image: `/placeholder.svg?height=100&width=100&text=${encodeURIComponent("CC 인증")}`,
    },
    {
      title: "K-ICT 보안 인증",
      description: "국가정보원 보안 적합성 검증",
      date: "2023.03",
      validity: "2026.03",
      image: `/placeholder.svg?height=100&width=100&text=${encodeURIComponent("K-ICT 보안 인증")}`,
    },
  ]

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">수상 & 협력</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          upoZero의 기술력과 혁신성을 인정받은 수상 내역과 주요 파트너십을 소개합니다
        </p>
      </div>

      {/* Awards Section */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-8">수상 내역</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {awards.map((award, index) => (
            <Card key={index} className="relative overflow-hidden hover:shadow-lg transition-shadow">
              <Badge
                className="absolute top-4 right-4 z-10"
                variant={
                  award.badge === "최신"
                    ? "default"
                    : award.badge === "정부"
                      ? "secondary"
                      : award.badge === "보안"
                        ? "destructive"
                        : "outline"
                }
              >
                {award.badge}
              </Badge>
              <div className="relative h-48">
                <Image src={award.image || "/placeholder.svg"} alt={award.title} fill className="object-contain p-4" />
              </div>
              <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                  <Award className="h-5 w-5 text-yellow-500" />
                  <Badge variant="outline">{award.category}</Badge>
                </div>
                <CardTitle className="text-lg">{award.title}</CardTitle>
                <CardDescription className="text-sm text-gray-500">{award.organization}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-4">{award.description}</p>
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <Calendar className="h-4 w-4" />
                  {award.date}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Partnerships Section */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-8">주요 파트너십</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {partnerships.map((partnership, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <div className="w-24 h-16 mx-auto mb-4 bg-gray-100 rounded-lg flex items-center justify-center">
                  <Image
                    src={partnership.logo || "/placeholder.svg"}
                    alt={partnership.title}
                    width={120}
                    height={80}
                    className="object-contain"
                  />
                </div>
                <CardTitle className="text-lg">{partnership.title}</CardTitle>
                <CardDescription>{partnership.type}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-4">{partnership.description}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <Calendar className="h-4 w-4" />
                    {partnership.date}
                  </div>
                  <Badge variant={partnership.status === "활성" ? "default" : "outline"}>{partnership.status}</Badge>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Certifications Section */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-8">인증 현황</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {certifications.map((cert, index) => (
            <Card key={index} className="text-center">
              <CardHeader>
                <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Image
                    src={cert.image || "/placeholder.svg"}
                    alt={cert.title}
                    width={100}
                    height={100}
                    className="object-contain"
                  />
                </div>
                <CardTitle className="text-lg">{cert.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-3">{cert.description}</p>
                <div className="space-y-1 text-xs text-gray-500">
                  <p>취득일: {cert.date}</p>
                  <p>유효기간: {cert.validity}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Partnership Benefits */}
      <div className="bg-gray-50 rounded-lg p-8 mb-16">
        <h2 className="text-3xl font-bold text-center mb-8">파트너십의 가치</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <Building2 className="h-12 w-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-3">기술 시너지</h3>
            <p className="text-gray-600">파트너사와의 기술 협력을 통해 더욱 강력하고 혁신적인 솔루션을 개발합니다</p>
          </div>
          <div className="text-center">
            <Globe className="h-12 w-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-3">글로벌 확장</h3>
            <p className="text-gray-600">해외 파트너십을 통해 글로벌 시장으로의 진출과 확장을 가속화합니다</p>
          </div>
          <div className="text-center">
            <Users className="h-12 w-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-3">고객 가치</h3>
            <p className="text-gray-600">다양한 파트너십을 통해 고객에게 더 나은 서비스와 가치를 제공합니다</p>
          </div>
        </div>
      </div>

      {/* Recognition Timeline */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-8">인정받은 여정</h2>
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {[
              { year: "2024", achievement: "정보보호 기술혁신상 수상", description: "딥페이크 탐지 기술 혁신성 인정" },
              { year: "2023", achievement: "주요 파트너십 확대", description: "Microsoft, 삼성SDS 등과 전략적 제휴" },
              { year: "2022", achievement: "정부 인증 획득", description: "ISO 27001, GS 인증 등 주요 인증 취득" },
              { year: "2021", achievement: "기술력 인정", description: "국가 R&D 과제 선정 및 특허 등록" },
              { year: "2020", achievement: "창업 성과 인정", description: "스타트업 대상 수상 및 투자 유치" },
              { year: "2019", achievement: "회사 설립", description: "upoZero 설립 및 사업 시작" },
            ].map((item, index) => (
              <div key={index} className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                    {item.year}
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-2">{item.achievement}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Partnership Inquiry */}
      <div className="bg-blue-600 text-white rounded-lg p-8 text-center">
        <h2 className="text-3xl font-bold mb-4">파트너십 문의</h2>
        <p className="text-xl mb-6 text-blue-100">upoZero와 함께 혁신적인 보안 솔루션을 만들어가실 파트너를 찾습니다</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Card className="bg-white text-black p-4">
            <div className="text-center">
              <h3 className="font-semibold mb-2">기술 파트너십</h3>
              <p className="text-sm text-gray-600 mb-3">공동 기술 개발 및 연구</p>
              <p className="text-sm">tech-partner@upozero.com</p>
            </div>
          </Card>
          <Card className="bg-white text-black p-4">
            <div className="text-center">
              <h3 className="font-semibold mb-2">비즈니스 파트너십</h3>
              <p className="text-sm text-gray-600 mb-3">판매 및 마케팅 협력</p>
              <p className="text-sm">business@upozero.com</p>
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}
