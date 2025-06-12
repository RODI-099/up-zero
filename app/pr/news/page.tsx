import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Calendar, Search, ArrowRight, ExternalLink } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function NewsPage() {
  const featuredNews = {
    title: "upoZero, 차세대 딥페이크 탐지 기술로 글로벌 시장 진출",
    excerpt:
      "upoZero가 개발한 실시간 딥페이크 탐지 기술이 국제 보안 전시회에서 주목받으며 해외 진출의 발판을 마련했습니다.",
    date: "2024-01-20",
    category: "기업 소식",
    image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg",
    source: "디지털타임스",
  }

  const news = [
    {
      title: "upoZero, 정부 사이버보안 과제 수주...50억원 규모",
      excerpt: "과학기술정보통신부 주관 '차세대 사이버보안 기술개발' 과제에 선정되어 3년간 50억원을 지원받게 됩니다.",
      date: "2024-01-18",
      category: "정부 과제",
      source: "전자신문",
      image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg",
    },
    {
      title: "몸캠피싱 피해 급증...upoZero 솔루션 주목",
      excerpt: "최근 몸캠피싱 피해가 급증하면서 upoZero의 실시간 탐지 및 차단 솔루션이 업계의 주목을 받고 있습니다.",
      date: "2024-01-15",
      category: "업계 동향",
      source: "보안뉴스",
      image: "https://images.pexels.com/photos/5380642/pexels-photo-5380642.jpeg",
    },
    {
      title: "upoZero CEO, '2024 보안기술 혁신상' 수상",
      excerpt: "김대표가 한국정보보호학회에서 주관하는 보안기술 혁신상을 수상하며 기술력을 인정받았습니다.",
      date: "2024-01-12",
      category: "수상",
      source: "IT조선",
      image: "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg",
    },
    {
      title: "AI 기반 사이버보안 시장 성장...upoZero 수혜 전망",
      excerpt: "글로벌 AI 보안 시장이 연평균 25% 성장하면서 upoZero와 같은 전문 기업들의 성장이 기대됩니다.",
      date: "2024-01-10",
      category: "시장 분석",
      source: "한국경제",
      image: "https://images.pexels.com/photos/8386423/pexels-photo-8386423.jpeg",
    },
    {
      title: "upoZero, 일본 사이버보안 기업과 파트너십 체결",
      excerpt: "일본의 주요 사이버보안 기업과 기술 협력 및 시장 진출을 위한 전략적 파트너십을 체결했습니다.",
      date: "2024-01-08",
      category: "파트너십",
      source: "매일경제",
      image: "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg",
    },
    {
      title: "딥페이크 기술 악용 사례 증가...대응 기술 개발 시급",
      excerpt: "딥페이크 기술의 악용 사례가 증가하면서 upoZero와 같은 탐지 기술의 중요성이 더욱 부각되고 있습니다.",
      date: "2024-01-05",
      category: "기술 동향",
      source: "ZDNet Korea",
      image: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg",
    },
  ]

  const pressReleases = [
    {
      title: "upoZero, 시리즈 A 투자 유치 완료",
      date: "2024-01-22",
      summary: "총 100억원 규모의 시리즈 A 투자를 성공적으로 유치하여 기술 개발과 해외 진출을 가속화합니다.",
    },
    {
      title: "신규 딥페이크 탐지 솔루션 'DeepGuard' 출시",
      date: "2024-01-15",
      summary: "차세대 AI 기술을 적용한 실시간 딥페이크 탐지 솔루션을 정식 출시했습니다.",
    },
    {
      title: "upoZero, 글로벌 사이버보안 컨퍼런스 참가",
      date: "2024-01-10",
      summary: "미국 RSA Conference 2024에 참가하여 최신 기술을 선보일 예정입니다.",
    },
  ]

  const categories = ["전체", "기업 소식", "정부 과제", "업계 동향", "수상", "파트너십", "기술 동향"]

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">뉴스</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">upoZero의 최신 소식과 업계 동향을 확인하세요</p>
      </div>

      {/* Search and Filter */}
      <div className="flex flex-col md:flex-row gap-4 mb-8">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          <Input placeholder="뉴스 검색..." className="pl-10" />
        </div>
        <div className="flex gap-2 flex-wrap">
          {categories.map((category) => (
            <Button key={category} variant={category === "전체" ? "default" : "outline"} size="sm">
              {category}
            </Button>
          ))}
        </div>
      </div>

      {/* Featured News */}
      <Card className="mb-12 overflow-hidden">
        <div className="grid lg:grid-cols-2 gap-0">
          <div className="relative h-64 lg:h-auto">
            <Image
              src={featuredNews.image}
              alt={featuredNews.title}
              fill
              className="object-cover"
            />
          </div>
          <div className="p-8 flex flex-col justify-center">
            <Badge className="w-fit mb-4">{featuredNews.category}</Badge>
            <h2 className="text-3xl font-bold mb-4">{featuredNews.title}</h2>
            <p className="text-gray-600 mb-6">{featuredNews.excerpt}</p>
            <div className="flex items-center gap-4 text-sm text-gray-500 mb-6">
              <div className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                {featuredNews.date}
              </div>
              <div className="flex items-center gap-1">
                <ExternalLink className="h-4 w-4" />
                {featuredNews.source}
              </div>
            </div>
            <Button asChild className="w-fit">
              <Link href="/pr/news/featured">
                자세히 읽기 <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </Card>

      {/* Recent News */}
      <div className="mb-12">
        <h2 className="text-3xl font-bold mb-8">최신 뉴스</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {news.map((item, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative h-48">
                <Image src={item.image} alt={item.title} fill className="object-cover" />
              </div>
              <CardHeader>
                <Badge className="w-fit mb-2">{item.category}</Badge>
                <CardTitle className="line-clamp-2">{item.title}</CardTitle>
                <CardDescription className="line-clamp-3">{item.excerpt}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    {item.date}
                  </div>
                  <div className="flex items-center gap-1">
                    <ExternalLink className="h-4 w-4" />
                    {item.source}
                  </div>
                </div>
                <Button asChild variant="outline" className="w-full">
                  <Link href={`/pr/news/article-${index + 1}`}>읽어보기</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Press Releases */}
      <div className="mb-12">
        <h2 className="text-3xl font-bold mb-8">보도자료</h2>
        <div className="space-y-4">
          {pressReleases.map((release, index) => (
            <Card key={index}>
              <CardContent className="pt-6">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold mb-2">{release.title}</h3>
                    <p className="text-gray-600 mb-2">{release.summary}</p>
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <Calendar className="h-4 w-4" />
                      {release.date}
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      원문 보기
                    </Button>
                    <Button size="sm" variant="outline">
                      다운로드
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Media Contact */}
      <div className="bg-blue-50 rounded-lg p-8">
        <h2 className="text-3xl font-bold text-center mb-6">언론 문의</h2>
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-lg text-gray-700 mb-6">upoZero 관련 취재나 보도자료가 필요하시면 언제든지 연락해주세요</p>
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div>
              <h3 className="font-semibold mb-2">홍보팀</h3>
              <p className="text-gray-600">pr@upozero.com</p>
              <p className="text-gray-600">02-1234-5679</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">기술 문의</h3>
              <p className="text-gray-600">tech@upozero.com</p>
              <p className="text-gray-600">02-1234-5680</p>
            </div>
          </div>
          <Button asChild size="lg">
            <Link href="/consultation">언론 문의하기</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}