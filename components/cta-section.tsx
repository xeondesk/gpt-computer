'use client'

import { ArrowRight, Sparkles } from 'lucide-react'

export function CTASection() {
  return (
    <section id="pricing" className="py-24 bg-background px-4 border-t border-muted">
      <div className="max-w-4xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary text-sm text-secondary-foreground mb-8">
          <Sparkles className="w-4 h-4" />
          <span>Ready to get started?</span>
        </div>

        <h2 className="heading-2 mb-6">
          Join thousands of creators and teams
        </h2>

        <p className="text-lg-muted mb-12 max-w-2xl mx-auto">
          Start building your next amazing project today. No credit card required. Get instant access to our full platform.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="button-primary flex items-center justify-center gap-2 px-8 py-4">
            Start Building Now
            <ArrowRight className="w-4 h-4" />
          </button>
          <button className="button-secondary flex items-center justify-center gap-2 px-8 py-4">
            Schedule a Demo
          </button>
        </div>

        <p className="text-sm text-muted-foreground mt-8">
          No credit card required • Free forever tier • Full features included
        </p>
      </div>
    </section>
  )
}
