export interface Post {
  title: string
  slug: string
  excerpt: string
  date: string
  author: {
    name: string
    avatar: string
  }
  category: string
  coverImage: string
  featured?: boolean
  readingTime: string
}

// This is a mock function that would be replaced with actual data fetching
// from a CMS, database, or file system in a real application
export async function getAllPosts(): Promise<Post[]> {
  // In a real app, you would fetch posts from an API or database
  return [
    {
      title: "10 Tips for Effective Time Management",
      slug: "10-tips-for-effective-time-management",
      excerpt:
        "Learn how to manage your time more effectively with these proven strategies that can boost your productivity.",
      date: "2023-05-15",
      author: {
        name: "Jane Smith",
        avatar: "/placeholder.svg?height=100&width=100",
      },
      category: "Productivity",
      coverImage: "/placeholder.svg?height=600&width=1200",
      featured: true,
      readingTime: "5 min read",
    },
    {
      title: "The Future of Web Development",
      slug: "the-future-of-web-development",
      excerpt: "Explore emerging trends and technologies that are shaping the future of web development.",
      date: "2023-06-22",
      author: {
        name: "John Doe",
        avatar: "/placeholder.svg?height=100&width=100",
      },
      category: "Technology",
      coverImage: "/placeholder.svg?height=600&width=1200",
      featured: true,
      readingTime: "8 min read",
    },
    {
      title: "Building Accessible Websites",
      slug: "building-accessible-websites",
      excerpt: "Learn how to create websites that are accessible to everyone, including people with disabilities.",
      date: "2023-07-10",
      author: {
        name: "Alex Johnson",
        avatar: "/placeholder.svg?height=100&width=100",
      },
      category: "Design",
      coverImage: "/placeholder.svg?height=600&width=1200",
      featured: true,
      readingTime: "6 min read",
    },
    {
      title: "Introduction to Machine Learning",
      slug: "introduction-to-machine-learning",
      excerpt: "A beginner-friendly guide to understanding the basics of machine learning and its applications.",
      date: "2023-08-05",
      author: {
        name: "Sarah Williams",
        avatar: "/placeholder.svg?height=100&width=100",
      },
      category: "Technology",
      coverImage: "/placeholder.svg?height=600&width=1200",
      readingTime: "10 min read",
    },
    {
      title: "Sustainable Business Practices",
      slug: "sustainable-business-practices",
      excerpt: "Discover how businesses are adopting sustainable practices to reduce their environmental impact.",
      date: "2023-09-18",
      author: {
        name: "Michael Brown",
        avatar: "/placeholder.svg?height=100&width=100",
      },
      category: "Business",
      coverImage: "/placeholder.svg?height=600&width=1200",
      readingTime: "7 min read",
    },
    {
      title: "Mindfulness for Better Mental Health",
      slug: "mindfulness-for-better-mental-health",
      excerpt: "Learn how practicing mindfulness can improve your mental health and overall well-being.",
      date: "2023-10-02",
      author: {
        name: "Emily Chen",
        avatar: "/placeholder.svg?height=100&width=100",
      },
      category: "Health",
      coverImage: "/placeholder.svg?height=600&width=1200",
      readingTime: "6 min read",
    },
  ]
}

export async function getFeaturedPosts(count = 3): Promise<Post[]> {
  const allPosts = await getAllPosts()
  return allPosts.filter((post) => post.featured).slice(0, count)
}

export async function getPostBySlug(slug: string): Promise<Post | undefined> {
  const allPosts = await getAllPosts()
  return allPosts.find((post) => post.slug === slug)
}

export async function getPostsByCategory(category: string): Promise<Post[]> {
  const allPosts = await getAllPosts()
  return allPosts.filter((post) => post.category.toLowerCase() === category.toLowerCase())
}

