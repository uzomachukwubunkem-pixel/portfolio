'use client'

import Hero from '@/component/Hero'
import About from '@/component/About'
import Experience from '@/component/Experience'
import FeaturedProjects from '@/component/FeaturedProjects'
import GitHubProjects from '@/component/GithubProjects'
import Contact from '@/component/Contact'
import ScrollToTop from '@/component/ScrollToTop'

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Experience />
      <FeaturedProjects />
      <GitHubProjects />
      <Contact />
      <ScrollToTop />
    </>
  )
}