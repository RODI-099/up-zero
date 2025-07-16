import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Shield, Users, Award, TrendingUp, ArrowRight, CheckCircle, AlertTriangle, Phone, Download } from "lucide-react"
import { MetaShieldDisplay } from "@/components/meta-shield-display"
import Link from "next/link"
import Image from "next/image"
import { FraudChatDemo } from "@/components/fraud-chat-demo"
import { Alert, AlertDescription } from "@/components/ui/alert"

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-[#404EED] text-white py-20 overflow-hidden min-h-[600px] flex items-center">
        <div className="absolute inset-0 bg-gradient-to-b from-[#404EED] to-[#5865F2] opacity-100"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight uppercase tracking-tight font-display">
                디지털 안전을
                <span className="block">위한 새로운 기준</span>
              </h1>
              <p className="text-xl mb-8 text-white/90 max-w-lg">
                몸캠피싱, 딥페이크 등 디지털 성범죄로부터 안전한 세상을 만들어갑니다. 첨단 기술과 전문 솔루션으로 디지털 위협을 제로화합니다.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-white hover:bg-gray-100 text-[#5865F2] font-semibold rounded-full">
                  <Link href="/consultation">무료 상담 신청</Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-white text-white hover:bg-white/20 rounded-full"
                >
                  <Link href="/services">서비스 둘러보기</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">디지털 위협으로부터 안전하게</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              upoZero의 혁신적인 보안 솔루션으로 다양한 디지털 위협으로부터 자유로워지세요
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="bg-white border-0 shadow-lg hover:shadow-xl transition-shadow overflow-hidden">
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

            <Card className="bg-white border-0 shadow-lg hover:shadow-xl transition-shadow overflow-hidden">
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

            <Card className="bg-white border-0 shadow-lg hover:shadow-xl transition-shadow overflow-hidden">
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

            <Card className="bg-white border-0 shadow-lg hover:shadow-xl transition-shadow overflow-hidden">
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

      {/* Mobile App Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight uppercase tracking-tight">
                UPOZERO 앱으로 언제 어디서나 안전하게
              </h2>
              <p className="text-xl mb-8 text-white/90">
                모바일 앱을 통해 실시간 보안 알림을 받고, 언제 어디서나 몸캠피싱과 딥페이크 위협으로부터 보호받으세요.
              </p>
              
              <Alert className="bg-gray-800 border-red-500 mb-8">
                <AlertTriangle className="h-5 w-5 text-red-500" />
                <AlertDescription className="text-white">
                  <div className="font-semibold mb-1">몸캠피싱 위험 감지됨</div>
                  <div className="text-sm text-gray-300">"낯선 사람의 영상통화 요청이 감지되었습니다. 이 패턴은 몸캠피싱 수법과 일치합니다."</div>
                  <div className="text-xs text-gray-400 mt-1">2분 전 • 즉시 차단됨</div>
                </AlertDescription>
              </Alert>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-white hover:bg-gray-100 text-gray-900 font-semibold rounded-full">
                  <Link href="#">
                    <Download className="mr-2 h-4 w-4" />
                    앱 다운로드
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-white text-white hover:bg-white/20 rounded-full"
                >
                  <Link href="/services">자세히 알아보기</Link>
                </Button>
              </div>
            </div>
            
            <div className="flex justify-center">
              <FraudChatDemo />
            </div>
          </div>
          
          <div className="lg:col-span-2 mt-8 flex justify-center">
            <div className="max-w-md">
              <Image 
                src="https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg"
                alt="Meta Shield Security System"
                width={600}
                height={500}
                className="w-full h-auto rounded-lg shadow-lg"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#5865F2] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">디지털 위협으로부터 지금 바로 보호받으세요</h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            전문가와의 무료 상담을 통해 맞춤형 보안 솔루션을 확인해보세요
          </p>
          <Button asChild size="lg" className="bg-white hover:bg-gray-100 text-[#5865F2] font-semibold">
            <Link href="/consultation">무료 상담 신청하기</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}