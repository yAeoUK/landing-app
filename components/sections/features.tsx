"use client"

import { landingConfig } from "@/config/landing-config"
import { Card, CardContent } from "@/components/ui/card"
import { useLocalization } from "@/contexts/localization-context"
import * as Icons from "lucide-react"

export function Features() {
  const { language, isRTL } = useLocalization()
  const features = landingConfig.features[language]
  const sectionTitles = landingConfig.sectionTitles[language]

  return (
    <section id="features" className="py-20">
      <div className="container mx-auto px-4">
        <div className={`text-center space-y-4 mb-16`}>
          <h2 className="text-4xl font-bold text-gray-900">{sectionTitles.features}</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">{sectionTitles.featuresSubtitle}</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = Icons[feature.icon as keyof typeof Icons] as any

            return (
              <Card key={index} className="border-0 shadow-sm hover:shadow-lg transition-shadow">
                <CardContent className={`p-8 ${isRTL ? "text-right" : ""}`}>
                  <div
                    className={`h-12 w-12 rounded-lg flex items-center justify-center mb-6 ${isRTL ? "ml-auto" : "mr-auto"}`}
                    style={{ backgroundColor: `${landingConfig.primaryColor}20` }}
                  >
                    <IconComponent className="h-6 w-6" style={{ color: landingConfig.primaryColor }} />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3" >{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
