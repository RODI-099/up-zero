import { notFound } from "next/navigation"

const posts = [
  {
    id: 1,
    title: "Understanding Youth Education in Digital Age",
    author: "Dr. Sarah Chen",
    date: "2024-01-15",
    image: "/images/magazine/youth-education.jpg",
    excerpt: "Exploring how modern education adapts to digital challenges"
  },
  {
    id: 2,
    title: "Bodycam Technology in Prevention",
    author: "James Wilson",
    date: "2024-01-10",
    image: "/images/magazine/bodycam-prevention.jpg",
    excerpt: "The role of body cameras in preventing security incidents"
  },
  {
    id: 3,
    title: "Latest Trends in Deepfake Detection",
    author: "Dr. Emily Rodriguez",
    date: "2024-01-05",
    image: "/images/magazine/deepfake-detection.jpg",
    excerpt: "New developments in identifying manipulated media"
  },
  {
    id: 4,
    title: "Privacy Protection Strategies",
    author: "Michael Chang",
    date: "2023-12-28",
    image: "/images/magazine/privacy-protection.jpg",
    excerpt: "Essential strategies for maintaining digital privacy"
  },
  {
    id: 5,
    title: "Enterprise Security Solutions",
    author: "Lisa Thompson",
    date: "2023-12-20",
    image: "/images/magazine/enterprise-security.jpg",
    excerpt: "Comprehensive security solutions for businesses"
  }
];

export default async function MagazinePost({ params }: { params: { slug: string } }) {
  const postIndex = parseInt(params.slug.replace("post-", "")) - 1;
  const post = posts[postIndex];

  if (!post) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
      <p className="text-gray-600 mb-2">{post.date} | {post.author}</p>
      <img src={post.image} alt={post.title} className="mb-6 rounded-lg" />
      <p>{post.excerpt}</p>
    </div>
  );
}