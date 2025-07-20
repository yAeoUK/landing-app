"use client"

import { landingConfig } from "@/config/landing-config"
import { Button } from "@/components/ui/button"
import { Download, Play } from "lucide-react"
import { useLocalization } from "@/contexts/localization-context"
import Image from "next/image"

export function Hero() {
  const { language, isRTL } = useLocalization()
  const config = {
    title: landingConfig.heroTitle[language],
    subtitle: landingConfig.heroSubtitle[language],
    downloadIOS: landingConfig.sectionTitles[language].downloadIOS,
    downloadAndroid: landingConfig.sectionTitles[language].downloadAndroid,
  }

  const handleStoreClick = (store: "ios" | "android") => {
    const storeUrl = landingConfig.appStore[store]
    window.open(storeUrl, "_blank")
  }

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className={`grid lg:grid-cols-2 gap-12 items-center ${isRTL ? "" : ""}`}>
          <div className={`space-y-8 ${isRTL ? "lg:order-2 text-right" : "lg:order-1"}`}>
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">{config.title}</h1>
              <p className="text-xl text-gray-600 leading-relaxed">{config.subtitle}</p>
            </div>

            <div className={`flex flex-col sm:flex-row gap-4`}>
              <Button
                size="lg"
                onClick={() => handleStoreClick("ios")}
                className="text-white text-lg px-8 py-4 h-auto"
                style={{ backgroundColor: landingConfig.primaryColor }}
              >
                <Download className={`h-5 w-5 ${isRTL ? "ml-2" : "mr-2"}`} />
                {config.downloadIOS}
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => handleStoreClick("android")}
                className="text-lg px-8 py-4 h-auto bg-transparent"
              >
                <Play className={`h-5 w-5 ${isRTL ? "ml-2" : "mr-2"}`} />
                {config.downloadAndroid}
              </Button>
            </div>

            <div
              className={`flex items-center space-x-6 text-sm text-gray-500 `}
            >
              <div className="flex items-center">
                <span className="font-semibold text-gray-900">500K+</span>
                <span className={isRTL ? "mr-1" : "ml-1"}>{language === "en" ? "Downloads" : "تحميل"}</span>
              </div>
              <div className="flex items-center">
                <div className={`flex text-yellow-400 ${isRTL ? "ml-1" : "mr-1"}`}>{"★".repeat(5)}</div>
                <span className="font-semibold text-gray-900">4.9</span>
                <span className={isRTL ? "mr-1" : "ml-1"}>{language === "en" ? "Rating" : "تقييم"}</span>
              </div>
            </div>
          </div>

          <div className={`relative ${isRTL ? "lg:order-1" : "lg:order-2"}`}>
            <Image
              src={`/placeholder.svg?height=600&width=400&query=${encodeURIComponent(landingConfig.heroImage)}`}
              alt="App Screenshot"
              width={400}
              height={600}
              className="mx-auto rounded-3xl shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
