'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { personal } from '@/lib/data'

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center pt-20">
      <div className="section-container">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-accent font-mono mb-4">Hi, my name is</p>
            <h1 className="text-4xl md:text-6xl font-bold">{personal.name}</h1>
            <h2 className="text-3xl md:text-5xl font-bold text-textMuted mt-2">
              I bridge <span className="text-accent">hardware</span> with{' '}
              <span className="text-accent">software</span>.
            </h2>
            <p className="text-textMuted text-lg mt-6 max-w-lg">
              Mechanical Engineering graduate with hands‑on experience in
              engineering design and process optimization, now pivoting into
              full‑stack development.
            </p>
            <div className="mt-8 flex gap-4 flex-wrap">
              <a
                href="#featured"
                className="px-6 py-3 border border-accent text-accent rounded hover:bg-accent/10 transition transform hover:-translate-y-1"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="px-6 py-3 bg-accent text-primary rounded hover:bg-accent/90 transition transform hover:-translate-y-1"
              >
                Get In Touch
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              {/* Simple border + subtle glow instead of absolute pulsing */}
              <div className="absolute inset-0 rounded-full border-4 border-accent/30 animate-pulse"></div>
              <Image
                src="/profile.jpeg"
                alt={personal.name}
                width={320}
                height={320}
                className="rounded-full object-cover relative z-10"
                onError={(e) => {
                  e.currentTarget.src = 'https://via.placeholder.com/320?text=Profile'
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}