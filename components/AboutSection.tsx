"use client"

import Image from "next/image"
import { Award, Users, Clock, Star, Heart, ChefHat } from 'lucide-react'
import { Button } from "@/components/ui/button"

const achievements = [
  {
    icon: Award,
    title: "15+ Years Experience",
    description: "Serving authentic Pakistani cuisine since 2010",
  },
  {
    icon: Users,
    title: "500+ Happy Clients",
    description: "Trusted by families and businesses across Karachi",
  },
  {
    icon: Clock,
    title: "24/7 Service",
    description: "Available for all your catering needs anytime",
  },
  {
    icon: Star,
    title: "4.9/5 Rating",
    description: "Consistently rated excellent by our customers",
  },
]

const features = [
  {
    icon: Heart,
    title: "Made with Love",
    description: "Every dish prepared with passion and authentic traditional recipes",
  },
  {
    icon: ChefHat,
    title: "Expert Chefs",
    description: "Experienced culinary team with decades of combined expertise",
  },
  {
    icon: Award,
    title: "Premium Quality",
    description: "Only the finest ingredients and highest food safety standards",
  },
]

export default function AboutSection() {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="order-2 lg:order-1">
            <div className="mb-6 sm:mb-8">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
                About <span className="text-yellow-400">Al-Macca Caterers</span>
              </h2>
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed mb-4 sm:mb-6">
                Since 2010, Al-Macca Caterers has been the premier choice for authentic Pakistani cuisine in Karachi. We
                specialize in traditional recipes passed down through generations, using only the finest ingredients and
                time-honored cooking techniques.
              </p>
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                From intimate family gatherings to grand wedding celebrations, we bring the authentic taste of Pakistan
                to your special occasions. Our experienced team ensures every dish is prepared with love and served
                with excellence.
              </p>
            </div>

            {/* Features */}
            <div className="space-y-4 sm:space-y-6 mb-6 sm:mb-8">
              {features.map((feature, index) => (
                <div key={feature.title} className="flex items-start gap-3 sm:gap-4">
                  <div className="flex-shrink-0 w-10 sm:w-12 h-10 sm:h-12 bg-yellow-100 rounded-full flex items-center justify-center">
                    <feature.icon className="w-5 sm:w-6 h-5 sm:h-6 text-yellow-500" />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-1 sm:mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-sm sm:text-base text-gray-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Achievements Grid */}
            <div className="grid grid-cols-2 gap-3 sm:gap-6 mb-6 sm:mb-8">
              {achievements.map((achievement, index) => (
                <div key={achievement.title} className="bg-white rounded-xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-shadow">
                  <achievement.icon className="w-6 sm:w-8 h-6 sm:h-8 text-yellow-500 mb-2 sm:mb-3" />
                  <h3 className="font-bold text-gray-900 mb-1 sm:mb-2 text-sm sm:text-base">{achievement.title}</h3>
                  <p className="text-xs sm:text-sm text-gray-600">{achievement.description}</p>
                </div>
              ))}
            </div>

            <Button
              size="lg"
              className="bg-yellow-400 text-black hover:bg-yellow-400 px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold w-full sm:w-auto"
              onClick={() => (window.location.href = "/about")}
            >
              Learn More About Us
            </Button>
          </div>

          {/* Image */}
          <div className="relative order-1 lg:order-2">
            <div className="relative">
              <Image
                src="/images/closed-metal-pots-min.jpg"
                alt="Professional catering setup with traditional serving dishes"
                width={600}
                height={500}
                className="rounded-2xl shadow-2xl w-full h-auto"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />

              {/* Floating Badge */}
              <div className="absolute -bottom-4 sm:-bottom-6 -left-4 sm:-left-6 bg-yellow-400 text-black rounded-2xl p-4 sm:p-6 shadow-xl">
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold">15+</div>
                  <div className="text-xs sm:text-sm font-semibold">Years Serving</div>
                  <div className="text-xs sm:text-sm">Since 2010</div>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-2 sm:-top-4 -right-2 sm:-right-4 w-12 sm:w-20 h-12 sm:h-20 bg-yellow-400/20 rounded-full animate-pulse" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
