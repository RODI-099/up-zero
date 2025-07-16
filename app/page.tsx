import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Shield, Users, Award, TrendingUp, ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20 overflow-hidden min-h-[600px] flex items-center">
        <div className="absolute inset-0 bg-discord-pattern opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                디지털 안전의 <span className="text-yellow-300">새로운 기준</span>
              </h1>
              <p className="text-xl mb-8 text-white/90 max-w-lg">
                몸캠피싱, 딥페이크 등 디지털 성범죄로부터 안전한 세상을 만들어갑니다. 첨단 기술과 전문 솔루션으로 디지털 위협을 제로화합니다.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-white hover:bg-gray-100 text-blue-600 font-semibold">
                  <Link href="/consultation">무료 상담 신청</Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-white text-white hover:bg-white/20"
                >
                  <Link href="/services">서비스 둘러보기</Link>
                </Button>
              </div>
            </div>
            <div className="hidden lg:block relative">
              <div className="absolute -top-16 -left-16 w-32 h-32 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
              <div className="absolute -bottom-16 -right-16 w-32 h-32 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
              <div className="absolute inset-0 rounded-lg overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-indigo-500 opacity-20 rounded-lg"></div>
                <div className="relative p-8">
                  <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-8 shadow-2xl">
                    <div className="flex items-center justify-center h-64">
                      <div className="text-center">
                        <div className="w-24 h-24 bg-blue-500/30 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-4">
                          <Shield className="h-12 w-12 text-white" />
                        </div>
                        <h3 className="text-2xl font-bold mb-2">Meta Shield™</h3>
                        <p className="text-white/80">AI 기반 실시간 보안 시스템</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">디지털 위협으로부터 안전하게</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              upoZero의 혁신적인 보안 솔루션으로 다양한 디지털 위협으로부터 자유로워지세요
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="bg-white border-0 shadow-lg hover:shadow-xl transition-shadow">
              <div className="h-2 bg-blue-600"></div>
              <CardContent className="p-6">
                <Shield className="h-12 w-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-bold mb-2">몸캠피싱 차단</h3>
                <p className="text-gray-600 mb-4">실시간 모니터링과 AI 분석을 통한 몸캠피싱 예방 및 대응</p>
                <Link href="/services" className="text-blue-600 font-medium flex items-center">
                  자세히 보기 <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>

            <Card className="bg-white border-0 shadow-lg hover:shadow-xl transition-shadow">
              <div className="h-2 bg-purple-600"></div>
              <CardContent className="p-6">
                <Users className="h-12 w-12 text-purple-600 mb-4" />
                <h3 className="text-xl font-bold mb-2">딥페이크 탐지</h3>
                <p className="text-gray-600 mb-4">고도화된 딥러닝 기술로 딥페이크 콘텐츠 실시간 탐지</p>
                <Link href="/services" className="text-purple-600 font-medium flex items-center">
                  자세히 보기 <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>

            <Card className="bg-white border-0 shadow-lg hover:shadow-xl transition-shadow">
              <div className="h-2 bg-green-600"></div>
              <CardContent className="p-6">
                <Award className="h-12 w-12 text-green-600 mb-4" />
                <h3 className="text-xl font-bold mb-2">디지털 포렌식</h3>
                <p className="text-gray-600 mb-4">전문 포렌식 분석을 통한 디지털 증거 수집 및 분석</p>
                <Link href="/services" className="text-green-600 font-medium flex items-center">
                  자세히 보기 <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>

            <Card className="bg-white border-0 shadow-lg hover:shadow-xl transition-shadow">
              <div className="h-2 bg-yellow-600"></div>
              <CardContent className="p-6">
                <TrendingUp className="h-12 w-12 text-yellow-600 mb-4" />
                <h3 className="text-xl font-bold mb-2">예방 교육</h3>
                <p className="text-gray-600 mb-4">맞춤형 보안 교육과 인식 개선 프로그램 제공</p>
                <Link href="/services" className="text-yellow-600 font-medium flex items-center">
                  자세히 보기 <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">디지털 위협으로부터 지금 바로 보호받으세요</h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            전문가와의 무료 상담을 통해 맞춤형 보안 솔루션을 확인해보세요
          </p>
          <Button asChild size="lg" className="bg-white hover:bg-gray-100 text-blue-600 font-semibold">
            <Link href="/consultation">무료 상담 신청하기</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}