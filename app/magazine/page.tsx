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

  const categories = ["전체", "기술 동향", "보안 가이드", "기업 보안", "교육", "개인정보 보호"]

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