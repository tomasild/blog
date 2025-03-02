import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-muted py-12 border-t">
      <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div>
          <h2 className="text-lg font-semibold mb-4">
            Modern<span className="text-primary">Blog</span>
          </h2>
          <p className="text-muted-foreground mb-4">
            Sharing insights, stories, and knowledge through our modern blog platform.
          </p>
          <div className="flex space-x-4">
            <Link href="#" aria-label="Facebook">
              <Facebook className="h-5 w-5 text-muted-foreground hover:text-primary transition-colors" />
            </Link>
            <Link href="#" aria-label="Twitter">
              <Twitter className="h-5 w-5 text-muted-foreground hover:text-primary transition-colors" />
            </Link>
            <Link href="#" aria-label="Instagram">
              <Instagram className="h-5 w-5 text-muted-foreground hover:text-primary transition-colors" />
            </Link>
            <Link href="#" aria-label="LinkedIn">
              <Linkedin className="h-5 w-5 text-muted-foreground hover:text-primary transition-colors" />
            </Link>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/" className="text-muted-foreground hover:text-primary transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="text-muted-foreground hover:text-primary transition-colors">
                About
              </Link>
            </li>
            <li>
              <Link href="/services" className="text-muted-foreground hover:text-primary transition-colors">
                Services
              </Link>
            </li>
            <li>
              <Link href="/blog" className="text-muted-foreground hover:text-primary transition-colors">
                Blog
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">Categories</h3>
          <ul className="space-y-2">
            <li>
              <Link
                href="/blog/category/technology"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Technology
              </Link>
            </li>
            <li>
              <Link href="/blog/category/design" className="text-muted-foreground hover:text-primary transition-colors">
                Design
              </Link>
            </li>
            <li>
              <Link
                href="/blog/category/business"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Business
              </Link>
            </li>
            <li>
              <Link
                href="/blog/category/lifestyle"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Lifestyle
              </Link>
            </li>
            <li>
              <Link href="/blog/category/health" className="text-muted-foreground hover:text-primary transition-colors">
                Health
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
          <ul className="space-y-3">
            <li className="flex items-start">
              <MapPin className="h-5 w-5 mr-2 text-primary shrink-0 mt-0.5" />
              <span className="text-muted-foreground">123 Blog Street, Content City, 10001</span>
            </li>
            <li className="flex items-center">
              <Phone className="h-5 w-5 mr-2 text-primary shrink-0" />
              <span className="text-muted-foreground">(123) 456-7890</span>
            </li>
            <li className="flex items-center">
              <Mail className="h-5 w-5 mr-2 text-primary shrink-0" />
              <span className="text-muted-foreground">info@modernblog.com</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="container mt-8 pt-8 border-t border-muted-foreground/20">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">&copy; {currentYear} ModernBlog. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link href="/privacy-policy" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link
              href="/terms-of-service"
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              Terms of Service
            </Link>
            <Link href="/sitemap" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

