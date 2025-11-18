'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaGithub, FaChevronRight, FaCheckCircle } from 'react-icons/fa';

export default function ProductOpsDashboard() {
  const features = [
    {
      title: 'Launch Workstream Tracking',
      description: 'Track all launch activities in one dashboard',
      details: [
        'Status updates across teams',
        'Dependency mapping',
        'Real-time progress visibility'
      ]
    },
    {
      title: 'AI Risk Detection',
      description: 'OpenAI-powered chatbot analyzes launch data',
      details: [
        'Flags potential blockers',
        'Suggests mitigation strategies',
        'Proactive risk identification'
      ]
    },
    {
      title: 'Stakeholder Visibility',
      description: 'Real-time dashboards for executives',
      details: [
        'Automated status reports',
        'Cross-functional alignment',
        'Transparent communication'
      ]
    }
  ];

  const currentStatus = [
    { text: 'MVP functionality complete', done: true },
    { text: 'Database schema designed', done: true },
    { text: 'n8n workflow automation built', done: true },
    { text: 'Frontend UI in progress', done: false },
    { text: 'AI chatbot integration underway', done: false },
    { text: 'Planning user testing with PM community', done: false }
  ];

  const learnings = [
    'Building AI chatbots with function calling',
    'Real-time data synchronization',
    'Product ops best practices',
    'n8n advanced automation'
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
            <span className="text-text-primary">Product Ops Dashboard</span>
          </motion.div>

          {/* Logo/Icon */}
          <motion.div
            className="text-6xl mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            📊
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            className="text-4xl md:text-5xl font-bold text-text-primary mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Product Operations Dashboard
          </motion.h1>

          {/* Tagline */}
          <motion.p
            className="text-xl md:text-2xl text-text-secondary mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Real-time Product Launch Tracking System
          </motion.p>

          {/* Metadata Row */}
          <motion.div
            className="flex flex-wrap gap-6 mb-8 text-text-secondary"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div>
              <span className="font-semibold text-text-primary">Role:</span> Solo Product Manager & Developer
            </div>
            <div>
              <span className="font-semibold text-text-primary">Timeline:</span> November 2024 - Present
            </div>
            <div>
              <span className="font-semibold text-text-primary">Status:</span> <span className="text-yellow-500">In Development</span>
            </div>
          </motion.div>

          {/* Tech Stack */}
          <motion.div
            className="flex flex-wrap gap-2 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            {['React', 'MongoDB', 'n8n', 'OpenAI API'].map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm font-medium border border-primary/30"
              >
                {tech}
              </span>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <button
              disabled
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-surface text-text-secondary font-semibold rounded-lg cursor-not-allowed opacity-50"
            >
              <FaGithub size={20} />
              View on GitHub <span className="ml-2 text-sm">(Private Repo)</span>
            </button>
            <Link
              href="/work"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-primary text-primary font-semibold rounded-lg hover:bg-primary/10 transition-all hover:scale-105"
            >
              Back to All Projects
            </Link>
          </motion.div>
        </div>
      </section>

      {/* OVERVIEW SECTION */}
      <section className="px-4 py-16">
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
                Product managers lack a centralized place to track multiple product launches simultaneously,
                leading to missed dependencies and GTM risks. Information is scattered across Notion, Slack,
                JIRA, and email, making it impossible to see the full picture.
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
                Built an internal tool that centralizes product lifecycle tracking, provides real-time visibility
                for stakeholders, and uses AI to identify risks. A single source of truth for all product launches
                with automated insights and proactive risk detection.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* KEY FEATURES SECTION */}
      <section className="px-4 py-16 bg-surface/30">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-text-primary mb-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Key Features
          </motion.h2>

          <div className="space-y-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                className="bg-surface border border-surface hover:border-primary/50 rounded-xl p-8 transition-all"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <h3 className="text-2xl font-bold text-primary mb-3">{feature.title}</h3>
                <p className="text-text-secondary text-lg mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.details.map((detail) => (
                    <li key={detail} className="flex items-start gap-2 text-text-secondary">
                      <span className="text-primary">•</span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY I BUILT THIS */}
      <section className="px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-text-primary mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Why I Built This
          </motion.h2>

          <motion.p
            className="text-text-secondary text-lg leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            During my PM roles, I noticed a recurring problem: scattered launch information across Notion, Slack,
            JIRA, and email. Every status meeting meant scrambling to gather updates from multiple sources.
            Dependencies were discovered too late. Risks weren't visible until they became issues.
            <br /><br />
            This tool solves that by creating a <strong className="text-text-primary">single source of truth</strong>
            {' '}for product launches. It automates the tedious work of status collection and uses AI to surface
            insights that a human might miss.
          </motion.p>
        </div>
      </section>

      {/* CURRENT STATUS */}
      <section className="px-4 py-16 bg-surface/30">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-text-primary mb-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Current Status
          </motion.h2>

          <motion.div
            className="bg-surface border border-primary/30 rounded-xl p-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <ul className="space-y-4">
              {currentStatus.map((item, index) => (
                <motion.li
                  key={item.text}
                  className="flex items-start gap-3"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <span className="text-2xl">
                    {item.done ? '✅' : item.text.includes('in progress') || item.text.includes('underway') ? '🚧' : '⏳'}
                  </span>
                  <span className={`text-lg ${item.done ? 'text-text-primary' : 'text-text-secondary'}`}>
                    {item.text}
                  </span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* WHAT I'M LEARNING */}
      <section className="px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-text-primary mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            What I'm Learning
          </motion.h2>

          <motion.div
            className="grid md:grid-cols-2 gap-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {learnings.map((learning, index) => (
              <div
                key={learning}
                className="bg-surface border border-surface hover:border-primary/50 rounded-xl p-6 transition-all"
              >
                <div className="flex items-start gap-3">
                  <FaCheckCircle className="text-primary mt-1 flex-shrink-0" size={20} />
                  <span className="text-text-secondary text-lg">{learning}</span>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* COMING SOON */}
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
            This page will be updated with full case study, screenshots, and results once the MVP is launched
            and validated with real users.
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
