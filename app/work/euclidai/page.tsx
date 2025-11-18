'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaChevronRight } from 'react-icons/fa';

export default function EuclidAI() {
  const achievements = [
    {
      title: 'Secured Funding',
      description: 'Built financial model and business case',
      details: [
        'Presented to investors with market analysis',
        'Demonstrated product-market fit with early traction',
        'Result: $200K seed funding approved'
      ]
    },
    {
      title: '0-to-1 Product Launch',
      description: 'Managed 8-month MVP development',
      details: [
        'Coordinated engineering, design, and sales teams',
        'Balanced technical feasibility with market demands',
        'Result: Successfully launched and onboarded 100+ homes in Q1'
      ]
    },
    {
      title: 'Customer Feedback Loop',
      description: 'Integrated Freshdesk support system',
      details: [
        'Established bi-weekly review process for tickets',
        'Created data-driven prioritization framework',
        'Result: 45% improvement in issue resolution time'
      ]
    },
    {
      title: 'B2B2C Go-to-Market',
      description: 'Identified realtor partners as distribution channel',
      details: [
        'Created product demos and sales materials',
        'Trained partners on product positioning',
        'Result: Signed 2 realtor partners, efficient customer acquisition'
      ]
    }
  ];

  const features = [
    'Mobile app for device control',
    'AI-based automation rules',
    'Remote access and scheduling',
    'Voice integration',
    'Energy monitoring',
    'Multi-user access'
  ];

  return (
    <div className="min-h-screen">
      {/* HERO SECTION */}
      <section className="relative px-4 py-16 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
        <div className="max-w-4xl mx-auto">
          {/* Breadcrumb */}
          <motion.div
            className="flex items-center gap-2 text-sm text-text-secondary mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Link href="/" className="hover:text-primary transition-colors">Home</Link>
            <FaChevronRight size={12} />
            <Link href="/work" className="hover:text-primary transition-colors">Work</Link>
            <FaChevronRight size={12} />
            <span className="text-text-primary">EuclidAI</span>
          </motion.div>

          {/* Logo/Icon */}
          <motion.div
            className="text-6xl mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            🏠
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            className="text-4xl md:text-5xl font-bold text-text-primary mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            EuclidAI Smart Home Platform
          </motion.h1>

          {/* Tagline */}
          <motion.p
            className="text-xl md:text-2xl text-text-secondary mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            IoT Platform for AI-Powered Home Automation
          </motion.p>

          {/* Metadata Row */}
          <motion.div
            className="flex flex-wrap gap-6 mb-8 text-text-secondary"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div>
              <span className="font-semibold text-text-primary">Role:</span> Product Manager
            </div>
            <div>
              <span className="font-semibold text-text-primary">Timeline:</span> Jan 2021 - Nov 2022
            </div>
            <div>
              <span className="font-semibold text-text-primary">Team:</span> 8-person cross-functional team
            </div>
            <div>
              <span className="font-semibold text-text-primary">Status:</span> <span className="text-green-500">Launched</span>
            </div>
          </motion.div>

          {/* Tech Stack */}
          <motion.div
            className="flex flex-wrap gap-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            {['React', 'AWS', 'IoT', 'Firebase', 'Freshdesk'].map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm font-medium border border-primary/30"
              >
                {tech}
              </span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* QUICK STATS */}
      <section className="px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-gradient-to-br from-primary/20 to-secondary/20 border border-primary/30 rounded-xl p-6 text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">500+</div>
              <div className="text-sm text-text-secondary">Users</div>
            </div>
            <div className="bg-gradient-to-br from-primary/20 to-secondary/20 border border-primary/30 rounded-xl p-6 text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">100+</div>
              <div className="text-sm text-text-secondary">Homes Installed</div>
            </div>
            <div className="bg-gradient-to-br from-primary/20 to-secondary/20 border border-primary/30 rounded-xl p-6 text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">$200K</div>
              <div className="text-sm text-text-secondary">Seed Funding</div>
            </div>
            <div className="bg-gradient-to-br from-primary/20 to-secondary/20 border border-primary/30 rounded-xl p-6 text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">45%</div>
              <div className="text-sm text-text-secondary">Faster Resolution</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* OVERVIEW SECTION */}
      <section className="px-4 py-16 bg-surface/30">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-text-primary mb-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Overview
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* The Challenge */}
            <motion.div
              className="bg-surface border border-surface rounded-xl p-8"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-2xl font-bold text-primary mb-4">The Challenge</h3>
              <p className="text-text-secondary leading-relaxed">
                Smart home market dominated by expensive systems requiring professional installation.
                Non-technical homeowners locked out of home automation. Existing solutions cost $5,000+
                and required electricians to install.
              </p>
            </motion.div>

            {/* The Solution */}
            <motion.div
              className="bg-surface border border-surface rounded-xl p-8"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-2xl font-bold text-secondary mb-4">The Solution</h3>
              <p className="text-text-secondary leading-relaxed">
                Developed IoT platform with mobile app that works with affordable WiFi-enabled switches,
                making smart homes accessible. DIY installation at 1/5th the cost of traditional systems.
                AI-powered automation learns user preferences.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* MY ROLE */}
      <section className="px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-text-primary mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            My Role
          </motion.h2>

          <motion.div
            className="bg-surface border border-primary/30 rounded-xl p-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <p className="text-text-secondary text-lg leading-relaxed mb-6">
              As Product Manager at this early-stage startup, I:
            </p>
            <ul className="space-y-3 text-text-secondary text-lg">
              <li className="flex items-start gap-3">
                <span className="text-primary">•</span>
                <span>Defined product vision and roadmap based on market research and user feedback</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary">•</span>
                <span>Led cross-functional team of 8 engineers and designers through 0-to-1 development</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary">•</span>
                <span>Authored business case that secured $200K seed funding from investors</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary">•</span>
                <span>Established customer feedback systems and data-driven prioritization framework</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary">•</span>
                <span>Executed B2B2C go-to-market strategy through realtor partners</span>
              </li>
            </ul>
          </motion.div>
        </div>
      </section>

      {/* KEY ACHIEVEMENTS */}
      <section className="px-4 py-16 bg-surface/30">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-text-primary mb-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Key Achievements
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.title}
                className="bg-surface border border-surface hover:border-primary/50 rounded-xl p-6 transition-all"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <h3 className="text-xl font-bold text-primary mb-2">{achievement.title}</h3>
                <p className="text-text-secondary mb-4">{achievement.description}</p>
                <ul className="space-y-2">
                  {achievement.details.map((detail) => (
                    <li key={detail} className="flex items-start gap-2 text-text-secondary text-sm">
                      <span className="text-secondary">•</span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PRODUCT FEATURES */}
      <section className="px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-text-primary mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Product Features
          </motion.h2>

          <motion.div
            className="grid md:grid-cols-2 gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {features.map((feature) => (
              <div
                key={feature}
                className="bg-surface border border-surface hover:border-primary/50 rounded-lg p-4 transition-all"
              >
                <div className="flex items-center gap-3">
                  <span className="text-2xl">✓</span>
                  <span className="text-text-secondary">{feature}</span>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* WHAT I LEARNED */}
      <section className="px-4 py-16 bg-surface/30">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-text-primary mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            What I Learned
          </motion.h2>

          <motion.p
            className="text-text-secondary text-lg leading-relaxed mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Three key PM lessons from building EuclidAI:
          </motion.p>

          <div className="space-y-6">
            <motion.div
              className="bg-surface border-l-4 border-primary rounded-r-xl p-6"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3 className="text-xl font-bold text-primary mb-3">1. Distribution is as important as product</h3>
              <p className="text-text-secondary leading-relaxed">
                Our realtor partnership strategy was more valuable than any feature we built. A mediocre product
                with great distribution beats a great product with no distribution. GTM strategy matters.
              </p>
            </motion.div>

            <motion.div
              className="bg-surface border-l-4 border-secondary rounded-r-xl p-6"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h3 className="text-xl font-bold text-secondary mb-3">2. Support systems are product features</h3>
              <p className="text-text-secondary leading-relaxed">
                Freshdesk integration wasn't just operations - it became a competitive advantage and data goldmine.
                Fast support response time was our #1 differentiator against established competitors.
              </p>
            </motion.div>

            <motion.div
              className="bg-surface border-l-4 border-primary rounded-r-xl p-6"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <h3 className="text-xl font-bold text-primary mb-3">3. Fundraising requires storytelling</h3>
              <p className="text-text-secondary leading-relaxed">
                The business case that secured funding wasn't about tech specs or features - it was about market
                opportunity, customer pain points, and clear ROI. Numbers matter, but narrative wins.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* COMING SOON CTA */}
      <section className="px-4 py-16 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-6">
            Full Case Study Coming Soon
          </h2>
          <p className="text-xl text-text-secondary mb-8 max-w-2xl mx-auto">
            This page will be expanded with detailed PM decisions, screenshots, and deeper analysis of the product journey.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/work"
              className="inline-flex items-center justify-center px-8 py-4 bg-primary text-white font-semibold rounded-lg hover:bg-primary/80 transition-all hover:scale-105"
            >
              View More Projects
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-primary text-primary font-semibold rounded-lg hover:bg-primary/10 transition-all hover:scale-105"
            >
              Read My Story
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
