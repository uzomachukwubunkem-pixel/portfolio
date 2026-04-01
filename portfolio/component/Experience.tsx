'use client'

import { motion } from 'framer-motion'
import { experiences } from '@/lib/data'

export default function Experience() {
  return (
    <section id="experience" className="bg-secondary/30">
      <div className="section-container">
        <h2 className="section-title">Experience & Education</h2>
        <h3 className="section-heading">My Journey</h3>
        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-accent hidden md:block"></div>
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`relative md:w-1/2 ${
                idx % 2 === 0
                  ? 'md:pr-12 md:text-right md:ml-0'
                  : 'md:pl-12 md:ml-auto'
              }`}
            >
              <div className="bg-secondary p-6 rounded-lg shadow-lg mb-8 md:mb-12">
                <h4 className="text-accent text-xl font-semibold">{exp.title}</h4>
                <p className="text-textMuted text-sm font-mono">
                  {exp.organization} | {exp.date}
                </p>
                <ul
                  className={`mt-4 space-y-2 ${
                    idx % 2 === 0 ? 'md:pl-0' : ''
                  } list-disc list-inside text-textMuted`}
                >
                  {exp.details.map((detail, i) => (
                    <li key={i}>{detail}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}