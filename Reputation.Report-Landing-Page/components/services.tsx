import { Card } from "@/components/ui/card"
import {
  User,
  Building2,
  Briefcase,
  Search,
  ImageIcon,
  Video,
  FileText,
  MessageSquare,
  Star,
  Shield,
} from "lucide-react"

const services = [
  {
    category: "For Individuals",
    icon: User,
    description: "Take back control of your online identity",
    items: [
      {
        icon: Search,
        title: "Remove Google Search Results",
        description: "Eliminate harmful or outdated content from search results",
      },
      {
        icon: Shield,
        title: "Remove Personal Information",
        description: "Delete sensitive personal data and protect your privacy",
      },
      {
        icon: ImageIcon,
        title: "Remove Mugshots",
        description: "Clear old or misleading mugshot images from public databases",
      },
      {
        icon: FileText,
        title: "Remove Criminal Records",
        description: "Suppress or remove outdated records affecting your reputation",
      },
      {
        icon: MessageSquare,
        title: "Defamation & Slander",
        description: "Identify and remove false or damaging statements published online",
      },
    ],
  },
  {
    category: "For Businesses",
    icon: Building2,
    description: "Build trust and protect your brand's credibility",
    items: [
      {
        icon: Star,
        title: "Review Removal Service",
        description: "Delete fake, malicious, or unfair customer reviews",
      },
      { icon: Search, title: "Google Review Removal", description: "Clean up your Google Business reputation" },
      {
        icon: Briefcase,
        title: "Glassdoor Review Removal",
        description: "Remove false or defamatory employee reviews",
      },
      {
        icon: FileText,
        title: "Indeed Review Removal",
        description: "Protect your employer brand from harmful reviews",
      },
    ],
  },
  {
    category: "For Executives & Brands",
    icon: Briefcase,
    description: "Safeguard your leadership image and public perception",
    items: [
      {
        icon: FileText,
        title: "Remove Negative Content",
        description: "Erase harmful articles, blog posts, or mentions",
      },
      { icon: ImageIcon, title: "Remove Unwanted Images", description: "Eliminate unflattering or misleading photos" },
      { icon: Video, title: "Remove Harmful Videos", description: "Take down damaging video content from platforms" },
      {
        icon: MessageSquare,
        title: "Remove Negative Articles",
        description: "Suppress or remove defamatory or false media stories",
      },
      {
        icon: Shield,
        title: "Positive Reputation Management",
        description: "Boost your image with strategic, high-ranking positive content",
      },
    ],
  },
]

export function Services() {
  return (
    <section className="py-20 md:py-32 border-t border-border relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />

      <div className="relative container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-5xl font-bold text-balance">How We Help</h2>
          <p className="text-lg md:text-xl text-muted-foreground text-balance max-w-3xl mx-auto">
            We specialize in affordable online reputation management, combining expert strategies and AI-powered tools
            to restore and protect your digital image.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {services.map((service, idx) => {
            const CategoryIcon = service.icon
            return (
              <Card
                key={idx}
                className="p-8 bg-card border-border hover:border-primary/50 transition-all duration-300 glow-border"
              >
                <div className="space-y-6">
                  {/* Category header */}
                  <div className="space-y-3">
                    <div className="inline-flex p-3 rounded-xl bg-primary/10 border border-primary/20">
                      <CategoryIcon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground">{service.category}</h3>
                    <p className="text-muted-foreground">{service.description}</p>
                  </div>

                  {/* Service items */}
                  <div className="space-y-4 pt-4 border-t border-border">
                    {service.items.map((item, itemIdx) => {
                      const ItemIcon = item.icon
                      return (
                        <div key={itemIdx} className="flex gap-3">
                          <div className="flex-shrink-0 mt-1">
                            <ItemIcon className="w-5 h-5 text-accent" />
                          </div>
                          <div className="space-y-1">
                            <h4 className="font-semibold text-foreground">{item.title}</h4>
                            <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </div>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
