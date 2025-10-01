'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Search,
  Calendar,
  Users,
  Building,
  Trophy,
  Briefcase,
  Sparkles,
  Target
} from 'lucide-react';

const features = [
  {
    icon: Briefcase,
    title: 'Hidden Internships',
    description: 'Uncover exclusive internship opportunities that aren\'t posted on traditional job boards.',
    color: 'text-cyan-600',
    bgColor: 'bg-cyan-100'
  },
  {
    icon: Trophy,
    title: 'Hackathons',
    description: 'Find hackathons that match your skills and interests, from local events to global competitions.',
    color: 'text-purple-600',
    bgColor: 'bg-purple-100'
  },
  {
    icon: Calendar,
    title: 'Networking Events',
    description: 'Connect with industry professionals and peers at events perfectly suited to your career path.',
    color: 'text-green-600',
    bgColor: 'bg-green-100'
  },
  {
    icon: Building,
    title: 'Company Info Sessions',
    description: 'Never miss important company presentations and recruitment events in your field.',
    color: 'text-orange-600',
    bgColor: 'bg-orange-100'
  },
  {
    icon: Users,
    title: 'Club Applications',
    description: 'Discover and apply to student organizations that align with your interests and goals.',
    color: 'text-red-600',
    bgColor: 'bg-red-100'
  },
  {
    icon: Search,
    title: 'Research Labs',
    description: 'Discover cutting-edge research opportunities tailored to your academic background.',
    color: 'text-blue-600',
    bgColor: 'bg-blue-100'
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut'
    }
  }
};

export function FeaturesSection() {
  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4" />
            Discover Opportunities
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Everything you need in{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              one place
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Enough hunting through scattered emails and websites. Our AI finds and curates
            the opportunities that matter most to your career journey.
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <motion.div key={feature.title} variants={itemVariants}>
                <Card className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-0 bg-white/60 backdrop-blur-sm">
                  <CardHeader className="pb-4">
                    <div className={`w-12 h-12 rounded-xl ${feature.bgColor} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className={`w-6 h-6 ${feature.color}`} />
                    </div>
                    <CardTitle className="text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                      {feature.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-600 leading-relaxed">
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-3xl p-8 backdrop-blur-sm border border-blue-200/50">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Target className="w-6 h-6 text-blue-600" />
              <h3 className="text-2xl font-bold text-gray-900">Personalized Career Path Builder</h3>
            </div>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Our AI analyzes your background, interests, and goals to tell you exactly
              what to do with the opportunities you need to advance your career.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}