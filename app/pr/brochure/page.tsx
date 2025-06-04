import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Download, FileText, ImageIcon, Video, Presentation, Eye } from "lucide-react"

export default function BrochurePage() {
  const brochures = [
    {
      title: "upoZero 회사 소개서",
      description: "회사 개요, 비전, 주요 서비스를 담은 종합 소개 자료",
      type: "PDF",
      size: "15.2 MB",
      pages: "24페이지",
      language: "한국어",
      updated: "2024.01.15",
      icon: FileText,
      category: "회사 소개",
    },
    {
      title: "딥페이크 탐지 솔루션 브로슈어",
      description: "AI 기반 딥페이크 탐지 기술의 상세 기능과 성능 소개",
      type: "PDF",
      size: "8.7 MB",
      pages: "16페이지",
      language: "한국어/영어",
      updated: "2024.01.10",
      icon: FileText,
      category: "제품 소개",
    },
    {
      title: "몸캠피싱 차단 서비스 가이드",
      description: "몸캠피싱 위협과 upoZero의 차단 솔루션 소개",
      type: "PDF",
      size: "6.3 MB",
      pages: "12페이지",
      language: "한국어",
      updated: "2024.01.08",
      icon: FileText,
      category: "제품 소개",
    },
    {
      title: "기업용 보안 솔루션 카탈로그",
      description: "기업 고객을 위한 통합 보안 솔루션 상세 안내",
      type: "PDF",
      size: "12.1 MB",
      pages: "20페이지",
      language: "한국어",
      updated: "2024.01.05",
      icon: FileText,
      category: "제품 소개",
    },
    {
      title: "upoZero 기술 백서",
      description: "핵심 기술의 원리와 구현 방법을 상세히 설명한 기술 문서",
      type: "PDF",
      size: "18.9 MB",
      pages: "32페이지",
      language: "한국어/영어",
      updated: "2023.12.20",
      icon: FileText,
      category: "기술 자료",
    },
    {
      title: "고객 성공 사례집",
      description: "주요 고객사의 도입 사례와 성과를 담은 사례집",
      type: "PDF",
      size: "9.4 MB",
      pages: "18페이지",
      language: "한국어",
      updated: "2023.12.15",
      icon: FileText,
      category: "사례 연구",
    },
  ]

  const mediaKit = [
    {
      title: "upoZero 로고 패키지",
      description: "다양한 형태와 색상의 로고 파일 (AI, PNG, SVG)",
      type: "ZIP",
      size: "2.1 MB",
      icon: ImageIcon,
      category: "브랜드 자산",
    },
    {
      title: "제품 스크린샷",
      description: "주요 제품의 UI/UX 스크린샷 모음",
      type: "ZIP",
      size: "45.7 MB",
      icon: ImageIcon,
      category: "제품 이미지",
    },
    {
      title: "경영진 프로필 사진",
      description: "CEO 및 주요 임원진의 고해상도 프로필 사진",
      type: "ZIP",
      size: "12.3 MB",
      icon: ImageIcon,
      category: "인물 사진",
    },
    {
      title: "회사 소개 영상",
      description: "upoZero의 비전과 기술을 소개하는 3분 영상",
      type: "MP4",
      size: "156.8 MB",
      icon: Video,
      category: "영상 자료",
    },
    {
      title: "제품 데모 영상",
      description: "딥페이크 탐지 솔루션의 실제 작동 모습",
      type: "MP4",
      size: "89.2 MB",
      icon: Video,
      category: "영상 자료",
    },
    {
      title: "IR 프레젠테이션",
      description: "투자자 대상 회사 소개 프레젠테이션",
      type: "PPTX",
      size: "23.4 MB",
      icon: Presentation,
      category: "프레젠테이션",
    },
  ]

  const categories = ["전체", "회사 소개", "제품 소개", "기술 자료", "사례 연구", "브랜드 자산", "영상 자료"]

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">브로슈어 & 자료실</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          upoZero의 다양한 소개 자료와 기술 문서를 다운로드하실 수 있습니다
        </p>
      </div>

      {/* Category Filter */}
      <div className="flex gap-2 flex-wrap justify-center mb-12">
        {categories.map((category) => (
          <Button key={category} variant={category === "전체" ? "default" : "outline"} size="sm">
            {category}
          </Button>
        ))}
      </div>

      {/* Company Brochures */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-8">회사 브로슈어</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {brochures.map((brochure, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <brochure.icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs bg-gray-100 px-2 py-1 rounded">{brochure.type}</span>
                      <span className="text-xs text-gray-500">{brochure.size}</span>
                    </div>
                    <div className="text-xs text-gray-500">{brochure.category}</div>
                  </div>
                </div>
                <CardTitle className="text-lg">{brochure.title}</CardTitle>
                <CardDescription>{brochure.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="grid grid-cols-2 gap-4 text-sm text-gray-600">
                    <div>
                      <span className="font-medium">페이지:</span> {brochure.pages}
                    </div>
                    <div>
                      <span className="font-medium">언어:</span> {brochure.language}
                    </div>
                  </div>
                  <div className="text-sm text-gray-500">최종 업데이트: {brochure.updated}</div>
                  <div className="flex gap-2">
                    <Button size="sm" className="flex-1">
                      <Download className="mr-2 h-4 w-4" />
                      다운로드
                    </Button>
                    <Button size="sm" variant="outline">
                      <Eye className="mr-2 h-4 w-4" />
                      미리보기
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Media Kit */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-8">미디어 키트</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mediaKit.map((item, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                    <item.icon className="h-6 w-6 text-purple-600" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs bg-gray-100 px-2 py-1 rounded">{item.type}</span>
                      <span className="text-xs text-gray-500">{item.size}</span>
                    </div>
                    <div className="text-xs text-gray-500">{item.category}</div>
                  </div>
                </div>
                <CardTitle className="text-lg">{item.title}</CardTitle>
                <CardDescription>{item.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex gap-2">
                  <Button size="sm" className="flex-1">
                    <Download className="mr-2 h-4 w-4" />
                    다운로드
                  </Button>
                  {item.type !== "ZIP" && (
                    <Button size="sm" variant="outline">
                      <Eye className="mr-2 h-4 w-4" />
                      미리보기
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Download Guidelines */}
      <div className="bg-blue-50 rounded-lg p-8 mb-16">
        <h2 className="text-3xl font-bold text-center mb-6">다운로드 가이드라인</h2>
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">이용 약관</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• 모든 자료는 비상업적 목적으로만 사용 가능합니다</li>
                <li>• 자료 수정 시 사전 승인이 필요합니다</li>
                <li>• 로고 사용 시 브랜드 가이드라인을 준수해주세요</li>
                <li>• 언론 보도 목적의 사용은 자유롭게 가능합니다</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">문의 사항</h3>
              <div className="space-y-3 text-gray-700">
                <div>
                  <p className="font-medium">마케팅팀</p>
                  <p className="text-sm">marketing@upozero.com</p>
                  <p className="text-sm">02-1234-5681</p>
                </div>
                <div>
                  <p className="font-medium">홍보팀</p>
                  <p className="text-sm">pr@upozero.com</p>
                  <p className="text-sm">02-1234-5679</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Access */}
      <div className="grid md:grid-cols-3 gap-6">
        <Card className="text-center p-6">
          <FileText className="h-12 w-12 text-blue-600 mx-auto mb-4" />
          <h3 className="text-lg font-semibold mb-2">전체 브로슈어 패키지</h3>
          <p className="text-sm text-gray-600 mb-4">모든 브로슈어를 한 번에 다운로드</p>
          <Button className="w-full">
            <Download className="mr-2 h-4 w-4" />
            전체 다운로드 (89.2 MB)
          </Button>
        </Card>

        <Card className="text-center p-6">
          <ImageIcon className="h-12 w-12 text-purple-600 mx-auto mb-4" />
          <h3 className="text-lg font-semibold mb-2">미디어 키트 전체</h3>
          <p className="text-sm text-gray-600 mb-4">모든 미디어 자료를 한 번에 다운로드</p>
          <Button className="w-full">
            <Download className="mr-2 h-4 w-4" />
            전체 다운로드 (329.5 MB)
          </Button>
        </Card>

        <Card className="text-center p-6">
          <Presentation className="h-12 w-12 text-green-600 mx-auto mb-4" />
          <h3 className="text-lg font-semibold mb-2">맞춤 자료 요청</h3>
          <p className="text-sm text-gray-600 mb-4">특별한 용도의 자료가 필요하신가요?</p>
          <Button variant="outline" className="w-full">
            맞춤 자료 요청
          </Button>
        </Card>
      </div>
    </div>
  )
}
