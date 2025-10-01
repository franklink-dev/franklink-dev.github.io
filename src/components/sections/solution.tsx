'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle, Brain, Zap } from 'lucide-react';
import Image from 'next/image';

const problemPoints = [
  'Missing crucial opportunities buried in email clutter',
  'Spending hours searching across multiple platforms',
  'Late discovery of deadlines and important events',
  'Lack of personalized opportunity matching'
];

const solutionFeatures = [
  {
    icon: Brain,
    title: 'AI-Powered Discovery',
    description: 'Our intelligent system scans and analyzes thousands of opportunities daily'
  },
  {
    icon: Zap,
    title: 'Instant Matching',
    description: 'Get personalized recommendations based on your goals and background'
  },
  {
    icon: CheckCircle,
    title: 'Never Miss Out',
    description: 'Automated alerts ensure you never miss important deadlines again'
  }
];

export function SolutionSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Problem Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-100 text-red-700 text-sm font-medium mb-6">
              The Problem
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
              Stop missing the{' '}
              <span className="text-red-600">best opportunities</span>
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              LinkedIn and Handshake show you job postings, but the most valuable career
              opportunities happen outside traditional job boards.
            </p>

            <div className="space-y-4 mb-8">
              {problemPoints.map((point, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-3 flex-shrink-0"></div>
                  <p className="text-gray-700">{point}</p>
                </motion.div>
              ))}
            </div>

            <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
              <p className="text-gray-700 italic">
                "I discovered an amazing research opportunity just 2 days before the deadline.
                I almost missed it completely because it was buried in department emails."
              </p>
              <p className="text-sm text-gray-500 mt-2">— Anonymous Student</p>
            </div>
          </motion.div>

          {/* Solution Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-100 text-green-700 text-sm font-medium mb-6">
              Our Solution
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
              AI that finds{' '}
              <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                perfect matches
              </span>
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Franklink's AI continuously discovers and curates opportunities from across
              the web, matching them to your specific interests and goals.
            </p>

            <div className="space-y-6 mb-8">
              {solutionFeatures.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + 0.3 }}
                    className="flex items-start gap-4 p-4 rounded-xl bg-gradient-to-r from-blue-50 to-green-50 border border-blue-100"
                  >
                    <div className="bg-white rounded-lg p-2 shadow-sm">
                      <Icon className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">{feature.title}</h3>
                      <p className="text-gray-600">{feature.description}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
            >
              <Button size="xl" variant="gradient" className="group">
                See How It Works
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
          </motion.div>
        </div>

        {/* Demo Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-24"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-100 to-purple-100 rounded-3xl transform rotate-1"></div>
              <div className="relative bg-white rounded-3xl p-2 shadow-xl">
                <Image
                  src="/chat.jpg"
                  alt="Franklink AI Career Intelligence in Action"
                  width={500}
                  height={350}
                  className="w-full h-auto rounded-2xl object-cover"
                />
              </div>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                See Franklink in Action
              </h3>
              <p className="text-lg text-gray-600 mb-8">
                Our AI-powered platform intelligently surfaces opportunities that match
                your unique profile, interests, and career goals - all in one place.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600 mb-2">85%</div>
                  <p className="text-sm text-gray-600">More opportunities discovered</p>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-600 mb-2">3x</div>
                  <p className="text-sm text-gray-600">Faster opportunity matching</p>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600 mb-2">0</div>
                  <p className="text-sm text-gray-600">Missed deadlines</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}