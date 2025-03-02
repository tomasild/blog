import { Input } from "@/components/ui/input"
import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { Calendar, Clock, User, Tag, Facebook, Twitter, Linkedin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import ScrollAnimation from "@/components/scroll-animation"
import { getPostBySlug, getAllPosts } from "@/lib/posts"

interface BlogPostPageProps {
  params: {
    slug: string
  }
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const post = await getPostBySlug(params.slug)

  if (!post) {
    return {
      title: "Post Not Found",
      description: "The requested blog post could not be found.",
    }
  }

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
      authors: [post.author.name],
      images: [
        {
          url: post.coverImage,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [post.coverImage],
    },
  }
}

export async function generateStaticParams() {
  const posts = await getAllPosts()

  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const post = await getPostBySlug(params.slug)

  if (!post) {
    notFound()
  }

  // This would be replaced with actual markdown content in a real application
  const dummyContent = `
    <p class="text-lg mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eget aliquam nisl nisl sit amet nisl. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eget aliquam nisl nisl sit amet nisl.</p>
    
    <p class="mb-4">Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eget aliquam nisl nisl sit amet nisl. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eget aliquam nisl nisl sit amet nisl.</p>
    
    <h2 class="text-2xl font-bold mt-8 mb-4">Key Points to Consider</h2>
    
    <p class="mb-4">Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eget aliquam nisl nisl sit amet nisl. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eget aliquam nisl nisl sit amet nisl.</p>
    
    <ul class="list-disc pl-6 mb-4">
      <li class="mb-2">First important point that needs to be considered</li>
      <li class="mb-2">Second critical element for success</li>
      <li class="mb-2">Third factor that can make a significant difference</li>
    </ul>
    
    <p class="mb-4">Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eget aliquam nisl nisl sit amet nisl. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eget aliquam nisl nisl sit amet nisl.</p>
    
    <blockquote class="border-l-4 border-primary pl-4 italic my-6">
      "This is an important quote that highlights a key insight from the article. It stands out to emphasize its significance."
    </blockquote>
    
    <h2 class="text-2xl font-bold mt-8 mb-4">Practical Applications</h2>
    
    <p class="mb-4">Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eget aliquam nisl nisl sit amet nisl. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eget aliquam nisl nisl sit amet nisl.</p>
    
    <ol class="list-decimal pl-6 mb-4">
      <li class="mb-2">First step in the process</li>
      <li class="mb-2">Second step to follow</li>
      <li class="mb-2">Final step to complete the task</li>
    </ol>
    
    <p class="mb-4">Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eget aliquam nisl nisl sit amet nisl. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eget aliquam nisl nisl sit amet nisl.</p>
    
    <h2 class="text-2xl font-bold mt-8 mb-4">Conclusion</h2>
    
    <p class="mb-4">Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eget aliquam nisl nisl sit amet nisl. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eget aliquam nisl nisl sit amet nisl.</p>
  `

  return (
    <>
      {/* Hero Section */}
      <section className="pt-16 md:pt-24 pb-8 md:pb-12 bg-muted">
        <div className="container px-4 md:px-6">
          <ScrollAnimation animation="fade-in" className="max-w-[800px] mx-auto text-center">
            <Badge variant="outline" className="mb-4">
              {post.category}
            </Badge>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter mb-6">{post.title}</h1>
            <div className="flex flex-wrap justify-center gap-4 text-muted-foreground mb-8">
              <div className="flex items-center">
                <User className="h-4 w-4 mr-2" />
                <span>{post.author.name}</span>
              </div>
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-2" />
                <time dateTime={post.date}>
                  {new Date(post.date).toLocaleDateString("en-US", {
                    month: "long",
                    day: "numeric",
                    year: "numeric",
                  })}
                </time>
              </div>
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-2" />
                <span>{post.readingTime}</span>
              </div>
              <div className="flex items-center">
                <Tag className="h-4 w-4 mr-2" />
                <Link href={`/blog/category/${post.category.toLowerCase()}`} className="hover:text-primary">
                  {post.category}
                </Link>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Featured Image */}
      <section className="py-8">
        <div className="container px-4 md:px-6">
          <ScrollAnimation
            animation="fade-in"
            className="relative h-[400px] md:h-[500px] w-full rounded-lg overflow-hidden shadow-xl"
          >
            <Image
              src={post.coverImage || "/placeholder.svg"}
              alt={post.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 1200px"
              priority
            />
          </ScrollAnimation>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-8 md:py-12">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Author Sidebar */}
            <ScrollAnimation animation="slide-in-left" className="lg:col-span-3 order-2 lg:order-1">
              <div className="sticky top-24 space-y-8">
                <div className="bg-card p-6 rounded-lg shadow-sm">
                  <h3 className="text-lg font-bold mb-4">About the Author</h3>
                  <div className="flex items-center mb-4">
                    <Image
                      src={post.author.avatar || "/placeholder.svg"}
                      alt={post.author.name}
                      width={60}
                      height={60}
                      className="rounded-full mr-4"
                    />
                    <div>
                      <p className="font-semibold">{post.author.name}</p>
                      <p className="text-sm text-muted-foreground">Content Writer</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground text-sm">
                    An experienced writer specializing in {post.category.toLowerCase()} topics with over 5 years of
                    industry experience.
                  </p>
                </div>

                <div className="bg-card p-6 rounded-lg shadow-sm">
                  <h3 className="text-lg font-bold mb-4">Share this Article</h3>
                  <div className="flex space-x-4">
                    <Button variant="outline" size="icon" aria-label="Share on Facebook">
                      <Facebook className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="icon" aria-label="Share on Twitter">
                      <Twitter className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="icon" aria-label="Share on LinkedIn">
                      <Linkedin className="h-4 w-4" />
                    </Button>
                  </div>
                </div>

                <div className="bg-card p-6 rounded-lg shadow-sm">
                  <h3 className="text-lg font-bold mb-4">Related Categories</h3>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary" className="hover-lift">
                      <Link href={`/blog/category/${post.category.toLowerCase()}`}>{post.category}</Link>
                    </Badge>
                    <Badge variant="secondary" className="hover-lift">
                      <Link href="/blog/category/technology">Technology</Link>
                    </Badge>
                    <Badge variant="secondary" className="hover-lift">
                      <Link href="/blog/category/design">Design</Link>
                    </Badge>
                  </div>
                </div>
              </div>
            </ScrollAnimation>

            {/* Main Content */}
            <ScrollAnimation animation="fade-in" className="lg:col-span-9 order-1 lg:order-2">
              <article className="prose prose-lg dark:prose-invert max-w-none">
                <div dangerouslySetInnerHTML={{ __html: dummyContent }} />
              </article>

              {/* Tags */}
              <div className="mt-8 pt-8 border-t">
                <h3 className="text-lg font-bold mb-4">Tags</h3>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline" className="hover-lift">
                    <Link href="#">{post.category}</Link>
                  </Badge>
                  <Badge variant="outline" className="hover-lift">
                    <Link href="#">Productivity</Link>
                  </Badge>
                  <Badge variant="outline" className="hover-lift">
                    <Link href="#">Tips</Link>
                  </Badge>
                  <Badge variant="outline" className="hover-lift">
                    <Link href="#">Strategy</Link>
                  </Badge>
                </div>
              </div>

              {/* Author Bio (Mobile) */}
              <div className="mt-8 pt-8 border-t lg:hidden">
                <h3 className="text-lg font-bold mb-4">About the Author</h3>
                <div className="flex items-center">
                  <Image
                    src={post.author.avatar || "/placeholder.svg"}
                    alt={post.author.name}
                    width={60}
                    height={60}
                    className="rounded-full mr-4"
                  />
                  <div>
                    <p className="font-semibold">{post.author.name}</p>
                    <p className="text-sm text-muted-foreground">
                      An experienced writer specializing in {post.category.toLowerCase()} topics with over 5 years of
                      industry experience.
                    </p>
                  </div>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container px-4 md:px-6">
          <ScrollAnimation animation="scale-in" className="text-center max-w-[800px] mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4">Enjoyed this article?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Subscribe to our newsletter to get more content like this delivered directly to your inbox.
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

