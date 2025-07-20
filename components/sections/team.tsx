"use client"

import { landingConfig } from "@/config/landing-config"
import { Card, CardContent } from "@/components/ui/card"
import { useLocalization } from "@/contexts/localization-context"
import Image from "next/image"
import { Linkedin, Twitter, Github } from "lucide-react"

export function Team() {
  const { language, isRTL } = useLocalization()
  const team = landingConfig.team[language]
  const sectionTitles = landingConfig.sectionTitles[language]

  return (
    <section id="team" className="py-20">
      <div className="container mx-auto px-4">
        <div className={`text-center space-y-4 mb-16 ${isRTL ? "text-right" : ""}`}>
          <h2 className="text-4xl font-bold text-gray-900">{sectionTitles.team}</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">{sectionTitles.teamSubtitle}</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <Card key={index} className="border-0 shadow-sm hover:shadow-lg transition-shadow text-center">
              <CardContent className="p-8">
                <Image
                  src={`/placeholder.svg?height=128&width=128&query=${encodeURIComponent(member.image)}`}
                  alt={member.name}
                  width={128}
                  height={128}
                  className="rounded-full mx-auto mb-6"
                />
                <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                <p className="font-semibold mb-4" style={{ color: landingConfig.primaryColor }}>
                  {member.role}
                </p>
                <p className="text-gray-600 text-sm mb-6 leading-relaxed">{member.bio}</p>
                <div className="flex justify-center space-x-3">
                  {member.social.linkedin && (
                    <a href={member.social.linkedin} className="text-gray-400 hover:text-blue-600 transition-colors">
                      <Linkedin className="h-5 w-5" />
                    </a>
                  )}
                  {member.social.twitter && (
                    <a href={member.social.twitter} className="text-gray-400 hover:text-blue-400 transition-colors">
                      <Twitter className="h-5 w-5" />
                    </a>
                  )}
                  {member.social.github && (
                    <a href={member.social.github} className="text-gray-400 hover:text-gray-900 transition-colors">
                      <Github className="h-5 w-5" />
                    </a>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
