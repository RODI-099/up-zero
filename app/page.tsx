import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Shield, Users, Award, TrendingUp } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-purple-700 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                디지털 안전의 새로운 기준
                <span className="block text-yellow-300">upoZero</span>
              </h1>
              <p className="text-xl mb-8 text-blue-100">
                몸캠피싱, 딥페이크 등 디지털 성범죄로부터 안전한 세상을 만들어갑니다. 첨단 기술과 전문 솔루션으로 디지털
                위협을 제로화합니다.
              </p>
              <div className="flex gap-4">
                <Button asChild size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-black">
                  <Link href="/consultation">무료 상담 신청</Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-white text-white hover:bg-white hover:text-blue-600"
                >
                  <Link href="/services">서비스 둘러보기</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <Image
                src="https://images.pexels.com/photos/5380642/pexels-photo-5380642.jpeg"
                alt="Digital Security Technology"
                width={500}
                height={400}
                className="rounded-lg shadow-2xl"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
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

      {/* Services Overview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">주요 서비스</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              최첨단 AI 기술과 전문 인력이 결합된 종합 디지털 보안 솔루션
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Shield className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <CardTitle>몸캠피싱 차단</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>실시간 모니터링과 AI 분석을 통한 몸캠피싱 예방 및 대응</CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Users className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <CardTitle>딥페이크 탐지</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>고도화된 딥러닝 기술로 딥페이크 콘텐츠 실시간 탐지</CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Award className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <CardTitle>디지털 포렌식</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>전문 포렌식 분석을 통한 디지털 증거 수집 및 분석</CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <TrendingUp className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <CardTitle>예방 교육</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>맞춤형 보안 교육과 인식 개선 프로그램 제공</CardDescription>
              </CardContent>
            </Card>
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