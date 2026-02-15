'use client'

import { Lock, Users, BarChart3, Settings, Zap, Globe } from 'lucide-react'

const features = [
  {
    icon: Zap,
    title: '20 days saved',
    description: 'on daily builds',
    company: 'Netflix',
  },
  {
    icon: BarChart3,
    title: '98% faster',
    description: 'time to market',
    company: 'Tripadvisor',
  },
  {
    icon: Globe,
    title: '300% increase',
    description: 'in SEO performance',
    company: 'Box',
  },
  {
    icon: Users,
    title: '6x faster',
    description: 'to build + deploy',
    company: 'eBay',
  },
]

const capabilities = [
  {
    icon: Settings,
    title: 'Smart Automation',
    description: 'AI-powered workflows that handle repetitive tasks and streamline your development process',
  },
  {
    icon: Lock,
    title: 'Enterprise Security',
    description: 'Bank-level encryption and compliance standards to keep your data safe',
  },
  {
    icon: Users,
    title: 'Team Collaboration',
    description: 'Real-time collaboration tools for seamless teamwork and feedback sharing',
  },
  {
    icon: BarChart3,
    title: 'Analytics & Insights',
    description: 'Comprehensive dashboards to track performance and optimize your products',
  },
]

export function FeaturesSection() {
  return (
    <>
      {/* Social Proof Section */}
      <section id="benefits" className="py-20 bg-background px-4 border-y border-muted">
        <div className="max-w-6xl mx-auto">
          <h2 className="heading-2 text-center mb-16">
            Trusted by industry leaders
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            {features.map((feature, idx) => {
              const Icon = feature.icon
              return (
                <div
                  key={idx}
                  className="bg-secondary rounded-xl p-8 border border-muted hover:border-accent transition flex flex-col"
                >
                  <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-6">
                    <Icon className="w-6 h-6 text-accent" />
                  </div>
                  <div className="mb-4">
                    <p className="text-2xl font-bold text-foreground">{feature.title}</p>
                    <p className="text-sm text-muted-foreground mt-1">{feature.description}</p>
                  </div>
                  <div className="mt-auto pt-6 border-t border-muted">
                    <p className="font-semibold text-foreground text-sm">{feature.company}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section id="features" className="py-20 bg-background px-4">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <span className="inline-block px-4 py-2 rounded-full bg-secondary text-sm text-secondary-foreground mb-6">
              ✨ Powerful Features
            </span>
            <h2 className="heading-2 mb-6">
              Everything you need to build faster
            </h2>
            <p className="text-lg-muted max-w-2xl">
              A complete suite of tools and integrations designed to accelerate your development workflow and eliminate manual processes.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {capabilities.map((capability, idx) => {
              const Icon = capability.icon
              return (
                <div
                  key={idx}
                  className="bg-secondary rounded-xl p-8 border border-muted hover:border-accent transition group"
                >
                  <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent/20 transition">
                    <Icon className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="heading-3 mb-3">{capability.title}</h3>
                  <p className="text-muted-foreground">{capability.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>
    </>
  )
}
