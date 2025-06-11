import { notFound } from "next/navigation"
import Image from "next/image"

const posts = [
  {
    id: 1,
    title: "청소년 대상 사이버 범죄 예방 교육의 중요성",
    author: "정교육자",
    date: "2024-01-03",
    image: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg",
    excerpt: "증가하는 청소년 대상 사이버 범죄와 효과적인 예방 교육 방안을 다룹니다."
  },
  {
    id: 2,
    title: "몸캠피싱 피해 예방을 위한 5가지 핵심 수칙",
    author: "이전문가",
    date: "2024-01-10",
    image: "https://images.pexels.com/photos/5380642/pexels-photo-5380642.jpeg",
    excerpt: "몸캠피싱 피해를 예방하기 위해 반드시 알아야 할 핵심 수칙들을 정리했습니다."
  },
  {
    id: 3,
    title: "딥페이크 탐지 기술의 최신 발전 현황",
    author: "김연구원",
    date: "2024-01-01",
    image: "https://images.pexels.com/photos/8386423/pexels-photo-8386423.jpeg",
    excerpt: "딥페이크 콘텐츠를 탐지하는 최신 기술들과 그 효과성을 분석합니다."
  },
  {
    id: 4,
    title: "개인정보 보호를 위한 실용적 가이드",
    author: "이보안전문가",
    date: "2023-12-28",
    image: "https://images.pexels.com/photos/5473955/pexels-photo-5473955.jpeg",
    excerpt: "일상생활에서 개인정보를 안전하게 보호하는 실용적인 방법들을 제시합니다."
  },
  {
    id: 5,
    title: "기업을 위한 디지털 보안 체크리스트",
    author: "최컨설턴트",
    date: "2024-01-05",
    image: "https://images.pexels.com/photos/5473298/pexels-photo-5473298.jpeg",
    excerpt: "기업이 디지털 보안을 강화하기 위해 점검해야 할 필수 항목들을 소개합니다."
  }
];

export default async function MagazinePost({ params }: { params: { slug: string } }) {
  const resolvedParams = await params;
  const postIndex = parseInt(resolvedParams.slug.replace("post-", "")) - 1;
  const post = posts[postIndex];

  if (!post) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
      <p className="text-gray-600 mb-2">{post.date} | {post.author}</p>
      <div className="relative h-[400px] mb-6">
        <Image 
          src={post.image} 
          alt={post.title} 
          fill
          className="rounded-lg object-cover"
          priority
        />
      </div>
      <p className="text-lg text-gray-700">{post.excerpt}</p>
    </div>
  );
}