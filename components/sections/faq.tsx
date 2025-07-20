"use client"

import { landingConfig } from "@/config/landing-config"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { useLocalization } from "@/contexts/localization-context"

export function FAQ() {
  const { language, isRTL } = useLocalization()
  const faqs = landingConfig.faqs[language]
  const sectionTitles = landingConfig.sectionTitles[language]

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className={`text-center space-y-4 mb-16`}>
          <h2 className="text-4xl font-bold text-gray-900">{sectionTitles.faq}</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">{sectionTitles.faqSubtitle}</p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="bg-white border-0 shadow-sm rounded-lg">
                <AccordionTrigger className={`px-6 py-4 hover:no-underline ${isRTL ? "text-right" : "text-left"}`}>
                  <span className="text-lg font-semibold text-gray-900">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4">
                  <p className={`text-gray-600 leading-relaxed ${isRTL ? "text-right" : ""}`}>{faq.answer}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
