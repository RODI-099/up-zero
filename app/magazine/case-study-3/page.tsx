import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, User, ArrowLeft, Share2, AlertTriangle, Phone, Users } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function CaseStudy3Page() {
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
          <h1 className="text-4xl font-bold mb-4">SNS 친구요청을 통한 몸캠피싱 접근</h1>
          <div className="flex items-center gap-6 text-gray-600 mb-6">
            <div className="flex items-center gap-2">
              <User className="h-4 w-4" />
              <span>보안전문가</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              <span>2024년 1월 16일</span>
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
            src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg"
            alt="SNS 몸캠피싱"
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
            <h3 className="text-lg font-semibold text-red-800">SNS 보안 설정 점검 필요</h3>
          </div>
          <p className="text-red-700 mb-4">
            SNS 친구 목록이 공개되어 있다면 즉시 비공개로 설정하세요.
          </p>
          <div className="flex items-center gap-2 text-red-700">
            <Phone className="h-4 w-4" />
            <span className="font-semibold">SNS 보안 상담: 1668 2293 (24시간)</span>
          </div>
        </div>

        {/* Article Content */}
        <div className="prose prose-lg max-w-none">
          <h2 className="text-2xl font-bold mt-8 mb-4">사건 개요</h2>
          <p className="text-lg mb-6">
            A씨는 평소처럼 SNS를 둘러보던 중 낯선 사람에게 친구 요청을 받았고, 
            프로필 사진이 자연스러워 별 의심 없이 수락했습니다. 
            상대는 빠르게 친근감을 형성하며 대화를 이어갔고, 얼마 지나지 않아 영상통화를 시도했습니다. 
            통화 중 자연스럽게 신체 노출을 유도하더니, 이내 녹화된 영상과 함께 
            친구 목록을 언급하며 협박 메시지를 보내오기 시작했습니다.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">SNS를 통한 접근의 특징</h2>
          
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
            <h3 className="font-semibold text-blue-800 mb-4">왜 SNS가 표적이 되는가?</h3>
            <ul className="text-blue-700 space-y-2">
              <li>• <strong>개인정보 노출:</strong> 프로필을 통한 개인정보 사전 수집 가능</li>
              <li>• <strong>친구 목록 확인:</strong> 인맥 관계 파악으로 협박 효과 극대화</li>
              <li>• <strong>신뢰성 확보:</strong> 실제 사진과 정보로 신뢰감 조성</li>
              <li>• <strong>접근 용이성:</strong> 친구 요청만으로 쉬운 접근</li>
              <li>• <strong>일상 정보 수집:</strong> 게시물을 통한 생활 패턴 파악</li>
            </ul>
          </div>

          <h2 className="text-2xl font-bold mt-8 mb-4">피해 과정 단계별 분석</h2>
          
          <div className="space-y-6 mb-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-3 text-blue-600">1단계: 타겟 선정 및 정보 수집</h3>
              <p className="text-gray-700 mb-3">
                가해자는 A씨의 SNS 프로필을 사전에 분석하여 다음 정보들을 수집했습니다:
              </p>
              <ul className="text-gray-600 space-y-1">
                <li>• 나이, 성별, 거주 지역</li>
                <li>• 취미, 관심사, 직업</li>
                <li>• 친구 목록 및 인맥 관계</li>
                <li>• 일상 생활 패턴</li>
                <li>• 성격 및 성향</li>
              </ul>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-3 text-blue-600">2단계: 자연스러운 접근</h3>
              <p className="text-gray-700">
                매력적인 프로필 사진과 공통 관심사를 바탕으로 친구 요청을 보냈습니다. 
                프로필이 실제 사람처럼 보이도록 정교하게 꾸며져 있어 의심을 받지 않았습니다.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-3 text-blue-600">3단계: 신뢰 관계 구축</h3>
              <p className="text-gray-700">
                A씨의 게시물에 적극적으로 반응하고, 공통 관심사에 대해 대화를 나누며 
                빠른 시간 내에 친밀감을 형성했습니다. 개인적인 고민도 들어주며 신뢰를 쌓았습니다.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-3 text-orange-600">4단계: 영상통화 유도</h3>
              <p className="text-gray-700">
                "목소리를 듣고 싶다", "얼굴을 보고 싶다"는 자연스러운 이유로 영상통화를 제안했습니다. 
                이미 형성된 신뢰 관계로 인해 A씨는 별다른 의심 없이 응했습니다.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-3 text-red-600">5단계: 정교한 협박</h3>
              <p className="text-gray-700">
                녹화된 영상과 함께 A씨의 친구 목록을 구체적으로 언급하며 협박했습니다. 
                "○○○, △△△에게 이 영상을 보내겠다"며 실명을 거론하여 협박의 현실성을 높였습니다.
              </p>
            </div>
          </div>

          <h2 className="text-2xl font-bold mt-8 mb-4">SNS 정보 악용 방식</h2>
          
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <Card className="border-red-200">
              <CardHeader>
                <CardTitle className="text-lg text-red-800">개인정보 활용</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-sm space-y-2">
                  <li>• 프로필 정보로 맞춤형 접근</li>
                  <li>• 게시물 분석으로 성향 파악</li>
                  <li>• 위치 정보로 현실성 부여</li>
                  <li>• 취미/관심사로 공통점 연출</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-orange-200">
              <CardHeader>
                <CardTitle className="text-lg text-orange-800">인맥 정보 악용</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-sm space-y-2">
                  <li>• 친구 목록으로 협박 대상 확보</li>
                  <li>• 가족 관계 파악으로 압박 강화</li>
                  <li>• 직장 동료 정보로 사회적 위협</li>
                  <li>• 연인 관계 파악으로 심리적 압박</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <h2 className="text-2xl font-bold mt-8 mb-4">피해자의 심리적 충격</h2>
          <p className="mb-6">
            SNS를 통한 몸캠피싱은 피해자에게 특별한 심리적 충격을 줍니다.
          </p>

          <div className="space-y-4 mb-8">
            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4">
              <h3 className="font-semibold text-yellow-800 mb-2">사생활 침해감</h3>
              <p className="text-yellow-700">
                자신의 SNS 정보가 악용되었다는 사실에 큰 충격을 받으며, 
                온라인 활동 전반에 대한 불안감을 느끼게 됩니다.
              </p>
            </div>

            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4">
              <h3 className="font-semibold text-yellow-800 mb-2">인맥 관계 불안</h3>
              <p className="text-yellow-700">
                친구 목록이 협박에 이용되면서 주변 사람들과의 관계에서 
                극심한 불안과 위축감을 느끼게 됩니다.
              </p>
            </div>

            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4">
              <h3 className="font-semibold text-yellow-800 mb-2">신뢰 관계 파괴</h3>
              <p className="text-yellow-700">
                온라인에서 형성된 관계에 대한 신뢰가 완전히 무너지며, 
                새로운 인맥 형성에 어려움을 겪게 됩니다.
              </p>
            </div>
          </div>

          <h2 className="text-2xl font-bold mt-8 mb-4">SNS 보안 설정 가이드</h2>
          
          <div className="space-y-6 mb-8">
            <Card className="border-blue-200">
              <CardHeader>
                <CardTitle className="text-lg text-blue-800">필수 보안 설정</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 text-xs font-bold mt-0.5">
                      1
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">친구 목록 비공개</h4>
                      <p className="text-sm text-gray-600">친구 목록을 비공개로 설정하여 인맥 정보 노출을 방지합니다.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 text-xs font-bold mt-0.5">
                      2
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">프로필 정보 최소화</h4>
                      <p className="text-sm text-gray-600">개인정보(전화번호, 주소, 직장 등)를 프로필에서 제거합니다.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 text-xs font-bold mt-0.5">
                      3
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">게시물 공개 범위 제한</h4>
                      <p className="text-sm text-gray-600">게시물을 친구에게만 공개하거나 특정 그룹으로 제한합니다.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 text-xs font-bold mt-0.5">
                      4
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">친구 요청 제한</h4>
                      <p className="text-sm text-gray-600">친구의 친구만 요청할 수 있도록 설정하거나 수동 승인으로 변경합니다.</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <h2 className="text-2xl font-bold mt-8 mb-4">안전한 SNS 사용법</h2>
          
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <Card className="border-green-200">
              <CardHeader>
                <CardTitle className="text-lg text-green-800">친구 요청 검증</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-sm space-y-2">
                  <li>• 공통 친구 확인</li>
                  <li>• 프로필 활동 이력 점검</li>
                  <li>• 의심스러운 프로필 사진 확인</li>
                  <li>• 급작스러운 친밀감 형성 주의</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-purple-200">
              <CardHeader>
                <CardTitle className="text-lg text-purple-800">대화 시 주의사항</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-sm space-y-2">
                  <li>• 개인정보 공유 최소화</li>
                  <li>• 영상통화 요청 신중히 판단</li>
                  <li>• 성급한 만남 제안 거부</li>
                  <li>• 의심스러운 행동 즉시 차단</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <h2 className="text-2xl font-bold mt-8 mb-4">피해 발생 시 대응 방법</h2>
          
          <div className="space-y-4 mb-8">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center text-red-600 font-bold text-sm mt-1">
                1
              </div>
              <div>
                <h3 className="font-semibold mb-1">즉시 차단 및 신고</h3>
                <p className="text-gray-600">
                  가해자를 즉시 차단하고 SNS 플랫폼에 신고합니다. 
                  추가 연락을 차단하여 2차 피해를 방지합니다.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center text-red-600 font-bold text-sm mt-1">
                2
              </div>
              <div>
                <h3 className="font-semibold mb-1">증거 수집</h3>
                <p className="text-gray-600">
                  대화 내용, 프로필 정보, 협박 메시지를 스크린샷으로 저장합니다. 
                  가해자의 계정 정보도 함께 보존합니다.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center text-red-600 font-bold text-sm mt-1">
                3
              </div>
              <div>
                <h3 className="font-semibold mb-1">보안 설정 강화</h3>
                <p className="text-gray-600">
                  SNS 계정의 보안 설정을 즉시 강화하고, 
                  비밀번호를 변경하여 추가 침해를 방지합니다.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center text-red-600 font-bold text-sm mt-1">
                4
              </div>
              <div>
                <h3 className="font-semibold mb-1">전문기관 신고</h3>
                <p className="text-gray-600">
                  경찰서 사이버수사대나 upoZero 등 전문기관에 신고하여 
                  체계적인 대응을 받습니다.
                </p>
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-bold mt-8 mb-4">결론</h2>
          <p className="mb-6">
            SNS를 통한 몸캠피싱은 개인정보와 인맥 정보를 동시에 악용하는 매우 정교한 범죄입니다. 
            가해자들은 피해자의 SNS 활동을 면밀히 분석하여 맞춤형 접근을 시도하므로, 
            평소 SNS 보안 설정과 사용 습관에 각별한 주의가 필요합니다.
          </p>

          <p className="mb-6">
            특히 친구 목록과 개인정보가 공개되어 있다면 즉시 비공개로 설정하고, 
            낯선 사람의 친구 요청은 신중하게 검토한 후 수락해야 합니다. 
            무엇보다 온라인에서 만난 상대와의 영상통화는 충분한 신뢰 관계가 형성된 후에 
            신중하게 결정하는 것이 중요합니다.
          </p>
        </div>

        {/* SNS Security Guide */}
        <div className="mt-12 pt-8 border-t bg-blue-50 rounded-lg p-6">
          <h3 className="text-xl font-bold text-center mb-4 text-blue-800">SNS 보안 강화 및 상담</h3>
          <div className="grid md:grid-cols-2 gap-6 text-center">
            <div>
              <Users className="h-8 w-8 text-blue-600 mx-auto mb-2" />
              <h4 className="font-semibold text-blue-700 mb-2">SNS 보안 설정 지원</h4>
              <p className="text-blue-600">02-1234-5678</p>
              <p className="text-sm text-blue-500">개인별 맞춤 보안 설정 안내</p>
            </div>
            <div>
              <AlertTriangle className="h-8 w-8 text-red-600 mx-auto mb-2" />
              <h4 className="font-semibold text-red-700 mb-2">피해 신고 및 상담</h4>
              <p className="text-red-600">182 (사이버수사대)</p>
              <p className="text-sm text-red-500">24시간 신고 접수</p>
            </div>
          </div>
          <div className="text-center mt-6">
            <Button asChild className="bg-blue-600 hover:bg-blue-700 mr-4">
              <Link href="/consultation/bodycam">피해 상담 신청</Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/services">SNS 보안 서비스</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}