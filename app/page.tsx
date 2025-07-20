import type { Metadata } from "next"
import { Hero } from "@/components/sections/hero"
import { Features } from "@/components/sections/features"
import { Testimonials } from "@/components/sections/testimonials"
import { Pricing } from "@/components/sections/pricing"
import { FAQ } from "@/components/sections/faq"
import { Team } from "@/components/sections/team"
import { Footer } from "@/components/sections/footer"
import { Header } from "@/components/sections/header"
import { LocalizationProvider } from "@/contexts/localization-context"
import { landingConfig } from "@/config/landing-config"

export const metadata: Metadata = {
  title: landingConfig.appName,
  description: landingConfig.description.en,
}

export default function LandingPage() {
  return (
    <LocalizationProvider>
      <div className="min-h-screen bg-white">
        <Header />
        <Hero />
        <Features />
        <Testimonials />
        <Pricing />
        <FAQ />
        <Team />
        <Footer />
      </div>
    </LocalizationProvider>
  )
}
