"use client"

import { landingConfig } from "@/config/landing-config"
import { Button } from "@/components/ui/button"
import { Download, Mail, Phone, MapPin } from "lucide-react"
import { useLocalization } from "@/contexts/localization-context"
import { scrollToSection } from "@/utils/scroll-utils"

export function Footer() {
  const { language, isRTL } = useLocalization()
  const sectionTitles = landingConfig.sectionTitles[language]
  const nav = landingConfig.navigation[language]

  const handleStoreClick = (store: "ios" | "android") => {
    const storeUrl = landingConfig.appStore[store]
    window.open(storeUrl, "_blank")
  }

  const handleContactClick = (type: "email" | "phone" | "address") => {
    switch (type) {
      case "email":
        window.location.href = `mailto:${landingConfig.contact.email}`
        break
      case "phone":
        window.location.href = `tel:${landingConfig.contact.phone}`
        break
      case "address":
        const encodedAddress = encodeURIComponent(landingConfig.contact.address)
        window.open(`https://maps.google.com/?q=${encodedAddress}`, "_blank")
        break
    }
  }

  const handleNavClick = (sectionId: string) => {
    scrollToSection(sectionId)
  }

  return (
    <footer className="bg-gray-900 text-white py-20">
      <div className="container mx-auto px-4">
        <div className={`grid lg:grid-cols-4 gap-12 mb-12 ${isRTL ? "text-right" : ""}`}>
          {/* Company Info */}
          <div className="lg:col-span-2 space-y-6">
            <div
              className={`flex items-center gap-2`}
            >
              <div
                className="h-10 w-10 rounded-lg flex items-center justify-center text-white font-bold"
                style={{ backgroundColor: landingConfig.primaryColor }}
              >
                F
              </div>
              <span className="text-2xl font-bold">{landingConfig.appName}</span>
            </div>
            <p className="text-gray-300 text-lg leading-relaxed max-w-md">{landingConfig.description[language]}</p>
            <div className={`flex flex-col sm:flex-row gap-4`}>
              <Button
                onClick={() => handleStoreClick("ios")}
                className="text-white"
                style={{ backgroundColor: landingConfig.primaryColor }}
              >
                <Download className={`h-4 w-4 ${isRTL ? "ml-2" : "mr-2"}`} />
                {sectionTitles.downloadIOS}
              </Button>
              <Button
                variant="outline"
                onClick={() => handleStoreClick("android")}
                className="border-gray-600 text-white hover:bg-gray-800 bg-transparent"
              >
                <Download className={`h-4 w-4 ${isRTL ? "ml-2" : "mr-2"}`} />
                {sectionTitles.downloadAndroid}
              </Button>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold">{sectionTitles.contact}</h3>
            <div className="space-y-4">
              <button
                onClick={() => handleContactClick("email")}
                className={`flex items-center text-gray-300 hover:text-white transition-colors cursor-pointer gap-3`}
              >
                <Mail className="h-5 w-5 text-gray-400" />
                <span>{landingConfig.contact.email}</span>
              </button>
              <button
                onClick={() => handleContactClick("phone")}
                className={`flex items-center text-gray-300 hover:text-white transition-colors cursor-pointer gap-3`}
              >
                <Phone className="h-5 w-5 text-gray-400" />
                <span>{landingConfig.contact.phone}</span>
              </button>
              <button
                onClick={() => handleContactClick("address")}
                className={`flex items-start text-gray-300 hover:text-white transition-colors cursor-pointer gap-3`}
              >
                <MapPin className="h-5 w-5 text-gray-400 mt-1" />
                <span>{landingConfig.contact.address}</span>
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold">{sectionTitles.quickLinks}</h3>
            <div className="space-y-3">
              <button
                onClick={() => handleNavClick("features")}
                className="block text-gray-300 hover:text-white transition-colors cursor-pointer"
              >
                {nav.features}
              </button>
              <button
                onClick={() => handleNavClick("testimonials")}
                className="block text-gray-300 hover:text-white transition-colors cursor-pointer"
              >
                {nav.reviews}
              </button>
              <button
                onClick={() => handleNavClick("pricing")}
                className="block text-gray-300 hover:text-white transition-colors cursor-pointer"
              >
                {nav.pricing}
              </button>
              <button
                onClick={() => handleNavClick("team")}
                className="block text-gray-300 hover:text-white transition-colors cursor-pointer"
              >
                {nav.team}
              </button>
              <a href="#" className="block text-gray-300 hover:text-white transition-colors">
                {sectionTitles.privacyPolicy}
              </a>
              <a href="#" className="block text-gray-300 hover:text-white transition-colors">
                {sectionTitles.termsOfService}
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="text-center text-gray-400">
            <p>
              &copy; 2024 {landingConfig.appName}. {sectionTitles.allRightsReserved}.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
