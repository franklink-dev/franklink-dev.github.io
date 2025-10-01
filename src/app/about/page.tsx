'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  Target,
  Users,
  Lightbulb,
  TrendingUp,
  ArrowRight,
  CheckCircle,
  Zap,
  Heart,
  Star
} from 'lucide-react';

const values = [
  {
    icon: Target,
    title: 'Student-First',
    description: 'Every feature is designed with student needs and challenges in mind.'
  },
  {
    icon: Lightbulb,
    title: 'Innovation',
    description: 'We use cutting-edge AI to solve career discovery problems in new ways.'
  },
  {
    icon: Heart,
    title: 'Community',
    description: 'Building a supportive ecosystem where students help each other succeed.'
  },
  {
    icon: TrendingUp,
    title: 'Growth',
    description: 'Focused on helping students achieve meaningful career advancement.'
  }
];

const stats = [
  { number: '100,000+', label: 'Career Resources' },
  { number: '50+', label: 'Universities' },
  { number: '85%', label: 'Better Match Rate' },
  { number: '24/7', label: 'AI Availability' }
];

const features = [
  'AI-powered opportunity discovery',
  'Personalized career path matching',
  'Real-time opportunity alerts',
  'Strategic career guidance',
  'Community-driven resource sharing',
  'Advanced analytics and insights'
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-gray-50 pt-20">
      {/* Hero Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-medium mb-6">
                <Star className="w-4 h-4" />
                About Franklink
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
                AI Career Intelligence for{' '}
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-500 bg-clip-text text-transparent">
                  Every Student
                </span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
                We're on a mission to help students discover niche events and opportunities
                through AI, ensuring no one misses out on career-defining moments.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* How Franklink Began Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              How Franklink Began
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <div className="bg-gradient-to-r from-blue-50 to-gray-50 rounded-3xl p-8 lg:p-12 border border-blue-100">
              <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                <p>
                  As students ourselves, we experienced the frustration of missing crucial opportunities firsthand.
                  The perfect workshop announcement lost in hundreds of school emails. Research opportunities buried
                  in department newsletters. Application deadlines for exclusive programs we discovered too late.
                </p>

                <p>
                  We knew there had to be a better way. That's when we created Franklink — an AI-powered platform
                  that automatically unifies and organizes all available career resources by searching for available
                  jobs and internships, finding niche events and opportunities on campus, creating personalized career
                  preparation plans, and more.
                </p>

                <p className="font-semibold text-blue-600 text-xl">
                  With Franklink, you can unlock 100,000+ career resources by contributing 5 resources you have.
                  Start your journey to your dream offer with us now!
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                The Problem We're Solving
              </h2>
              <div className="space-y-4 text-lg text-gray-700">
                <p>
                  The perfect workshop is buried in a department newsletter you don't read.
                  Research opportunities are announced in labs you don't know exist.
                </p>
                <p>
                  Networking events happen in groups you're not part of. Career fairs focus
                  on companies that don't match your goals.
                </p>
                <p className="font-semibold text-blue-600">
                  Students waste 5+ hours weekly searching for opportunities, yet 90% never
                  find the best ones for their career path.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="grid grid-cols-2 gap-6"
            >
              {stats.map((stat, index) => (
                <div key={index} className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200/50">
                  <div className="text-3xl font-bold text-blue-600 mb-2">{stat.number}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Our Solution: AI-Powered Career Intelligence
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Franklink's AI continuously discovers and curates opportunities from across
              the web, matching them to your specific interests and goals.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center gap-3 p-4 rounded-xl bg-gradient-to-r from-blue-50 to-gray-50 border border-blue-100"
              >
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                <span className="text-gray-700 font-medium">{feature}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Our Values
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we build and every decision we make.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="h-full text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                    <CardHeader>
                      <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center mb-4">
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <CardTitle className="text-xl">{value.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-gray-600 leading-relaxed">
                        {value.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Our Vision for the Future
            </h2>
            <p className="text-xl leading-relaxed max-w-4xl mx-auto mb-8">
              We envision a world where every student has equal access to career opportunities,
              regardless of their network, background, or knowledge of hidden resources.
              Through AI-powered discovery and community collaboration, we're building the
              career intelligence platform that levels the playing field.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="xl" variant="outline" className="bg-white text-blue-600 hover:bg-gray-50 whitespace-nowrap" asChild>
                <a href="/team" className="flex items-center">
                  Meet Our Team
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <Button size="xl" variant="outline" className="bg-transparent border-white text-white hover:bg-white/10 whitespace-nowrap" asChild>
                <a href="/contact" className="flex items-center">
                  Get in Touch
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center bg-gradient-to-r from-blue-50 to-gray-50 rounded-3xl p-12 border border-blue-100"
          >
            <Zap className="w-16 h-16 text-blue-600 mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Ready to Transform Your Career Discovery?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Join thousands of students who are already discovering hidden opportunities
              with Franklink's AI career intelligence.
            </p>
            <Button size="xl" variant="gradient" className="whitespace-nowrap" asChild>
              <a href="/wishlist" className="flex items-center">
                Join the Waitlist
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}