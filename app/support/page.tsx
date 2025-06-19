import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { FileText, Award, TrendingUp, Users, Download } from "lucide-react"
import Link from "next/link"

export default function SupportPage() {
  const researchResults = [
    {
      title: "AI 기반 딥페이크 탐지 기술 연구",
      description: "최신 딥러닝 기술을 활용한 딥페이크 콘텐츠 탐지 정확도 향상 연구",
      date: "2024.01",
      type: "기술 연구",
      status: "완료",
      accuracy: "99.7%",
      badge: "최신",
    },
    {
      title: "몸캠피싱 패턴 분석 및 예방 기술 개발",
      description: "몸캠피싱 공격 패턴 분석을 통한 실시간 탐지 및 차단 기술 연구",
      date: "2023.12",
      type: "보안 연구",
      status: "완료",
      accuracy: "98.9%",
      badge: "핵심",
    },
    {
      title: "디지털 포렌식 자동화 시스템 연구",
      description: "AI를 활용한 디지털 증거 수집 및 분석 자동화 시스템 개발",
      date: "2023.11",
      type: "포렌식 연구",
      status: "진행중",
      accuracy: "95.2%",
      badge: "진행중",
    },
    {
      title: "사이버 범죄 예측 모델 개발",
      description: "빅데이터 분석을 통한 사이버 범죄 발생 예측 모델 연구",
      date: "2023.10",
      type: "예측 분석",
      status: "완료",
      accuracy: "92.1%",
      badge: "혁신",
    },
  ]

  const patents = [
    {
      title: "실시간 딥페이크 탐지를 위한 AI 시스템",
      number: "10-2024-0001234",
      status: "등록",
      date: "2024.01.15",
    },
    {
      title: "몸캠피싱 자동 차단 시스템 및 방법",
      number: "10-2023-0005678",
      status: "등록",
      date: "2023.12.20",
    },
    {
      title: "디지털 포렌식 증거 수집 자동화 시스템",
      number: "10-2023-0009012",
      status: "출원",
      date: "2023.11.10",
    },
  ]

  const awards = [
    {
      title: "2024 정보보호 기술혁신상",
      organization: "한국정보보호학회",
      date: "2024.02",
      description: "딥페이크 탐지 기술의 혁신성을 인정받아 수상",
    },
    {
      title: "2023 AI 우수연구상",
      organization: "한국인공지능학회",
      date: "2023.12",
      description: "AI 기반 사이버 보안 기술 연구 성과 인정",
    },
    {
      title: "2023 벤처기업 기술혁신상",
      organization: "중소벤처기업부",
      date: "2023.11",
      description: "기술 혁신을 통한 사회적 가치 창출 공로",
    },
  ]

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">연구 성과</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          upoZero의 지속적인 연구개발을 통한 기술 혁신과 학술적 성과를 소개합니다
        </p>
      </div>

      {/* Research Statistics */}
      <div className="grid md:grid-cols-4 gap-6 mb-16">
        <Card className="text-center">
          <CardContent className="pt-6">
            <FileText className="h-12 w-12 text-blue-600 mx-auto mb-4" />
            <div className="text-3xl font-bold text-blue-600 mb-2">15+</div>
            <div className="text-gray-600">연구 프로젝트</div>
          </CardContent>
        </Card>
        <Card className="text-center">
          <CardContent className="pt-6">
            <Award className="h-12 w-12 text-blue-600 mx-auto mb-4" />
            <div className="text-3xl font-bold text-blue-600 mb-2">8</div>
            <div className="text-gray-600">특허 등록</div>
          </CardContent>
        </Card>
        <Card className="text-center">
          <CardContent className="pt-6">
            <TrendingUp className="h-12 w-12 text-blue-600 mx-auto mb-4" />
            <div className="text-3xl font-bold text-blue-600 mb-2">25+</div>
            <div className="text-gray-600">논문 발표</div>
          </CardContent>
        </Card>
        <Card className="text-center">
          <CardContent className="pt-6">
            <Users className="h-12 w-12 text-blue-600 mx-auto mb-4" />
            <div className="text-3xl font-bold text-blue-600 mb-2">12</div>
            <div className="text-gray-600">연구진</div>
          </CardContent>
        </Card>
      </div>

      {/* Main Research Results */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-8">주요 연구 성과</h2>
        <div className="grid lg:grid-cols-2 gap-8">
          {researchResults.map((research, index) => (
            <Card key={index} className="relative overflow-hidden">
              <Badge
                className="absolute top-4 right-4"
                variant={
                  research.badge === "최신"
                    ? "default"
                    : research.badge === "핵심"
                      ? "secondary"
                      : research.badge === "진행중"
                        ? "outline"
                        : "destructive"
                }
              >
                {research.badge}
              </Badge>
              <CardHeader>
                <div className="flex items-start justify-between mb-2">
                  <div className="flex-1">
                    <CardTitle className="text-lg mb-2">{research.title}</CardTitle>
                    <CardDescription>{research.description}</CardDescription>
                  </div>
                </div>
                <div className="flex items-center gap-4 text-sm text-gray-500">
                  <span>{research.date}</span>
                  <span>•</span>
                  <span>{research.type}</span>
                  <span>•</span>
                  <span className={research.status === "완료" ? "text-green-600" : "text-orange-600"}>
                    {research.status}
                  </span>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span>정확도</span>
                      <span className="font-semibold text-blue-600">{research.accuracy}</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-blue-600 h-2 rounded-full" style={{ width: research.accuracy }}></div>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline">
                      <FileText className="mr-2 h-4 w-4" />
                      상세 보고서
                    </Button>
                    <Button size="sm" variant="outline">
                      <Download className="mr-2 h-4 w-4" />
                      다운로드
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Patents */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-8">특허 현황</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {patents.map((patent, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle className="text-lg">{patent.title}</CardTitle>
                <CardDescription>특허번호: {patent.number}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <div>
                    <Badge variant={patent.status === "등록" ? "default" : "outline"}>{patent.status}</Badge>
                    <p className="text-sm text-gray-500 mt-2">{patent.date}</p>
                  </div>
                  <Button size="sm" variant="outline">
                    상세 정보
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Awards */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-8">수상 내역</h2>
        <div className="space-y-6">
          {awards.map((award, index) => (
            <Card key={index}>
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <Award className="h-8 w-8 text-yellow-500 flex-shrink-0 mt-1" />
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold mb-1">{award.title}</h3>
                    <p className="text-gray-600 mb-2">
                      {award.organization} • {award.date}
                    </p>
                    <p className="text-sm text-gray-700">{award.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Research Collaboration */}
      <div className="bg-blue-50 rounded-lg p-8">
        <h2 className="text-3xl font-bold text-center mb-6">연구 협력</h2>
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-lg text-gray-700 mb-8">
            upoZero는 국내외 유수 대학 및 연구기관과의 협력을 통해 지속적인 기술 혁신을 추진하고 있습니다.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-semibold mb-4">협력 기관</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• 서울대학교 컴퓨터공학부</li>
                <li>• KAIST 사이버보안연구센터</li>
                <li>• 한국전자통신연구원(ETRI)</li>
                <li>• 국가보안기술연구소</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">연구 분야</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• 인공지능 보안 기술</li>
                <li>• 디지털 포렌식</li>
                <li>• 사이버 위협 인텔리전스</li>
                <li>• 프라이버시 보호 기술</li>
              </ul>
            </div>
          </div>
          <div className="mt-8">
            <Button asChild size="lg">
              <Link href="/consultation">연구 협력 문의</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}