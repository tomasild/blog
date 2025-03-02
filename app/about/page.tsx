import Image from "next/image"
import type { Metadata } from "next"
import { Award, Users, Heart, Lightbulb } from "lucide-react"
import ScrollAnimation from "@/components/scroll-animation"

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn more about ModernBlog, our mission, values, and the team behind our content.",
}

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <ScrollAnimation animation="slide-in-left">
              <h1 className="text-4xl md:text-5xl font-bold tracking-tighter mb-4">
                About Modern<span className="text-primary">Blog</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-6">
                We're a team of passionate writers, thinkers, and creators dedicated to sharing valuable insights and
                stories.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <Award className="h-5 w-5 text-primary" />
                  <span className="font-medium">Established in 2020</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-primary" />
                  <span className="font-medium">Team of 15 experts</span>
                </div>
                <div className="flex items-center gap-2">
                  <Lightbulb className="h-5 w-5 text-primary" />
                  <span className="font-medium">500+ articles published</span>
                </div>
              </div>
            </ScrollAnimation>
            <ScrollAnimation animation="slide-in-right">
              <div className="relative h-[400px] w-full rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="/placeholder.svg?height=800&width=1200"
                  alt="Our team"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <ScrollAnimation animation="fade-in" className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4">Our Story</h2>
            <p className="text-xl text-muted-foreground max-w-[800px] mx-auto">How we started and where we're headed</p>
          </ScrollAnimation>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <ScrollAnimation animation="slide-in-left">
              <div className="relative h-[500px] w-full rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="/placeholder.svg?height=1000&width=800"
                  alt="Our journey"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </ScrollAnimation>
            <ScrollAnimation animation="slide-in-right" className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold mb-2">The Beginning</h3>
                <p className="text-muted-foreground">
                  ModernBlog started as a small passion project in 2020. Our founder wanted to create a space where
                  people could find reliable, well-researched information on a variety of topics. What began as a simple
                  WordPress site has grown into the comprehensive platform you see today.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">Our Growth</h3>
                <p className="text-muted-foreground">
                  Over the years, we've expanded our team to include experts from various fields, from technology and
                  business to health and lifestyle. This diversity allows us to provide well-rounded perspectives on the
                  topics we cover.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">Looking Forward</h3>
                <p className="text-muted-foreground">
                  As we continue to grow, our mission remains the same: to provide valuable, accessible content that
                  helps our readers navigate life's challenges and opportunities. We're constantly exploring new topics
                  and formats to better serve our community.
                </p>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container px-4 md:px-6">
          <ScrollAnimation animation="fade-in" className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4">Our Values</h2>
            <p className="text-xl text-muted-foreground max-w-[800px] mx-auto">
              The principles that guide our work and content
            </p>
          </ScrollAnimation>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <ScrollAnimation animation="fade-in" delay={100} className="bg-card p-8 rounded-lg shadow-sm hover-lift">
              <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <Award className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Quality</h3>
              <p className="text-muted-foreground">
                We're committed to producing high-quality content that's well-researched, thoughtfully written, and
                valuable to our readers.
              </p>
            </ScrollAnimation>

            <ScrollAnimation animation="fade-in" delay={200} className="bg-card p-8 rounded-lg shadow-sm hover-lift">
              <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <Heart className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Empathy</h3>
              <p className="text-muted-foreground">
                We approach every topic with empathy, understanding that our readers come from diverse backgrounds and
                experiences.
              </p>
            </ScrollAnimation>

            <ScrollAnimation animation="fade-in" delay={300} className="bg-card p-8 rounded-lg shadow-sm hover-lift">
              <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <Lightbulb className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Innovation</h3>
              <p className="text-muted-foreground">
                We're always looking for new ways to present information and engage with our readers, embracing new
                technologies and formats.
              </p>
            </ScrollAnimation>

            <ScrollAnimation animation="fade-in" delay={400} className="bg-card p-8 rounded-lg shadow-sm hover-lift">
              <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Community</h3>
              <p className="text-muted-foreground">
                We value the community we've built and strive to create content that addresses their needs and
                interests.
              </p>
            </ScrollAnimation>

            <ScrollAnimation
              animation="fade-in"
              delay={500}
              className="bg-card p-8 rounded-lg shadow-sm hover-lift sm:col-span-2 lg:col-span-1"
            >
              <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Integrity</h3>
              <p className="text-muted-foreground">
                We maintain high ethical standards in our content creation, ensuring accuracy, transparency, and honesty
                in everything we publish.
              </p>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <ScrollAnimation animation="fade-in" className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4">Meet Our Team</h2>
            <p className="text-xl text-muted-foreground max-w-[800px] mx-auto">
              The talented individuals behind our content
            </p>
          </ScrollAnimation>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: "Jane Smith",
                role: "Founder & Editor-in-Chief",
                bio: "Jane has over 15 years of experience in digital publishing and content creation.",
                image: "/placeholder.svg?height=400&width=400",
              },
              {
                name: "John Doe",
                role: "Senior Technology Writer",
                bio: "John specializes in technology trends, software development, and digital innovation.",
                image: "/placeholder.svg?height=400&width=400",
              },
              {
                name: "Sarah Johnson",
                role: "Health & Wellness Editor",
                bio: "Sarah is a certified health coach with a passion for making wellness accessible to everyone.",
                image: "/placeholder.svg?height=400&width=400",
              },
              {
                name: "Michael Brown",
                role: "Business Strategist",
                bio: "Michael brings his experience as a former startup founder to our business and entrepreneurship content.",
                image: "/placeholder.svg?height=400&width=400",
              },
            ].map((member, index) => (
              <ScrollAnimation
                key={member.name}
                animation="fade-in"
                delay={index * 100}
                className="bg-card rounded-lg overflow-hidden shadow-sm hover-lift"
              >
                <div className="relative h-64 w-full">
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  <p className="text-primary font-medium mb-3">{member.role}</p>
                  <p className="text-muted-foreground">{member.bio}</p>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

