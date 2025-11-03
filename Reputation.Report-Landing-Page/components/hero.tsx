"use client"

import { Shield, Lock } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Hero() {
  const scrollToForm = () => {
    document.getElementById("consultation-form")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="relative overflow-hidden border-b border-border min-h-[85vh] flex items-center">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent" />
      <div className="absolute top-20 left-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-3xl animate-pulse" />
      <div
        className="absolute bottom-20 right-1/4 w-[500px] h-[500px] bg-accent/10 rounded-full blur-3xl animate-pulse"
        style={{ animationDelay: "1s" }}
      />

      <div
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' /%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative container mx-auto px-4 py-20">
        <div className="max-w-5xl mx-auto text-center space-y-8">
          <div className="flex items-center justify-center gap-4 mb-20 fade-in">
            <div className="p-4 rounded-2xl bg-primary/10 border border-primary/20 glow-border shimmer">
              <Shield className="w-10 h-10 text-primary" />
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
              Reputation<span className="text-primary">.report</span>
            </h1>
          </div>

          <div className="space-y-5">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-balance leading-[1.1] tracking-tight fade-in-delay-1">
              Clean Up Your <span className="text-primary glow-text">Online Presence</span>
            </h2>

            <p className="text-lg md:text-xl text-muted-foreground/90 text-balance max-w-3xl mx-auto leading-relaxed fade-in-delay-2">
              Protecting What Matters Most: Your Good Name. Remove negative content, false information, and damaging
              reviews—affordably, discreetly, and effectively.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 fade-in-delay-3">
            <Button
              size="lg"
              className="text-base px-8 py-6 glow-border-strong bg-primary hover:bg-primary/90 text-primary-foreground font-semibold transition-all duration-300"
              onClick={scrollToForm}
            >
              Book Your Free Consultation
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-base px-8 py-6 border-border hover:bg-secondary bg-transparent font-semibold transition-all duration-300 hover:border-primary/50"
              onClick={scrollToForm}
            >
              Learn More
            </Button>
          </div>

          <div className="flex items-center justify-center gap-2 pt-4 fade-in-delay-3">
            <Lock className="w-4 h-4 text-muted-foreground" />
            <p className="text-sm text-muted-foreground">All information is kept strictly confidential</p>
          </div>
        </div>
      </div>
    </section>
  )
}
