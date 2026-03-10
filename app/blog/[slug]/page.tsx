import { notFound } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Link from "next/link"
import type { Metadata } from "next"
import { BreadcrumbSchema } from "@/components/breadcrumbs-schema"
import { blogPosts } from "@/lib/blog-data"

export function generateStaticParams() {
  return Object.keys(blogPosts).map((slug) => ({
    slug,
  }))
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = blogPosts[params.slug]

  if (!post) {
    return {
      title: "Post Not Found",
    }
  }

  return {
    title: `${post.title} | Puppyarazzi Dog Grooming Blog`,
    description: post.excerpt,
    keywords: post.keywords || `${post.category}, dog grooming Wellington FL, pet care Palm Beach County, ${post.title}`,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
      images: [post.image],
    },
  }
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogPosts[params.slug]

  if (!post) {
    notFound()
  }

  const relatedPostsData = post.relatedPosts
    ?.map((slug: string) => {
      const relatedPost = blogPosts[slug]
      return relatedPost ? { slug, ...relatedPost } : null
    })
    .filter((p: any) => p !== null)
    .slice(0, 3)

  return (
    <main className="min-h-screen bg-background">
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://puppyarazzi.com" },
          { name: "Blog", url: "https://puppyarazzi.com/blog" },
          { name: post.title, url: `https://puppyarazzi.com/blog/${params.slug}` },
        ]}
      />

      {/* Hero Image */}
      <div className="w-full h-[300px] md:h-[400px] relative overflow-hidden">
        <img src={post.image || "/placeholder.svg"} alt={post.title} className="w-full h-full object-cover" style={{ objectPosition: post.imagePosition || "center top" }} />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
      </div>

      {/* Article Content */}
      <article className="container mx-auto px-4 max-w-4xl -mt-32 relative z-10">
        <Card className="p-8 md:p-12 shadow-xl">
          {/* Category Badge */}
          <div className="inline-block px-4 py-2 bg-primary/10 text-primary text-sm font-semibold rounded-full mb-6">
            {post.category}
          </div>

          {/* Title */}
          <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-6 leading-tight text-balance">
            {post.title}
          </h1>

          {/* Meta Information */}
          <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-8 pb-8 border-b">
            <div className="flex items-center">
              <span className="font-semibold text-foreground">{post.author}</span>
            </div>
            <span>|</span>
            <time dateTime={post.date}>{post.date}</time>
            <span>|</span>
            <span>{post.readTime}</span>
          </div>

          {/* Article Body */}
          <div
            className="prose prose-lg max-w-none prose-headings:text-foreground prose-headings:font-bold prose-h2:text-2xl prose-h2:mt-8 prose-h2:mb-4 prose-h3:text-xl prose-h3:mt-6 prose-h3:mb-3 prose-p:text-muted-foreground prose-p:leading-relaxed prose-p:mb-6 prose-ul:my-6 prose-ol:my-6 prose-li:text-muted-foreground prose-strong:text-foreground"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Call to Action */}
          <div className="mt-12 p-8 bg-primary/5 rounded-2xl text-center">
            <h3 className="text-2xl font-bold text-foreground mb-4">Need Professional Grooming in Wellington?</h3>
            <p className="text-muted-foreground mb-6">
              Our expert groomers at Puppyarazzi are ready to pamper your furry friend! Serving Wellington, Royal Palm Beach, West Palm Beach, Loxahatchee, and all of Palm Beach County.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <a href="tel:5614295589">Call (561) 429-5589</a>
              </Button>
              <Button size="lg" variant="outline" asChild className="bg-transparent">
                <Link href="/services">View Services</Link>
              </Button>
            </div>
          </div>
        </Card>

        {/* Related Posts */}
        {relatedPostsData && relatedPostsData.length > 0 && (
          <section className="mt-16 mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-8">Related Articles</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {relatedPostsData.map((relatedPost: any) => (
                <Card key={relatedPost.slug} className="overflow-hidden hover:shadow-xl transition-shadow">
                  <Link href={`/blog/${relatedPost.slug}`}>
                    <div className="aspect-video overflow-hidden">
                      <img
                        src={relatedPost.image || "/placeholder.svg"}
                        alt={relatedPost.title}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                        style={{ objectPosition: relatedPost.imagePosition || "center top" }}
                      />
                    </div>
                    <div className="p-6">
                      <div className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full mb-3">
                        {relatedPost.category}
                      </div>
                      <h3 className="text-lg font-bold text-foreground mb-2 line-clamp-2">{relatedPost.title}</h3>
                      <p className="text-sm text-muted-foreground">{relatedPost.readTime}</p>
                    </div>
                  </Link>
                </Card>
              ))}
            </div>
          </section>
        )}

        {/* Back to Blog */}
        <div className="text-center mb-16">
          <Button variant="outline" size="lg" asChild className="bg-transparent">
            <Link href="/blog">Back to All Articles</Link>
          </Button>
        </div>
      </article>
    </main>
  )
}
