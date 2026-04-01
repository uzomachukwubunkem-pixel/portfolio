'use client'

import { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import { personal, references } from '@/lib/data'

// Replace with your EmailJS credentials (optional)
const SERVICE_ID = 'YOUR_SERVICE_ID'
const TEMPLATE_ID = 'YOUR_TEMPLATE_ID'
const PUBLIC_KEY = 'YOUR_PUBLIC_KEY'

export default function Contact() {
  const form = useRef<HTMLFormElement>(null)
  const [sent, setSent] = useState(false)
  const [error, setError] = useState(false)

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!form.current) return

    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
      .then(() => {
        setSent(true)
        setError(false)
        form.current?.reset()
        setTimeout(() => setSent(false), 5000)
      })
      .catch(() => {
        setError(true)
        setTimeout(() => setError(false), 5000)
      })
  }

  return (
    <section id="contact">
      <div className="section-container">
        <h2 className="section-title">Contact</h2>
        <h3 className="section-heading">Get In Touch</h3>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <p className="text-textMuted mb-6">
              I'm currently seeking a Software Development Internship. Feel free
              to reach out if you're interested in working together or have any
              opportunities!
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <i className="fas fa-envelope text-accent text-xl w-8"></i>
                <a
                  href={`mailto:${personal.email}`}
                  className="text-textMuted hover:text-accent"
                >
                  {personal.email}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <i className="fas fa-phone text-accent text-xl w-8"></i>
                <div>
                  {personal.phone.map((phone) => (
                    <a
                      key={phone}
                      href={`tel:${phone.replace(/\s/g, '')}`}
                      className="text-textMuted hover:text-accent block"
                    >
                      {phone}
                    </a>
                  ))}
                </div>
              </div>
              <div className="flex items-center gap-3">
                <i className="fas fa-map-marker-alt text-accent text-xl w-8"></i>
                <span className="text-textMuted">{personal.location}</span>
              </div>
            </div>
            <div className="flex gap-4 mt-8">
              <a
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center text-accent hover:bg-accent hover:text-primary transition"
              >
                <i className="fab fa-linkedin-in text-xl"></i>
              </a>
              <a
                href={personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center text-accent hover:bg-accent hover:text-primary transition"
              >
                <i className="fab fa-github text-xl"></i>
              </a>
            </div>
          </div>

          <div>
            <form ref={form} onSubmit={sendEmail} className="space-y-4">
              <input
                type="text"
                name="user_name"
                placeholder="Your Name"
                required
                className="w-full bg-secondary p-3 rounded text-textLight border border-textMuted/20 focus:border-accent outline-none"
              />
              <input
                type="email"
                name="user_email"
                placeholder="Your Email"
                required
                className="w-full bg-secondary p-3 rounded text-textLight border border-textMuted/20 focus:border-accent outline-none"
              />
              <textarea
                name="message"
                rows={5}
                placeholder="Your Message"
                required
                className="w-full bg-secondary p-3 rounded text-textLight border border-textMuted/20 focus:border-accent outline-none"
              ></textarea>
              <button
                type="submit"
                className="w-full bg-accent text-primary py-3 rounded hover:bg-accent/90 transition"
              >
                Send Message
              </button>
              {sent && (
                <p className="text-green-400 text-center">
                  Message sent successfully!
                </p>
              )}
              {error && (
                <p className="text-red-400 text-center">
                  Failed to send. Please try again.
                </p>
              )}
            </form>

            <div className="mt-8">
              <h4 className="text-textLight text-lg mb-4">References</h4>
              {references.map((ref, i) => (
                <div key={i} className="bg-secondary p-4 rounded-lg">
                  <h5 className="text-accent font-semibold">{ref.name}</h5>
                  <p className="text-textMuted text-sm">{ref.title}</p>
                  <a
                    href={`tel:${ref.phone.replace(/\s/g, '')}`}
                    className="text-textMuted text-sm hover:text-accent block"
                  >
                    {ref.phone}
                  </a>
                  <p className="text-textMuted text-xs mt-2 italic">{ref.note}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}