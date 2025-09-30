'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  MessageSquare,
  Star,
  Send,
  CheckCircle,
  ArrowRight,
  Lightbulb,
  Heart,
  Zap
} from 'lucide-react';

const feedbackTypes = [
  {
    value: 'feature-request',
    label: 'Feature Request',
    description: 'Suggest new features or improvements'
  },
  {
    value: 'bug-report',
    label: 'Bug Report',
    description: 'Report issues or problems you encountered'
  },
  {
    value: 'general-feedback',
    label: 'General Feedback',
    description: 'Share your overall experience and thoughts'
  },
  {
    value: 'user-experience',
    label: 'User Experience',
    description: 'Help us improve the interface and usability'
  }
];

const satisfactionLevels = [
  { value: 5, label: 'Excellent', emoji: '🤩' },
  { value: 4, label: 'Good', emoji: '😊' },
  { value: 3, label: 'Neutral', emoji: '😐' },
  { value: 2, label: 'Poor', emoji: '😔' },
  { value: 1, label: 'Very Poor', emoji: '😞' }
];

export default function FeedbackPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    feedbackType: '',
    satisfaction: 0,
    message: '',
    wouldRecommend: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSatisfactionChange = (rating: number) => {
    setFormData(prev => ({
      ...prev,
      satisfaction: rating
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);

    // Reset form after success message
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        feedbackType: '',
        satisfaction: 0,
        message: '',
        wouldRecommend: ''
      });
    }, 4000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 pt-20">
      {/* Hero Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-100 text-orange-700 text-sm font-medium mb-6">
              <MessageSquare className="w-4 h-4" />
              Website Feedback
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Help Us{' '}
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-500 bg-clip-text text-transparent">
                Improve
              </span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              Your feedback is invaluable in helping us create the best possible
              experience for students discovering career opportunities.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Feedback Form */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Card className="p-8 lg:p-12">
              <CardHeader className="px-0 pt-0 text-center">
                <CardTitle className="text-3xl">Share Your Thoughts</CardTitle>
                <CardDescription className="text-lg">
                  Tell us about your experience with Franklink and how we can make it better.
                </CardDescription>
              </CardHeader>
              <CardContent className="px-0 pb-0">
                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <CheckCircle className="w-20 h-20 text-green-600 mx-auto mb-6" />
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      Thank You for Your Feedback! 🎉
                    </h3>
                    <p className="text-lg text-gray-600 mb-6">
                      Your input helps us build a better Franklink for all students.
                    </p>
                    <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-6 border border-blue-100">
                      <p className="text-gray-700">
                        We review all feedback carefully and will use your insights to improve
                        the platform. Keep an eye out for updates!
                      </p>
                    </div>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-8">
                    {/* Personal Information */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                          Name (Optional)
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                          placeholder="Your name"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                          Email (Optional)
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>

                    {/* Feedback Type */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-4">
                        What type of feedback do you have? *
                      </label>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {feedbackTypes.map((type) => (
                          <label
                            key={type.value}
                            className={`relative flex cursor-pointer rounded-xl border p-4 transition-all ${
                              formData.feedbackType === type.value
                                ? 'border-blue-500 bg-blue-50'
                                : 'border-gray-200 hover:border-blue-300'
                            }`}
                          >
                            <input
                              type="radio"
                              name="feedbackType"
                              value={type.value}
                              checked={formData.feedbackType === type.value}
                              onChange={handleInputChange}
                              className="sr-only"
                              required
                            />
                            <div>
                              <div className="text-sm font-medium text-gray-900">{type.label}</div>
                              <div className="text-sm text-gray-500">{type.description}</div>
                            </div>
                          </label>
                        ))}
                      </div>
                    </div>

                    {/* Satisfaction Rating */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-4">
                        How satisfied are you with Franklink overall? *
                      </label>
                      <div className="flex flex-wrap gap-3 justify-center">
                        {satisfactionLevels.map((level) => (
                          <button
                            key={level.value}
                            type="button"
                            onClick={() => handleSatisfactionChange(level.value)}
                            className={`flex flex-col items-center p-4 rounded-xl border-2 transition-all ${
                              formData.satisfaction === level.value
                                ? 'border-blue-500 bg-blue-50'
                                : 'border-gray-200 hover:border-blue-300'
                            }`}
                          >
                            <span className="text-2xl mb-2">{level.emoji}</span>
                            <span className="text-sm font-medium">{level.label}</span>
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Would Recommend */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-4">
                        Would you recommend Franklink to other students? *
                      </label>
                      <div className="flex gap-4">
                        <label className="flex items-center">
                          <input
                            type="radio"
                            name="wouldRecommend"
                            value="yes"
                            checked={formData.wouldRecommend === 'yes'}
                            onChange={handleInputChange}
                            className="mr-2"
                            required
                          />
                          Yes, definitely
                        </label>
                        <label className="flex items-center">
                          <input
                            type="radio"
                            name="wouldRecommend"
                            value="maybe"
                            checked={formData.wouldRecommend === 'maybe'}
                            onChange={handleInputChange}
                            className="mr-2"
                            required
                          />
                          Maybe
                        </label>
                        <label className="flex items-center">
                          <input
                            type="radio"
                            name="wouldRecommend"
                            value="no"
                            checked={formData.wouldRecommend === 'no'}
                            onChange={handleInputChange}
                            className="mr-2"
                            required
                          />
                          No
                        </label>
                      </div>
                    </div>

                    {/* Detailed Feedback */}
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                        Tell us more about your experience *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={6}
                        value={formData.message}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-none"
                        placeholder="What do you like about Franklink? What could be improved? Any specific features you'd like to see? Share your thoughts here..."
                      />
                    </div>

                    <Button
                      type="submit"
                      size="xl"
                      variant="gradient"
                      disabled={isSubmitting}
                      className="w-full group"
                    >
                      {isSubmitting ? (
                        <>Submitting Feedback...</>
                      ) : (
                        <>
                          Submit Feedback
                          <Send className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                        </>
                      )}
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Why Feedback Matters */}
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
              Why Your Feedback Matters
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Every piece of feedback helps us build a better platform for students everywhere.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-center"
            >
              <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center mb-6">
                <Lightbulb className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Drives Innovation</h3>
              <p className="text-gray-600 leading-relaxed">
                Your suggestions directly influence our product roadmap and help us build
                features that students actually need.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-center"
            >
              <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-green-600 to-cyan-600 flex items-center justify-center mb-6">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Improves Experience</h3>
              <p className="text-gray-600 leading-relaxed">
                Bug reports and UX feedback help us create a smoother, more intuitive
                platform for all users.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-center"
            >
              <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center mb-6">
                <Star className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Shapes Success</h3>
              <p className="text-gray-600 leading-relaxed">
                Understanding what works helps us double down on features that truly
                make a difference in students' careers.
              </p>
            </motion.div>
          </div>
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
            className="text-center bg-gradient-to-r from-blue-50 to-purple-50 rounded-3xl p-12 border border-blue-100"
          >
            <Zap className="w-16 h-16 text-blue-600 mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Ready to Experience Franklink?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Join thousands of students who are already transforming their
              career discovery with AI-powered intelligence.
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