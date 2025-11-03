"use client"

import { Card } from "@/components/ui/card"
import { DollarSign, Zap, Lock, TrendingUp } from "lucide-react"

const benefits = [
  {
    icon: DollarSign,
    title: "Transparent Pricing",
    description: "No outrageous agency fees. Everyone deserves a clean, honest online presence at an affordable price.",
  },
  {
    icon: Zap,
    title: "Fast Results",
    description:
      "We act quickly to remove harmful content and restore your reputation. Most cases resolved within weeks.",
  },
  {
    icon: Lock,
    title: "Total Confidentiality",
    description: "Your privacy is our priority. All consultations and services are handled with complete discretion.",
  },
  {
    icon: TrendingUp,
    title: "Ongoing Protection",
    description:
      "One-time cleanup or continuous monitoring—we provide the tools and support to keep you looking your best online.",
  },
]

export function WhyChooseUs() {
  return (
    <section className="py-16 md:py-24 border-t border-border relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />

      <div className="relative container mx-auto px-4">
        <div className="text-center mb-12 space-y-3">
          <h2 className="text-2xl md:text-4xl font-bold text-balance">
            Why Choose <span className="text-primary">Reputation.report</span>
          </h2>
          <p className="text-base md:text-lg text-muted-foreground text-balance max-w-2xl mx-auto">
            We believe everyone deserves a clean, honest online presence—without paying outrageous agency fees.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {benefits.map((benefit, idx) => {
            const Icon = benefit.icon
            return (
              <Card
                key={idx}
                className="p-6 bg-card border-border hover:border-primary/50 transition-all duration-300 text-center glow-border"
              >
                <div className="space-y-4">
                  <div className="inline-flex p-4 rounded-xl bg-primary/10 border border-primary/20 glow-accent">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground leading-normal">{benefit.description}</p>
                </div>
              </Card>
            )
          })}
        </div>

        <div className="text-center mt-12 space-y-4">
          <div className="inline-block p-6 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20 glow-border-strong">
            <h3 className="text-xl md:text-2xl font-bold mb-2 text-foreground">
              Ready to Clean Up Your Online Reputation?
            </h3>
            <p className="text-base text-muted-foreground mb-4">
              Get started with a free, confidential consultation today.
            </p>
            <button
              onClick={() => document.getElementById("consultation-form")?.scrollIntoView({ behavior: "smooth" })}
              className="px-6 py-3 bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg font-semibold text-base transition-all glow-border-strong"
            >
              Book Free Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
