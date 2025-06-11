import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Calendar, User, ArrowRight, Search } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function MagazinePage() {
  const featuredPost = {
    title: "2024년 딥페이크 기술 동향과 대응 전략",
    excerpt: "최신 딥페이크 기술의 발전 현황과 이에 대응하는 보안 기술의 발전 방향을 분석합니다.",
    author: "김보안",
    date: "2024-01-15",
    category: "기술 동향",
    image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg",
  }

  const posts = [
    {
      title: "몸캠피싱 피해 예방을 위한 5가지 핵심 수칙",
      excerpt: "몸캠피싱 피해를 예방하기 위해 반드시 알아야 할 핵심 수칙들을 정리했습니다.",
      author: "이전문가",
      date: "2024-01-10",
      category: "보안 가이드",
      image: "https://images.pexels.com/photos/5380642/pexels-photo-5380642.jpeg",
    },
    {
      title: "AI 기반 사이버 보안의 미래",
      excerpt: "인공지능 기술이 사이버 보안 분야에 가져올 변화와 새로운 가능성을 탐구합니다.",
      author: "박연구원",
      date: "2024-01-08",
      category: "기술 동향",
      image: "https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg",
    },
    {
      title: "기업을 위한 디지털 보안 체크리스트",
      excerpt: "기업이 디지털 보안을 강화하기 위해 점검해야 할 필수 항목들을 소개합니다.",
      author: "최컨설턴트",
      date: "2024-01-05",
      category: "기업 보안",
      image: "https://images.pexels.com/photos/5473298/pexels-photo-5473298.jpeg",
    },
    {
      title: "청소년 대상 사이버 범죄 예방 교육의 중요성",
      excerpt: "증가하는 청소년 대상 사이버 범죄와 효과적인 예방 교육 방안을 다룹니다.",
      author: "정교육자",
      date: "2024-01-03",
      category: "교육",
      image: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg",
    },
    {
      title: "딥페이크 탐지 기술의 최신 발전 현황",
      excerpt: "딥페이크 콘텐츠를 탐지하는 최신 기술들과 그 효과성을 분석합니다.",
      author: "김연구원",
      date: "2024-01-01",
      category: "기술 동향",
      image: "https://images.pexels.com/photos/8386423/pexels-photo-8386423.jpeg",
    },
    {
      title: "개인정보 보호를 위한 실용적 가이드",
      excerpt: "일상생활에서 개인정보를 안전하게 보호하는 실용적인 방법들을 제시합니다.",
      author: "이보안전문가",
      date: "2023-12-28",
      category: "개인정보 보호",
      image: "https://images.pexels.com/photos/5473955/pexels-photo-5473955.jpeg",
    },
  ]

  const caseStudies = [
    {
      title: "데이팅 앱을 통한 몸캠피싱 피해 사례",
      excerpt: "외로움을 이용한 데이팅 앱 몸캠피싱의 실제 피해 사례와 대응 방법을 소개합니다.",
      author: "보안전문가",
      date: "2024-01-20",
      category: "피해 사례",
      image: "https://images.pexels.com/photos/4348401/pexels-photo-4348401.jpeg",
      content: "A씨는 외로운 일상 속에서 누군가와 대화를 나누고 싶어 데이팅 앱을 시작했습니다. 며칠간 메시지를 주고받은 상대가 영상통화를 제안했고, 통화 도중 자연스럽게 신체 노출을 유도하더니 그 장면이 녹화되었다며 협박이 시작됐습니다. 이후 A씨는 '당신 연락처에 있는 사람들에게 전부 보내겠다'는 메시지를 받고 극심한 불안에 시달리며 결국 경찰과 상담기관을 찾게 되었습니다."
    },
    {
      title: "군인 대상 몸캠피싱 협박 사례",
      excerpt: "군인의 특수한 상황을 악용한 몸캠피싱 사례와 군부대 내 대응 방안을 다룹니다.",
      author: "보안전문가",
      date: "2024-01-18",
      category: "피해 사례",
      image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg",
      content: "휴가 중 데이팅 앱에서 알게 된 여성과 몇 차례 대화를 나눈 뒤 영상통화를 하게 됐습니다. 통화 도중 상대가 음질이 안 좋다며 특정 앱을 설치하라고 해 그대로 따랐고, 이후 예상치 못한 상황에서 신체 노출 장면이 녹화됐습니다. 곧이어 저장된 영상과 함께 군부대 상관 연락처가 포함된 명단을 보여주며 협박 메시지가 날아왔습니다."
    },
    {
      title: "SNS 친구요청을 통한 몸캠피싱 접근",
      excerpt: "SNS를 통한 자연스러운 접근으로 시작된 몸캠피싱 사례를 분석합니다.",
      author: "보안전문가",
      date: "2024-01-16",
      category: "피해 사례",
      image: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg",
      content: "A씨는 평소처럼 SNS를 둘러보던 중 낯선 사람에게 친구 요청을 받았고, 프로필 사진이 자연스러워 별 의심 없이 수락했습니다. 상대는 빠르게 친근감을 형성하며 대화를 이어갔고, 얼마 지나지 않아 영상통화를 시도했습니다. 통화 중 자연스럽게 신체 노출을 유도하더니, 이내 녹화된 영상과 함께 친구 목록을 언급하며 협박 메시지를 보내오기 시작했습니다."
    },
    {
      title: "게임 채팅을 통한 몸캠피싱 사례",
      excerpt: "온라인 게임을 통해 형성된 관계를 악용한 새로운 형태의 몸캠피싱 사례입니다.",
      author: "보안전문가",
      date: "2024-01-14",
      category: "피해 사례",
      image: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg",
      content: "A씨는 평소 즐겨하던 모바일 게임에서 자주 매칭되던 유저와 자연스럽게 친해졌고, 게임 내 채팅을 통해 카카오톡 아이디를 주고받게 됐습니다. 이후 상대는 친근한 말투로 관심을 표현하며 영상통화를 요청했고, 통화 도중 신체 노출을 유도했습니다. 곧이어 해당 장면이 녹화되었다는 메시지와 함께 친구 목록과 게임 커뮤니티에 유포하겠다는 협박이 이어졌습니다."
    }
  ]

  const categories = ["전체", "기술 동향", "보안 가이드", "기업 보안", "교육", "개인정보 보호", "피해 사례"]

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">upoZero 매거진</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          디지털 보안의 최신 동향과 실용적인 보안 가이드를 제공합니다
        </p>
      </div>

      {/* Search and Filter */}
      <div className="flex flex-col md:flex-row gap-4 mb-8">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          <Input placeholder="검색어를 입력하세요..." className="pl-10" />
        </div>
        <div className="flex gap-2 flex-wrap">
          {categories.map((category) => (
            <Button key={category} variant={category === "전체" ? "default" : "outline"} size="sm">
              {category}
            </Button>
          ))}
        </div>
      </div>

      {/* Featured Post */}
      <Card className="mb-12 overflow-hidden">
        <div className="grid lg:grid-cols-2 gap-0">
          <div className="relative h-64 lg:h-auto">
            <Image
              src={featuredPost.image}
              alt={featuredPost.title}
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="p-8 flex flex-col justify-center">
            <Badge className="w-fit mb-4">{featuredPost.category}</Badge>
            <h2 className="text-3xl font-bold mb-4">{featuredPost.title}</h2>
            <p className="text-gray-600 mb-6">{featuredPost.excerpt}</p>
            <div className="flex items-center gap-4 text-sm text-gray-500 mb-6">
              <div className="flex items-center gap-1">
                <User className="h-4 w-4" />
                {featuredPost.author}
              </div>
              <div className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                {featuredPost.date}
              </div>
            </div>
            <Button asChild className="w-fit">
              <Link href="/magazine/featured-post">
                자세히 읽기 <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </Card>

      {/* Case Studies Section */}
      <div className="mb-12">
        <h2 className="text-3xl font-bold mb-8">실제 피해 사례</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {caseStudies.map((caseStudy, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative h-48">
                <Image src={caseStudy.image} alt={caseStudy.title} fill className="object-cover" />
              </div>
              <CardHeader>
                <Badge className="w-fit mb-2 bg-red-100 text-red-800">{caseStudy.category}</Badge>
                <CardTitle className="line-clamp-2">{caseStudy.title}</CardTitle>
                <CardDescription className="line-clamp-3">{caseStudy.excerpt}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                  <div className="flex items-center gap-1">
                    <User className="h-4 w-4" />
                    {caseStudy.author}
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    {caseStudy.date}
                  </div>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg mb-4">
                  <p className="text-sm text-gray-700 line-clamp-4">{caseStudy.content}</p>
                </div>
                <Button asChild variant="outline" className="w-full">
                  <Link href={`/magazine/case-study-${index + 1}`}>자세히 보기</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Recent Posts */}
      <div className="mb-12">
        <h2 className="text-3xl font-bold mb-8">최신 글</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative h-48">
                <Image src={post.image} alt={post.title} fill className="object-cover" />
              </div>
              <CardHeader>
                <Badge className="w-fit mb-2">{post.category}</Badge>
                <CardTitle className="line-clamp-2">{post.title}</CardTitle>
                <CardDescription className="line-clamp-3">{post.excerpt}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                  <div className="flex items-center gap-1">
                    <User className="h-4 w-4" />
                    {post.author}
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    {post.date}
                  </div>
                </div>
                <Button asChild variant="outline" className="w-full">
                  <Link href={`/magazine/post-${index + 1}`}>읽어보기</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Newsletter Subscription */}
      <div className="bg-blue-600 text-white rounded-lg p-8 text-center">
        <h2 className="text-3xl font-bold mb-4">뉴스레터 구독</h2>
        <p className="text-xl mb-6 text-blue-100">최신 보안 동향과 유용한 팁을 이메일로 받아보세요</p>
        <div className="max-w-md mx-auto flex gap-2">
          <Input type="email" placeholder="이메일 주소를 입력하세요" className="bg-white text-black" />
          <Button className="bg-yellow-500 hover:bg-yellow-600 text-black">구독하기</Button>
        </div>
        <p className="text-sm text-blue-200 mt-4">언제든지 구독을 취소할 수 있습니다</p>
      </div>
    </div>
  )
}