'use client'

import { motion } from 'framer-motion'
import { featuredProjects } from '@/lib/data'

export default function FeaturedProjects() {
  return (
    <section id="featured">
      <div className="section-container">
        <h2 className="section-title">Featured Projects</h2>
        <h3 className="section-heading">What I've Built</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredProjects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-secondary p-6 rounded-lg hover:-translate-y-2 transition-transform duration-300 shadow-lg"
            >
              <h4 className="text-accent text-xl font-semibold mb-2">{project.title}</h4>
              <p className="text-textMuted mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs text-accent bg-accent/10 px-2 py-1 rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}