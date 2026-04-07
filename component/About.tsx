'use client'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { about, skills } from '@/lib/data'

export default function About() {
  return (
    <section id="about">
      <div className="section-container">
        <h2 className="section-title">About Me</h2>
        <h3 className="section-heading">
          From Mechanical Engineering to Software Development
        </h3>
        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-4 text-textMuted"
          >
            <p>{about.intro}</p>
            <p>{about.bridge}</p>
            <p>{about.interests}</p>

            <h4 className="text-textLight text-xl mt-6">Technical Skills</h4>
            <div className="grid grid-cols-2 gap-2">
              {skills.programming.map((skill) => (
                <span key={skill} className="flex items-center gap-2 font-mono text-sm">
                  <i className="fas fa-code text-accent text-xs"></i> {skill}
                </span>
              ))}
            </div>
            <div className="grid grid-cols-2 gap-2 mt-2">
              {skills.engineering.map((skill) => (
                <span key={skill} className="flex items-center gap-2 font-mono text-sm">
                  <i className="fas fa-cube text-accent text-xs"></i> {skill}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Image
              src="/profile.jpeg"
              alt="Engineering and Software Development"
               width={320}
                height={320}
              className="rounded-lg shadow-2xl"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}