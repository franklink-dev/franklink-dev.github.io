'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Mail, Users, CheckCircle } from 'lucide-react';

const benefits = [
  'Early access to beta features',
  'Priority support and onboarding',
  'Exclusive networking opportunities',
  'Influence product development',
  'Free Pro features for early adopters'
];

export default function WishlistPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 pt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4" />
            Join the Waitlist
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
            Be the first to discover{' '}
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-500 bg-clip-text text-transparent">
              hidden opportunities
            </span>
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
            Join thousands of ambitious students who are already transforming their career discovery with AI.
          </p>
        </motion.div>

        {/* Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 mb-12 border border-gray-200/50 shadow-lg"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            What you'll get as an early member:
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 + 0.4 }}
                className="flex items-center gap-3"
              >
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                <span className="text-gray-700">{benefit}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-200/50"
        >
          <div className="p-2">
            <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLSfy64MpeKpsjLOgsgkMM_ZTa8y12eLPmaImD3T3xq3rNQQXrQ/viewform?usp=dialogup"
              width="100%"
              height="600"
              className="border-none rounded-2xl"
              title="Join Franklink Waitlist"
            >
              Loading...
            </iframe>
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 text-center"
        >
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/50">
            <Users className="w-8 h-8 text-blue-600 mx-auto mb-3" />
            <div className="text-3xl font-bold text-gray-900 mb-2">2,500+</div>
            <div className="text-gray-600">Students waiting</div>
          </div>
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/50">
            <Mail className="w-8 h-8 text-purple-600 mx-auto mb-3" />
            <div className="text-3xl font-bold text-gray-900 mb-2">50+</div>
            <div className="text-gray-600">Universities represented</div>
          </div>
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/50">
            <Sparkles className="w-8 h-8 text-cyan-600 mx-auto mb-3" />
            <div className="text-3xl font-bold text-gray-900 mb-2">Q4 2025</div>
            <div className="text-gray-600">Expected launch</div>
          </div>
        </motion.div>

        {/* Social Proof */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <p className="text-gray-600 mb-6">Join students from top universities:</p>
          <div className="flex flex-wrap justify-center gap-6 text-gray-500">
            <span>Stanford</span>
            <span>MIT</span>
            <span>Harvard</span>
            <span>UC Berkeley</span>
            <span>Carnegie Mellon</span>
            <span>Princeton</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
}