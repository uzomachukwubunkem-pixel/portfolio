'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { selectedGitHubRepos } from '@/lib/data'
import { fetchSelectedRepos, GitHubRepo } from '@/lib/github'
const GITHUB_USERNAME = 'uzomachukwubunkem-pixel'

export default function GitHubProjects() {
  const [repos, setRepos] = useState<GitHubRepo[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (selectedGitHubRepos.length === 0) {
      setLoading(false)
      setError('No repositories selected.')
      return
    }

    fetchSelectedRepos(GITHUB_USERNAME, selectedGitHubRepos)
      .then(setRepos)
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false))
  }, [])

  if (loading) {
    return (
      <div className="section-container text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-accent mx-auto"></div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="section-container text-center text-red-400">
        <p>⚠️ {error}</p>
      </div>
    )
  }

  if (repos.length === 0) {
    return (
      <div className="section-container text-center text-textMuted">
        <p>✨ No featured GitHub repositories at the moment.</p>
      </div>
    )
  }

  return (
    <section id="github" className="bg-secondary/30">
      <div className="section-container">
        <h2 className="section-title">GitHub Projects</h2>
        <h3 className="section-heading">My Code Repository</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {repos.map((repo, idx) => (
            <motion.a
              key={repo.id}
              href={repo.html_url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-secondary p-6 rounded-lg hover:-translate-y-2 transition-transform duration-300 shadow-lg block"
            >
              <div className="flex items-start justify-between">
                <h4 className="text-accent text-xl font-semibold">{repo.name}</h4>
                <span className="text-sm text-textMuted">
                  {repo.stargazers_count} ⭐
                </span>
              </div>
              <p className="text-textMuted mt-2 mb-4">
                {repo.description || 'No description'}
              </p>
              <div className="flex justify-between items-center text-sm text-textMuted">
                <span className="flex items-center gap-1">
                  <span className="w-3 h-3 rounded-full bg-accent"></span>
                  {repo.language || 'Not specified'}
                </span>
                <span>📅 {new Date(repo.updated_at).toLocaleDateString()}</span>
              </div>
            </motion.a>
          ))}
        </div>
        <div className="text-center mt-12">
          <a
            href={`https://github.com/${GITHUB_USERNAME}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-accent border border-accent px-6 py-3 rounded hover:bg-accent/10 transition"
          >
            <i className="fab fa-github"></i> View Full GitHub Profile
          </a>
        </div>
      </div>
    </section>
  )
}