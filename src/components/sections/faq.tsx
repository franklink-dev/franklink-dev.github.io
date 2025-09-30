'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { cn } from '@/lib/utils';

const faqs = [
  {
    question: 'How does Franklink find opportunities?',
    answer: 'Our AI continuously scans thousands of sources including university websites, department pages, company announcements, research lab updates, and event listings. We use natural language processing to understand and categorize opportunities, then match them to your specific interests and background.'
  },
  {
    question: 'Is Franklink really free?',
    answer: 'Yes! Our free tier includes basic opportunity discovery, email notifications, and the ability to save up to 5 opportunities. You can upgrade to Pro for advanced AI matching, unlimited saves, and premium features, but the core functionality is completely free.'
  },
  {
    question: 'How do I get personalized recommendations?',
    answer: 'After signing up, you\'ll complete a brief profile including your academic interests, career goals, skills, and preferences. Our AI uses this information to filter and rank opportunities specifically for you. The more you use Franklink, the better our recommendations become.'
  },
  {
    question: 'What types of opportunities does Franklink find?',
    answer: 'We discover research lab positions, hackathons, networking events, company info sessions, club applications, internships, scholarships, conference opportunities, startup competitions, and other career-relevant events that often get lost in email or buried on websites.'
  },
  {
    question: 'How often are new opportunities added?',
    answer: 'Our AI runs continuous scans throughout the day, so new opportunities are added in real-time. Most users see 5-10 new relevant opportunities per week, with higher volume during peak recruitment seasons (fall and spring semesters).'
  },
  {
    question: 'Can I contribute opportunities I find?',
    answer: 'Absolutely! Community contributions are core to our platform. When you share opportunities you discover, you help other students while gaining access to our full database. It\'s a win-win system that makes career discovery better for everyone.'
  },
  {
    question: 'How accurate are the opportunity matches?',
    answer: 'Our AI achieves 85%+ accuracy in matching relevant opportunities to user profiles. We continuously improve our algorithms based on user feedback and engagement patterns. You can also customize your preferences and filters to fine-tune your matches.'
  },
  {
    question: 'What happens if I miss a deadline?',
    answer: 'We send automated reminders for upcoming deadlines via email and mobile notifications. Our Pro users get priority alerts and calendar integrations to ensure they never miss important dates. However, we always recommend setting your own reminders as backup.'
  }
];

export function FAQSection() {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(prev =>
      prev.includes(index)
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  return (
    <section id="faq" className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-medium mb-6">
            <HelpCircle className="w-4 h-4" />
            Frequently Asked Questions
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Got{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              questions?
            </span>
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Everything you need to know about Franklink and how it works.
          </p>
        </motion.div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="border border-gray-200 rounded-2xl bg-white shadow-sm hover:shadow-md transition-shadow"
            >
              <button
                onClick={() => toggleItem(index)}
                className="w-full px-6 py-6 text-left flex items-center justify-between hover:bg-gray-50 rounded-2xl transition-colors"
              >
                <h3 className="text-lg font-semibold text-gray-900 pr-4">
                  {faq.question}
                </h3>
                <motion.div
                  animate={{ rotate: openItems.includes(index) ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="flex-shrink-0"
                >
                  <ChevronDown className="w-5 h-5 text-gray-500" />
                </motion.div>
              </button>
              <AnimatePresence>
                {openItems.includes(index) && (
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

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-3xl p-8 border border-blue-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Still have questions?
            </h3>
            <p className="text-gray-600 mb-6">
              Our team is here to help. Reach out and we'll get back to you as soon as possible.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white font-medium rounded-xl hover:bg-blue-700 transition-colors"
              >
                Contact Support
              </a>
              <a
                href="/feedback"
                className="inline-flex items-center justify-center px-6 py-3 bg-white text-gray-700 font-medium rounded-xl border border-gray-300 hover:bg-gray-50 transition-colors"
              >
                Send Feedback
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}