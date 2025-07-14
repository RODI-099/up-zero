import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, User, ArrowLeft, Share2, AlertTriangle, Phone } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function CaseStudy1Page() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        {/* Back Button */}
        <Button asChild variant="outline" className="mb-8">
          <Link href="/magazine">
            <ArrowLeft className="mr-2 h-4 w-4" />
            매거진으로 돌아가기
          </Link>
        </Button>

        {/* Article Header */}
        <div className="mb-8">
          <Badge className="mb-4 bg-red-100 text-red-800">피해 사례</Badge>
          <h1 className="text-4xl font-bold mb-4">데이팅 앱을 통한 몸캠피싱 피해 사례</h1>
          <div className="flex items-center gap-6 text-gray-600 mb-6">
            <div className="flex items-center gap-2">
              <User className="h-4 w-4" />
              <span>보안전문가</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              <span>2024년 1월 20일</span>
            </div>
            <Button variant="outline" size="sm">
              <Share2 className="mr-2 h-4 w-4" />
              공유하기
            </Button>
          </div>
        </div>

        {/* Featured Image */}
        <div className="mb-8">
          <Image
            src="https://images.pexels.com/photos/4348401/pexels-photo-4348401.jpeg"
            alt="데이팅 앱 피해 사례"
            width={800}
            height={400}
            className="w-full rounded-lg object-cover"
            priority
          />
        </div>

        {/* Emergency Alert */}
        <div className="bg-red-50 border-l-4 border-red-500 p-6 mb-8">
          <div className="flex items-center gap-2 mb-2">
            <AlertTriangle className="h-5 w-5 text-red-600" />
            <h3 className="text-lg font-semibold text-red-800">긴급 상황 시 대응 방법</h3>
          </div>
          <p className="text-red-700 mb-4">
            현재 협박을 받고 있다면 즉시 전문가의 도움을 받으세요.
          </p>
          <div className="flex items-center gap-2 text-red-700">
            <Phone className="h-4 w-4" />
            <span className="font-semibold">upoZero 긴급상담: 1668 2293 (24시간)</span>
          </div>
        </div>

        {/* Article Content */}
        <div className="prose prose-lg max-w-none">
          <h2 className="text-2xl font-bold mt-8 mb-4">사건 개요</h2>
          <p className="text-lg mb-6">
            A씨는 외로운 일상 속에서 누군가와 대화를 나누고 싶어 데이팅 앱을 시작했습니다. 며칠간 메시지를 주고받은 상대가 영상통화를 제안했고, 통화 도중 자연스럽게 신체 노출을 유도하더니 그 장면이 녹화되었다며 협박이 시작됐습니다. 이후 A씨는 '당신 연락처에 있는 사람들에게 전부 보내겠다'는 메시지를 받고 극심한 불안에 시달리며 결국 경찰과 상담기관을 찾게 되었습니다.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">피해 과정 분석</h2>
          
          <div className="space-y-6 mb-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-3 text-blue-600">1단계: 초기 접촉</h3>
              <p className="text-gray-700">
                가해자는 데이팅 앱에서 매력적인 프로필을 사용하여 피해자에게 접근했습니다. 
                외로움을 느끼는 사용자들을 타겟으로 하여 친근하고 이해심 많은 모습을 연출했습니다.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-3 text-blue-600">2단계: 신뢰 구축</h3>
              <p className="text-gray-700">
                며칠간 지속적인 메시지 교환을 통해 피해자와의 친밀감을 형성했습니다. 
                개인적인 고민을 들어주고 공감하는 모습을 보이며 신뢰를 쌓았습니다.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-3 text-blue-600">3단계: 영상통화 유도</h3>
              <p className="text-gray-700">
                충분한 신뢰가 형성된 후 "얼굴을 보고 싶다"는 자연스러운 이유로 영상통화를 제안했습니다. 
                통화 중 점진적으로 성적인 대화와 행동을 유도했습니다.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-3 text-red-600">4단계: 협박 시작</h3>
              <p className="text-gray-700">
                녹화된 영상을 증거로 제시하며 즉시 협박을 시작했습니다. 
                피해자의 연락처 목록을 언급하며 유포 위협을 가했습니다.
              </p>
            </div>
          </div>

          <h2 className="text-2xl font-bold mt-8 mb-4">피해자의 심리적 상태</h2>
          <p className="mb-6">
            A씨는 협박 메시지를 받은 후 극심한 불안과 공포에 시달렸습니다. 
            가족, 친구, 직장 동료들에게 영상이 유포될 것에 대한 두려움으로 일상생활이 불가능해졌습니다.
          </p>

          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-8">
            <h3 className="font-semibold text-yellow-800 mb-2">주요 심리적 증상</h3>
            <ul className="text-yellow-700 space-y-2">
              <li>• 극심한 불안과 공포감</li>
              <li>• 수면 장애 및 식욕 부진</li>
              <li>• 사회적 관계 회피</li>
              <li>• 우울감과 절망감</li>
              <li>• 자책감과 수치심</li>
            </ul>
          </div>

          <h2 className="text-2xl font-bold mt-8 mb-4">대응 과정</h2>
          <p className="mb-6">
            A씨는 처음에는 혼자 해결하려 했지만, 상황이 악화되자 결국 전문기관의 도움을 요청했습니다.
          </p>

          <div className="space-y-4 mb-8">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center text-green-600 font-bold text-sm mt-1">
                1
              </div>
              <div>
                <h3 className="font-semibold mb-1">경찰 신고</h3>
                <p className="text-gray-600">사이버수사대에 신고하여 수사를 의뢰했습니다.</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center text-green-600 font-bold text-sm mt-1">
                2
              </div>
              <div>
                <h3 className="font-semibold mb-1">전문 상담</h3>
                <p className="text-gray-600">upoZero에서 전문 상담을 받으며 심리적 지원을 받았습니다.</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center text-green-600 font-bold text-sm mt-1">
                3
              </div>
              <div>
                <h3 className="font-semibold mb-1">증거 수집</h3>
                <p className="text-gray-600">협박 메시지와 관련 증거를 체계적으로 수집했습니다.</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center text-green-600 font-bold text-sm mt-1">
                4
              </div>
              <div>
                <h3 className="font-semibold mb-1">법적 대응</h3>
                <p className="text-gray-600">전문 변호사와 함께 법적 대응 방안을 마련했습니다.</p>
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-bold mt-8 mb-4">예방 방법</h2>
          <p className="mb-6">이 사례를 통해 배울 수 있는 예방 방법들을 정리했습니다.</p>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <Card className="border-blue-200">
              <CardHeader>
                <CardTitle className="text-lg text-blue-800">데이팅 앱 사용 시 주의사항</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-sm space-y-2">
                  <li>• 성급한 영상통화 요청 거부</li>
                  <li>• 개인정보 노출 최소화</li>
                  <li>• 의심스러운 행동 패턴 인지</li>
                  <li>• 신뢰 구축 과정 신중히 판단</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-green-200">
              <CardHeader>
                <CardTitle className="text-lg text-green-800">안전한 온라인 만남</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-sm space-y-2">
                  <li>• 공개된 장소에서 첫 만남</li>
                  <li>• 충분한 시간을 두고 관계 발전</li>
                  <li>• 주변 사람들과 상황 공유</li>
                  <li>• 직감을 믿고 위험 신호 인지</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <h2 className="text-2xl font-bold mt-8 mb-4">결론</h2>
          <p className="mb-6">
            이 사례는 데이팅 앱을 통한 몸캠피싱의 전형적인 패턴을 보여줍니다. 
            가해자들은 피해자의 외로움과 관계에 대한 욕구를 악용하여 접근하므로, 
            온라인에서 만난 상대와의 관계에서는 항상 신중함을 유지해야 합니다.
          </p>

          <p className="mb-6">
            무엇보다 중요한 것은 피해를 입었을 때 혼자 해결하려 하지 말고 
            즉시 전문기관의 도움을 받는 것입니다. 
            빠른 대응이 피해를 최소화하는 가장 효과적인 방법입니다.
          </p>
        </div>

        {/* Emergency Contact */}
        <div className="mt-12 pt-8 border-t bg-red-50 rounded-lg p-6">
          <h3 className="text-xl font-bold text-center mb-4 text-red-800">긴급 상담 및 신고</h3>
          <div className="grid md:grid-cols-3 gap-4 text-center">
            <div>
              <h4 className="font-semibold text-red-700 mb-2">upoZero 긴급상담</h4>
              <p className="text-red-600">1668 2293</p>
              <p className="text-sm text-red-500">24시간 운영</p>
            </div>
            <div>
              <h4 className="font-semibold text-red-700 mb-2">경찰청 사이버수사대</h4>
              <p className="text-red-600">182</p>
              <p className="text-sm text-red-500">24시간 신고</p>
            </div>
            <div>
              <h4 className="font-semibold text-red-700 mb-2">디지털성범죄피해자지원센터</h4>
              <p className="text-red-600">1668 2293</p>
              <p className="text-sm text-red-500">전문 상담</p>
            </div>
          </div>
          <div className="text-center mt-6">
            <Button asChild className="bg-red-600 hover:bg-red-700">
              <Link href="/consultation/bodycam">전문 상담 신청</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}