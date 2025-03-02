import Link from "next/link"
import Image from "next/image"
import { Calendar, Clock } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import type { Post } from "@/lib/posts"

interface PostCardProps {
  post: Post
}

export default function PostCard({ post }: PostCardProps) {
  return (
    <Card className="overflow-hidden hover-lift h-full flex flex-col">
      <div className="relative h-48 w-full">
        <Link href={`/blog/${post.slug}`}>
          <Image
            src={post.coverImage || "/placeholder.svg"}
            alt={post.title}
            fill
            className="object-cover transition-transform hover:scale-105 duration-300"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </Link>
        <div className="absolute top-2 right-2">
          <Badge variant="secondary" className="font-medium">
            {post.category}
          </Badge>
        </div>
      </div>
      <CardHeader className="p-4 pb-0">
        <Link href={`/blog/${post.slug}`} className="hover:underline">
          <h3 className="text-xl font-bold line-clamp-2">{post.title}</h3>
        </Link>
      </CardHeader>
      <CardContent className="p-4 flex-grow">
        <p className="text-muted-foreground line-clamp-3 mb-4">{post.excerpt}</p>
      </CardContent>
      <CardFooter className="p-4 pt-0 flex items-center justify-between text-sm text-muted-foreground">
        <div className="flex items-center">
          <Image
            src={post.author.avatar || "/placeholder.svg"}
            alt={post.author.name}
            width={24}
            height={24}
            className="rounded-full mr-2"
          />
          <span>{post.author.name}</span>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center">
            <Calendar className="h-4 w-4 mr-1" />
            <time dateTime={post.date}>
              {new Date(post.date).toLocaleDateString("en-US", {
                month: "short",
                day: "numeric",
                year: "numeric",
              })}
            </time>
          </div>
          <div className="flex items-center">
            <Clock className="h-4 w-4 mr-1" />
            <span>{post.readingTime}</span>
          </div>
        </div>
      </CardFooter>
    </Card>
  )
}

