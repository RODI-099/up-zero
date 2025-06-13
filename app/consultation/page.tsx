import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Phone, Mail, Clock, Shield } from "lucide-react"

export default function ConsultationPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">무료 상담 신청</h1>
          <p className="text-xl text-gray-600">전문가와의 1:1 상담을 통해 맞춤형 보안 솔루션을 확인해보세요</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Phone className="h-5 w-5" />
                  전화 상담
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold text-blue-600 mb-2">1668-2293</p>
                <p className="text-gray-600">평일 09:00 - 18:00</p>
                <p className="text-gray-600">토요일 09:00 - 13:00</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Mail className="h-5 w-5" />
                  이메일 상담
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg font-semibold mb-2">info@upozero.com</p>
                <p className="text-gray-600">24시간 접수 가능</p>
                <p className="text-gray-600">24시간 이내 답변</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="h-5 w-5" />
                  긴급 상담
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg font-semibold mb-2 text-red-600">긴급상황 시</p>
                <p className="text-gray-600">24시간 긴급 대응</p>
                <p className="text-gray-600">즉시 전문가 연결</p>
              </CardContent>
            </Card>

            <div className="bg-blue-50 p-6 rounded-lg">
              <div className="flex items-center gap-2 mb-3">
                <Shield className="h-5 w-5 text-blue-600" />
                <h3 className="font-semibold text-blue-600">개인정보 보호</h3>
              </div>
              <p className="text-sm text-gray-600">
                모든 상담 내용은 철저히 보안이 유지되며, 개인정보보호법에 따라 안전하게 관리됩니다.
              </p>
            </div>
          </div>

          {/* Consultation Form */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>상담 신청서</CardTitle>
                <CardDescription>정확한 상담을 위해 아래 정보를 입력해주세요</CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">이름 *</Label>
                      <Input id="name" placeholder="홍길동" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">연락처 *</Label>
                      <Input id="phone" placeholder="010-1234-5678" required />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">이메일 *</Label>
                    <Input id="email" type="email" placeholder="example@email.com" required />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="consultation-type">상담 유형 *</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="상담 유형을 선택해주세요" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="bodycam">몸캠피싱 관련</SelectItem>
                        <SelectItem value="deepfake">딥페이크 관련</SelectItem>
                        <SelectItem value="general">일반 보안 상담</SelectItem>
                        <SelectItem value="education">보안 교육</SelectItem>
                        <SelectItem value="solution">솔루션 도입</SelectItem>
                        <SelectItem value="other">기타</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="urgency">긴급도</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="긴급도를 선택해주세요" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="emergency">긴급 (즉시 대응 필요)</SelectItem>
                        <SelectItem value="urgent">급함 (24시간 이내)</SelectItem>
                        <SelectItem value="normal">보통 (3일 이내)</SelectItem>
                        <SelectItem value="low">낮음 (1주일 이내)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="preferred-contact">선호 연락 방법</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="선호하는 연락 방법을 선택해주세요" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="phone">전화</SelectItem>
                        <SelectItem value="email">이메일</SelectItem>
                        <SelectItem value="both">전화 + 이메일</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="preferred-time">선호 연락 시간</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="선호하는 연락 시간을 선택해주세요" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="morning">오전 (09:00-12:00)</SelectItem>
                        <SelectItem value="afternoon">오후 (13:00-17:00)</SelectItem>
                        <SelectItem value="evening">저녁 (18:00-20:00)</SelectItem>
                        <SelectItem value="anytime">언제든지</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="details">상세 내용</Label>
                    <Textarea
                      id="details"
                      placeholder="상담받고 싶은 내용을 자세히 적어주세요. 현재 상황, 피해 정도, 원하는 해결 방안 등을 포함해주시면 더 정확한 상담이 가능합니다."
                      rows={5}
                    />
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="privacy" />
                      <Label htmlFor="privacy" className="text-sm">
                        개인정보 수집 및 이용에 동의합니다. *
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="marketing" />
                      <Label htmlFor="marketing" className="text-sm">
                        마케팅 정보 수신에 동의합니다. (선택)
                      </Label>
                    </div>
                  </div>

                  <Button type="submit" className="w-full" size="lg">
                    상담 신청하기
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* FAQ */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-center mb-8">자주 묻는 질문</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">상담 비용이 있나요?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  초기 상담은 완전 무료입니다. 상황 분석과 기본적인 해결 방안 제시까지 무료로 진행되며, 추가 서비스가
                  필요한 경우에만 별도 비용이 발생합니다.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">얼마나 빨리 연락받을 수 있나요?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  긴급한 경우 즉시 연락드리며, 일반적인 경우 24시간 이내에 전문가가 직접 연락드립니다. 상담 신청 시
                  긴급도를 정확히 선택해주세요.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">개인정보가 안전한가요?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  모든 개인정보는 개인정보보호법에 따라 암호화되어 저장되며, 상담 목적 외에는 절대 사용되지 않습니다.
                  상담 완료 후 일정 기간 후 안전하게 폐기됩니다.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">어떤 도움을 받을 수 있나요?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  몸캠피싱, 딥페이크 피해 대응부터 예방 교육, 기업 보안 솔루션까지 디지털 보안과 관련된 모든 분야에서
                  전문적인 도움을 받으실 수 있습니다.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}