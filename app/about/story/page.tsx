import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, Target, Heart } from "lucide-react"
import Image from "next/image"

export default function StoryPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">upoZero의 스토리</h1>
          <p className="text-xl text-gray-600">디지털 안전을 위한 우리의 여정과 비전</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl font-bold mb-6">시작의 이야기</h2>
            <p className="text-lg text-gray-600 mb-6">
              upoZero는 2019년, 급증하는 디지털 성범죄와 사이버 위협으로부터 사용자를 보호하고자 하는 강한 의지에서
              시작되었습니다.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              몸캠피싱, 딥페이크 등 새로운 형태의 디지털 범죄가 증가하면서, 기존의 보안 솔루션만으로는 한계가 있다는
              것을 깨달았습니다.
            </p>
            <p className="text-lg text-gray-600">
              이에 우리는 최첨단 AI 기술과 전문 인력을 결합하여 보다 효과적이고 포괄적인 디지털 보안 솔루션을 개발하기로
              결심했습니다.
            </p>
          </div>
          <div>
            <Image
              src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg"
              alt="Company Story"
              width={500}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <Card className="text-center">
            <CardHeader>
              <Target className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <CardTitle>우리의 미션</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base">
                모든 사용자가 디지털 위협으로부터 안전하게 보호받을 수 있는 세상을 만드는 것입니다.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <Users className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <CardTitle>우리의 비전</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base">
                디지털 안전 분야의 글로벌 리더가 되어 전 세계 사용자의 디지털 라이프를 보호합니다.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <Heart className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <CardTitle>우리의 가치</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base">
                신뢰, 혁신, 그리고 사용자 중심의 서비스를 통해 더 안전한 디지털 환경을 조성합니다.
              </CardDescription>
            </CardContent>
          </Card>
        </div>

        <div className="bg-blue-50 rounded-lg p-8">
          <h2 className="text-3xl font-bold mb-6 text-center">CEO 메시지</h2>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-lg text-gray-700 mb-6 italic">
              "디지털 기술의 발전과 함께 새로운 형태의 위협도 계속 등장하고 있습니다. upoZero는 이러한 변화에 발맞춰
              지속적으로 혁신하며, 모든 사용자가 안심하고 디지털 세상을 누릴 수 있도록 최선을 다하겠습니다."
            </p>
            <p className="font-semibold text-blue-600">강봉채 , upoZero CEO</p>
          </div>
        </div>
      </div>
    </div>
  )
}