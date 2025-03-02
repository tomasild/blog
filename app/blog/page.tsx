import type { Metadata } from "next"
import Link from "next/link"
import { Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import ScrollAnimation from "@/components/scroll-animation"
import PostCard from "@/components/post-card"
import { getAllPosts } from "@/lib/posts"

export const metadata: Metadata = {
  title: "Blog",
  description: "Explore our latest articles, tips, and insights on various topics.",
}

export default async function BlogPage() {
  const posts = await getAllPosts()

  // Extract unique categories
  const categories = Array.from(new Set(posts.map((post) => post.category)))

  return (
    <>
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container px-4 md:px-6">
          <ScrollAnimation animation="fade-in" className="text-center max-w-[800px] mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tighter mb-4">Our Blog</h1>
            <p className="text-xl text-muted-foreground mb-8">
              Explore our latest articles, tips, and insights on various topics.
            </p>
            <div className="relative max-w-md mx-auto">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input type="search" placeholder="Search articles..." className="pl-10" aria-label="Search articles" />
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-8 border-b">
        <div className="container px-4 md:px-6">
          <ScrollAnimation animation="fade-in" className="flex flex-wrap gap-2 justify-center">
            <Button variant="outline" className="hover-lift" asChild>
              <Link href="/blog">All</Link>
            </Button>
            {categories.map((category) => (
              <Button key={category} variant="outline" className="hover-lift" asChild>
                <Link href={`/blog/category/${category.toLowerCase()}`}>{category}</Link>
              </Button>
            ))}
          </ScrollAnimation>
        </div>
      </section>

      {/* Blog Posts Section */}
      <section className="py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, index) => (
              <ScrollAnimation key={post.slug} animation="fade-in" delay={index * 100}>
                <PostCard post={post} />
              </ScrollAnimation>
            ))}
          </div>

          {/* Pagination */}
          <ScrollAnimation animation="fade-in" className="flex justify-center mt-12">
            <div className="flex gap-2">
              <Button variant="outline" disabled>
                Previous
              </Button>
              <Button variant="outline" className="bg-primary text-primary-foreground hover:bg-primary/90">
                1
              </Button>
              <Button variant="outline">2</Button>
              <Button variant="outline">3</Button>
              <Button variant="outline">Next</Button>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container px-4 md:px-6">
          <ScrollAnimation animation="scale-in" className="text-center max-w-[800px] mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4">Subscribe to Our Newsletter</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Get the latest articles and insights delivered directly to your inbox.
            </p>
            <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email"
                aria-label="Email address"
                className="flex-1"
                required
              />
              <Button>Subscribe</Button>
            </form>
          </ScrollAnimation>
        </div>
      </section>
    </>
  )
}

