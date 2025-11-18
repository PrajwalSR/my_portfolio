'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaGithub, FaChevronRight } from 'react-icons/fa';

export default function ArchieCaseStudy() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const techStack = ['TypeScript', 'Node.js', 'Express', 'OpenAI API', 'Claude AI', 'Mermaid.js'];

  const userSegments = [
    {
      title: 'Non-Technical Founders',
      needs: 'Blueprint to hire developers, investor pitch material',
      pain: "Don't know where to start",
      value: 'Complete architecture in 20 seconds vs weeks of research'
    },
    {
      title: 'Technical Founders',
      needs: 'Second opinion, compliance validation',
      pain: 'Uncertainty about scalability decisions',
      value: 'Expert-level architecture review instantly'
    },
    {
      title: 'Students',
      needs: 'Learn system design for interviews/hackathons',
      pain: 'Textbooks are too abstract',
      value: 'See real-world architectures for different use cases'
    },
    {
      title: 'Developers',
      needs: 'Deployment and scaling guidance',
      pain: 'Projects stuck on localhost',
      value: 'Production-ready deployment strategies'
    }
  ];

  const decisions = [
    {
      title: 'Dual AI Provider Strategy',
      decision: 'I integrated both OpenAI GPT-4 and Claude Sonnet, with automatic parallel comparison and quality scoring.',
      why: 'Through testing, I discovered:\n• Claude excels at compliance-heavy architectures (healthcare, finance)\n• OpenAI is faster and better at simple MVPs\n• No single AI is best for all use cases\n\nRather than force users to choose, I automated the choice.',
      how: 'When both API keys are configured:\n1. Both AIs generate architectures simultaneously\n2. A scoring algorithm evaluates depth, compliance coverage, specificity\n3. The higher-quality result is returned to the user\n4. Users get best-of-both without thinking about it',
      impact: '• 30% better compliance coverage for healthcare use cases\n• Faster responses for simple MVPs (OpenAI speed)\n• User doesn\'t need AI expertise to get quality results'
    },
    {
      title: 'Compliance Auto-Detection',
      decision: 'Built keyword detection system that automatically flags HIPAA, PCI-DSS, GDPR, FERPA, SOC 2, and FedRAMP requirements.',
      why: 'Compliance is often an afterthought, discovered months into development. One misconfigured database can cost millions. I wanted to catch compliance requirements at the ideation phase.',
      how: '• Keyword analysis: \'patient\', \'medical\' → HIPAA\n• Context understanding: \'credit card processing\' → PCI-DSS\n• Geographic detection: \'EU users\' → GDPR\n• Automatic recommendations: encrypted databases, audit logging, BAA requirements',
      impact: '• Prevented potential compliance disasters for 6+ early users\n• Highlighted $50K+ in additional costs early (HIPAA hosting, encryption)\n• One user quote: "You saved me from a terrible mistake. I had no idea HIPAA was this complex."'
    },
    {
      title: 'Open Source Strategy',
      decision: 'Released Archie as MIT-licensed open source on GitHub rather than building a SaaS product.',
      why: 'Three strategic reasons:\n1. Build Trust: Users hesitant to share ideas with a black-box SaaS\n2. Faster Feedback: Developer community can contribute improvements\n3. Portfolio Value: Demonstrates PM + technical execution skills\n\nThe trade-off: No immediate revenue, but higher long-term credibility.',
      how: '• Full source code on GitHub with comprehensive README\n• Transparent development process with public issues/PRs\n• MIT license allowing commercial use\n• Active community engagement and feature requests',
      impact: '• Established thought leadership in AI + system design space\n• Building in public attracts opportunities and collaborators\n• Trust factor: users can inspect how their ideas are processed'
    }
  ];

  const roadmapPhases = [
    {
      phase: 'Phase 1 - V2',
      timeline: 'Q1 2025',
      features: [
        'Conversational AI interface (chat vs form)',
        'User accounts to save blueprints',
        'PDF export functionality',
        'Interactive diagrams (click components for details)'
      ]
    },
    {
      phase: 'Phase 2 - V3',
      timeline: 'Q2 2025',
      features: [
        'Code generation (starter project in chosen stack)',
        'Terraform/CloudFormation templates',
        'Cost calculator with sliders',
        'Community blueprint library'
      ]
    },
    {
      phase: 'Phase 3 - Enterprise',
      timeline: 'Future',
      features: [
        'Team collaboration',
        'Private deployment options',
        'Custom compliance frameworks',
        'Integration with project management tools'
      ]
    }
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
            <span className="text-text-primary">Archie</span>
          </motion.div>

          {/* Logo/Icon */}
          <motion.div
            className="text-6xl mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            🤖
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            className="text-4xl md:text-5xl font-bold text-text-primary mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Archie: AI System Architect
          </motion.h1>

          {/* Tagline */}
          <motion.p
            className="text-xl md:text-2xl text-text-secondary mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Your AI Tech Co-Founder - Turn product ideas into production-ready architecture in seconds
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
              <span className="font-semibold text-text-primary">Timeline:</span> October 2024 - Present
            </div>
            <div>
              <span className="font-semibold text-text-primary">Status:</span> <span className="text-green-500">Live & Open Source</span>
            </div>
          </motion.div>

          {/* Tech Stack */}
          <motion.div
            className="flex flex-wrap gap-2 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            {techStack.map((tech) => (
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
            <a
              href="https://github.com/PrajwalSR/archie"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-white font-semibold rounded-lg hover:bg-primary/80 transition-all hover:scale-105"
            >
              <FaGithub size={20} />
              View on GitHub
            </a>
            <button
              disabled
              className="inline-flex items-center justify-center px-8 py-4 bg-surface text-text-secondary font-semibold rounded-lg cursor-not-allowed opacity-50"
            >
              Try Demo <span className="ml-2 text-sm">(Coming Soon)</span>
            </button>
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

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* The Challenge */}
            <motion.div
              className="bg-surface border border-surface rounded-xl p-8"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-2xl font-bold text-primary mb-4">The Challenge</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Non-technical founders with brilliant product ideas get stuck at the technical architecture phase. They face three key problems:
              </p>
              <ul className="space-y-2 text-text-secondary">
                <li className="flex gap-2">
                  <span className="text-primary">•</span>
                  <span>Don't know where to start with system design</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary">•</span>
                  <span>Can't evaluate tech stack options (AWS vs GCP? SQL vs NoSQL?)</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary">•</span>
                  <span>Miss critical requirements like HIPAA compliance until it's too late</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary">•</span>
                  <span>Hiring a technical architect costs $150-300/hour - expensive for pre-funding startups</span>
                </li>
              </ul>
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
              <p className="text-text-secondary leading-relaxed mb-4">
                Archie is an AI-powered system architect that generates comprehensive, production-ready architecture blueprints in 20 seconds. It provides:
              </p>
              <ul className="space-y-2 text-text-secondary">
                <li className="flex gap-2">
                  <span className="text-secondary">•</span>
                  <span>Complete system diagrams (Mermaid.js visualizations)</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-secondary">•</span>
                  <span>Tech stack recommendations with justifications</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-secondary">•</span>
                  <span>Database schema designs</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-secondary">•</span>
                  <span>API endpoint specifications</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-secondary">•</span>
                  <span>Compliance detection (HIPAA, PCI-DSS, GDPR)</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-secondary">•</span>
                  <span>Cost estimates and scalability plans</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-secondary">•</span>
                  <span>Actionable first steps to start building</span>
                </li>
              </ul>
            </motion.div>
          </div>

          {/* Metrics/Results Box */}
          <motion.div
            className="bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/30 rounded-xl p-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-primary font-bold text-lg mb-2">Open Source MIT License</div>
                <div className="text-text-secondary text-sm">Building in public</div>
              </div>
              <div>
                <div className="text-primary font-bold text-lg mb-2">Dual AI Provider Strategy</div>
                <div className="text-text-secondary text-sm">Best quality from OpenAI + Claude</div>
              </div>
              <div>
                <div className="text-primary font-bold text-lg mb-2">Auto-Compliance Detection</div>
                <div className="text-text-secondary text-sm">6 frameworks supported</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* THE PROBLEM (Deep Dive) */}
      <section className="px-4 py-16 bg-surface/30">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-text-primary mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            The Problem I Discovered
          </motion.h2>

          <motion.div
            className="space-y-6 text-text-secondary text-lg leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <p>
              <strong className="text-text-primary">The Pain Point:</strong> Through conversations with non-technical founders in my network, I noticed a pattern: they had brilliant ideas but were paralyzed at the architecture phase. One founder told me, "I know I need a database, but SQL vs NoSQL? Postgres vs MongoDB? I have no idea, and every article says something different."
            </p>

            <p>
              <strong className="text-text-primary">Market Research:</strong> I validated this pain point by:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Interviewing 8 non-technical founders</li>
              <li>Analyzing Reddit posts in r/startups and r/entrepreneur</li>
              <li>Reviewing upvoted questions on Indie Hackers</li>
            </ul>
            <p>The gap was clear: existing solutions were either too technical (AWS whitepapers) or too vague (generic advice). No tool bridged the gap.</p>

            <p>
              <strong className="text-text-primary">The Opportunity:</strong> This represented a clear opportunity:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong>Target Market:</strong> 100,000+ new startups launched annually in the US</li>
              <li><strong>Willingness to Pay:</strong> Founders currently pay architects $150-300/hour</li>
              <li><strong>Competitive Advantage:</strong> AI could democratize expert system design knowledge</li>
            </ul>
          </motion.div>
        </div>
      </section>

      {/* PRODUCT STRATEGY */}
      <section className="px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-text-primary mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            My Product Strategy
          </motion.h2>

          {/* Core Value Proposition */}
          <motion.div
            className="mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="text-2xl font-bold text-text-primary mb-4">Core Value Proposition</h3>
            <p className="text-text-secondary text-lg leading-relaxed mb-4">
              Instead of generic advice like "use React and Node.js", Archie provides specific, justified recommendations:
            </p>
            <div className="bg-surface border-l-4 border-primary rounded-r-lg p-6 space-y-3">
              <div className="text-text-secondary">
                <span className="line-through opacity-50">Not "use a database"</span> → <span className="text-primary font-semibold">"Use PostgreSQL on AWS RDS because you need ACID compliance for financial transactions"</span>
              </div>
              <div className="text-text-secondary">
                <span className="line-through opacity-50">Not "handle auth"</span> → <span className="text-primary font-semibold">"Use Auth0 with MFA because HIPAA requires audit logging"</span>
              </div>
              <div className="text-text-secondary">
                <span className="line-through opacity-50">Not "deploy somewhere"</span> → <span className="text-primary font-semibold">"Use AWS ECS Fargate in us-east-1 for HIPAA compliance with BAA"</span>
              </div>
            </div>
          </motion.div>

          {/* User Segmentation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold text-text-primary mb-8">User Segmentation</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {userSegments.map((segment, index) => (
                <motion.div
                  key={segment.title}
                  className="bg-surface border border-surface hover:border-primary/50 rounded-xl p-6 transition-all"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                >
                  <h4 className="text-xl font-bold text-primary mb-4">{segment.title}</h4>
                  <div className="space-y-3 text-sm">
                    <div>
                      <span className="font-semibold text-text-primary">Needs:</span>
                      <p className="text-text-secondary">{segment.needs}</p>
                    </div>
                    <div>
                      <span className="font-semibold text-text-primary">Pain:</span>
                      <p className="text-text-secondary">{segment.pain}</p>
                    </div>
                    <div>
                      <span className="font-semibold text-text-primary">Value:</span>
                      <p className="text-text-secondary">{segment.value}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* KEY PM DECISIONS */}
      <section className="px-4 py-16 bg-surface/30">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-text-primary mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Critical Product Decisions
          </motion.h2>

          <div className="space-y-12">
            {decisions.map((decision, index) => (
              <motion.div
                key={decision.title}
                className="bg-surface border-l-4 border-primary rounded-r-xl p-8"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <h3 className="text-2xl font-bold text-primary mb-6">
                  Decision {index + 1}: {decision.title}
                </h3>

                <div className="space-y-6">
                  <div>
                    <h4 className="font-bold text-text-primary mb-2">The Decision</h4>
                    <p className="text-text-secondary leading-relaxed">{decision.decision}</p>
                  </div>

                  <div>
                    <h4 className="font-bold text-text-primary mb-2">Why I Made It</h4>
                    <p className="text-text-secondary leading-relaxed whitespace-pre-line">{decision.why}</p>
                  </div>

                  <div>
                    <h4 className="font-bold text-text-primary mb-2">How It Works</h4>
                    <p className="text-text-secondary leading-relaxed whitespace-pre-line">{decision.how}</p>
                  </div>

                  <div>
                    <h4 className="font-bold text-text-primary mb-2">The Impact</h4>
                    <p className="text-text-secondary leading-relaxed whitespace-pre-line">{decision.impact}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TECHNICAL EXECUTION */}
      <section className="px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-text-primary mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Building Archie
          </motion.h2>

          <motion.div
            className="space-y-6 text-text-secondary text-lg leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div>
              <h3 className="text-xl font-bold text-text-primary mb-3">Development Approach</h3>
              <p>
                I built Archie as a solo developer to maintain full control over product decisions and iterate quickly. The tech stack choices were pragmatic:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4 mt-2">
                <li><strong>Node.js + Express:</strong> Fast to build, easy for contributors to understand</li>
                <li><strong>TypeScript:</strong> Catch errors early, better developer experience</li>
                <li><strong>Mermaid.js:</strong> Industry-standard diagramming that's free and embeddable</li>
                <li><strong>No database:</strong> Stateless architecture keeps costs at $0 infrastructure</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold text-text-primary mb-3">User Flow</h3>
              <p>The core user experience I designed:</p>
              <ol className="list-decimal list-inside space-y-2 ml-4 mt-2">
                <li>User fills a simple form (idea, users, compliance, timeline)</li>
                <li>Backend calls AI provider(s) with structured prompt</li>
                <li>AI returns comprehensive architecture in 15-20 seconds</li>
                <li>Frontend renders results with sections: diagram, tech stack, costs, risks</li>
                <li>User can export or copy sections as needed</li>
              </ol>
            </div>

            <div>
              <h3 className="text-xl font-bold text-text-primary mb-3">Iteration Process</h3>
              <p>I tested with 5 early users before launch:</p>
              <ul className="list-disc list-inside space-y-2 ml-4 mt-2">
                <li><strong>Iteration 1:</strong> Too technical - users didn't understand justifications</li>
                <li><strong>Iteration 2:</strong> Added "Why?" sections to every tech recommendation</li>
                <li><strong>Iteration 3:</strong> Added compliance alerts (yellow/red warnings)</li>
                <li><strong>Final version:</strong> Users said "This feels like talking to a senior architect"</li>
              </ul>
            </div>
          </motion.div>

          {/* Screenshot Gallery */}
          <motion.div
            className="mt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold text-text-primary mb-8">Product Screenshots</h3>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  title: 'User Input Form',
                  description: 'Simple interface for describing product ideas',
                  file: 'archie-form.png'
                },
                {
                  title: 'Executive Summary',
                  description: 'High-level architecture overview',
                  file: 'archie-summary.png'
                },
                {
                  title: 'Compliance Warnings',
                  description: 'Automatic GDPR detection and requirements',
                  file: 'archie-compliance.png'
                },
                {
                  title: 'System Architecture Diagram',
                  description: 'Visual representation using Mermaid.js',
                  file: 'archie-diagram.png'
                },
                {
                  title: 'Tech Stack Recommendations',
                  description: 'Detailed justifications for each choice',
                  file: 'archie-techstack.png'
                },
                {
                  title: 'Cost Estimates & Risks',
                  description: 'Financial planning and gotchas',
                  file: 'archie-costs.png'
                }
              ].map((screenshot, index) => (
                <motion.div
                  key={screenshot.title}
                  className="space-y-3"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <a
                    href={`/my_portfolio/images/${screenshot.file}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <div className="bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg aspect-video flex items-center justify-center hover:from-primary/30 hover:to-secondary/30 transition-all cursor-pointer shadow-lg hover:shadow-xl hover:shadow-primary/20">
                      <span className="text-text-secondary text-sm">Click to view full size</span>
                    </div>
                  </a>
                  <p className="text-sm text-text-secondary">
                    <span className="font-semibold text-text-primary">Figure {index + 1}:</span> {screenshot.title} - {screenshot.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* RESULTS & IMPACT */}
      <section className="px-4 py-16 bg-surface/30">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-text-primary mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Outcomes & Learnings
          </motion.h2>

          {/* Metrics */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="bg-surface border border-primary/30 rounded-xl p-6 text-center">
              <div className="text-3xl font-bold text-primary mb-2">Open Source</div>
              <div className="text-sm text-text-secondary">MIT Licensed</div>
            </div>
            <div className="bg-surface border border-primary/30 rounded-xl p-6 text-center">
              <div className="text-3xl font-bold text-primary mb-2">6+</div>
              <div className="text-sm text-text-secondary">Early Users</div>
            </div>
            <div className="bg-surface border border-primary/30 rounded-xl p-6 text-center">
              <div className="text-3xl font-bold text-primary mb-2">18s</div>
              <div className="text-sm text-text-secondary">Avg Generation</div>
            </div>
            <div className="bg-surface border border-primary/30 rounded-xl p-6 text-center">
              <div className="text-3xl font-bold text-primary mb-2">6</div>
              <div className="text-sm text-text-secondary">Compliance Types</div>
            </div>
          </motion.div>

          {/* What I Learned */}
          <motion.div
            className="mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold text-text-primary mb-6">What I Learned</h3>
            <p className="text-text-secondary text-lg leading-relaxed mb-6">
              Three key PM lessons from building Archie:
            </p>

            <div className="space-y-6">
              <div className="bg-surface border-l-4 border-primary rounded-r-xl p-6">
                <h4 className="text-xl font-bold text-primary mb-3">1. Compliance is a competitive moat</h4>
                <p className="text-text-secondary leading-relaxed">
                  Early compliance detection became Archie's most valuable feature. This taught me that seemingly "boring" features (security, compliance) can be major differentiators.
                </p>
              </div>

              <div className="bg-surface border-l-4 border-secondary rounded-r-xl p-6">
                <h4 className="text-xl font-bold text-secondary mb-3">2. AI quality is inconsistent</h4>
                <p className="text-text-secondary leading-relaxed">
                  Dual-provider strategy wasn't over-engineering - it was essential. This reinforced that PM intuition ("one AI is enough") should be validated with data.
                </p>
              </div>

              <div className="bg-surface border-l-4 border-primary rounded-r-xl p-6">
                <h4 className="text-xl font-bold text-primary mb-3">3. Open source builds trust</h4>
                <p className="text-text-secondary leading-relaxed">
                  Founders were more willing to use Archie because they could inspect the code. Transparency as a feature, not just a nice-to-have.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FUTURE ROADMAP */}
      <section className="px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-text-primary mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            What's Next for Archie
          </motion.h2>

          <div className="space-y-8">
            {roadmapPhases.map((phase, index) => (
              <motion.div
                key={phase.phase}
                className="bg-surface border border-surface hover:border-primary/50 rounded-xl p-8 transition-all"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <h3 className="text-2xl font-bold text-primary">{phase.phase}</h3>
                  <span className="text-text-secondary font-semibold">{phase.timeline}</span>
                </div>
                <ul className="space-y-2">
                  {phase.features.map((feature) => (
                    <li key={feature} className="flex gap-2 text-text-secondary">
                      <span className="text-primary">•</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="px-4 py-16 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-6">
            Want to see how it works?
          </h2>
          <p className="text-xl text-text-secondary mb-8 max-w-2xl mx-auto">
            Try Archie with your product idea or view the open source code.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://github.com/PrajwalSR/archie"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-white font-semibold rounded-lg hover:bg-primary/80 transition-all hover:scale-105"
            >
              <FaGithub size={20} />
              Visit GitHub
            </a>
            <Link
              href="/work"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-primary text-primary font-semibold rounded-lg hover:bg-primary/10 transition-all hover:scale-105"
            >
              Back to All Projects
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
