'use client'

import { ArrowRight, Zap, Sparkles, Code2 } from 'lucide-react'

export function HeroSection() {
  return (
    <section className="relative min-h-screen bg-background overflow-hidden pt-32 pb-20 px-4">
      {/* Background gradient element */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-accent opacity-5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-accent opacity-5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header Navigation */}
        <nav className="flex items-center justify-between mb-20">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-accent flex items-center justify-center">
              <Code2 className="w-5 h-5 text-accent-foreground" />
            </div>
            <span className="text-xl font-bold text-foreground">GPT Computer</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-muted-foreground hover:text-foreground transition">
              Features
            </a>
            <a href="#benefits" className="text-muted-foreground hover:text-foreground transition">
              Benefits
            </a>
            <a href="#pricing" className="text-muted-foreground hover:text-foreground transition">
              Pricing
            </a>
          </div>
          <button className="button-primary text-sm">Get Started</button>
        </nav>

        {/* Hero Content */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <div className="inline-flex items-center gap-2 mb-6 px-3 py-1 rounded-full bg-secondary text-sm text-secondary-foreground">
              <Sparkles className="w-4 h-4" />
              <span>AI-Powered Platform</span>
            </div>
            <h1 className="heading-1 mb-6 text-foreground">
              Build apps, websites, and digital products faster
            </h1>
            <p className="text-lg-muted mb-8 max-w-lg">
              A no-code and AI-powered platform that lets you create amazing digital products without needing deep coding skills. Perfect for creators, entrepreneurs, and teams.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="button-primary flex items-center justify-center gap-2">
                Start Building
                <ArrowRight className="w-4 h-4" />
              </button>
              <button className="button-secondary flex items-center justify-center gap-2">
                <Zap className="w-4 h-4" />
                Watch Demo
              </button>
            </div>
          </div>

          {/* Feature cards grid */}
          <div className="grid gap-4">
            <div className="bg-secondary rounded-xl p-6 border border-muted hover:border-accent transition">
              <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                <Zap className="w-5 h-5 text-accent" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Lightning Fast</h3>
              <p className="text-sm text-muted-foreground">
                Build your ideas at the speed of thought with our AI-powered builders
              </p>
            </div>
            <div className="bg-secondary rounded-xl p-6 border border-muted hover:border-accent transition">
              <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                <Code2 className="w-5 h-5 text-accent" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">No Code Required</h3>
              <p className="text-sm text-muted-foreground">
                Create professional websites and apps without writing a single line of code
              </p>
            </div>
            <div className="bg-secondary rounded-xl p-6 border border-muted hover:border-accent transition">
              <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                <Sparkles className="w-5 h-5 text-accent" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">AI Powered</h3>
              <p className="text-sm text-muted-foreground">
                Leverage advanced AI to generate code, designs, and content automatically
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
