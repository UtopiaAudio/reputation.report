"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Card } from "@/components/ui/card"
import { Send, Lock } from "lucide-react"

export function ConsultationForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    urls: "",
    details: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    alert("Thank you! We will contact you within 24 hours.")
  }

  return (
    <section id="consultation-form" className="py-20 md:py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-t from-primary/5 via-transparent to-transparent" />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-3xl animate-pulse"
        style={{ animationDuration: "4s" }}
      />

      <div className="relative container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12 space-y-4 slide-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-4 shimmer">
              <Lock className="w-4 h-4" />
              Confidential & Secure
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-balance">Book Your Free Consultation</h2>
            <p className="text-lg text-muted-foreground text-balance">
              Share the links you'd like removed and we'll analyze your situation. All information is kept strictly
              confidential.
            </p>
          </div>

          <Card className="p-8 md:p-10 bg-card border-border glow-border transition-all duration-500 hover:glow-border-strong slide-up">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-foreground">
                    Full Name *
                  </Label>
                  <Input
                    id="name"
                    required
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="bg-secondary border-border text-foreground transition-all duration-300 focus:border-primary/50 focus:shadow-[0_0_15px_rgba(96,165,250,0.2)]"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-foreground">
                    Email Address *
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    required
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="bg-secondary border-border text-foreground transition-all duration-300 focus:border-primary/50 focus:shadow-[0_0_15px_rgba(96,165,250,0.2)]"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone" className="text-foreground">
                  Phone Number (Optional)
                </Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="+1 (555) 000-0000"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="bg-secondary border-border text-foreground transition-all duration-300 focus:border-primary/50 focus:shadow-[0_0_15px_rgba(96,165,250,0.2)]"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="urls" className="text-foreground">
                  URLs to Remove *
                </Label>
                <Textarea
                  id="urls"
                  required
                  placeholder="Include all URLs of content, reviews, images, or articles you'd like removed (one per line)"
                  rows={5}
                  value={formData.urls}
                  onChange={(e) => setFormData({ ...formData, urls: e.target.value })}
                  className="bg-secondary border-border text-foreground resize-none transition-all duration-300 focus:border-primary/50 focus:shadow-[0_0_15px_rgba(96,165,250,0.2)]"
                />
                <p className="text-sm text-muted-foreground">
                  Include all URLs of content, reviews, images, or articles you'd like removed
                </p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="details" className="text-foreground">
                  Additional Details (Optional)
                </Label>
                <Textarea
                  id="details"
                  placeholder="Tell us more about your situation..."
                  rows={4}
                  value={formData.details}
                  onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                  className="bg-secondary border-border text-foreground resize-none transition-all duration-300 focus:border-primary/50 focus:shadow-[0_0_15px_rgba(96,165,250,0.2)]"
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full text-lg py-6 glow-border-strong bg-primary hover:bg-primary/90 text-primary-foreground transition-all duration-300"
              >
                <Send className="w-5 h-5 mr-2" />
                Submit Request
              </Button>

              <p className="text-sm text-muted-foreground text-center">
                By submitting this form, you agree to our privacy policy. We'll respond within 24 hours.
              </p>
            </form>
          </Card>
        </div>
      </div>
    </section>
  )
}
