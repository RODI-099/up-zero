import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, User, ArrowLeft, Share2, AlertTriangle, Phone, Gamepad2 } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function CaseStudy4Page() {
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
          <h1 className="text-4xl font-bold mb-4">게임 채팅을 통한 몸캠피싱 사례</h1>
          <div className="flex items-center gap-6 text-gray-600 mb-6">
            <div className="flex items-center gap-2">
              <User className="h-4 w-4" />
              <span>보안전문가</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              <span>2024년 1월 14일</span>
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
            src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg"
            alt="게임 채팅 몸캠피싱"
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
            <h3 className="text-lg font-semibold text-red-800">게임 내 개인정보 보호 필수</h3>
          </div>
          <p className="text-red-700 mb-4">
            게임에서 만난 상대와 개인 연락처를 주고받을 때는 각별한 주의가 필요합니다.
          </p>
          <div className="flex items-center gap-2 text-red-700">
            <Phone className="h-4 w-4" />
            <span className="font-semibold">게임 관련 피해 상담: 02-1234-5678 (24시간)</span>
          </div>
        </div>

        {/* Article Content */}
        <div className="prose prose-lg max-w-none">
          <h2 className="text-2xl font-bold mt-8 mb-4">사건 개요</h2>
          <p className="text-lg mb-6">
            A씨는 평소 즐겨하던 모바일 게임에서 자주 매칭되던 유저와 자연스럽게 친해졌고, 
            게임 내 채팅을 통해 카카오톡 아이디를 주고받게 됐습니다. 
            이후 상대는 친근한 말투로 관심을 표현하며 영상통화를 요청했고, 
            통화 도중 신체 노출을 유도했습니다. 
            곧이어 해당 장면이 녹화되었다는 메시지와 함께 친구 목록과 게임 커뮤니티에 
            유포하겠다는 협박이 이어졌습니다.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">게임을 통한 접근의 특징</h2>
          
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
            <h3 className="font-semibold text-blue-800 mb-4">게임이 범죄 도구로 악용되는 이유</h3>
            <ul className="text-blue-700 space-y-2">
              <li>• <strong>자연스러운 만남:</strong> 게임이라는 공통 관심사로 자연스러운 관계 형성</li>
              <li>• <strong>장기간 접촉:</strong> 반복적인 게임 플레이를 통한 신뢰 구축</li>
              <li>• <strong>팀워크 강조:</strong> 협력 플레이를 통한 유대감 형성</li>
              <li>• <strong>익명성 활용:</strong> 게임 닉네임으로 신원 은폐</li>
              <li>• <strong>커뮤니티 위협:</strong> 게임 커뮤니티 내 평판 손상 협박</li>
            </ul>
          </div>

          <h2 className="text-2xl font-bold mt-8 mb-4">피해 과정 단계별 분석</h2>
          
          <div className="space-y-6 mb-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-3 text-blue-600">1단계: 게임 내 관계 형성</h3>
              <p className="text-gray-700 mb-3">
                가해자는 A씨와 같은 게임을 즐기며 자주 매칭되는 상황을 연출했습니다:
              </p>
              <ul className="text-gray-600 space-y-1">
                <li>• 뛰어난 게임 실력으로 호감 유도</li>
                <li>• 협력 플레이를 통한 팀워크 강조</li>
                <li>• 게임 팁과 정보 공유로 신뢰 구축</li>
                <li>• 정기적인 게임 시간 약속</li>
                <li>• 게임 내 선물 및 아이템 제공</li>
              </ul>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-3 text-blue-600">2단계: 개인 연락처 교환</h3>
              <p className="text-gray-700">
                "더 편하게 소통하자"는 이유로 카카오톡 아이디 교환을 제안했습니다. 
                게임에서 형성된 신뢰 관계로 인해 A씨는 자연스럽게 연락처를 공유했습니다.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-3 text-blue-600">3단계: 관계 발전 유도</h3>
              <p className="text-gray-700">
                게임 이야기에서 시작하여 점차 개인적인 대화로 확장했습니다. 
                일상 고민을 들어주고 관심을 표현하며 단순한 게임 친구를 넘어선 관계로 발전시켰습니다.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-3 text-orange-600">4단계: 영상통화 요청</h3>
              <p className="text-gray-700">
                "목소리를 듣고 싶다", "실제 모습이 궁금하다"며 영상통화를 제안했습니다. 
                이미 충분한 신뢰가 형성된 상태여서 A씨는 별다른 의심 없이 응했습니다.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-3 text-red-600">5단계: 게임 커뮤니티 협박</h3>
              <p className="text-gray-700">
                녹화된 영상과 함께 게임 커뮤니티와 길드원들에게 유포하겠다고 협박했습니다. 
                게임 내에서의 평판과 인맥을 고려한 정교한 협박이었습니다.
              </p>
            </div>
          </div>

          <h2 className="text-2xl font-bold mt-8 mb-4">게임 환경의 취약점</h2>
          
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <Card className="border-red-200">
              <CardHeader>
                <CardTitle className="text-lg text-red-800">심리적 취약점</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-sm space-y-2">
                  <li>• 게임 실력에 대한 인정 욕구</li>
                  <li>• 팀워크를 통한 소속감 형성</li>
                  <li>• 게임 커뮤니티 내 평판 의식</li>
                  <li>• 장기간 관계로 인한 신뢰감</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-orange-200">
              <CardHeader>
                <CardTitle className="text-lg text-orange-800">환경적 취약점</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-sm space-y-2">
                  <li>• 익명성으로 인한 신원 확인 어려움</li>
                  <li>• 게임 내 개인정보 노출</li>
                  <li>• 외부 메신저로의 자연스러운 이동</li>
                  <li>• 게임 커뮤니티의 폐쇄적 특성</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <h2 className="text-2xl font-bold mt-8 mb-4">게임별 주요 위험 요소</h2>
          
          <div className="space-y-6 mb-8">
            <Card className="border-purple-200">
              <CardHeader>
                <CardTitle className="text-lg text-purple-800">MMORPG (대규모 온라인 롤플레잉 게임)</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-sm space-y-2">
                  <li>• 길드 시스템을 통한 장기간 관계 형성</li>
                  <li>• 캐릭터 육성을 위한 협력 플레이</li>
                  <li>• 게임 내 결혼 시스템 악용</li>
                  <li>• 아이템 거래를 통한 호감 유도</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-green-200">
              <CardHeader>
                <CardTitle className="text-lg text-green-800">모바일 게임</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-sm space-y-2">
                  <li>• 간편한 친구 추가 시스템</li>
                  <li>• 실시간 채팅 기능</li>
                  <li>• 일상적인 접근성</li>
                  <li>• 소셜 기능 강화 트렌드</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-blue-200">
              <CardHeader>
                <CardTitle className="text-lg text-blue-800">FPS/배틀로얄 게임</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-sm space-y-2">
                  <li>• 팀 플레이를 위한 음성 채팅</li>
                  <li>• 실력 과시를 통한 어필</li>
                  <li>• 승부욕을 이용한 관계 형성</li>
                  <li>• 듀오/스쿼드 플레이 집중도</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <h2 className="text-2xl font-bold mt-8 mb-4">안전한 게임 이용 수칙</h2>
          
          <div className="space-y-6 mb-8">
            <Card className="border-blue-200">
              <CardHeader>
                <CardTitle className="text-lg text-blue-800">게임 내 개인정보 보호</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 text-xs font-bold mt-0.5">
                      1
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">닉네임 신중 선택</h4>
                      <p className="text-sm text-gray-600">실명이나 개인정보가 유추 가능한 닉네임 사용 금지</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 text-xs font-bold mt-0.5">
                      2
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">프로필 정보 최소화</h4>
                      <p className="text-sm text-gray-600">나이, 지역, 직업 등 개인정보 노출 최소화</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 text-xs font-bold mt-0.5">
                      3
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">연락처 교환 신중</h4>
                      <p className="text-sm text-gray-600">충분한 신뢰 관계 형성 후 단계적 연락처 공유</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 text-xs font-bold mt-0.5">
                      4
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">음성채팅 주의</h4>
                      <p className="text-sm text-gray-600">음성을 통한 개인정보 노출 및 녹음 가능성 인지</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <h2 className="text-2xl font-bold mt-8 mb-4">의심 신호 및 대응 방법</h2>
          
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <Card className="border-yellow-200">
              <CardHeader>
                <CardTitle className="text-lg text-yellow-800">주의해야 할 신호</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-sm space-y-2">
                  <li>• 과도한 관심과 호의 표현</li>
                  <li>• 급작스러운 개인 연락처 요구</li>
                  <li>• 게임 외 만남 지속적 제안</li>
                  <li>• 개인정보 캐묻기</li>
                  <li>• 영상통화 강요</li>
                  <li>• 선물이나 아이템 과도한 제공</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-green-200">
              <CardHeader>
                <CardTitle className="text-lg text-green-800">즉시 대응 방법</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-sm space-y-2">
                  <li>• 게임 내 차단 및 신고</li>
                  <li>• 외부 메신저 연락 차단</li>
                  <li>• 길드/팀에서 제외</li>
                  <li>• 관련 증거 스크린샷 보존</li>
                  <li>• 게임 운영진에 신고</li>
                  <li>• 필요시 전문기관 신고</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <h2 className="text-2xl font-bold mt-8 mb-4">게임 회사의 역할</h2>
          <p className="mb-6">
            게임 회사들도 사용자 보호를 위한 다양한 안전 장치를 마련하고 있습니다.
          </p>

          <div className="space-y-4 mb-8">
            <div className="bg-blue-50 border-l-4 border-blue-500 p-4">
              <h3 className="font-semibold text-blue-800 mb-2">신고 시스템 강화</h3>
              <p className="text-blue-700">
                게임 내 신고 기능을 강화하고 신속한 대응 체계를 구축하여 
                악성 사용자를 빠르게 제재하고 있습니다.
              </p>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-4">
              <h3 className="font-semibold text-blue-800 mb-2">개인정보 보호 강화</h3>
              <p className="text-blue-700">
                사용자의 개인정보 노출을 최소화하고 
                프라이버시 설정 옵션을 다양하게 제공하고 있습니다.
              </p>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-4">
              <h3 className="font-semibold text-blue-800 mb-2">안전 교육 제공</h3>
              <p className="text-blue-700">
                게임 내 안전 가이드와 주의사항을 제공하여 
                사용자들의 보안 의식을 높이고 있습니다.
              </p>
            </div>
          </div>

          <h2 className="text-2xl font-bold mt-8 mb-4">결론</h2>
          <p className="mb-6">
            게임을 통한 몸캠피싱은 장기간에 걸친 신뢰 관계를 바탕으로 하기 때문에 
            피해자가 의심하기 어렵고 피해가 더욱 클 수 있습니다. 
            게임이라는 공통 관심사와 팀워크를 통한 유대감이 범죄자들에게 악용되고 있습니다.
          </p>

          <p className="mb-6">
            따라서 게임을 즐길 때도 온라인에서 만난 상대에 대한 기본적인 경계심을 유지하고, 
            개인정보 공유나 영상통화 요청에는 신중하게 대응해야 합니다. 
            특히 게임에서 형성된 관계라고 해서 무조건 안전하다고 생각하지 말고, 
            항상 주의 깊은 자세를 유지하는 것이 중요합니다.
          </p>
        </div>

        {/* Gaming Safety Guide */}
        <div className="mt-12 pt-8 border-t bg-purple-50 rounded-lg p-6">
          <h3 className="text-xl font-bold text-center mb-4 text-purple-800">게임 안전 이용 및 상담</h3>
          <div className="grid md:grid-cols-2 gap-6 text-center">
            <div>
              <Gamepad2 className="h-8 w-8 text-purple-600 mx-auto mb-2" />
              <h4 className="font-semibold text-purple-700 mb-2">게임 안전 가이드</h4>
              <p className="text-purple-600">02-1234-5678</p>
              <p className="text-sm text-purple-500">게임별 맞춤 보안 설정 안내</p>
            </div>
            <div>
              <AlertTriangle className="h-8 w-8 text-red-600 mx-auto mb-2" />
              <h4 className="font-semibold text-red-700 mb-2">피해 신고 및 상담</h4>
              <p className="text-red-600">182 (사이버수사대)</p>
              <p className="text-sm text-red-500">게임 관련 사이버 범죄 신고</p>
            </div>
          </div>
          <div className="text-center mt-6">
            <Button asChild className="bg-purple-600 hover:bg-purple-700 mr-4">
              <Link href="/consultation/bodycam">게임 피해 상담</Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/services">게임 보안 서비스</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}