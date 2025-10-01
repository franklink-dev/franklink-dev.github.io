'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Check, Sparkles, Crown, ArrowRight } from 'lucide-react';

const pricingPlans = [
  {
    name: 'Free',
    price: '$0',
    period: 'forever',
    description: 'Perfect for getting started with career discovery',
    features: [
      'Basic career path discovery',
      'Email updates',
      'Up to 5 exclusive opportunities',
      'Community support',
    ],
    cta: 'Get Started Free',
    popular: false,
    icon: Sparkles
  },
  {
    name: 'Pro',
    price: '$14.99',
    period: 'per month',
    description: 'Advanced AI matching and premium features',
    features: [
      'Unlimited access to exclusive career opportunities',
      'Personalized, step-by-step career path planner',
      'Early access to upcoming features and platform updates',
      'Priority notifications',
      'Premium support',
      'Analytics dashboard',
      'Custom filters and preferences'
    ],
    cta: 'Upgrade to Pro',
    popular: true,
    icon: Crown
  }
];

export function PricingSection() {
  return (
    <section className="py-24 bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-100 text-purple-700 text-sm font-medium mb-6">
            💎 Simple Pricing
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Choose your{' '}
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              career journey
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Start free and upgrade when you're ready for advanced AI features.
            No hidden fees, cancel anytime.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {pricingPlans.map((plan, index) => {
            const Icon = plan.icon;
            return (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative"
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                    <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-2 rounded-full text-sm font-medium">
                      Most Popular
                    </div>
                  </div>
                )}
                <Card className={`relative h-full transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 flex flex-col ${
                  plan.popular
                    ? 'border-2 border-purple-200 bg-gradient-to-br from-purple-50 to-blue-50'
                    : 'border border-gray-200 bg-white/80 backdrop-blur-sm'
                }`}>
                  <CardHeader className="text-center pb-8 pt-12">
                    <div className={`w-16 h-16 mx-auto rounded-2xl flex items-center justify-center mb-4 ${
                      plan.popular ? 'bg-gradient-to-br from-purple-600 to-blue-600' : 'bg-gray-100'
                    }`}>
                      <Icon className={`w-8 h-8 ${plan.popular ? 'text-white' : 'text-gray-600'}`} />
                    </div>
                    <CardTitle className="text-2xl font-bold text-gray-900 mb-2">
                      {plan.name}
                    </CardTitle>
                    <div className="mb-4">
                      <span className="text-5xl font-bold text-gray-900">{plan.price}</span>
                      <span className="text-gray-600 text-lg ml-2">/ {plan.period}</span>
                    </div>
                    <p className="text-gray-600">{plan.description}</p>
                  </CardHeader>
                  <CardContent className="pt-0 pb-8 flex-1 flex flex-col">
                    <ul className="space-y-4 mb-8 flex-1">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start gap-3">
                          <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
                            plan.popular ? 'bg-purple-100' : 'bg-gray-100'
                          }`}>
                            <Check className={`w-3 h-3 ${plan.popular ? 'text-purple-600' : 'text-gray-600'}`} />
                          </div>
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button
                      size="lg"
                      variant={plan.popular ? 'gradient' : 'outline'}
                      className="w-full group mt-auto"
                    >
                      {plan.cta}
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Value Proposition */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 border border-gray-200/50 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Unlock 1000+ career resources by contributing just 5 resources
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Join our community-driven platform where everyone benefits. Share opportunities
              you find and gain access to thousands more discovered by our AI and community.
            </p>
          </div>
        </motion.div>

        {/* FAQ Link */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-12"
        >
          <p className="text-gray-600">
            Have questions?{' '}
            <a href="#faq" className="text-blue-600 hover:underline font-medium">
              Check our FAQ
            </a>{' '}
            or{' '}
            <a href="/contact" className="text-blue-600 hover:underline font-medium">
              contact us
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}