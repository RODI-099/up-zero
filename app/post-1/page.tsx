import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, User, ArrowLeft, Share2, AlertTriangle, Phone } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function Post1Page() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <Link href="/posts">
            <Button variant="ghost" className="flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" />
              목록으로 돌아가기
            </Button>
          </Link>
          <Button variant="outline" className="flex items-center gap-2">
            <Share2 className="h-4 w-4" />
            공유하기
          </Button>
        </div>

        {/* Main Content */}
        <Card className="mb-8">
          <CardHeader>
            <div className="flex items-center gap-2 mb-2">
              <Badge variant="destructive">긴급</Badge>
              <Badge variant="secondary">디지털 성범죄</Badge>
            </div>
            <CardTitle className="text-2xl">
              비디오 채팅 중 협박당했어요. 어떻게 해야 할까요?
            </CardTitle>
            <CardDescription className="flex items-center gap-4 text-sm text-gray-600">
              <span className="flex items-center gap-1">
                <User className="h-4 w-4" />
                익명사용자
              </span>
              <span className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                2024년 1월 15일
              </span>
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="prose max-w-none">
              <p className="text-gray-700 leading-relaxed">
                안녕하세요. 정말 급한 상황이라 글을 올립니다.
              </p>
              <p className="text-gray-700 leading-relaxed">
                어제 밤 온라인에서 만난 사람과 비디오 채팅을 하게 되었는데, 
                처음에는 일반적인 대화였지만 점점 이상한 방향으로 흘러갔습니다. 
                상대방이 제 얼굴과 개인정보를 녹화했다며 협박을 시작했어요.
              </p>
              <p className="text-gray-700 leading-relaxed">
                돈을 요구하면서 거부하면 제 영상을 인터넷에 유포하겠다고 위협하고 있습니다. 
                정말 무서워서 어떻게 해야 할지 모르겠어요. 
                경찰에 신고해야 하는지, 아니면 다른 방법이 있는지 조언 부탁드립니다.
              </p>
              <p className="text-gray-700 leading-relaxed">
                비슷한 경험이 있으신 분이나 전문가 분들의 도움이 절실합니다.
              </p>
            </div>

            {/* Warning Alert */}
            <div className="bg-red-50 border border-red-200 rounded-lg p-4">
              <div className="flex items-start gap-3">
                <AlertTriangle className="h-5 w-5 text-red-600 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-red-800 mb-1">중요한 안내</h4>
                  <p className="text-red-700 text-sm">
                    이런 상황에서는 절대 돈을 지불하지 마세요. 
                    즉시 전문기관에 신고하고 도움을 받으시기 바랍니다.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Emergency Contacts */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Phone className="h-5 w-5" />
              긴급 연락처
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
              <h3 className="text-lg font-semibold text-blue-800 mb-2">긴급 연락처</h3>
              <div className="space-y-2 text-blue-700">
                <p>
                  <strong>upoZero 긴급상담:</strong> 1668 2293 (24시간)
                </p>
                <p>
                  <strong>경찰청 사이버수사대:</strong> 182
                </p>
                <p>
                  <strong>디지털성범죄피해자지원센터:</strong> 1668 2293
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Comments Section */}
        <Card>
          <CardHeader>
            <CardTitle>댓글 (3)</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Comment 1 */}
            <div className="border-b border-gray-200 pb-4">
              <div className="flex items-center gap-2 mb-2">
                <span className="font-semibold">전문상담사</span>
                <Badge variant="outline">인증됨</Badge>
                <span className="text-sm text-gray-500">2시간 전</span>
              </div>
              <p className="text-gray-700">
                안전한 곳에 계시는지 확인하고, 즉시 경찰에 신고하세요. 
                절대 돈을 지불하지 마시고, 모든 대화 내용을 캡처해 두세요. 
                저희 센터로 연락주시면 24시간 상담 가능합니다.
              </p>
            </div>

            {/* Comment 2 */}
            <div className="border-b border-gray-200 pb-4">
              <div className="flex items-center gap-2 mb-2">
                <span className="font-semibold">경험자</span>
                <span className="text-sm text-gray-500">1시간 전</span>
              </div>
              <p className="text-gray-700">
                저도 비슷한 경험이 있었습니다. 무서우시겠지만 절대 혼자 해결하려 하지 마세요. 
                전문기관의 도움을 받으시면 해결할 수 있습니다. 힘내세요!
              </p>
            </div>

            {/* Comment 3 */}
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="font-semibold">법률전문가</span>
                <Badge variant="outline">전문가</Badge>
                <span className="text-sm text-gray-500">30분 전</span>
              </div>
              <p className="text-gray-700">
                이는 명백한 범죄행위입니다. 협박죄, 강요죄에 해당할 수 있으며, 
                증거를 수집하여 즉시 신고하시기 바랍니다. 
                필요시 법적 조치도 가능합니다.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}