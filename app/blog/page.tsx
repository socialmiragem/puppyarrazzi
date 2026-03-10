import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { CalendarIcon, ClockIcon, UserIcon, ArrowRightIcon } from "@/components/simple-icons"
import { PageHero } from "@/components/page-hero"
import { CTABanner } from "@/components/cta-banner"
import { ScrollReveal } from "@/components/scroll-reveal"
import type { Metadata } from "next"
import { blogPosts, getAllCategories } from "@/lib/blog-data"

export const metadata: Metadata = {
  title: "Dog Grooming Tips & Pet Care Blog | Wellington FL | Puppyarazzi",
  description:
    "Expert dog grooming tips, breed care guides, and pet health advice from certified professional groomers in Wellington, FL. Serving Royal Palm Beach, West Palm Beach, Loxahatchee & Palm Beach County.",
  keywords:
    "dog grooming tips Wellington FL, pet care blog, dog health, grooming advice Palm Beach County, breed care guides, professional grooming tips, Royal Palm Beach, West Palm Beach",
  openGraph: {
    title: "Dog Grooming Tips & Pet Care Blog | Puppyarazzi Wellington FL",
    description: "Expert advice and tips from professional dog groomers serving Wellington and Palm Beach County.",
    type: "website",
  },
}

export default function BlogPage() {
  const allPosts = Object.values(blogPosts)
  const sortedPosts = allPosts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
  const featuredPost = sortedPosts[0]
  const remainingPosts = sortedPosts.slice(1)
  const categories = ["All Posts", ...getAllCategories()]

  return (
    <main className="min-h-screen overflow-x-hidden">
      <PageHero
        label="Blog"
        title="Expert Dog Care Tips"
        description="Professional advice, breed-specific guides, and insider tips from certified dog groomers in Wellington, FL."
      />

      {/* Categories */}
      <section className="py-6 bg-background border-b border-border">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category, index) => (
              <Button
                key={index}
                variant={index === 0 ? "default" : "outline"}
                size="sm"
                className={`rounded-full ${
                  index === 0
                    ? ""
                    : "hover:bg-muted/50 hover:text-muted-foreground bg-transparent"
                }`}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && (
        <section className="py-16 md:py-20 bg-background">
          <div className="container mx-auto px-4 max-w-5xl">
            <ScrollReveal direction="up" duration={600}>
              <Card className="overflow-hidden hover:shadow-xl transition-shadow">
                <div className="grid md:grid-cols-2">
                  <div className="aspect-[4/3] md:aspect-auto overflow-hidden">
                    <Link href={`/blog/${featuredPost.slug}`}>
                      <img
                        src={featuredPost.image || "/placeholder.svg"}
                        alt={featuredPost.title}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300 cursor-pointer"
                        style={{ objectPosition: featuredPost.imagePosition || "center top" }}
                      />
                    </Link>
                  </div>
                  <CardContent className="p-6 md:p-8 flex flex-col justify-center">
                    <span className="inline-block px-3 py-1 bg-accent/15 text-accent text-sm font-semibold rounded-full mb-4 w-fit">
                      {featuredPost.category}
                    </span>
                    <Link href={`/blog/${featuredPost.slug}`}>
                      <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3 leading-tight hover:text-accent transition-colors cursor-pointer">
                        {featuredPost.title}
                      </h2>
                    </Link>
                    <p className="text-muted-foreground mb-5 leading-relaxed">{featuredPost.excerpt}</p>
                    <div className="flex items-center text-sm text-muted-foreground mb-5 flex-wrap gap-3">
                      <div className="flex items-center">
                        <UserIcon className="h-3.5 w-3.5 mr-1" />
                        {featuredPost.author}
                      </div>
                      <div className="flex items-center">
                        <CalendarIcon className="h-3.5 w-3.5 mr-1" />
                        {featuredPost.date}
                      </div>
                      <div className="flex items-center">
                        <ClockIcon className="h-3.5 w-3.5 mr-1" />
                        {featuredPost.readTime}
                      </div>
                    </div>
                    <Link href={`/blog/${featuredPost.slug}`}>
                      <Button className="rounded-full w-fit">
                        Read Full Article
                        <ArrowRightIcon className="h-4 w-4 ml-2" />
                      </Button>
                    </Link>
                  </CardContent>
                </div>
              </Card>
            </ScrollReveal>
          </div>
        </section>
      )}

      {/* Blog Posts Grid */}
      <section className="py-16 md:py-20 bg-muted/15">
        <div className="container mx-auto px-4 max-w-7xl">
          <ScrollReveal direction="up" duration={600}>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-3">Latest Articles</h2>
              <p className="text-muted-foreground max-w-xl mx-auto">
                Stay updated with the latest tips and insights from our professional grooming team.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {remainingPosts.map((post, index) => (
              <ScrollReveal key={post.slug} direction="up" duration={600} delay={index * 80}>
                <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 h-full flex flex-col">
                  <div className="aspect-[4/3] overflow-hidden">
                    <Link href={`/blog/${post.slug}`}>
                      <img
                        src={post.image || "/placeholder.svg"}
                        alt={post.title}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300 cursor-pointer"
                        style={{ objectPosition: post.imagePosition || "center top" }}
                      />
                    </Link>
                  </div>
                  <CardContent className="p-5 flex-1 flex flex-col">
                    <span className="inline-block px-3 py-1 bg-accent/15 text-accent text-xs font-semibold rounded-full mb-3 w-fit">
                      {post.category}
                    </span>
                    <Link href={`/blog/${post.slug}`}>
                      <h3 className="text-lg font-bold text-foreground mb-2 leading-tight hover:text-accent transition-colors cursor-pointer">
                        {post.title}
                      </h3>
                    </Link>
                    <p className="text-muted-foreground text-sm mb-4 leading-relaxed line-clamp-3 flex-1">{post.excerpt}</p>
                    <div className="flex items-center text-xs text-muted-foreground mb-4 gap-3">
                      <div className="flex items-center">
                        <CalendarIcon className="h-3 w-3 mr-1" />
                        {post.date}
                      </div>
                      <div className="flex items-center">
                        <ClockIcon className="h-3 w-3 mr-1" />
                        {post.readTime}
                      </div>
                    </div>
                    <Link href={`/blog/${post.slug}`} className="block mt-auto">
                      <Button variant="outline" size="sm" className="w-full rounded-full bg-transparent">
                        Read More
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        title="Questions About Your Dog's Care?"
        description="Our expert groomers are happy to help. Call for personalized advice for your pup."
        variant="accent"
      />
    </main>
  )
}
