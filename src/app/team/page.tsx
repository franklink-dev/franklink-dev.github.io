'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  Linkedin,
  Github,
  Twitter,
  Mail,
  Users,
  Star,
  ArrowRight,
  Heart
} from 'lucide-react';
import Image from 'next/image';

const teamMembers = [
  {
    name: 'Eric Bi',
    role: 'Co-Founder & CEO',
    image: '/eric.jpeg',
    bio: 'AI and data analysis expert from Wharton/Penn Engineering with experience building innovative educational technology solutions that serve thousands of users.',
    expertise: ['AI/ML', 'Product Strategy', 'Student Networks'],
    social: {
      linkedin: 'https://www.linkedin.com/in/eric-bi-831386352/',
      github: 'https://github.com/ericnerwala',
      email: 'bialpha@seas.upenn.edu'
    }
  },
  {
    name: 'Cici Cai',
    role: 'Technical Co-Founder',
    image: '/cici.jpeg',
    bio: 'Full-stack engineer of multiple large-scale web applications serving hundreds of users, with research experience in machine learning at top institutions.',
    expertise: ['Full-Stack Development', 'System Architecture', 'AI/NLP'],
    social: {
      linkedin: 'https://www.linkedin.com/in/cici-cai379/',
      github: 'https://github.com/cicicai379',
      email: 'cicicai@berkeley.edu'
    }
  },
  {
    name: 'Jimmy Zhong',
    role: 'Technical Co-Founder',
    image: '/jimmy.jpeg',
    bio: 'Technical operations expert who developed and published innovative ML-backed platforms, with experience building systems that analyze complex data at scale.',
    expertise: ['Technical Operations', 'ML Engineering', 'Process Optimization'],
    social: {
      linkedin: 'https://www.linkedin.com/in/jimmy-zhong-517973242/',
      email: 'zzhong29@sas.upenn.edu'
    }
  },
  {
    name: 'Samson Shi',
    role: 'Product Co-Founder',
    image: '/samson.jpeg',
    bio: 'Product innovator with recognition in competitive data analysis, specializing in building intelligent systems that solve complex real-world problems for students.',
    expertise: ['Product Strategy', 'AI Systems', 'User Experience'],
    social: {
      linkedin: 'https://www.linkedin.com/in/samson-shi-2a2ab0294/',
      email: 'samsonshi@berkeley.edu'
    }
  },
  {
    name: 'Daniel Wong',
    role: 'Business Co-Founder',
    image: '/daniel.jpeg',
    bio: 'Business development leader with proven track record in securing significant client partnerships and managing large-scale operations across diverse industries.',
    expertise: ['Business Strategy', 'Growth & Marketing', 'Business Development'],
    social: {
      linkedin: 'https://www.linkedin.com/in/daniel-tl-wong/',
      email: 'danieltlwong@berkeley.edu'
    }
  }
];

const companyValues = [
  {
    title: 'Student-First Mindset',
    description: 'Every decision is made with student success and experience at the forefront.'
  },
  {
    title: 'Collaborative Innovation',
    description: 'We believe the best solutions come from diverse perspectives working together.'
  },
  {
    title: 'Transparent Communication',
    description: 'Open, honest dialogue drives our team culture and product development.'
  },
  {
    title: 'Continuous Learning',
    description: 'We\'re always growing, both as individuals and as a company.'
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

export default function TeamPage() {
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
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-100 text-purple-700 text-sm font-medium mb-6">
              <Users className="w-4 h-4" />
              Meet the Team
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              The People Behind{' '}
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-500 bg-clip-text text-transparent">
                Franklink
              </span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              We're a passionate team of students and builders dedicated to revolutionizing
              how students discover career opportunities through AI-powered intelligence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Team Members Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12"
          >
            {teamMembers.map((member, index) => (
              <motion.div key={member.name} variants={itemVariants}>
                <Card className="h-full hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-0 bg-white/80 backdrop-blur-sm">
                  <CardHeader className="text-center pb-4">
                    <div className="relative w-32 h-32 mx-auto mb-6">
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full p-1">
                        <Image
                          src={member.image}
                          alt={member.name}
                          width={128}
                          height={128}
                          className="w-full h-full object-cover rounded-full"
                        />
                      </div>
                    </div>
                    <CardTitle className="text-2xl font-bold text-gray-900 mb-2">
                      {member.name}
                    </CardTitle>
                    <CardDescription className="text-lg font-medium text-blue-600 mb-4">
                      {member.role}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <p className="text-gray-600 leading-relaxed mb-6 text-center">
                      {member.bio}
                    </p>

                    {/* Expertise Tags */}
                    <div className="flex flex-wrap justify-center gap-2 mb-6">
                      {member.expertise.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="px-3 py-1 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 text-sm font-medium rounded-full border border-blue-200"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>

                    {/* Social Links */}
                    <div className="flex justify-center space-x-4">
                      {member.social.linkedin && (
                        <a
                          href={member.social.linkedin}
                          className="text-gray-400 hover:text-blue-600 transition-colors"
                          aria-label={`${member.name} LinkedIn`}
                        >
                          <Linkedin className="w-5 h-5" />
                        </a>
                      )}
                      {member.social.github && (
                        <a
                          href={member.social.github}
                          className="text-gray-400 hover:text-gray-700 transition-colors"
                          aria-label={`${member.name} GitHub`}
                        >
                          <Github className="w-5 h-5" />
                        </a>
                      )}

                      <a
                        href={`mailto:${member.social.email}`}
                        className="text-gray-400 hover:text-red-500 transition-colors"
                        aria-label={`Email ${member.name}`}
                      >
                        <Mail className="w-5 h-5" />
                      </a>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Company Values */}
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
              Our Team Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that unite us and drive our mission to transform
              career discovery for students everywhere.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {companyValues.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 border border-blue-100"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Us Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <Heart className="w-16 h-16 mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Want to Join Our Mission?
            </h2>
            <p className="text-xl leading-relaxed max-w-3xl mx-auto mb-8">
              We're always looking for passionate individuals who share our vision
              of transforming career discovery for students. If you're interested
              in making a real impact, we'd love to hear from you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="xl" variant="outline" className="bg-white text-blue-600 hover:bg-gray-50 whitespace-nowrap" asChild>
                <a href="/contact" className="flex items-center">
                  Get in Touch
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <Button size="xl" variant="outline" className="bg-transparent border-white text-white hover:bg-white/10 whitespace-nowrap" asChild>
                <a href="mailto:info@franklink.app" className="flex items-center">
                  Send Us an Email
                  <Mail className="ml-2 h-5 w-5" />
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Connect Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center bg-gradient-to-r from-blue-50 to-purple-50 rounded-3xl p-12 border border-blue-100"
          >
            <Star className="w-16 h-16 text-blue-600 mx-auto mb-6" />
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