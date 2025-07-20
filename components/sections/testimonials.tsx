"use client"

import { landingConfig } from "@/config/landing-config"
import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"
import { useLocalization } from "@/contexts/localization-context"
import Image from "next/image"

export function Testimonials() {
  const { language, isRTL } = useLocalization()
  const testimonials = landingConfig.testimonials[language]
  const sectionTitles = landingConfig.sectionTitles[language]

  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className={`text-center space-y-4 mb-16 ${isRTL ? "text-right" : ""}`}>
          <h2 className="text-4xl font-bold text-gray-900">{sectionTitles.testimonials}</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">{sectionTitles.testimonialsSubtitle}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-0 shadow-sm">
              <CardContent className={`p-8 ${isRTL ? "text-right" : ""}`}>
                <div className={`flex items-center mb-4 ${isRTL ? "justify-end" : "justify-start"}`}>
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">"{testimonial.content}"</p>
                <div className={`flex items-center ${isRTL ? "flex-row-reverse text-right" : ""}`}>
                  <Image
                    src={`/placeholder.svg?height=48&width=48&query=${encodeURIComponent(testimonial.avatar)}`}
                    alt={testimonial.name}
                    width={48}
                    height={48}
                    className={`rounded-full ${isRTL ? "ml-4" : "mr-4"}`}
                  />
                  <div className={isRTL ? "text-right" : ""}>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.role}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
