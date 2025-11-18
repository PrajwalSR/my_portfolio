'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaLightbulb, FaUsers, FaCode, FaChartLine } from 'react-icons/fa';

export default function Home() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <div className="min-h-screen">
      {/* HERO SECTION */}
      <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
        {/* Animated gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-secondary/10 animate-gradient"></div>

        <motion.div
          className="relative z-10 text-center max-w-4xl mx-auto"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          <motion.h1
            className="text-5xl md:text-7xl font-bold text-text-primary mb-6"
            variants={fadeInUp}
          >
            Prajwal SR
          </motion.h1>

          <motion.p
            className="text-2xl md:text-3xl text-primary mb-6 font-semibold"
            variants={fadeInUp}
          >
            Product Manager building AI-powered products that solve real problems
          </motion.p>

          <motion.p
            className="text-lg md:text-xl text-text-secondary max-w-3xl mx-auto mb-8 leading-relaxed"
            variants={fadeInUp}
          >
            I turn complex ideas into scalable products through user research, data-driven decisions, and technical execution.
            Currently exploring AI agents and automation.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            variants={fadeInUp}
          >
            <Link
              href="/work"
              className="px-8 py-4 bg-primary text-white font-semibold rounded-lg hover:bg-primary/80 transition-all hover:scale-105 w-full sm:w-auto text-center"
            >
              View My Work
            </Link>
            <Link
              href="/about"
              className="px-8 py-4 border-2 border-primary text-primary font-semibold rounded-lg hover:bg-primary/10 transition-all hover:scale-105 w-full sm:w-auto text-center"
            >
              About Me
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* FEATURED PROJECT SPOTLIGHT */}
      <section className="py-20 px-4 bg-surface/30">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-text-primary mb-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Featured Project
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Link href="/work/archie">
              <div className="bg-surface border border-surface hover:border-primary/50 rounded-xl p-8 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-primary/20 cursor-pointer group">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  {/* Placeholder image */}
                  <div className="bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg h-64 md:h-80 flex items-center justify-center group-hover:from-primary/30 group-hover:to-secondary/30 transition-all">
                    <div className="text-text-secondary text-lg">Archie Project Thumbnail</div>
                  </div>

                  {/* Content */}
                  <div>
                    <h3 className="text-3xl font-bold text-text-primary mb-2 group-hover:text-primary transition-colors">
                      Archie
                    </h3>
                    <p className="text-xl text-primary mb-4 font-semibold">
                      Your AI Tech Co-Founder
                    </p>
                    <p className="text-text-secondary mb-6 leading-relaxed">
                      AI-powered system architect that generates production-ready architecture blueprints.
                      Helps non-technical founders design scalable systems in seconds.
                    </p>

                    {/* Tech stack tags */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {['TypeScript', 'Node.js', 'OpenAI', 'Claude AI', 'Express'].map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="inline-block px-6 py-3 bg-primary text-white font-semibold rounded-lg group-hover:bg-primary/80 transition-all">
                      View Case Study →
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* MORE PROJECTS SECTION */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-text-primary mb-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            More Projects
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Product Operations Dashboard */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <Link href="/work/product-ops-dashboard">
                <div className="bg-surface border border-surface hover:border-primary/50 rounded-xl p-6 h-full transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-primary/20 cursor-pointer group">
                  {/* Placeholder image */}
                  <div className="bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg h-48 mb-6 flex items-center justify-center group-hover:from-primary/30 group-hover:to-secondary/30 transition-all">
                    <div className="text-text-secondary text-sm">Dashboard Thumbnail</div>
                  </div>

                  <h3 className="text-2xl font-bold text-text-primary mb-2 group-hover:text-primary transition-colors">
                    Product Operations Dashboard
                  </h3>
                  <p className="text-lg text-secondary mb-3 font-semibold">
                    Real-time product launch tracking
                  </p>
                  <p className="text-text-secondary mb-4 leading-relaxed">
                    Internal tool to centralize product lifecycle tracking and mitigate GTM risks
                  </p>

                  {/* Tech stack tags */}
                  <div className="flex flex-wrap gap-2">
                    {['React', 'MongoDB', 'n8n', 'OpenAI API'].map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-secondary/20 text-secondary rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            </motion.div>

            {/* EuclidAI Smart Home */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Link href="/work/euclidai">
                <div className="bg-surface border border-surface hover:border-primary/50 rounded-xl p-6 h-full transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-primary/20 cursor-pointer group">
                  {/* Placeholder image */}
                  <div className="bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg h-48 mb-6 flex items-center justify-center group-hover:from-primary/30 group-hover:to-secondary/30 transition-all">
                    <div className="text-text-secondary text-sm">EuclidAI Thumbnail</div>
                  </div>

                  <h3 className="text-2xl font-bold text-text-primary mb-2 group-hover:text-primary transition-colors">
                    EuclidAI Smart Home
                  </h3>
                  <p className="text-lg text-secondary mb-3 font-semibold">
                    IoT platform for home automation
                  </p>
                  <p className="text-text-secondary mb-4 leading-relaxed">
                    Led 0-to-1 product development for AI-powered smart home platform serving 500+ users
                  </p>

                  {/* Tech stack tags */}
                  <div className="flex flex-wrap gap-2">
                    {['React', 'AWS', 'IoT', 'Firebase'].map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-secondary/20 text-secondary rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SKILLS SNAPSHOT */}
      <section className="py-20 px-4 bg-surface/30">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-text-primary mb-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            What I Do
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                icon: FaLightbulb,
                title: 'Product Strategy',
                description: 'Defining product vision, roadmaps, and go-to-market strategies backed by data',
                delay: 0.1
              },
              {
                icon: FaUsers,
                title: 'User Research',
                description: 'Conducting user interviews, usability testing, and translating insights into features',
                delay: 0.2
              },
              {
                icon: FaCode,
                title: 'Technical Execution',
                description: 'Leading cross-functional teams and building full-stack prototypes when needed',
                delay: 0.3
              },
              {
                icon: FaChartLine,
                title: 'Data-Driven Decisions',
                description: 'Using analytics and KPIs to prioritize, measure impact, and iterate',
                delay: 0.4
              }
            ].map((skill, index) => (
              <motion.div
                key={index}
                className="bg-surface border border-surface hover:border-primary/30 rounded-xl p-6 transition-all duration-300 hover:bg-surface/80"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: skill.delay }}
              >
                <skill.icon className="text-4xl text-primary mb-4" />
                <h3 className="text-xl font-bold text-text-primary mb-3">
                  {skill.title}
                </h3>
                <p className="text-text-secondary leading-relaxed">
                  {skill.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="py-20 px-4">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-6">
            Let's Build Something
          </h2>
          <p className="text-xl text-text-secondary mb-8 max-w-2xl mx-auto">
            I'm open to Product Manager roles and excited about AI, automation, and products that scale.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/about"
              className="px-8 py-4 bg-primary text-white font-semibold rounded-lg hover:bg-primary/80 transition-all hover:scale-105 w-full sm:w-auto text-center"
            >
              View Full Resume
            </Link>
            <a
              href="mailto:prajwalsr575@gmail.com"
              className="px-8 py-4 border-2 border-primary text-primary font-semibold rounded-lg hover:bg-primary/10 transition-all hover:scale-105 w-full sm:w-auto text-center"
            >
              Email Me
            </a>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
