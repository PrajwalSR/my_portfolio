'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';

type TabType = 'products' | 'analysis' | 'writing';
type FilterType = 'all' | 'strategy' | 'growth' | 'design' | 'monetization';

export default function Work() {
  const [activeTab, setActiveTab] = useState<TabType>('products');
  const [activeFilter, setActiveFilter] = useState<FilterType>('all');

  const tabs = [
    { id: 'products' as TabType, label: 'Products I Built' },
    { id: 'analysis' as TabType, label: 'Product Analysis' },
    { id: 'writing' as TabType, label: 'Writing' },
  ];

  const filters = [
    { id: 'all' as FilterType, label: 'All' },
    { id: 'strategy' as FilterType, label: 'Strategy' },
    { id: 'growth' as FilterType, label: 'Growth' },
    { id: 'design' as FilterType, label: 'Design' },
    { id: 'monetization' as FilterType, label: 'Monetization' },
  ];

  const products = [
    {
      title: 'Archie',
      tagline: 'AI System Architect',
      description: 'AI-powered tool that generates production-ready architecture blueprints for non-technical founders. Includes compliance detection, dual AI providers, and cost estimates.',
      metrics: ['Open Source', 'MIT Licensed', 'HIPAA/PCI Detection'],
      techStack: ['TypeScript', 'Node.js', 'OpenAI', 'Claude AI', 'Express', 'Mermaid'],
      status: 'Live',
      statusColor: 'bg-green-500',
      link: '/work/archie',
      github: 'https://github.com/PrajwalSR/archie',
    },
    {
      title: 'Product Ops Dashboard',
      tagline: 'Launch Tracking System',
      description: 'Full-stack internal tool to centralize product lifecycle tracking, providing real-time visibility for stakeholders and mitigating go-to-market risks.',
      metrics: ['Real-time Tracking', 'AI Chatbot', 'Risk Mitigation'],
      techStack: ['React', 'MongoDB', 'n8n', 'OpenAI API'],
      status: 'In Development',
      statusColor: 'bg-yellow-500',
      link: '/work/product-ops-dashboard',
      github: null,
    },
    {
      title: 'EuclidAI',
      tagline: 'IoT Smart Home Platform',
      description: 'Led 0-to-1 product development for AI-powered home automation platform. Managed cross-functional team and delivered MVP serving 500+ users.',
      metrics: ['500+ Users', '100+ Homes', '$200K Funding'],
      techStack: ['React', 'AWS', 'IoT', 'Firebase', 'Freshdesk'],
      status: 'Launched',
      statusColor: 'bg-green-500',
      link: '/work/euclidai',
      github: null,
    },
  ];

  const analyses = [
    {
      title: 'How Stripe Converts Developers',
      category: 'Growth',
      description: 'Analysis of Stripe\'s developer-first go-to-market strategy, documentation excellence, and product-led growth tactics.',
      tags: ['B2B', 'Developer Tools', 'PLG'],
      date: 'December 2024',
      readTime: '8 min read',
      comingSoon: true,
    },
    {
      title: 'Framer\'s Interactive Design Strategy',
      category: 'Product Strategy',
      description: 'Breaking down how Framer uses interactive prototypes and visual appeal to differentiate in the crowded no-code space.',
      tags: ['Design Tools', 'SaaS', 'UX'],
      date: 'December 2024',
      readTime: '6 min read',
      comingSoon: true,
    },
    {
      title: 'Notion\'s Freemium Playbook',
      category: 'Monetization',
      description: 'How Notion balances free features vs paid tiers to maximize user acquisition while driving enterprise revenue.',
      tags: ['Productivity', 'Freemium', 'B2C/B2B'],
      date: 'January 2025',
      readTime: '10 min read',
      comingSoon: true,
    },
  ];

  const writings = [
    {
      title: 'Building AI Products: What I Learned from Archie',
      date: 'December 2024',
      excerpt: 'Lessons from building an AI-powered system architect - from choosing between multiple LLM providers to handling compliance detection...',
      tags: ['AI', 'Product Development', 'Lessons Learned'],
      readTime: '5 min read',
      comingSoon: true,
    },
    {
      title: 'The PM\'s Guide to Technical Prototyping',
      date: 'November 2024',
      excerpt: 'Why product managers should learn to code (even just the basics) and how building prototypes improves your product intuition...',
      tags: ['Product Management', 'Technical Skills', 'Career'],
      readTime: '7 min read',
      comingSoon: true,
    },
  ];

  return (
    <div className="min-h-screen">
      {/* HERO SECTION */}
      <section className="px-4 py-12 bg-surface/30">
        <div className="max-w-7xl mx-auto">
          <motion.h1
            className="text-4xl md:text-5xl font-bold text-text-primary mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            My Work
          </motion.h1>
          <motion.p
            className="text-xl text-text-secondary"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Products I've built, companies I've analyzed, and thoughts I've shared
          </motion.p>
        </div>
      </section>

      {/* TAB NAVIGATION */}
      <div className="sticky top-16 z-40 bg-background/95 backdrop-blur-md border-b border-surface">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex space-x-8 overflow-x-auto">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`relative py-4 px-2 text-sm md:text-base font-semibold whitespace-nowrap transition-colors ${
                  activeTab === tab.id
                    ? 'text-text-primary'
                    : 'text-text-secondary hover:text-text-primary'
                }`}
              >
                {tab.label}
                {activeTab === tab.id && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"
                    transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* TAB CONTENT */}
      <AnimatePresence mode="wait">
        {/* PRODUCTS I BUILT */}
        {activeTab === 'products' && (
          <motion.section
            key="products"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="px-4 py-12"
          >
            <div className="max-w-7xl mx-auto">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {products.map((product, index) => (
                  <motion.div
                    key={product.title}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-surface border border-surface hover:border-primary/50 rounded-xl overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-primary/20 group"
                  >
                    {/* Image Placeholder */}
                    <div className="bg-gradient-to-br from-primary/20 to-secondary/20 h-48 flex items-center justify-center group-hover:from-primary/30 group-hover:to-secondary/30 transition-all">
                      <div className="text-text-secondary text-sm">{product.title} Screenshot</div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      {/* Status Badge */}
                      <div className="mb-3">
                        <span className={`inline-block px-3 py-1 ${product.statusColor} text-white text-xs font-semibold rounded-full`}>
                          {product.status}
                        </span>
                      </div>

                      <h3 className="text-2xl font-bold text-text-primary mb-1 group-hover:text-primary transition-colors">
                        {product.title}
                      </h3>
                      <p className="text-lg text-secondary mb-3 font-semibold">
                        {product.tagline}
                      </p>
                      <p className="text-text-secondary mb-4 leading-relaxed line-clamp-3">
                        {product.description}
                      </p>

                      {/* Key Metrics */}
                      <div className="mb-4 flex flex-wrap gap-2">
                        {product.metrics.map((metric) => (
                          <span
                            key={metric}
                            className="text-xs px-2 py-1 bg-primary/10 text-primary rounded border border-primary/30"
                          >
                            {metric}
                          </span>
                        ))}
                      </div>

                      {/* Tech Stack */}
                      <div className="flex flex-wrap gap-2 mb-6">
                        {product.techStack.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 bg-secondary/20 text-secondary rounded-full text-sm font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* Buttons */}
                      <div className="flex gap-3">
                        <Link
                          href={product.link}
                          className="flex-1 px-4 py-2 bg-primary text-white font-semibold rounded-lg hover:bg-primary/80 transition-all text-center text-sm"
                        >
                          View Case Study
                        </Link>
                        {product.github && (
                          <a
                            href={product.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-4 py-2 border-2 border-primary text-primary font-semibold rounded-lg hover:bg-primary/10 transition-all flex items-center justify-center"
                          >
                            <FaGithub size={20} />
                          </a>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.section>
        )}

        {/* PRODUCT ANALYSIS */}
        {activeTab === 'analysis' && (
          <motion.section
            key="analysis"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="px-4 py-12"
          >
            <div className="max-w-7xl mx-auto">
              {/* Introduction */}
              <p className="text-lg text-text-secondary mb-8 max-w-3xl">
                Deep dives into how successful companies build, grow, and monetize their products. I analyze product strategy, growth tactics, and design decisions.
              </p>

              {/* Filter Buttons */}
              <div className="flex flex-wrap gap-3 mb-12">
                {filters.map((filter) => (
                  <button
                    key={filter.id}
                    onClick={() => setActiveFilter(filter.id)}
                    className={`px-4 py-2 rounded-lg font-medium transition-all ${
                      activeFilter === filter.id
                        ? 'bg-primary text-white'
                        : 'bg-surface text-text-secondary hover:bg-surface/80 hover:text-text-primary'
                    }`}
                  >
                    {filter.label}
                  </button>
                ))}
              </div>

              {/* Analysis Cards Grid */}
              <div className="grid md:grid-cols-2 gap-8">
                {analyses.map((analysis, index) => (
                  <motion.div
                    key={analysis.title}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-surface border border-surface hover:border-primary/50 rounded-xl p-6 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-primary/20 cursor-pointer group relative"
                  >
                    {/* Coming Soon Badge */}
                    {analysis.comingSoon && (
                      <div className="absolute top-4 right-4">
                        <span className="px-3 py-1 bg-yellow-500/20 text-yellow-500 text-xs font-semibold rounded-full border border-yellow-500/30">
                          Coming Soon
                        </span>
                      </div>
                    )}

                    {/* Category Badge */}
                    <div className="mb-3">
                      <span className="inline-block px-3 py-1 bg-primary/20 text-primary text-sm font-semibold rounded-full">
                        {analysis.category}
                      </span>
                    </div>

                    <h3 className="text-2xl font-bold text-text-primary mb-3 group-hover:text-primary transition-colors">
                      {analysis.title}
                    </h3>

                    <p className="text-text-secondary mb-4 leading-relaxed">
                      {analysis.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {analysis.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 bg-secondary/20 text-secondary rounded-full text-sm"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Meta Info */}
                    <div className="flex items-center gap-4 text-sm text-text-secondary">
                      <span>{analysis.date}</span>
                      <span>•</span>
                      <span>{analysis.readTime}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.section>
        )}

        {/* WRITING */}
        {activeTab === 'writing' && (
          <motion.section
            key="writing"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="px-4 py-12"
          >
            <div className="max-w-4xl mx-auto">
              {/* Introduction */}
              <p className="text-lg text-text-secondary mb-8">
                Thoughts on product management, AI tools, and building in public. Also published on Medium.
              </p>

              {/* Writing Cards */}
              <div className="space-y-8">
                {writings.map((writing, index) => (
                  <motion.div
                    key={writing.title}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-surface border border-surface hover:border-primary/50 rounded-xl p-8 transition-all duration-300 hover:scale-[1.01] hover:shadow-xl hover:shadow-primary/20 cursor-pointer group relative"
                  >
                    {/* Coming Soon Badge */}
                    {writing.comingSoon && (
                      <div className="absolute top-6 right-6">
                        <span className="px-3 py-1 bg-yellow-500/20 text-yellow-500 text-xs font-semibold rounded-full border border-yellow-500/30">
                          Coming Soon
                        </span>
                      </div>
                    )}

                    <h3 className="text-2xl md:text-3xl font-bold text-text-primary mb-3 group-hover:text-primary transition-colors pr-32">
                      {writing.title}
                    </h3>

                    {/* Meta Info */}
                    <div className="flex items-center gap-4 text-sm text-text-secondary mb-4">
                      <span>{writing.date}</span>
                      <span>•</span>
                      <span>{writing.readTime}</span>
                    </div>

                    <p className="text-text-secondary text-lg mb-6 leading-relaxed">
                      {writing.excerpt}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {writing.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 bg-secondary/20 text-secondary rounded-full text-sm"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Button */}
                    <button
                      disabled
                      className="px-6 py-3 bg-primary/50 text-white font-semibold rounded-lg cursor-not-allowed opacity-50"
                    >
                      Read on Medium
                    </button>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.section>
        )}
      </AnimatePresence>
    </div>
  );
}
