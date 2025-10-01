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
  Compass,
  Target,
  ArrowRight,
  MapPin,
  Zap,
  TrendingUp,
  CheckCircle
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
    color: 'text-purple-600',
    bgColor: 'bg-purple-100'
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
        {/* Career Path Builder - Creative Design */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-20 relative"
        >
          <div className="relative bg-gradient-to-br from-indigo-50 via-white to-purple-50 rounded-[2rem] p-8 md:p-12 overflow-hidden border border-indigo-100/50 shadow-xl">
            {/* Floating Elements Background */}
            <div className="absolute inset-0 overflow-hidden">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -top-8 -right-8 w-24 h-24 bg-gradient-to-r from-blue-200 to-purple-200 rounded-full opacity-20"
              />
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-4 left-4 w-16 h-16 bg-gradient-to-r from-cyan-200 to-blue-200 rounded-xl opacity-30"
              />
              <motion.div
                animate={{ x: [-5, 5, -5] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-8 right-1/4 w-20 h-20 bg-gradient-to-r from-purple-200 to-pink-200 rounded-full opacity-25"
              />
            </div>

            <div className="relative z-10">
              {/* Header */}
              <div className="text-center mb-8">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-indigo-100 to-purple-100 text-indigo-700 text-sm font-medium mb-4"
                >
                  <Target className="w-4 h-4" />
                  AI-Powered Career Intelligence
                </motion.div>
                <motion.h3
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                  className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
                >
                  Your{' '}
                  <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                    Personalized Career Path
                  </span>
                </motion.h3>
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  className="text-lg text-gray-600 max-w-2xl mx-auto"
                >
                  Our AI analyzes your background, interests, and goals to create a tailored roadmap
                  with the exact opportunities you need to advance your career.
                </motion.p>
              </div>

              {/* Interactive Career Path Visualization */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                {[
                  { icon: MapPin, title: "Analyze", desc: "Your profile & goals", color: "from-blue-500 to-cyan-500", delay: 0.9 },
                  { icon: Zap, title: "Match", desc: "Perfect opportunities", color: "from-indigo-500 to-purple-500", delay: 1.0 },
                  { icon: TrendingUp, title: "Advance", desc: "Your career path", color: "from-purple-500 to-pink-500", delay: 1.1 }
                ].map((step, index) => {
                  const Icon = step.icon;
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: step.delay }}
                      whileHover={{ y: -5 }}
                      className="relative group"
                    >
                      <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 border border-white/20 shadow-lg hover:shadow-xl transition-all duration-300">
                        <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${step.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                        <h4 className="font-semibold text-gray-900 mb-2">{step.title}</h4>
                        <p className="text-gray-600 text-sm">{step.desc}</p>
                      </div>
                      {index < 2 && (
                        <motion.div
                          initial={{ scale: 0 }}
                          whileInView={{ scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.3, delay: step.delay + 0.2 }}
                          className="hidden md:block absolute top-1/2 -right-3 z-20"
                        >
                          <ArrowRight className="w-6 h-6 text-indigo-400" />
                        </motion.div>
                      )}
                    </motion.div>
                  );
                })}
              </div>

              {/* Success Metrics */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 1.2 }}
                className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6"
              >
                {[
                  { metric: "95%", label: "Match Accuracy" },
                  { metric: "3x", label: "Faster Discovery" },
                  { metric: "100,000+", label: "Opportunities" },
                  { metric: "24/7", label: "AI Monitoring" }
                ].map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                      {stat.metric}
                    </div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </div>
                ))}
              </motion.div>

              {/* CTA */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 1.3 }}
                className="text-center"
              >
                <a href="/wishlist" className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-full font-medium hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer group">
                  Build My Career Path
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}