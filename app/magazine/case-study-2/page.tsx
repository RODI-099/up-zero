import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, User, ArrowLeft, Share2, AlertTriangle, Phone, Shield } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function CaseStudy2Page() {
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
          <h1 className="text-4xl font-bold mb-4">군인 대상 몸캠피싱 협박 사례</h1>
          <div className="flex items-center gap-6 text-gray-600 mb-6">
            <div className="flex items-center gap-2">
              <User className="h-4 w-4" />
              <span>보안전문가</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              <span>2024년 1월 18일</span>
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
            src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg"
            alt="군인 대상 몸캠피싱"
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
            <h3 className="text-lg font-semibold text-red-800">군인 대상 특별 주의사항</h3>
          </div>
          <p className="text-red-700 mb-4">
            군인의 경우 부대 내 파급효과가 클 수 있으므로 더욱 신속한 대응이 필요합니다.
          </p>
          <div className="flex items-center gap-2 text-red-700">
            <Phone className="h-4 w-4" />
            <span className="font-semibold">군 관련 전문상담: 1668 2293 (24시간)</span>
          </div>
        </div>

        {/* Article Content */}
        <div className="prose prose-lg max-w-none">
          <h2 className="text-2xl font-bold mt-8 mb-4">사건 개요</h2>
          <p className="text-lg mb-6">
            휴가 중 데이팅 앱에서 알게 된 여성과 몇 차례 대화를 나눈 뒤 영상통화를 하게 됐습니다. 
            통화 도중 상대가 음질이 안 좋다며 특정 앱을 설치하라고 해 그대로 따랐고, 
            이후 예상치 못한 상황에서 신체 노출 장면이 녹화됐습니다. 
            곧이어 저장된 영상과 함께 군부대 상관 연락처가 포함된 명단을 보여주며 협박 메시지가 날아왔습니다.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">군인 대상 몸캠피싱의 특징</h2>
          
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
            <h3 className="font-semibold text-blue-800 mb-4">왜 군인이 표적이 되는가?</h3>
            <ul className="text-blue-700 space-y-2">
              <li>• <strong>제한된 사회적 접촉:</strong> 부대 생활로 인한 외부 접촉 제한</li>
              <li>• <strong>높은 사회적 지위:</strong> 군인이라는 신분의 특수성</li>
              <li>• <strong>조직 내 파급효과:</strong> 부대 내 소문 확산에 대한 두려움</li>
              <li>• <strong>규율과 명예:</strong> 군기와 명예를 중시하는 문화</li>
              <li>• <strong>경제적 안정성:</strong> 정기적인 급여 수입</li>
            </ul>
          </div>

          <h2 className="text-2xl font-bold mt-8 mb-4">피해 과정 상세 분석</h2>
          
          <div className="space-y-6 mb-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-3 text-blue-600">1단계: 타겟 식별</h3>
              <p className="text-gray-700">
                가해자는 데이팅 앱에서 군인임을 암시하는 프로필을 가진 사용자를 의도적으로 타겟으로 선정했습니다. 
                휴가 중이라는 정보를 파악하고 접근했습니다.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-3 text-blue-600">2단계: 신뢰 구축 및 정보 수집</h3>
              <p className="text-gray-700">
                군 생활의 어려움에 공감하며 친밀감을 형성했습니다. 
                대화 중 자연스럽게 부대 정보, 계급, 상관 정보 등을 수집했습니다.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-3 text-orange-600">3단계: 기술적 조작</h3>
              <p className="text-gray-700">
                "음질이 안 좋다"는 핑계로 특정 앱 설치를 유도했습니다. 
                이 앱을 통해 화면 녹화나 추가적인 개인정보 수집이 가능했을 것으로 추정됩니다.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-3 text-red-600">4단계: 정교한 협박</h3>
              <p className="text-gray-700">
                단순한 지인 유포 협박이 아닌, 구체적인 부대 상관 연락처를 제시하며 
                군 조직 내에서의 파급효과를 강조한 정교한 협박을 시행했습니다.
              </p>
            </div>
          </div>

          <h2 className="text-2xl font-bold mt-8 mb-4">군인 특화 협박 기법</h2>
          
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <Card className="border-red-200">
              <CardHeader>
                <CardTitle className="text-lg text-red-800">조직 내 협박</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-sm space-y-2">
                  <li>• 부대 상관에게 영상 전송 위협</li>
                  <li>• 군 커뮤니티 게시판 유포 협박</li>
                  <li>• 동기들에게 소문 확산 위협</li>
                  <li>• 진급 및 평가에 미칠 영향 언급</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-orange-200">
              <CardHeader>
                <CardTitle className="text-lg text-orange-800">사회적 협박</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-sm space-y-2">
                  <li>• 가족 및 연인에게 유포 위협</li>
                  <li>• 전역 후 취업에 미칠 영향 언급</li>
                  <li>• 군인 신분의 사회적 이미지 훼손</li>
                  <li>• 지역 사회 내 평판 손상 위협</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <h2 className="text-2xl font-bold mt-8 mb-4">군인의 심리적 취약점</h2>
          <p className="mb-6">
            군인들이 이러한 협박에 특히 취약한 이유를 분석해보겠습니다.
          </p>

          <div className="space-y-4 mb-8">
            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4">
              <h3 className="font-semibold text-yellow-800 mb-2">명예와 체면 의식</h3>
              <p className="text-yellow-700">
                군인으로서의 명예와 체면을 중시하는 문화로 인해 
                개인적인 실수가 공개되는 것에 대한 두려움이 큽니다.
              </p>
            </div>

            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4">
              <h3 className="font-semibold text-yellow-800 mb-2">조직 내 위계질서</h3>
              <p className="text-yellow-700">
                상하관계가 명확한 군 조직에서 상관에게 알려질 경우의 
                징계나 불이익에 대한 우려가 큽니다.
              </p>
            </div>

            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4">
              <h3 className="font-semibold text-yellow-800 mb-2">제한된 상담 기회</h3>
              <p className="text-yellow-700">
                부대 내에서는 이런 문제를 상담하기 어려워 
                혼자 해결하려는 경향이 강합니다.
              </p>
            </div>
          </div>

          <h2 className="text-2xl font-bold mt-8 mb-4">올바른 대응 방법</h2>
          
          <div className="space-y-4 mb-8">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center text-green-600 font-bold text-sm mt-1">
                1
              </div>
              <div>
                <h3 className="font-semibold mb-1">즉시 전문기관 신고</h3>
                <p className="text-gray-600">
                  부대 내 신고보다 외부 전문기관(경찰, upoZero 등)에 먼저 신고하여 
                  전문적인 대응 방안을 마련합니다.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center text-green-600 font-bold text-sm mt-1">
                2
              </div>
              <div>
                <h3 className="font-semibold mb-1">증거 보전</h3>
                <p className="text-gray-600">
                  협박 메시지, 설치한 앱 정보, 대화 내용 등을 
                  스크린샷으로 저장하여 증거를 보전합니다.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center text-green-600 font-bold text-sm mt-1">
                3
              </div>
              <div>
                <h3 className="font-semibold mb-1">부대 상황 보고</h3>
                <p className="text-gray-600">
                  전문기관의 조언을 받은 후, 필요시 부대 내 신뢰할 수 있는 
                  상관에게 상황을 보고하여 조직적 지원을 받습니다.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center text-green-600 font-bold text-sm mt-1">
                4
              </div>
              <div>
                <h3 className="font-semibold mb-1">심리적 지원</h3>
                <p className="text-gray-600">
                  전문 상담을 통해 심리적 충격을 완화하고 
                  정상적인 군 생활을 유지할 수 있도록 지원받습니다.
                </p>
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-bold mt-8 mb-4">부대 차원의 예방 대책</h2>
          
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <Card className="border-blue-200">
              <CardHeader>
                <CardTitle className="text-lg text-blue-800">교육 및 인식 개선</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-sm space-y-2">
                  <li>• 정기적인 사이버 보안 교육</li>
                  <li>• 몸캠피싱 사례 공유 및 경각심 제고</li>
                  <li>• 온라인 만남 시 주의사항 교육</li>
                  <li>• 피해 발생 시 신고 절차 안내</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-green-200">
              <CardHeader>
                <CardTitle className="text-lg text-green-800">지원 체계 구축</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-sm space-y-2">
                  <li>• 익명 상담 창구 운영</li>
                  <li>• 전문기관과의 협력 체계 구축</li>
                  <li>• 피해자 보호 및 지원 정책 마련</li>
                  <li>• 2차 피해 방지 대책 수립</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <h2 className="text-2xl font-bold mt-8 mb-4">결론</h2>
          <p className="mb-6">
            군인 대상 몸캠피싱은 일반적인 사례보다 더욱 정교하고 악질적인 특성을 보입니다. 
            가해자들은 군 조직의 특성과 군인들의 심리적 취약점을 정확히 파악하고 악용합니다.
          </p>

          <p className="mb-6">
            따라서 군인들은 온라인 활동 시 더욱 각별한 주의가 필요하며, 
            피해 발생 시에는 혼자 해결하려 하지 말고 즉시 전문기관의 도움을 받아야 합니다. 
            또한 부대 차원에서도 체계적인 예방 교육과 지원 체계를 구축하는 것이 중요합니다.
          </p>
        </div>

        {/* Military Specific Contact */}
        <div className="mt-12 pt-8 border-t bg-blue-50 rounded-lg p-6">
          <h3 className="text-xl font-bold text-center mb-4 text-blue-800">군인 전용 상담 및 지원</h3>
          <div className="grid md:grid-cols-2 gap-6 text-center">
            <div>
              <Shield className="h-8 w-8 text-blue-600 mx-auto mb-2" />
              <h4 className="font-semibold text-blue-700 mb-2">군인 전용 상담</h4>
              <p className="text-blue-600">02-1234-5678</p>
              <p className="text-sm text-blue-500">24시간 운영 / 익명 보장</p>
            </div>
            <div>
              <AlertTriangle className="h-8 w-8 text-red-600 mx-auto mb-2" />
              <h4 className="font-semibold text-red-700 mb-2">긴급 신고</h4>
              <p className="text-red-600">182 (사이버수사대)</p>
              <p className="text-sm text-red-500">즉시 신고 / 전문 수사</p>
            </div>
          </div>
          <div className="text-center mt-6">
            <Button asChild className="bg-blue-600 hover:bg-blue-700">
              <Link href="/consultation/bodycam">군인 전용 상담 신청</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}