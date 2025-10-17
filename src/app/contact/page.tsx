'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  MessageCircle,
  ArrowRight,
  CheckCircle,
  Zap
} from 'lucide-react';

const contactMethods = [
  {
    icon: Mail,
    title: 'Email Us',
    description: 'Get in touch via email',
    contact: 'info@franklink.ai',
    action: 'mailto:info@franklink.ai'
  },
  {
    icon: MessageCircle,
    title: 'Join Discord',
    description: 'Chat with our community',
    contact: 'Franklink Discord',
    action: 'https://discord.gg/eVMzKt4T'
  },
  {
    icon: Phone,
    title: 'Schedule a Call',
    description: 'Book a time to chat',
    contact: 'Coming Soon',
    action: '#'
  }
];

const faqs = [
  {
    question: 'How quickly do you respond?',
    answer: 'We typically respond to inquiries within 24 hours during business days.'
  },
  {
    question: 'Can I provide feedback?',
    answer: 'Absolutely! We love hearing from users. Use our feedback form or reach out directly.'
  },
  {
    question: 'Do you offer partnerships?',
    answer: 'Yes, we\'re open to partnerships with universities, career centers, and student organizations.'
  }
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));

    setIsSubmitting(false);
    setIsSubmitted(true);

    // Reset form after success message
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', phone: '', message: '' });
    }, 3000);
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
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-100 text-green-700 text-sm font-medium mb-6">
              <MessageCircle className="w-4 h-4" />
              Get in Touch
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Let's Start a{' '}
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-500 bg-clip-text text-transparent">
                Conversation
              </span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              Have questions about Franklink? Want to share feedback or explore partnerships?
              We'd love to hear from you.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {contactMethods.map((method, index) => {
              const Icon = method.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 bg-white/80 backdrop-blur-sm">
                    <CardHeader>
                      <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center mb-4">
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <CardTitle className="text-xl">{method.title}</CardTitle>
                      <CardDescription>{method.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-700 font-medium mb-4">{method.contact}</p>
                      {method.action !== '#' && (
                        <Button variant="outline" className="whitespace-nowrap" asChild>
                          <a href={method.action} className="flex items-center">
                            Get in Touch
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </a>
                        </Button>
                      )}
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <Card className="p-8">
                <CardHeader className="px-0 pt-0">
                  <CardTitle className="text-2xl">Send us a Message</CardTitle>
                  <CardDescription>
                    Fill out the form below and we'll get back to you as soon as possible.
                  </CardDescription>
                </CardHeader>
                <CardContent className="px-0 pb-0">
                  {isSubmitted ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="text-center py-8"
                    >
                      <CheckCircle className="w-16 h-16 text-green-600 mx-auto mb-4" />
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        Message Sent Successfully!
                      </h3>
                      <p className="text-gray-600">
                        Thank you for reaching out. We'll get back to you soon.
                      </p>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                            Full Name *
                          </label>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            required
                            value={formData.name}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                            placeholder="Your full name"
                          />
                        </div>
                        <div>
                          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                            Email Address *
                          </label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            required
                            value={formData.email}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                            placeholder="your@email.com"
                          />
                        </div>
                      </div>

                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                          Phone Number (Optional)
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                          placeholder="Your phone number"
                        />
                      </div>

                      <div>
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                          Message *
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          required
                          rows={6}
                          value={formData.message}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-none"
                          placeholder="Tell us about your inquiry, feedback, or how we can help..."
                        />
                      </div>

                      <Button
                        type="submit"
                        size="lg"
                        variant="gradient"
                        disabled={isSubmitting}
                        className="w-full group"
                      >
                        {isSubmitting ? (
                          <>Sending...</>
                        ) : (
                          <>
                            Send Message
                            <Send className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                          </>
                        )}
                      </Button>
                    </form>
                  )}
                </CardContent>
              </Card>
            </motion.div>

            {/* Contact Info & FAQ */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-8"
            >
              {/* Office Info */}
              <Card className="p-8">
                <CardHeader className="px-0 pt-0">
                  <CardTitle className="text-xl flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-blue-600" />
                    Our Information
                  </CardTitle>
                </CardHeader>
                <CardContent className="px-0 pb-0 space-y-4">
                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-gray-500 mt-1" />
                    <div>
                      <p className="font-medium text-gray-900">Response Time</p>
                      <p className="text-gray-600">Within 24 hours</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-gray-500 mt-1" />
                    <div>
                      <p className="font-medium text-gray-900">Email</p>
                      <p className="text-gray-600">info@franklink.ai</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <MessageCircle className="w-5 h-5 text-gray-500 mt-1" />
                    <div>
                      <p className="font-medium text-gray-900">Discord Community</p>
                      <p className="text-gray-600">Join our active Discord server</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Quick FAQ */}
              <Card className="p-8">
                <CardHeader className="px-0 pt-0">
                  <CardTitle className="text-xl">Quick Answers</CardTitle>
                  <CardDescription>
                    Common questions we receive
                  </CardDescription>
                </CardHeader>
                <CardContent className="px-0 pb-0 space-y-4">
                  {faqs.map((faq, index) => (
                    <div key={index} className="border-b border-gray-100 pb-4 last:border-b-0 last:pb-0">
                      <h4 className="font-medium text-gray-900 mb-2">{faq.question}</h4>
                      <p className="text-gray-600 text-sm">{faq.answer}</p>
                    </div>
                  ))}
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