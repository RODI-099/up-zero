import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MapPin, Phone, Mail, Clock, Car, Train, Bus } from "lucide-react"

export default function LocationPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">오시는 길</h1>
          <p className="text-xl text-gray-600">upoZero 본사로 찾아오시는 방법을 안내해드립니다</p>
        </div>

        {/* Map Section */}
        <div className="mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MapPin className="h-5 w-5" />
                위치 안내
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="bg-gray-200 h-96 rounded-lg flex items-center justify-center mb-4">
                <div className="text-center text-gray-600">
                  <MapPin className="h-16 w-16 mx-auto mb-4" />
                  <p className="text-lg">지도가 여기에 표시됩니다</p>
                  <p className="text-sm">실제 구현 시 Google Maps 또는 네이버 지도 API 연동</p>
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold mb-3">주소</h3>
                  <p className="text-gray-700 mb-2">전라남도 여수시 화산로 70-1</p>
                  <p className="text-gray-700 mb-4">2층</p>
                  <Button variant="outline" size="sm">
                    주소 복사
                  </Button>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-3">우편번호</h3>
                  <p className="text-gray-700 mb-4">59641</p>
                  <Button variant="outline" size="sm">
                    길찾기
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Contact Info */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <Card>
            <CardHeader>
              <Phone className="h-8 w-8 text-blue-600 mb-2" />
              <CardTitle>전화번호</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg font-semibold mb-2">1555-1526</p>
              <p className="text-gray-600 text-sm">대표번호</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <Mail className="h-8 w-8 text-blue-600 mb-2" />
              <CardTitle>이메일</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg font-semibold mb-2">info@upozero.com</p>
              <p className="text-gray-600 text-sm">일반 문의</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <Clock className="h-8 w-8 text-blue-600 mb-2" />
              <CardTitle>운영시간</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm mb-1">24시간 연중무휴</p>
              <p className="text-sm text-gray-600">긴급상황 대응 가능</p>
            </CardContent>
          </Card>
        </div>

        {/* Transportation */}
        <div className="space-y-8">
          <h2 className="text-3xl font-bold text-center">교통편 안내</h2>

          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <Train className="h-8 w-8 text-blue-600 mb-2" />
                <CardTitle>KTX/기차</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-sm">
                  <div>
                    <p className="font-semibold text-blue-600">여수EXPO역</p>
                    <p className="text-gray-600">택시로 약 15분</p>
                  </div>
                  <div>
                    <p className="font-semibold text-green-600">여수역</p>
                    <p className="text-gray-600">택시로 약 20분</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Bus className="h-8 w-8 text-blue-600 mb-2" />
                <CardTitle>버스</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-sm">
                  <div>
                    <p className="font-semibold text-red-600">시내버스</p>
                    <p className="text-gray-600">화산로 정류장 하차</p>
                  </div>
                  <div>
                    <p className="font-semibold text-blue-600">고속버스</p>
                    <p className="text-gray-600">여수종합버스터미널에서 택시 이용</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Car className="h-8 w-8 text-blue-600 mb-2" />
                <CardTitle>자가용</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-sm">
                  <div>
                    <p className="font-semibold">주차 안내</p>
                    <p className="text-gray-600">건물 주변 공영주차장 이용</p>
                  </div>
                  <div>
                    <p className="font-semibold">주차 요금</p>
                    <p className="text-gray-600">방문객 2시간 무료</p>
                  </div>
                  <div>
                    <p className="font-semibold">네비게이션</p>
                    <p className="text-gray-600">화산로 70-1 검색</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Nearby Landmarks */}
        <div className="mt-12">
          <h2 className="text-3xl font-bold text-center mb-8">주변 주요 시설</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Card className="text-center">
              <CardContent className="pt-6">
                <h3 className="font-semibold mb-2">여수EXPO</h3>
                <p className="text-sm text-gray-600">차량 15분</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="pt-6">
                <h3 className="font-semibold mb-2">여수시청</h3>
                <p className="text-sm text-gray-600">도보 10분</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="pt-6">
                <h3 className="font-semibold mb-2">화산공원</h3>
                <p className="text-sm text-gray-600">도보 5분</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="pt-6">
                <h3 className="font-semibold mb-2">화산로</h3>
                <p className="text-sm text-gray-600">바로 앞</p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Visit Guidelines */}
        <div className="mt-12 bg-blue-50 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-center mb-6">방문 안내</h2>
          <div className="max-w-2xl mx-auto space-y-4">
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold mt-0.5">
                1
              </div>
              <div>
                <h3 className="font-semibold mb-1">사전 예약</h3>
                <p className="text-gray-600 text-sm">원활한 상담을 위해 방문 전 사전 예약을 권장합니다.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold mt-0.5">
                2
              </div>
              <div>
                <h3 className="font-semibold mb-1">신분증 지참</h3>
                <p className="text-gray-600 text-sm">보안을 위해 방문 시 신분증을 지참해주세요.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold mt-0.5">
                3
              </div>
              <div>
                <h3 className="font-semibold mb-1">2층 사무실</h3>
                <p className="text-gray-600 text-sm">도착 후 2층 upoZero 사무실로 방문해주세요.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}