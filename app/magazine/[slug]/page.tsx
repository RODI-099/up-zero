import { notFound } from "next/navigation"

const posts: any[] = [
  // ...same posts array as in your magazine page...
]

export default async function MagazinePost(props: { params: { slug: string } }) {
  const { params } = props
  const postIndex = parseInt(params.slug.replace("post-", "")) - 1
  const post = posts[postIndex]

  if (!post) return notFound()

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
      <p className="text-gray-600 mb-2">{post.date} | {post.author}</p>
      <img src={post.image} alt={post.title} className="mb-6 rounded-lg" />
      <p>{post.excerpt}</p>
      {/* Add more content as needed */}
    </div>
  )
}