import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Shield, Users, Award, TrendingUp, ArrowRight, CheckCircle, AlertTriangle } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { HeroSection } from "@/components/hero-section"
import { FraudChatDemo } from "@/components/fraud-chat-demo"

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <HeroSection />

      {/* Main Features */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">디지털 범죄 예방 솔루션</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              최첨단 AI 기술과 전문 인력이 결합된 종합 디지털 보안 솔루션
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow border-blue-100">
              <CardContent className="pt-8 pb-8">
                <Shield className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">몸캠피싱 차단</h3>
                <p className="text-gray-600 mb-4">실시간 모니터링과 AI 분석을 통한 몸캠피싱 예방 및 대응</p>
                <Button asChild variant="outline" className="mt-2">
                  <Link href="/consultation/bodycam">
                    자세히 보기 <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow border-blue-100">
              <CardContent className="pt-8 pb-8">
                <Users className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">딥페이크 탐지</h3>
                <p className="text-gray-600 mb-4">고도화된 딥러닝 기술로 딥페이크 콘텐츠 실시간 탐지</p>
                <Button asChild variant="outline" className="mt-2">
                  <Link href="/consultation/deepfake">
                    자세히 보기 <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow border-blue-100">
              <CardContent className="pt-8 pb-8">
                <Award className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">디지털 포렌식</h3>
                <p className="text-gray-600 mb-4">전문 포렌식 분석을 통한 디지털 증거 수집 및 분석</p>
                <Button asChild variant="outline" className="mt-2">
                  <Link href="/services">
                    자세히 보기 <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow border-blue-100">
              <CardContent className="pt-8 pb-8">
                <TrendingUp className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">예방 교육</h3>
                <p className="text-gray-600 mb-4">맞춤형 보안 교육과 인식 개선 프로그램 제공</p>
                <Button asChild variant="outline" className="mt-2">
                  <Link href="/services">
                    자세히 보기 <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Fraud Chat Demo Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">몸캠피싱 사례 체험</h2>
              <p className="text-lg text-gray-600 mb-6">
                실제 몸캠피싱 사례를 통해 어떻게 범죄자들이 접근하고 피해자를 속이는지 확인하세요. 
                이러한 패턴을 인지하는 것이 예방의 첫 걸음입니다.
              </p>
              <div className="space-y-4 mb-6">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-1" />
                  <div>
                    <h3 className="font-semibold">패턴 인식</h3>
                    <p className="text-gray-600">몸캠피싱 범죄자들의 전형적인 접근 방식을 파악하세요</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-1" />
                  <div>
                    <h3 className="font-semibold">위험 신호</h3>
                    <p className="text-gray-600">의심해야 할 대화 패턴과 위험 신호를 확인하세요</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <AlertTriangle className="h-5 w-5 text-red-600 mt-1" />
                  <div>
                    <h3 className="font-semibold">대응 방법</h3>
                    <p className="text-gray-600">피해를 입었을 때 즉시 취해야 할 행동을 알아보세요</p>
                  </div>
                </div>
              </div>
              <Button asChild size="lg" className="mt-4">
                <Link href="/consultation/bodycam">
                  무료 상담 신청
                </Link>
              </Button>
            </div>
            <div className="relative">
              <FraudChatDemo />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">upoZero의 성과</h2>
            <p className="text-gray-600">디지털 안전을 위한 우리의 노력과 성과</p>
          </div>
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">10,000+</div>
              <div className="text-gray-600">보호된 사용자</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">99.9%</div>
              <div className="text-gray-600">탐지 정확도</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">24/7</div>
              <div className="text-gray-600">모니터링</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">5년</div>
              <div className="text-gray-600">업계 경험</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">디지털 위협으로부터 지금 바로 보호받으세요</h2>
          <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
            전문가와의 무료 상담을 통해 맞춤형 보안 솔루션을 확인해보세요
          </p>
          <Button asChild size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-black">
            <Link href="/consultation">무료 상담 신청하기</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}