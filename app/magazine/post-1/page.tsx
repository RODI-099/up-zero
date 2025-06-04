import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, User, ArrowLeft, Share2, AlertTriangle } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function Post1Page() {
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
          <Badge className="mb-4">보안 가이드</Badge>
          <h1 className="text-4xl font-bold mb-4">몸캠피싱 피해 예방을 위한 5가지 핵심 수칙</h1>
          <div className="flex items-center gap-6 text-gray-600 mb-6">
            <div className="flex items-center gap-2">
              <User className="h-4 w-4" />
              <span>이전문가</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              <span>2024년 1월 10일</span>
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
            src="/images/magazine/bodycam-prevention.jpg"
            alt="몸캠피싱 예방"
            width={800}
            height={400}
            className="w-full rounded-lg object-cover"
          />
        </div>

        {/* Article Content */}
        <div className="prose prose-lg max-w-none">
          <div className="bg-red-50 border-l-4 border-red-500 p-6 mb-8">
            <div className="flex items-center gap-2 mb-2">
              <AlertTriangle className="h-5 w-5 text-red-600" />
              <h3 className="text-lg font-semibold text-red-800">중요 안내</h3>
            </div>
            <p className="text-red-700">
              몸캠피싱은 심각한 사이버 성범죄입니다. 피해를 입으셨다면 즉시 전문가의 도움을 받으시기 바랍니다.
            </p>
          </div>

          <p className="text-xl text-gray-600 mb-8">
            몸캠피싱 피해가 급증하고 있는 가운데, 예방이 가장 중요한 대응책입니다. 다음 5가지 핵심 수칙을 반드시
            기억하고 실천하세요.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">1. 낯선 사람과의 화상통화 거부</h2>
          <p className="mb-6">
            온라인에서 만난 낯선 사람이 화상통화를 제안한다면 단호히 거절하세요. 특히 다음과 같은 상황에서는 더욱
            주의해야 합니다:
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>갑작스럽게 친밀한 관계를 요구하는 경우</li>
            <li>개인정보를 과도하게 묻는 경우</li>
            <li>화상통화를 강요하거나 압박하는 경우</li>
            <li>금전적 도움이나 선물을 제안하는 경우</li>
          </ul>

          <h2 className="text-2xl font-bold mt-8 mb-4">2. 개인정보 노출 최소화</h2>
          <p className="mb-6">온라인에서는 개인정보 노출을 최소화해야 합니다:</p>
          <Card className="mb-6">
            <CardHeader>
              <CardTitle className="text-lg">보호해야 할 정보</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li>• 실명, 주소, 전화번호</li>
                <li>• 직장 정보, 학교 정보</li>
                <li>• 가족 관계, 인간관계</li>
                <li>• 경제적 상황, 자산 정보</li>
                <li>• SNS 계정, 개인 사진</li>
              </ul>
            </CardContent>
          </Card>

          <h2 className="text-2xl font-bold mt-8 mb-4">3. 의심스러운 링크 클릭 금지</h2>
          <p className="mb-6">가해자들은 종종 악성 링크를 통해 개인정보를 탈취하거나 기기를 해킹합니다:</p>
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-6">
            <h3 className="font-semibold text-yellow-800 mb-2">주의해야 할 링크</h3>
            <ul className="text-yellow-700 space-y-1">
              <li>• 출처가 불분명한 단축 URL</li>
              <li>• 급하게 클릭하라고 재촉하는 링크</li>
              <li>• 개인정보 입력을 요구하는 사이트</li>
              <li>• 파일 다운로드를 유도하는 링크</li>
            </ul>
          </div>

          <h2 className="text-2xl font-bold mt-8 mb-4">4. 보안 설정 강화</h2>
          <p className="mb-6">각종 플랫폼과 기기의 보안 설정을 강화하여 예방 효과를 높일 수 있습니다:</p>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">SNS 보안 설정</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>• 프로필 비공개 설정</li>
                  <li>• 친구 요청 제한</li>
                  <li>• 메시지 수신 제한</li>
                  <li>• 위치 정보 비공개</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">기기 보안 설정</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>• 웹캠 접근 권한 관리</li>
                  <li>• 마이크 접근 권한 관리</li>
                  <li>• 자동 업데이트 활성화</li>
                  <li>• 백신 프로그램 설치</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <h2 className="text-2xl font-bold mt-8 mb-4">5. 피해 발생 시 즉시 대응</h2>
          <p className="mb-6">만약 몸캠피싱 피해를 입었다면 다음과 같이 즉시 대응해야 합니다:</p>

          <div className="space-y-4 mb-6">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center text-red-600 font-bold text-sm mt-1">
                1
              </div>
              <div>
                <h3 className="font-semibold mb-1">즉시 연락 차단</h3>
                <p className="text-gray-600">가해자와의 모든 연락을 차단하고 추가 접촉을 피하세요.</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center text-red-600 font-bold text-sm mt-1">
                2
              </div>
              <div>
                <h3 className="font-semibold mb-1">증거 보전</h3>
                <p className="text-gray-600">대화 내용, 계좌 정보, 협박 메시지를 스크린샷으로 저장하세요.</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center text-red-600 font-bold text-sm mt-1">
                3
              </div>
              <div>
                <h3 className="font-semibold mb-1">전문가 상담</h3>
                <p className="text-gray-600">upoZero(02-1234-5678) 또는 경찰서(112)에 즉시 신고하세요.</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center text-red-600 font-bold text-sm mt-1">
                4
              </div>
              <div>
                <h3 className="font-semibold mb-1">절대 송금 금지</h3>
                <p className="text-gray-600">어떤 이유로든 가해자에게 돈을 보내지 마세요.</p>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
            <h3 className="text-lg font-semibold text-blue-800 mb-2">긴급 연락처</h3>
            <div className="space-y-2 text-blue-700">
              <p>
                <strong>upoZero 긴급상담:</strong> 02-1234-5678 (24시간)
              </p>
              <p>
                <strong>경찰청 사이버수사대:</strong> 182
              </p>
              <p>
                <strong>디지털성범죄피해자지원센터:</strong> 02-735-8994
              </p>
            </div>
          </div>

          <h2 className="text-2xl font-bold mt-8 mb-4">마무리</h2>
          <p className="mb-6">
            몸캠피싱은 예방이 가장 중요합니다. 위의 5가지 수칙을 항상 기억하고 실천하여 자신과 가족을 보호하세요.
            의심스러운 상황이 발생하면 주저하지 말고 전문가의 도움을 받으시기 바랍니다.
          </p>
        </div>

        {/* CTA Section */}
        <div className="mt-12 pt-8 border-t bg-blue-50 rounded-lg p-6">
          <h3 className="text-xl font-bold text-center mb-4">몸캠피싱 피해 예방 및 대응 상담</h3>
          <p className="text-center text-gray-600 mb-6">
            전문가와의 상담을 통해 더 자세한 예방법과 대응 방안을 확인하세요
          </p>
          <div className="flex justify-center gap-4">
            <Button asChild>
              <Link href="/consultation/bodycam">몸캠피싱 상담</Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/services">보안 서비스 보기</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
