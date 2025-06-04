import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Award, Users, TrendingUp } from "lucide-react"

export default function JourneyPage() {
  const milestones = [
    {
      year: "2019",
      title: "upoZero 설립",
      description: "디지털 안전을 위한 첫 걸음을 시작했습니다.",
      achievements: ["회사 설립", "핵심 팀 구성", "초기 기술 개발"],
    },
    {
      year: "2020",
      title: "첫 번째 솔루션 출시",
      description: "몸캠피싱 탐지 및 차단 솔루션을 성공적으로 출시했습니다.",
      achievements: ["몸캠피싱 솔루션 출시", "첫 고객사 확보", "특허 출원"],
    },
    {
      year: "2021",
      title: "기술 혁신과 성장",
      description: "AI 기반 딥페이크 탐지 기술을 개발하며 기술력을 인정받았습니다.",
      achievements: ["딥페이크 탐지 기술 개발", "정부 과제 수주", "팀 규모 확장"],
    },
    {
      year: "2022",
      title: "시장 확장",
      description: "기업 고객을 대상으로 한 종합 보안 솔루션을 제공하기 시작했습니다.",
      achievements: ["기업용 솔루션 출시", "파트너십 확대", "해외 진출 준비"],
    },
    {
      year: "2023",
      title: "글로벌 진출",
      description: "해외 시장 진출과 함께 글로벌 파트너십을 구축했습니다.",
      achievements: ["해외 시장 진출", "국제 인증 획득", "글로벌 파트너십"],
    },
    {
      year: "2024",
      title: "업계 리더십 확립",
      description: "디지털 보안 분야의 선도 기업으로 자리매김했습니다.",
      achievements: ["업계 1위 달성", "신기술 개발", "사회적 가치 창출"],
    },
  ]

  const stats = [
    { icon: Users, label: "보호된 사용자", value: "10,000+" },
    { icon: Award, label: "수상 및 인증", value: "15+" },
    { icon: TrendingUp, label: "연평균 성장률", value: "150%" },
    { icon: Calendar, label: "서비스 경험", value: "5년+" },
  ]

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">upoZero가 걸어온 길</h1>
          <p className="text-xl text-gray-600">디지털 안전을 위한 우리의 성장 여정과 주요 성과</p>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center">
              <CardContent className="pt-6">
                <stat.icon className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <div className="text-3xl font-bold text-blue-600 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Timeline */}
        <div className="space-y-8">
          <h2 className="text-3xl font-bold text-center mb-8">주요 성과 타임라인</h2>

          {milestones.map((milestone, index) => (
            <div key={index} className="relative">
              {/* Timeline line */}
              {index !== milestones.length - 1 && <div className="absolute left-8 top-16 w-0.5 h-24 bg-blue-200"></div>}

              <div className="flex gap-6">
                {/* Year badge */}
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                    {milestone.year.slice(-2)}
                  </div>
                </div>

                {/* Content */}
                <Card className="flex-1">
                  <CardHeader>
                    <div className="flex items-center gap-2 mb-2">
                      <Badge variant="outline">{milestone.year}</Badge>
                    </div>
                    <CardTitle className="text-xl">{milestone.title}</CardTitle>
                    <CardDescription className="text-base">{milestone.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <h4 className="font-semibold text-gray-700">주요 성과:</h4>
                      <ul className="space-y-1">
                        {milestone.achievements.map((achievement, idx) => (
                          <li key={idx} className="flex items-center gap-2 text-gray-600">
                            <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          ))}
        </div>

        {/* Awards and Recognition */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-center mb-8">수상 및 인정</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <Award className="h-8 w-8 text-yellow-500 mb-2" />
                <CardTitle className="text-lg">2024 보안기술 대상</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">한국정보보호학회 주관 보안기술 혁신상 수상</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Award className="h-8 w-8 text-yellow-500 mb-2" />
                <CardTitle className="text-lg">2023 AI 혁신상</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">딥페이크 탐지 기술로 AI 혁신상 수상</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Award className="h-8 w-8 text-yellow-500 mb-2" />
                <CardTitle className="text-lg">2022 벤처기업상</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">중소벤처기업부 장관상 수상</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Award className="h-8 w-8 text-yellow-500 mb-2" />
                <CardTitle className="text-lg">ISO 27001 인증</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">정보보안 관리체계 국제 표준 인증 획득</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Award className="h-8 w-8 text-yellow-500 mb-2" />
                <CardTitle className="text-lg">GS 인증</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">소프트웨어 품질 우수성 인증 획득</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Award className="h-8 w-8 text-yellow-500 mb-2" />
                <CardTitle className="text-lg">특허 등록</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">핵심 기술 관련 다수 특허 등록</p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Future Vision */}
        <div className="mt-16 bg-blue-50 rounded-lg p-8">
          <h2 className="text-3xl font-bold text-center mb-6">미래를 향한 비전</h2>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-lg text-gray-700 mb-6">
              upoZero는 지난 5년간의 성장을 바탕으로 더욱 안전한 디지털 세상을 만들어가겠습니다. 지속적인 기술 혁신과
              글로벌 확장을 통해 전 세계 사용자들이 디지털 위협으로부터 안전하게 보호받을 수 있도록 최선을 다하겠습니다.
            </p>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <h3 className="text-xl font-semibold mb-2 text-blue-600">2025년 목표</h3>
                <p className="text-gray-600">글로벌 시장 점유율 확대</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-blue-600">2026년 목표</h3>
                <p className="text-gray-600">차세대 보안 기술 개발</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-blue-600">2027년 목표</h3>
                <p className="text-gray-600">업계 선도 기업 지위 확고화</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
