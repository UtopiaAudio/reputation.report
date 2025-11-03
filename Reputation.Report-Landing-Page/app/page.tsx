import { Hero } from "@/components/hero"
import { ConsultationForm } from "@/components/consultation-form"
import { Services } from "@/components/services"
import { WhyChooseUs } from "@/components/why-choose-us"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <ConsultationForm />
      <Services />
      <WhyChooseUs />
      <Footer />
    </main>
  )
}
