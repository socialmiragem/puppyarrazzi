import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ShieldIcon, AwardIcon, UsersIcon, ClockIcon, StarIcon, HeartIcon } from "./simple-icons"

const trustSignals = [
  {
    icon: ShieldIcon,
    title: "Fully Insured & Bonded",
    description: "Your pet is protected with comprehensive insurance coverage",
  },
  {
    icon: AwardIcon,
    title: "Certified Professional Groomers",
    description: "15+ years experience with breed-specific expertise",
  },
  {
    icon: UsersIcon,
    title: "2000+ Happy Customers",
    description: "Trusted by Wellington families since 2009",
  },
  {
    icon: ClockIcon,
    title: "Same-Day Service Available",
    description: "Emergency grooming when you need it most",
  },
  {
    icon: StarIcon,
    title: "5-Star Rating",
    description: "Consistently rated excellent by local pet owners",
  },
  {
    icon: HeartIcon,
    title: "100% Gentle Care Promise",
    description: "We treat every dog like our own family member",
  },
]

export function TrustSignals() {
  return (
    <section className="py-16 bg-[#fafafa]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-2 bg-[#FFB74D]/10 text-[#FFB74D] rounded-full text-sm font-semibold tracking-widest mb-4">
            WHY CHOOSE US
          </span>
          <h2 className="text-3xl font-bold text-[#1a1a1a] mb-4">Why Wellington Families <span className="text-[#FFB74D] text-foreground">Trust Us</span></h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Your peace of mind is our priority. Here's what sets us apart from other groomers.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {trustSignals.map((signal, index) => (
              <Card key={index} className="text-center hover:shadow-md transition-shadow">
                <CardContent className="pt-6">
                  <signal.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="font-bold text-lg mb-2">{signal.title}</h3>
                  <p className="text-sm text-muted-foreground">{signal.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <div className="flex flex-wrap justify-center gap-3 mb-6">
              <Badge variant="secondary" className="bg-[#1a1a1a] text-white px-4 py-2">
                Licensed & Insured
              </Badge>
              <Badge variant="secondary" className="bg-[#FFB74D] text-black px-4 py-2">
                Organic Products Only
              </Badge>
              <Badge variant="secondary" className="bg-[#1a1a1a] text-white px-4 py-2">
                No-Stress Environment
              </Badge>
              <Badge variant="secondary" className="bg-[#FFB74D] text-black px-4 py-2">
                100% Satisfaction Guarantee
              </Badge>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
