import Image from "next/image"
import Link from "next/link"
import type { Metadata } from "next"
import { Check, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import ScrollAnimation from "@/components/scroll-animation"

export const metadata: Metadata = {
  title: "Our Services",
  description: "Explore the range of services we offer to help you grow your business and reach your goals.",
}

export default function ServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <ScrollAnimation animation="slide-in-left">
              <h1 className="text-4xl md:text-5xl font-bold tracking-tighter mb-4">Our Services</h1>
              <p className="text-xl text-muted-foreground mb-6">
                We offer a range of services to help individuals and businesses grow, learn, and succeed in today's
                fast-paced world.
              </p>
              <Button asChild size="lg" className="hover-lift">
                <Link href="#services">
                  Explore Services
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </ScrollAnimation>
            <ScrollAnimation animation="slide-in-right">
              <div className="relative h-[400px] w-full rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="/placeholder.svg?height=800&width=1200"
                  alt="Our services"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <ScrollAnimation animation="fade-in" className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4">What We Offer</h2>
            <p className="text-xl text-muted-foreground max-w-[800px] mx-auto">
              Comprehensive solutions tailored to your needs
            </p>
          </ScrollAnimation>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Content Creation",
                description: "High-quality, engaging content tailored to your audience and goals.",
                image: "/placeholder.svg?height=600&width=800",
                features: [
                  "Blog posts and articles",
                  "Social media content",
                  "Email newsletters",
                  "Whitepapers and ebooks",
                ],
              },
              {
                title: "Content Strategy",
                description: "Strategic planning to ensure your content achieves your business objectives.",
                image: "/placeholder.svg?height=600&width=800",
                features: ["Content audits", "Editorial calendars", "Audience research", "Performance analysis"],
              },
              {
                title: "SEO Optimization",
                description: "Improve your visibility in search engines and drive organic traffic.",
                image: "/placeholder.svg?height=600&width=800",
                features: ["Keyword research", "On-page optimization", "Technical SEO", "Link building strategies"],
              },
              {
                title: "Social Media Management",
                description: "Build and engage your community across social platforms.",
                image: "/placeholder.svg?height=600&width=800",
                features: [
                  "Profile setup and optimization",
                  "Content creation and scheduling",
                  "Community engagement",
                  "Performance reporting",
                ],
              },
              {
                title: "Email Marketing",
                description: "Connect directly with your audience through effective email campaigns.",
                image: "/placeholder.svg?height=600&width=800",
                features: [
                  "Campaign strategy",
                  "Email design and copywriting",
                  "Automation setup",
                  "List management and segmentation",
                ],
              },
              {
                title: "Content Workshops",
                description: "Learn how to create and manage your own content effectively.",
                image: "/placeholder.svg?height=600&width=800",
                features: [
                  "Writing workshops",
                  "SEO training",
                  "Content strategy sessions",
                  "Social media masterclasses",
                ],
              },
            ].map((service, index) => (
              <ScrollAnimation
                key={service.title}
                animation="fade-in"
                delay={index * 100}
                className="bg-card rounded-lg overflow-hidden shadow-sm hover-lift"
              >
                <div className="relative h-48 w-full">
                  <Image
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                  <p className="text-muted-foreground mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-start">
                        <Check className="h-5 w-5 text-primary mr-2 shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container px-4 md:px-6">
          <ScrollAnimation animation="fade-in" className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4">Our Process</h2>
            <p className="text-xl text-muted-foreground max-w-[800px] mx-auto">
              How we work with you to deliver exceptional results
            </p>
          </ScrollAnimation>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Discovery",
                description: "We start by understanding your goals, audience, and current challenges.",
              },
              {
                step: "02",
                title: "Strategy",
                description: "Based on our findings, we develop a tailored strategy to meet your objectives.",
              },
              {
                step: "03",
                title: "Implementation",
                description: "We execute the strategy with precision and attention to detail.",
              },
              {
                step: "04",
                title: "Evaluation",
                description: "We measure results, gather feedback, and refine our approach for continuous improvement.",
              },
            ].map((process, index) => (
              <ScrollAnimation
                key={process.step}
                animation="fade-in"
                delay={index * 100}
                className="bg-card p-6 rounded-lg shadow-sm hover-lift relative"
              >
                <div className="text-6xl font-bold text-primary/10 absolute top-4 right-4">{process.step}</div>
                <h3 className="text-xl font-bold mb-2 relative z-10">{process.title}</h3>
                <p className="text-muted-foreground relative z-10">{process.description}</p>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <ScrollAnimation animation="fade-in" className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4">What Our Clients Say</h2>
            <p className="text-xl text-muted-foreground max-w-[800px] mx-auto">
              Hear from the people and businesses we've helped
            </p>
          </ScrollAnimation>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                quote:
                  "Working with ModernBlog transformed our content strategy. Their team understood our goals and delivered beyond our expectations.",
                author: "Sarah Johnson",
                company: "Tech Innovations Inc.",
                image: "/placeholder.svg?height=100&width=100",
              },
              {
                quote:
                  "The SEO optimization services have significantly increased our organic traffic. We're seeing real results that impact our bottom line.",
                author: "Michael Chen",
                company: "Growth Partners LLC",
                image: "/placeholder.svg?height=100&width=100",
              },
              {
                quote:
                  "Their content workshops equipped our team with the skills to create engaging, effective content. A worthwhile investment!",
                author: "Emily Rodriguez",
                company: "Creative Solutions",
                image: "/placeholder.svg?height=100&width=100",
              },
            ].map((testimonial, index) => (
              <ScrollAnimation
                key={testimonial.author}
                animation="fade-in"
                delay={index * 100}
                className="bg-card p-6 rounded-lg shadow-sm hover-lift"
              >
                <div className="flex flex-col h-full">
                  <div className="mb-4 text-primary">
                    {Array(5)
                      .fill(0)
                      .map((_, i) => (
                        <svg key={i} className="w-5 h-5 inline-block" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.462a1 1 0 00.95-.69l1.07-3.292z" />
                        </svg>
                      ))}
                  </div>
                  <blockquote className="flex-grow mb-4 italic text-muted-foreground">"{testimonial.quote}"</blockquote>
                  <div className="flex items-center mt-auto">
                    <Image
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.author}
                      width={40}
                      height={40}
                      className="rounded-full mr-3"
                    />
                    <div>
                      <p className="font-semibold">{testimonial.author}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                    </div>
                  </div>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="container px-4 md:px-6">
          <ScrollAnimation animation="scale-in" className="text-center max-w-[800px] mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4">Ready to Get Started?</h2>
            <p className="text-xl mb-8">Contact us today to discuss how we can help you achieve your goals.</p>
            <Button asChild size="lg" className="bg-background text-foreground hover:bg-background/90">
              <Link href="/contact">
                Contact Us
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </ScrollAnimation>
        </div>
      </section>
    </>
  )
}

