import Link from "next/link"
import Image from "next/image"
import { ArrowRight, BookOpen, Zap, Users, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import ScrollAnimation from "@/components/scroll-animation"
import { getFeaturedPosts } from "@/lib/posts"
import PostCard from "@/components/post-card"

export default async function Home() {
  const featuredPosts = await getFeaturedPosts(3)

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 lg:py-36 overflow-hidden">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <ScrollAnimation animation="slide-in-left" className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter">
                Discover Insights That <span className="text-primary">Inspire</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-[600px]">
                Welcome to ModernBlog, where we share stories, ideas, and knowledge to help you grow personally and
                professionally.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="hover-lift">
                  <Link href="/blog">
                    Explore Blog
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="hover-lift">
                  <Link href="/about">Learn More</Link>
                </Button>
              </div>
            </ScrollAnimation>
            <ScrollAnimation animation="slide-in-right" className="relative">
              <div className="relative h-[400px] w-full rounded-lg overflow-hidden shadow-xl hover-glow">
                <Image
                  src="/placeholder.svg?height=800&width=1200"
                  alt="Blog hero image"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-primary text-primary-foreground p-4 rounded-lg shadow-lg">
                <p className="font-bold">100+ Articles</p>
                <p className="text-sm">Updated weekly</p>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container px-4 md:px-6">
          <ScrollAnimation animation="fade-in" className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4">Why Choose Our Blog</h2>
            <p className="text-xl text-muted-foreground max-w-[800px] mx-auto">
              We're committed to providing valuable content that helps you navigate life's challenges and opportunities.
            </p>
          </ScrollAnimation>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <ScrollAnimation animation="fade-in" delay={100} className="bg-card p-6 rounded-lg shadow-sm hover-lift">
              <BookOpen className="h-10 w-10 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-2">In-depth Articles</h3>
              <p className="text-muted-foreground">
                Thoroughly researched and thoughtfully written content on topics that matter.
              </p>
            </ScrollAnimation>

            <ScrollAnimation animation="fade-in" delay={200} className="bg-card p-6 rounded-lg shadow-sm hover-lift">
              <Zap className="h-10 w-10 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-2">Fresh Perspectives</h3>
              <p className="text-muted-foreground">
                Unique insights and viewpoints that challenge conventional thinking.
              </p>
            </ScrollAnimation>

            <ScrollAnimation animation="fade-in" delay={300} className="bg-card p-6 rounded-lg shadow-sm hover-lift">
              <Users className="h-10 w-10 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-2">Community Focus</h3>
              <p className="text-muted-foreground">
                Content created with our readers in mind, addressing your questions and concerns.
              </p>
            </ScrollAnimation>

            <ScrollAnimation animation="fade-in" delay={400} className="bg-card p-6 rounded-lg shadow-sm hover-lift">
              <Star className="h-10 w-10 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-2">Expert Contributors</h3>
              <p className="text-muted-foreground">
                Articles written by professionals with real-world experience and expertise.
              </p>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Featured Posts Section */}
      <section className="py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <ScrollAnimation
            animation="fade-in"
            className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12"
          >
            <div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4">Featured Posts</h2>
              <p className="text-xl text-muted-foreground max-w-[600px]">
                Explore our most popular and insightful articles.
              </p>
            </div>
            <Button asChild variant="outline" className="mt-4 md:mt-0 hover-lift">
              <Link href="/blog">
                View All Posts
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </ScrollAnimation>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredPosts.map((post, index) => (
              <ScrollAnimation key={post.slug} animation="fade-in" delay={index * 100}>
                <PostCard post={post} />
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="container px-4 md:px-6">
          <ScrollAnimation animation="scale-in" className="text-center max-w-[800px] mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4">Stay Updated with Our Newsletter</h2>
            <p className="text-xl mb-8">
              Get the latest articles, tips, and insights delivered directly to your inbox.
            </p>
            <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                aria-label="Email address"
                className="px-4 py-3 rounded-md bg-primary-foreground text-foreground flex-1"
                required
              />
              <Button className="bg-background text-foreground hover:bg-background/90">Subscribe</Button>
            </form>
          </ScrollAnimation>
        </div>
      </section>
    </>
  )
}

