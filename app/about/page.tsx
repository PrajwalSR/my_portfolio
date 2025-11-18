'use client';

import { motion } from 'framer-motion';
import { FaCheckCircle, FaEnvelope, FaLinkedin, FaGithub, FaMapMarkerAlt } from 'react-icons/fa';

export default function About() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const journey = [
    {
      title: 'Technical Project Manager Intern',
      company: 'Vaccine Genie',
      date: 'Sep 2025 - Present',
      description: 'Leading Agile transformation, architecting documentation systems, and building internal tools. Increased team velocity by 33%.',
      tags: ['Agile', 'Documentation', 'Full-Stack Development'],
      current: true
    },
    {
      title: 'Research Assistant',
      company: 'USC Viterbi School of Engineering',
      date: 'Jan 2025 - Sep 2025',
      description: 'Designed curriculum enabling students to apply GenAI in product projects. Developed course content, real-world case studies, and assisted professor with textbook development.',
      tags: ['GenAI', 'Curriculum Design', 'Product Education']
    },
    {
      title: 'M.S. Engineering Management',
      company: 'University of Southern California (USC)',
      date: 'Jan 2023 - Dec 2024',
      description: 'Specialized in Product Management and Project Management. Taught as TA for 3 graduate courses including New Product Development and Marketing Analytics.',
      tags: ['Product Management', 'Research', 'Teaching']
    },
    {
      title: 'Product Manager',
      company: 'EuclidAI',
      date: 'Jan 2021 - Nov 2022',
      description: 'Led 0-to-1 product development for IoT smart home platform. Secured $200K funding, launched MVP serving 500+ users, and established data-driven product processes.',
      tags: ['IoT', '0-to-1', 'Fundraising']
    },
    {
      title: 'Application Development Associate',
      company: 'Accenture',
      date: 'Oct 2019 - Jan 2021',
      description: 'Managed SAP implementations for Fortune 500 clients across 5 global teams. Maintained 98% uptime and resolved 200+ support tickets with 95% SLA compliance.',
      tags: ['Enterprise Software', 'Global Teams', 'SAP']
    },
    {
      title: 'B.E. Electronics and Communications',
      company: 'Dayananda Sagar College of Engineering',
      date: '2015 - 2019',
      description: 'Engineering foundation that sparked my interest in building products and solving technical problems.',
      tags: []
    }
  ];

  const capabilities = [
    {
      icon: '🎯',
      title: 'Product Strategy',
      description: 'Defining product vision, roadmaps, and go-to-market strategies. I connect business goals to user needs through data-driven prioritization.'
    },
    {
      icon: '🔍',
      title: 'User Research & Discovery',
      description: 'Conducting interviews, usability testing, and synthesizing insights. I validate assumptions before committing engineering resources.'
    },
    {
      icon: '⚙️',
      title: 'Technical Execution',
      description: 'Leading cross-functional teams and building full-stack prototypes when needed. My engineering background helps me speak developer language.'
    },
    {
      icon: '📊',
      title: 'Data & Analytics',
      description: 'Using metrics, A/B testing, and KPIs to measure impact. I balance qualitative insights with quantitative validation.'
    },
    {
      icon: '🔄',
      title: 'Agile Transformation',
      description: 'Implementing Scrum, Kanban, and sprint planning. I bring predictability to product delivery through structured frameworks.'
    },
    {
      icon: '🤝',
      title: 'Stakeholder Alignment',
      description: 'Facilitating consensus across executives, engineers, and users. I translate between business language and technical requirements.'
    }
  ];

  const skills = {
    productManagement: [
      'Product Strategy & Roadmapping',
      'User Research & Testing',
      'A/B Testing & Analytics',
      'Go-to-Market Strategy',
      'Pricing & Monetization',
      'Product-Market Fit Validation',
      'Feature Prioritization',
      'User Story Mapping'
    ],
    technical: [
      'Full-Stack Development (React, Node.js, Python)',
      'SQL & Database Design',
      'APIs & System Architecture',
      'Git & Version Control',
      'AWS & Cloud Infrastructure',
      'n8n Automation',
      'AI/ML Integration',
      'DevOps Basics'
    ],
    tools: [
      'JIRA & Linear',
      'Figma & Miro',
      'Google Analytics & Mixpanel',
      'Notion & Confluence',
      'Slack & Asana',
      'Postman & VS Code',
      'GitHub & GitLab',
      'Excel & Data Analysis'
    ]
  };

  const certifications = [
    {
      title: 'Project Management Professional (PMP)',
      issuer: 'PMI',
      date: '2024'
    },
    {
      title: 'Certified Scrum Product Owner (CSPO)',
      issuer: 'Scrum Alliance',
      date: '2024'
    },
    {
      title: 'Certified Scrum Master (CSM)',
      issuer: 'Scrum Alliance',
      date: '2024'
    },
    {
      title: 'AI for Product Management',
      issuer: 'Pendo/Product School',
      date: '2024'
    }
  ];

  const currentProjects = [
    '🤖 Job Search AI Agent - Automating job applications with n8n and Claude',
    '📊 Product Ops Dashboard - Internal tool for launch tracking',
    '🎓 Teaching - Creating curriculum for AI in product management',
    '📝 Writing - Sharing PM lessons on Medium'
  ];

  const learningGoals = [
    'Advanced AI agent workflows',
    'System design at scale',
    'Product-led growth strategies',
    'No-code automation mastery',
    'Data science for PMs',
    'Community building'
  ];

  const contactMethods = [
    {
      icon: <FaEnvelope className="text-3xl text-primary" />,
      label: 'Email',
      value: 'prajwalsr575@gmail.com',
      buttonText: 'Send Email',
      link: 'mailto:prajwalsr575@gmail.com'
    },
    {
      icon: <FaLinkedin className="text-3xl text-primary" />,
      label: 'LinkedIn',
      value: 'Connect with me',
      buttonText: 'View Profile',
      link: 'https://linkedin.com/in/prajwalsr1997/'
    },
    {
      icon: <FaGithub className="text-3xl text-primary" />,
      label: 'GitHub',
      value: 'Check out my code',
      buttonText: 'View Projects',
      link: 'https://github.com/PrajwalSR'
    },
    {
      icon: <FaMapMarkerAlt className="text-3xl text-primary" />,
      label: 'Location',
      value: 'California, USA',
      buttonText: 'Open to Relocation',
      link: null
    }
  ];

  return (
    <div className="min-h-screen">
      {/* HERO SECTION */}
      <section className="relative px-4 py-20 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1
            className="text-4xl md:text-6xl font-bold text-text-primary mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Hey, I'm Prajwal 👋
          </motion.h1>

          <motion.p
            className="text-2xl md:text-3xl text-primary mb-6 font-semibold"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Product Manager | Technical Leader | Builder
          </motion.p>

          <motion.p
            className="text-lg md:text-xl text-text-secondary max-w-3xl mx-auto mb-12 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            I'm a Product Manager who bridges the gap between business strategy and technical execution.
            With a background in engineering and an M.S. in Engineering Management from USC, I turn complex
            problems into scalable products. Currently exploring AI agents, automation, and building in public.
          </motion.p>

          {/* Profile Image Placeholder */}
          <motion.div
            className="w-48 h-48 mx-auto mb-6 rounded-full bg-gradient-to-br from-primary/30 to-secondary/30 flex items-center justify-center text-6xl"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            👨‍💻
          </motion.div>

          {/* Location and Status Badges */}
          <motion.div
            className="flex flex-wrap gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <span className="px-4 py-2 bg-surface border border-primary/30 rounded-full text-text-primary font-medium">
              📍 California, USA
            </span>
            <span className="px-4 py-2 bg-green-500/20 border border-green-500/30 rounded-full text-green-500 font-medium">
              ✅ Open to Relocation
            </span>
          </motion.div>
        </div>
      </section>

      {/* MY JOURNEY SECTION */}
      <section className="px-4 py-20 bg-surface/30">
        <div className="max-w-5xl mx-auto">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-text-primary mb-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            My Journey
          </motion.h2>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-4 md:left-8 top-0 bottom-0 w-0.5 bg-primary/30"></div>

            {/* Timeline Nodes */}
            <div className="space-y-12">
              {journey.map((item, index) => (
                <motion.div
                  key={index}
                  className="relative pl-12 md:pl-20"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  {/* Timeline Node */}
                  <div className={`absolute left-2.5 md:left-6.5 w-4 h-4 rounded-full ${item.current ? 'bg-primary ring-4 ring-primary/30' : 'bg-primary/50'}`}></div>

                  {/* Content Card */}
                  <div className="bg-surface border border-surface hover:border-primary/50 rounded-xl p-6 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-primary/20">
                    {item.current && (
                      <span className="inline-block px-3 py-1 bg-green-500/20 text-green-500 text-xs font-semibold rounded-full mb-3">
                        Current
                      </span>
                    )}
                    <h3 className="text-xl md:text-2xl font-bold text-text-primary mb-1">{item.title}</h3>
                    <p className="text-primary font-semibold mb-2">{item.company}</p>
                    <p className="text-text-secondary text-sm mb-4">{item.date}</p>
                    <p className="text-text-secondary leading-relaxed mb-4">{item.description}</p>
                    {item.tags.length > 0 && (
                      <div className="flex flex-wrap gap-2">
                        {item.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* WHAT I DO SECTION */}
      <section className="px-4 py-20">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-text-primary mb-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            What I Do Best
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {capabilities.map((capability, index) => (
              <motion.div
                key={capability.title}
                className="bg-surface border border-surface hover:border-primary/50 rounded-xl p-6 transition-all duration-300 hover:scale-[1.02]"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="text-4xl mb-4">{capability.icon}</div>
                <h3 className="text-xl font-bold text-text-primary mb-3">{capability.title}</h3>
                <p className="text-text-secondary leading-relaxed">{capability.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SKILLS & TOOLS SECTION */}
      <section className="px-4 py-20 bg-surface/30">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-text-primary mb-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Skills & Tools
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Product Management */}
            <motion.div
              className="bg-surface border border-surface rounded-xl p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h3 className="text-xl font-bold text-primary mb-6">Product Management</h3>
              <ul className="space-y-3">
                {skills.productManagement.map((skill) => (
                  <li key={skill} className="flex items-start gap-2 text-text-secondary">
                    <FaCheckCircle className="text-primary mt-1 flex-shrink-0" size={16} />
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Technical Skills */}
            <motion.div
              className="bg-surface border border-surface rounded-xl p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3 className="text-xl font-bold text-secondary mb-6">Technical Skills</h3>
              <ul className="space-y-3">
                {skills.technical.map((skill) => (
                  <li key={skill} className="flex items-start gap-2 text-text-secondary">
                    <FaCheckCircle className="text-secondary mt-1 flex-shrink-0" size={16} />
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Tools */}
            <motion.div
              className="bg-surface border border-surface rounded-xl p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h3 className="text-xl font-bold text-primary mb-6">Tools I Use</h3>
              <ul className="space-y-3">
                {skills.tools.map((tool) => (
                  <li key={tool} className="flex items-start gap-2 text-text-secondary">
                    <FaCheckCircle className="text-primary mt-1 flex-shrink-0" size={16} />
                    <span>{tool}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CERTIFICATIONS SECTION */}
      <section className="px-4 py-20">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-text-primary mb-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Certifications
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.title}
                className="bg-surface border border-surface hover:border-primary/50 rounded-xl p-6 text-center transition-all duration-300 hover:scale-105"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {/* Icon Placeholder */}
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-primary/30 to-secondary/30 rounded-full flex items-center justify-center text-2xl">
                  🏆
                </div>
                <h3 className="text-lg font-bold text-text-primary mb-2">{cert.title}</h3>
                <p className="text-primary text-sm font-semibold mb-1">{cert.issuer}</p>
                <p className="text-text-secondary text-sm">{cert.date}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SIDE PROJECTS & LEARNING */}
      <section className="px-4 py-20 bg-surface/30">
        <div className="max-w-5xl mx-auto">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-text-primary mb-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            What I'm Building & Learning
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Current Projects */}
            <motion.div
              className="bg-surface border border-primary/30 rounded-xl p-8"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-2xl font-bold text-primary mb-4">Current Projects</h3>
              <p className="text-text-secondary mb-6">
                I believe in building in public and continuous learning. Here's what I'm working on:
              </p>
              <ul className="space-y-3">
                {currentProjects.map((project) => (
                  <li key={project} className="text-text-secondary leading-relaxed">
                    {project}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Learning Goals */}
            <motion.div
              className="bg-surface border border-secondary/30 rounded-xl p-8"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-2xl font-bold text-secondary mb-4">Learning Goals</h3>
              <p className="text-text-secondary mb-6">
                Areas I'm actively exploring and upskilling:
              </p>
              <ul className="space-y-3">
                {learningGoals.map((goal) => (
                  <li key={goal} className="flex items-center gap-2 text-text-secondary">
                    <span className="text-secondary">•</span>
                    <span>{goal}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* LET'S CONNECT SECTION */}
      <section className="px-4 py-20">
        <div className="max-w-5xl mx-auto">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-text-primary mb-6 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Let's Connect
          </motion.h2>

          <motion.p
            className="text-xl text-text-secondary mb-12 text-center max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            I'm always excited to chat about product management, AI tools, or potential collaborations. Reach out!
          </motion.p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactMethods.map((method, index) => (
              <motion.div
                key={method.label}
                className="bg-surface border border-surface hover:border-primary/50 rounded-xl p-6 text-center transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-primary/20"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="flex justify-center mb-4">{method.icon}</div>
                <h3 className="text-lg font-bold text-text-primary mb-2">{method.label}</h3>
                <p className="text-text-secondary text-sm mb-4">{method.value}</p>
                {method.link ? (
                  <a
                    href={method.link}
                    target={method.label !== 'Email' ? '_blank' : undefined}
                    rel={method.label !== 'Email' ? 'noopener noreferrer' : undefined}
                    className="inline-block px-4 py-2 bg-primary text-white text-sm font-semibold rounded-lg hover:bg-primary/80 transition-all"
                  >
                    {method.buttonText}
                  </a>
                ) : (
                  <span className="inline-block px-4 py-2 bg-green-500/20 text-green-500 text-sm font-semibold rounded-lg border border-green-500/30">
                    {method.buttonText}
                  </span>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* DOWNLOAD RESUME CTA */}
      <section className="px-4 py-20 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-6">
            Want the full details?
          </h2>
          <p className="text-xl text-text-secondary mb-8 max-w-2xl mx-auto">
            Download my resume to see my complete experience, skills, and achievements.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              disabled
              className="px-8 py-4 bg-primary/50 text-white font-semibold rounded-lg cursor-not-allowed opacity-50"
            >
              Download PM Resume <span className="ml-2 text-sm">(Coming Soon)</span>
            </button>
            <button
              disabled
              className="px-8 py-4 bg-secondary/50 text-white font-semibold rounded-lg cursor-not-allowed opacity-50"
            >
              Download TPM Resume <span className="ml-2 text-sm">(Coming Soon)</span>
            </button>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
