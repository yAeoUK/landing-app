"use client"

import { landingConfig } from "@/config/landing-config"
import { Button } from "@/components/ui/button"
import { useLocalization } from "@/contexts/localization-context"
import { scrollToSection } from "@/utils/scroll-utils"

export function Header() {
  const { language, setLanguage, isRTL } = useLocalization()
  const nav = landingConfig.navigation[language]
  const sectionTitles = landingConfig.sectionTitles[language]

  const handleNavClick = (sectionId: string) => {
    scrollToSection(sectionId)
  }

  const handleDownloadClick = () => {
    // Detect if mobile device
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)

    if (isMobile) {
      // Try to open app store app first, fallback to web
      const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent)
      const storeUrl = isIOS ? landingConfig.appStore.ios : landingConfig.appStore.android
      window.open(storeUrl, "_blank")
    } else {
      // On desktop, open in new tab
      window.open(landingConfig.appStore.ios, "_blank")
    }
  }

  return (
    <header className="border-b border-gray-100 bg-white/95 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center justify-between">
          <div className={`flex items-center gap-2`}>
            <div
              className="h-8 w-8 rounded-lg flex items-center justify-center text-white font-bold"
              style={{ backgroundColor: landingConfig.primaryColor }}
            >
              F
            </div>
            <span className="text-xl font-bold text-gray-900">{landingConfig.appName}</span>
          </div>

          <div className={`hidden md:flex items-center ${isRTL ? "gap-8" : "space-x-8"}`}>
            <button
              onClick={() => handleNavClick("features")}
              className="text-gray-600 hover:text-gray-900 transition-colors cursor-pointer"
            >
              {nav.features}
            </button>
            <button
              onClick={() => handleNavClick("testimonials")}
              className="text-gray-600 hover:text-gray-900 transition-colors cursor-pointer"
            >
              {nav.reviews}
            </button>
            <button
              onClick={() => handleNavClick("pricing")}
              className="text-gray-600 hover:text-gray-900 transition-colors cursor-pointer"
            >
              {nav.pricing}
            </button>
            <button
              onClick={() => handleNavClick("team")}
              className="text-gray-600 hover:text-gray-900 transition-colors cursor-pointer"
            >
              {nav.team}
            </button>
          </div>

          <div className={`flex items-center ${isRTL ? "gap-4" : "space-x-4"}`}>
            <button
              onClick={() => setLanguage(language === "en" ? "ar" : "en")}
              className="px-3 py-1 text-sm font-semibold text-gray-600 hover:text-gray-900 transition-colors border border-gray-300 rounded-md"
              title={language === "en" ? "العربية" : "English"}
            >
              {language === "en" ? "Ar" : "En"}
            </button>
            <Button
              onClick={handleDownloadClick}
              className="text-white"
              style={{ backgroundColor: landingConfig.primaryColor }}
            >
              {nav.download}
            </Button>
          </div>
        </nav>
      </div>
    </header>
  )
}
