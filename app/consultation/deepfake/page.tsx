import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Eye, Search, Upload, FileText, CheckCircle, AlertTriangle, Phone } from "lucide-react"

export default function DeepfakeConsultationPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">딥페이크 상담</h1>
          <p className="text-xl text-gray-600">딥페이크 피해 신고 및 탐지 서비스 상담</p>
        </div>

        {/* Service Overview */}
        <Alert className="mb-8 border-blue-200 bg-blue-50">
          <Eye className="h-4 w-4 text-blue-600" />
          <AlertDescription className="text-blue-800">
            <strong>딥페이크 탐지 서비스:</strong> AI 기술로 99.7% 정확도의 딥페이크 탐지가 가능합니다. 의심되는
            콘텐츠를 업로드하여 즉시 분석받으세요.
          </AlertDescription>
        </Alert>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Information Section */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Eye className="h-5 w-5" />
                  딥페이크란?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-4">
                  AI 기술을 이용해 실제 인물의 얼굴이나 음성을 다른 사람의 것으로 바꾸어 만든 가짜 영상이나 음성입니다.
                </p>
                <div className="space-y-2 text-sm">
                  <h4 className="font-semibold">주요 악용 사례:</h4>
                  <ul className="space-y-1 text-gray-600">
                    <li>• 가짜 포르노 영상 제작</li>
                    <li>• 명예훼손 목적 영상</li>
                    <li>• 사기 및 금융 범죄</li>
                    <li>• 정치적 조작</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Search className="h-5 w-5" />
                  탐지 방법
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-sm">
                  <div>
                    <p className="font-semibold">AI 기반 분석</p>
                    <p className="text-gray-600">고도화된 AI 알고리즘으로 영상의 진위 여부를 판별합니다.</p>
                  </div>
                  <div>
                    <p className="font-semibold">메타데이터 검증</p>
                    <p className="text-gray-600">파일의 메타데이터를 분석하여 조작 흔적을 찾습니다.</p>
                  </div>
                  <div>
                    <p className="font-semibold">전문가 육안 검증</p>
                    <p className="text-gray-600">AI 분석 후 전문가의 추가 검증을 진행합니다.</p>
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
                    <p className="font-semibold text-blue-600">upoZero 딥페이크 상담</p>
                    <p>02-1234-5678 (24시간)</p>
                  </div>
                  <div>
                    <p className="font-semibold">경찰청 사이버수사대</p>
                    <p>182 (24시간)</p>
                  </div>
                  <div>
                    <p className="font-semibold">이메일 상담</p>
                    <p>deepfake@upozero.com</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="bg-blue-50 p-6 rounded-lg">
              <div className="flex items-center gap-2 mb-3">
                <CheckCircle className="h-5 w-5 text-blue-600" />
                <h3 className="font-semibold text-blue-600">신속한 대응</h3>
              </div>
              <p className="text-sm text-gray-600">
                딥페이크 영상은 빠르게 확산될 수 있습니다. 발견 즉시 전문가에게 상담하여 신속하게 대응하세요.
              </p>
            </div>
          </div>

          {/* Consultation Form */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>딥페이크 상담 신청</CardTitle>
                <CardDescription>
                  의심되는 콘텐츠가 있거나 피해를 입으셨다면 아래 양식을 작성해주세요. 전문가가 신속히 도와드립니다.
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
                      <Label htmlFor="phone">연락처 *</Label>
                      <Input id="phone" placeholder="010-1234-5678" required />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">이메일 *</Label>
                    <Input id="email" type="email" placeholder="example@email.com" required />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="situation">현재 상황 *</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="현재 상황을 선택해주세요" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="victim">딥페이크 피해를 입음</SelectItem>
                        <SelectItem value="suspect">딥페이크로 의심되는 콘텐츠 발견</SelectItem>
                        <SelectItem value="prevention">예방 목적 상담</SelectItem>
                        <SelectItem value="detection">콘텐츠 진위 확인 필요</SelectItem>
                        <SelectItem value="other">기타</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="content-type">콘텐츠 유형</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="콘텐츠 유형을 선택해주세요" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="video">영상</SelectItem>
                        <SelectItem value="image">이미지</SelectItem>
                        <SelectItem value="audio">음성</SelectItem>
                        <SelectItem value="mixed">복합 콘텐츠</SelectItem>
                        <SelectItem value="unknown">모름</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="platform">발견/유포 플랫폼</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="콘텐츠가 발견된 플랫폼을 선택해주세요" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="youtube">유튜브</SelectItem>
                        <SelectItem value="instagram">인스타그램</SelectItem>
                        <SelectItem value="facebook">페이스북</SelectItem>
                        <SelectItem value="tiktok">틱톡</SelectItem>
                        <SelectItem value="twitter">트위터/X</SelectItem>
                        <SelectItem value="telegram">텔레그램</SelectItem>
                        <SelectItem value="kakaotalk">카카오톡</SelectItem>
                        <SelectItem value="other">기타</SelectItem>
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
                        <SelectItem value="emergency">매우 긴급 (현재 확산 중)</SelectItem>
                        <SelectItem value="urgent">긴급 (24시간 이내 대응 필요)</SelectItem>
                        <SelectItem value="normal">보통 (3일 이내)</SelectItem>
                        <SelectItem value="consultation">상담 목적 (1주일 이내)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="details">상세 상황 설명</Label>
                    <Textarea
                      id="details"
                      placeholder="콘텐츠 발견 경위, 유포 상황, 피해 정도 등을 자세히 설명해주세요. 가능한 경우 해당 콘텐츠의 URL이나 출처를 함께 기재해주세요."
                      rows={6}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label>파일 업로드 (선택)</Label>
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                      <Upload className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                      <p className="text-sm text-gray-500 mb-2">분석이 필요한 파일을 업로드하세요 (최대 100MB)</p>
                      <p className="text-xs text-gray-400 mb-4">지원 형식: MP4, AVI, MOV, JPG, PNG, MP3, WAV</p>
                      <Button variant="outline" size="sm">
                        파일 선택
                      </Button>
                    </div>
                    <p className="text-xs text-gray-500">
                      * 업로드된 파일은 분석 목적으로만 사용되며, 분석 완료 후 안전하게 폐기됩니다.
                    </p>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="preferred-contact">선호 연락 방법 *</Label>
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

                  <div className="space-y-4">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="privacy" />
                      <Label htmlFor="privacy" className="text-sm">
                        개인정보 수집 및 이용에 동의합니다. * (상담 목적으로만 사용)
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="analysis" />
                      <Label htmlFor="analysis" className="text-sm">
                        업로드한 파일의 분석 및 처리에 동의합니다.
                      </Label>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <Button type="submit" className="flex-1" size="lg">
                      상담 신청하기
                    </Button>
                    <Button type="button" variant="outline" className="flex-1" size="lg">
                      파일만 분석하기
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Service Information */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-center mb-8">딥페이크 대응 서비스</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <Search className="h-12 w-12 text-blue-600 mb-4" />
                <CardTitle>딥페이크 탐지</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  최첨단 AI 기술로 의심되는 콘텐츠의 진위 여부를 99.7% 정확도로 판별합니다.
                </p>
                <ul className="text-sm space-y-1">
                  <li>• 실시간 분석</li>
                  <li>• 고정밀 탐지</li>
                  <li>• 분석 보고서 제공</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <AlertTriangle className="h-12 w-12 text-blue-600 mb-4" />
                <CardTitle>유포 차단</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  딥페이크 콘텐츠의 확산을 신속하게 차단하고 플랫폼에 삭제 요청을 대행합니다.
                </p>
                <ul className="text-sm space-y-1">
                  <li>• 신속한 대응</li>
                  <li>• 플랫폼별 삭제 요청</li>
                  <li>• 확산 모니터링</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <FileText className="h-12 w-12 text-blue-600 mb-4" />
                <CardTitle>법적 대응</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  딥페이크 피해에 대한 법적 대응을 위한 증거 수집과 법률 자문을 제공합니다.
                </p>
                <ul className="text-sm space-y-1">
                  <li>• 증거 수집 및 보존</li>
                  <li>• 법률 전문가 연계</li>
                  <li>• 신고 절차 지원</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-center mb-8">자주 묻는 질문</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">딥페이크를 어떻게 구별할 수 있나요?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  일반적으로 부자연스러운 얼굴 움직임, 입술과 음성의 불일치, 눈 깜빡임의 부자연스러움 등이 있지만, 최신
                  딥페이크는 육안으로 구별하기 어려워 전문 분석이 필요합니다.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">딥페이크 피해 시 즉시 해야 할 일은?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  해당 콘텐츠의 URL과 스크린샷을 증거로 확보하고, 플랫폼에 신고한 후, 전문가에게 상담을 받으세요. 확산을
                  막기 위해 신속한 대응이 중요합니다.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">분석에 얼마나 시간이 걸리나요?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  긴급 상황의 경우 1시간 이내, 일반적인 경우 24시간 이내에 분석 결과를 제공해드립니다. 콘텐츠의 길이와
                  복잡도에 따라 시간이 달라질 수 있습니다.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">딥페이크 제작자를 찾을 수 있나요?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  디지털 포렌식 기술을 통해 콘텐츠의 출처와 제작자를 추적할 가능성이 있습니다. 수사기관과 협력하여 법적
                  절차를 통해 진행됩니다.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
