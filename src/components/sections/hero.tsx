'use client';

import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Play, ArrowRight, Brain, Target } from 'lucide-react';

export function HeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlayVideo = () => {
    if (videoRef.current) {
      videoRef.current.play();
      // Enter fullscreen mode
      if (videoRef.current.requestFullscreen) {
        videoRef.current.requestFullscreen();
      } else if ((videoRef.current as HTMLVideoElement & { webkitRequestFullscreen?: () => void }).webkitRequestFullscreen) {
        (videoRef.current as HTMLVideoElement & { webkitRequestFullscreen: () => void }).webkitRequestFullscreen();
      } else if ((videoRef.current as HTMLVideoElement & { msRequestFullscreen?: () => void }).msRequestFullscreen) {
        (videoRef.current as HTMLVideoElement & { msRequestFullscreen: () => void }).msRequestFullscreen();
      }
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
        <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="text-center lg:text-left"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-medium mb-8"
            >
              <Brain className="w-4 h-4" />
              FOR STUDENTS WHO WANT MORE THAN JOB BOARDS
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6"
            >
              Your AI Career{' '}
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-500 bg-clip-text text-transparent">
                Intelligence
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl text-gray-600 leading-relaxed mb-8 max-w-2xl"
            >
              LinkedIn and Handshake show you jobs, but the best opportunities aren&apos;t job postings.
            </motion.p>



            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button
                size="xl"
                variant="gradient"
                className="group whitespace-nowrap"
                onClick={() => window.location.href = '/wishlist'}
              >
                Get Started
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                size="xl"
                variant="outline"
                onClick={handlePlayVideo}
                className="group whitespace-nowrap"
              >
                <Play className="h-5 w-5 group-hover:scale-110 transition-transform" />
                Watch Demo
              </Button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-gray-200"
            >
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">1000+</div>
                <div className="text-sm text-gray-600">Career Resources</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">FREE</div>
                <div className="text-sm text-gray-600">Forever Tier</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">AI</div>
                <div className="text-sm text-gray-600">Powered</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Video/Demo */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.3 }}
            className="relative mt-16 lg:mt-20"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-blue-100 to-purple-100 p-2">
              <div className="bg-white rounded-2xl overflow-hidden">
                <video
                  ref={videoRef}
                  className="w-full h-auto object-cover rounded-xl"
                  controls
                  playsInline
                >
                  <source src="/Franklink_demo.mov" type="video/mp4" />
                  <source src="/Franklink_demo.mov" type="video/quicktime" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>

            {/* Floating Elements */}
            <motion.div
              className="absolute -top-4 -right-4 bg-white rounded-2xl p-4 shadow-lg"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            >
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-sm font-medium">AI Powered</span>
              </div>
            </motion.div>

            <motion.div
              className="absolute -bottom-4 -left-4 bg-white rounded-2xl p-4 shadow-lg"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
            >
              <div className="flex items-center gap-2">
                <Target className="w-4 h-4 text-purple-600" />
                <span className="text-sm font-medium">Smart Matching</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}