"use client"

import { landingConfig } from "@/config/landing-config"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Check } from "lucide-react"
import { useLocalization } from "@/contexts/localization-context"

export function Pricing() {
  const { language, isRTL } = useLocalization()
  const pricing = landingConfig.pricing[language]
  const sectionTitles = landingConfig.sectionTitles[language]

  return (
    <section id="pricing" className="py-20">
      <div className="container mx-auto px-4">
        <div className={`text-center space-y-4 mb-16 ${isRTL ? "text-right" : ""}`}>
          <h2 className="text-4xl font-bold text-gray-900">{sectionTitles.pricing}</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">{sectionTitles.pricingSubtitle}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {pricing.map((plan, index) => (
            <Card
              key={index}
              className={`relative ${plan.popular ? "ring-2 ring-offset-4" : ""} border-0 shadow-sm hover:shadow-lg transition-shadow`}
              style={plan.popular ? { ringColor: landingConfig.primaryColor } : {}}
            >
              {plan.popular && (
                <div
                  className="absolute -top-3 left-1/2 transform -translate-x-1/2 px-4 py-1 rounded-full text-white text-sm font-semibold"
                  style={{ backgroundColor: landingConfig.primaryColor }}
                >
                  {sectionTitles.mostPopular}
                </div>
              )}
              <CardContent className={`p-8 ${isRTL ? "text-right" : ""}`}>
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <div className="text-4xl font-bold text-gray-900 mb-2">{plan.price}</div>
                  <div className="text-gray-600">{plan.period}</div>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className={`flex items-start ${isRTL ? "flex-row-reverse text-right" : ""}`}>
                      <Check
                        className={`h-5 w-5 mt-0.5 flex-shrink-0 ${isRTL ? "ml-3" : "mr-3"}`}
                        style={{ color: landingConfig.primaryColor }}
                      />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  className={`w-full ${plan.popular ? "text-white" : ""}`}
                  variant={plan.popular ? "default" : "outline"}
                  style={plan.popular ? { backgroundColor: landingConfig.primaryColor } : {}}
                >
                  {plan.name === (language === "en" ? "Free" : "مجاني")
                    ? sectionTitles.getStarted
                    : sectionTitles.startFreeTrial}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
