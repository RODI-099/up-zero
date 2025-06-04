import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Shield, AlertTriangle, Phone, Clock, CheckCircle, Users } from "lucide-react"

export default function BodycamConsultationPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">몸캠피싱 상담</h1>
          <p className="text-xl text-gray-600">몸캠피싱 피해 예방 및 대응을 위한 전문 상담 서비스</p>
        </div>

        {/* Emergency Alert */}
        <Alert className="mb-8 border-red-200 bg-red-50">
          <AlertTriangle className="h-4 w-4 text-red-600" />
          <AlertDescription className="text-red-800">
            <strong>긴급상황 시:</strong> 즉시 전화 상담 02-1234-5678 (24시간 운영) 또는 경찰서 신고 112
          </AlertDescription>
        </Alert>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Information Section */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="h-5 w-5" />
                  몸캠피싱이란?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-4">
                  화상채팅을 통해 피해자의 신체 영상을 녹화한 후, 이를 유포하겠다고 협박하여 금전을 요구하는 사이버
                  성범죄입니다.
                </p>
                <div className="space-y-2 text-sm">
                  <h4 className="font-semibold">주요 피해 유형:</h4>
                  <ul className="space-y-1 text-gray-600">
                    <li>• 금전 갈취</li>
                    <li>• 정신적 피해</li>
                    <li>• 사회적 평판 손상</li>
                    <li>• 지속적인 협박</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="h-5 w-5" />
                  즉시 대응 방법
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-sm">
                  <div className="flex items-start gap-2">
                    <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center text-red-600 text-xs font-bold mt-0.5">
                      1
                    </div>
                    <div>
                      <p className="font-semibold">즉시 연락 차단</p>
                      <p className="text-gray-600">가해자와의 모든 연락을 차단하세요</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center text-red-600 text-xs font-bold mt-0.5">
                      2
                    </div>
                    <div>
                      <p className="font-semibold">증거 보전</p>
                      <p className="text-gray-600">대화 내용과 계좌 정보를 스크린샷으로 저장</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center text-red-600 text-xs font-bold mt-0.5">
                      3
                    </div>
                    <div>
                      <p className="font-semibold">전문가 상담</p>
                      <p className="text-gray-600">즉시 전문 상담을 받으세요</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Phone className="h-5 w-5" />
                  긴급 연락처
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-sm">
                  <div>
                    <p className="font-semibold text-red-600">upoZero 긴급상담</p>
                    <p>02-1234-5678 (24시간)</p>
                  </div>
                  <div>
                    <p className="font-semibold">경찰청 사이버수사대</p>
                    <p>182 (24시간)</p>
                  </div>
                  <div>
                    <p className="font-semibold">디지털성범죄피해자지원센터</p>
                    <p>02-735-8994</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="bg-blue-50 p-6 rounded-lg">
              <div className="flex items-center gap-2 mb-3">
                <CheckCircle className="h-5 w-5 text-blue-600" />
                <h3 className="font-semibold text-blue-600">안전 보장</h3>
              </div>
              <p className="text-sm text-gray-600">
                모든 상담 내용은 철저히 보안이 유지되며, 전문 상담사가 안전하고 신속한 해결을 도와드립니다.
              </p>
            </div>
          </div>

          {/* Consultation Form */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>몸캠피싱 상담 신청</CardTitle>
                <CardDescription>
                  정확한 상담을 위해 가능한 한 자세히 입력해주세요. 모든 정보는 안전하게 보호됩니다.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">이름 *</Label>
                      <Input id="name" placeholder="실명 또는 가명" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="age">연령대</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="연령대 선택" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="10s">10대</SelectItem>
                          <SelectItem value="20s">20대</SelectItem>
                          <SelectItem value="30s">30대</SelectItem>
                          <SelectItem value="40s">40대</SelectItem>
                          <SelectItem value="50s">50대 이상</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="phone">연락처 *</Label>
                      <Input id="phone" placeholder="010-1234-5678" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">이메일</Label>
                      <Input id="email" type="email" placeholder="example@email.com" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="situation">현재 상황 *</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="현재 상황을 선택해주세요" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="ongoing">현재 협박받고 있음 (긴급)</SelectItem>
                        <SelectItem value="recent">최근 피해를 당함 (1주일 이내)</SelectItem>
                        <SelectItem value="past">과거 피해 경험 있음</SelectItem>
                        <SelectItem value="prevention">예방 목적 상담</SelectItem>
                        <SelectItem value="family">가족/지인 피해</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="platform">피해 발생 플랫폼</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="피해가 발생한 플랫폼을 선택해주세요" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="telegram">텔레그램</SelectItem>
                        <SelectItem value="discord">디스코드</SelectItem>
                        <SelectItem value="skype">스카이프</SelectItem>
                        <SelectItem value="zoom">줌</SelectItem>
                        <SelectItem value="kakao">카카오톡</SelectItem>
                        <SelectItem value="other">기타</SelectItem>
                        <SelectItem value="unknown">모름/기억안남</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="money-demand">금전 요구 여부</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="금전 요구 상황을 선택해주세요" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="demanding">현재 돈을 요구받고 있음</SelectItem>
                        <SelectItem value="paid">이미 돈을 보냄</SelectItem>
                        <SelectItem value="refused">요구를 거절함</SelectItem>
                        <SelectItem value="no-demand">아직 금전 요구 없음</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="urgency">긴급도 *</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="긴급도를 선택해주세요" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="emergency">매우 긴급 (현재 협박받는 중)</SelectItem>
                        <SelectItem value="urgent">긴급 (24시간 이내 연락 필요)</SelectItem>
                        <SelectItem value="normal">보통 (3일 이내)</SelectItem>
                        <SelectItem value="consultation">상담 목적 (1주일 이내)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="details">상세 상황 설명</Label>
                    <Textarea
                      id="details"
                      placeholder="피해 상황을 자세히 설명해주세요. 언제부터 시작되었는지, 어떤 방식으로 접근했는지, 현재 어떤 협박을 받고 있는지 등을 포함해주세요. 개인정보는 최소한으로만 입력해주세요."
                      rows={6}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="preferred-contact">선호 연락 방법 *</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="선호하는 연락 방법을 선택해주세요" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="phone">전화 (즉시 통화 가능)</SelectItem>
                        <SelectItem value="phone-scheduled">전화 (시간 예약)</SelectItem>
                        <SelectItem value="email">이메일</SelectItem>
                        <SelectItem value="secure-chat">보안 채팅</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="contact-time">연락 가능 시간</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="연락 가능한 시간대를 선택해주세요" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="anytime">언제든지 (긴급상황)</SelectItem>
                        <SelectItem value="business">업무시간 (09:00-18:00)</SelectItem>
                        <SelectItem value="evening">저녁시간 (18:00-22:00)</SelectItem>
                        <SelectItem value="weekend">주말</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="privacy" />
                      <Label htmlFor="privacy" className="text-sm">
                        개인정보 수집 및 이용에 동의합니다. * (상담 목적으로만 사용)
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="emergency" />
                      <Label htmlFor="emergency" className="text-sm">
                        긴급상황 시 24시간 연락 받는 것에 동의합니다.
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="followup" />
                      <Label htmlFor="followup" className="text-sm">
                        사후 관리 및 추가 상담 연락에 동의합니다.
                      </Label>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <Button type="submit" className="flex-1 bg-red-600 hover:bg-red-700" size="lg">
                      긴급 상담 신청
                    </Button>
                    <Button type="button" variant="outline" className="flex-1" size="lg">
                      일반 상담 신청
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Support Information */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-center mb-8">지원 서비스</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <Shield className="h-12 w-12 text-blue-600 mb-4" />
                <CardTitle>즉시 차단 서비스</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">협박 메시지와 계정을 즉시 차단하고 추가 피해를 방지합니다.</p>
                <ul className="text-sm space-y-1">
                  <li>• 실시간 모니터링</li>
                  <li>• 자동 차단 시스템</li>
                  <li>• 플랫폼 신고 대행</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Users className="h-12 w-12 text-blue-600 mb-4" />
                <CardTitle>전문 상담 지원</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  경험 풍부한 전문 상담사가 심리적 지원과 실질적 해결책을 제공합니다.
                </p>
                <ul className="text-sm space-y-1">
                  <li>• 24시간 상담 가능</li>
                  <li>• 익명 상담 보장</li>
                  <li>• 심리적 지원</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <AlertTriangle className="h-12 w-12 text-blue-600 mb-4" />
                <CardTitle>법적 대응 지원</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">수사기관 신고부터 법적 절차까지 전 과정을 지원합니다.</p>
                <ul className="text-sm space-y-1">
                  <li>• 증거 수집 지원</li>
                  <li>• 신고 절차 안내</li>
                  <li>• 법률 상담 연결</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
