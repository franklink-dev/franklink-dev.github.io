'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  ChevronDown,
  HelpCircle,
  Search,
  MessageCircle,
  ArrowRight,
  Lightbulb,
  Users,
  Zap
} from 'lucide-react';
import { cn } from '@/lib/utils';

const faqCategories = [
  {
    name: 'All',
    count: 12
  },
  {
    name: 'Getting Started',
    count: 4
  },
  {
    name: 'Features',
    count: 4
  },
  {
    name: 'Privacy & Security',
    count: 2
  },
  {
    name: 'Pricing',
    count: 2
  }
];

const faqs = [
  {
    id: 1,
    category: 'Getting Started',
    question: 'How does Franklink find opportunities?',
    answer: 'Our AI continuously scans thousands of sources including university websites, department pages, company announcements, research lab updates, and event listings. We use natural language processing to understand and categorize opportunities, then match them to your specific interests and background.'
  },
  {
    id: 2,
    category: 'Pricing',
    question: 'Is Franklink really free?',
    answer: 'Yes! Our free tier includes basic opportunity discovery, email notifications, and the ability to save up to 5 opportunities. You can upgrade to Pro for advanced AI matching, unlimited saves, and premium features, but the core functionality is completely free.'
  },
  {
    id: 3,
    category: 'Features',
    question: 'How do I get personalized recommendations?',
    answer: 'After signing up, you\'ll complete a brief profile including your academic interests, career goals, skills, and preferences. Our AI uses this information to filter and rank opportunities specifically for you. The more you use Franklink, the better our recommendations become.'
  },
  {
    id: 4,
    category: 'Features',
    question: 'What types of opportunities does Franklink find?',
    answer: 'We discover research lab positions, hackathons, networking events, company info sessions, club applications, internships, scholarships, conference opportunities, startup competitions, and other career-relevant events that often get lost in email or buried on websites.'
  },
  {
    id: 5,
    category: 'Features',
    question: 'How often are new opportunities added?',
    answer: 'Our AI runs continuous scans throughout the day, so new opportunities are added in real-time. Most users see 5-10 new relevant opportunities per week, with higher volume during peak recruitment seasons (fall and spring semesters).'
  },
  {
    id: 6,
    category: 'Getting Started',
    question: 'Can I contribute opportunities I find?',
    answer: 'Absolutely! Community contributions are core to our platform. When you share opportunities you discover, you help other students while gaining access to our full database. It\'s a win-win system that makes career discovery better for everyone.'
  },
  {
    id: 7,
    category: 'Features',
    question: 'How accurate are the opportunity matches?',
    answer: 'Our AI achieves 85%+ accuracy in matching relevant opportunities to user profiles. We continuously improve our algorithms based on user feedback and engagement patterns. You can also customize your preferences and filters to fine-tune your matches.'
  },
  {
    id: 8,
    category: 'Getting Started',
    question: 'What happens if I miss a deadline?',
    answer: 'We send automated reminders for upcoming deadlines via email and mobile notifications. Our Pro users get priority alerts and calendar integrations to ensure they never miss important dates. However, we always recommend setting your own reminders as backup.'
  },
  {
    id: 9,
    category: 'Privacy & Security',
    question: 'How do you protect my data?',
    answer: 'We take privacy seriously. All data processing follows FERPA guidelines and uses enterprise-grade security. We only collect information necessary to provide personalized recommendations and never share personal data with third parties without explicit consent.'
  },
  {
    id: 10,
    category: 'Privacy & Security',
    question: 'Can I control what information is used?',
    answer: 'Yes, you have full control over your privacy settings. You can choose what information to share, how it\'s used for recommendations, and can delete your data at any time. We believe in transparent, user-controlled privacy.'
  },
  {
    id: 11,
    category: 'Pricing',
    question: 'What\'s included in the Pro plan?',
    answer: 'Pro includes unlimited access to exclusive, high-quality career and networking opportunities, personalized step-by-step career path builder, early access to upcoming features and platform updates, priority notifications, analytics dashboard, custom filters, and priority support. All for $14.99/month with a free trial available.'
  },
  {
    id: 12,
    category: 'Getting Started',
    question: 'Which universities does Franklink support?',
    answer: 'We currently support 50+ universities and are rapidly expanding. Our AI can discover opportunities at any university, but we have enhanced coverage for our partner schools. Contact us if you\'d like to add your university to our priority list.'
  }
];

export default function FAQPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [openItems, setOpenItems] = useState<number[]>([1]); // First item open by default
  const [searchQuery, setSearchQuery] = useState('');

  const toggleItem = (id: number) => {
    setOpenItems(prev =>
      prev.includes(id)
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };

  const filteredFaqs = faqs.filter(faq => {
    const matchesCategory = selectedCategory === 'All' || faq.category === selectedCategory;
    const matchesSearch = searchQuery === '' ||
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

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
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-100 text-yellow-700 text-sm font-medium mb-6">
              <HelpCircle className="w-4 h-4" />
              Frequently Asked Questions
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Got{' '}
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-500 bg-clip-text text-transparent">
                Questions?
              </span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto mb-8">
              Everything you need to know about Franklink and how it transforms
              career discovery for students.
            </p>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search questions..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors text-lg"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-wrap justify-center gap-3 mb-12"
          >
            {faqCategories.map((category) => (
              <button
                key={category.name}
                onClick={() => setSelectedCategory(category.name)}
                className={cn(
                  'px-6 py-3 rounded-full font-medium transition-all duration-200',
                  selectedCategory === category.name
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-white text-gray-600 border border-gray-200 hover:border-blue-300 hover:text-blue-600'
                )}
              >
                {category.name} ({category.count})
              </button>
            ))}
          </motion.div>

          {/* FAQ Items */}
          <div className="space-y-4">
            {filteredFaqs.map((faq, index) => (
              <motion.div
                key={faq.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="border border-gray-200 rounded-2xl bg-white shadow-sm hover:shadow-md transition-shadow"
              >
                <button
                  onClick={() => toggleItem(faq.id)}
                  className="w-full px-6 py-6 text-left flex items-center justify-between hover:bg-gray-50 rounded-2xl transition-colors"
                >
                  <div className="flex-1 pr-4">
                    <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 text-xs font-medium rounded-full mb-2">
                      {faq.category}
                    </span>
                    <h3 className="text-lg font-semibold text-gray-900">
                      {faq.question}
                    </h3>
                  </div>
                  <motion.div
                    animate={{ rotate: openItems.includes(faq.id) ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="flex-shrink-0"
                  >
                    <ChevronDown className="w-5 h-5 text-gray-500" />
                  </motion.div>
                </button>
                <AnimatePresence>
                  {openItems.includes(faq.id) && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6">
                        <p className="text-gray-600 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>

          {filteredFaqs.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <Search className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                No questions found
              </h3>
              <p className="text-gray-600">
                Try adjusting your search or selecting a different category.
              </p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Help Cards */}
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
              Still Need Help?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Can't find what you're looking for? We're here to help in multiple ways.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <Card className="text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <CardHeader>
                  <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center mb-4">
                    <MessageCircle className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle>Contact Support</CardTitle>
                  <CardDescription>
                    Get direct help from our team
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" className="whitespace-nowrap" asChild>
                    <a href="/contact" className="flex items-center">
                      Contact Us
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <Card className="text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <CardHeader>
                  <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-green-600 to-cyan-600 flex items-center justify-center mb-4">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle>Join Community</CardTitle>
                  <CardDescription>
                    Connect with other students
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" className="whitespace-nowrap" asChild>
                    <a href="https://discord.gg/7JQSKGgj" className="flex items-center">
                      Join Discord
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <Card className="text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <CardHeader>
                  <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center mb-4">
                    <Lightbulb className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle>Send Feedback</CardTitle>
                  <CardDescription>
                    Help us improve Franklink
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" className="whitespace-nowrap" asChild>
                    <a href="/feedback" className="flex items-center">
                      Give Feedback
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
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
              Ready to Start Your Journey?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Join thousands of students who are already transforming their
              career discovery with Franklink's AI intelligence.
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