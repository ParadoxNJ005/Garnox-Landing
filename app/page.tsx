"use client"

import { Logo } from '../components/logo'
import { FeatureList } from '../components/feature-list'
import { DownloadButtons } from '../components/download-buttons'
import { DeveloperShowcase } from '../components/developer-showcase'
import { ThemeSwitch } from '../components/theme-switch'
import { Button } from '../components/ui/button'
import { Cards } from '../components/Cards'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 via-purple-100 to-blue-100 dark:from-gray-900 dark:via-purple-900 dark:to-gray-900 text-gray-900 dark:text-gray-100">
      <header className="bg-white dark:bg-gray-800 bg-opacity-80 dark:bg-opacity-80 shadow backdrop-blur-sm sticky top-0 z-[2000]">
        <div className="max-w-7xl mx-auto py-3 px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <Logo />
          <nav className="flex items-center space-x-4">
            <a href="#features" className="text-sm text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">Features</a>
            <a href="#screenshots" className="text-sm text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">Screenshots</a>
            <a href="#team" className="text-sm text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">Our Team</a>
            <a href="#download" className="text-sm text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">Download</a>
            <ThemeSwitch />
          </nav>
        </div>
      </header>

      <main>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <div className="px-4 py-6 sm:px-0">
            <h1 className="text-4xl font-bold text-center mb-8 text-blue-800 dark:text-blue-300">Welcome to Sembreaker</h1>
            <p className="text-xl text-center mb-12 text-blue-600 dark:text-blue-400">Your ultimate companion for IIITA academic resources and management</p>

            <section id="features" className="mb-16">
              <h2 className="text-3xl font-semibold mb-6 text-blue-800 dark:text-blue-300">Features</h2>
              <FeatureList />
            </section>

            <section id="screenshots" className="mb-16">
              <h2 className="text-3xl font-semibold mb-6 text-blue-800 dark:text-blue-300"></h2>
              <Cards />
            </section>

            <section id="download" className="text-center mb-16">
              <h2 className="text-3xl font-semibold mb-6 text-blue-800 dark:text-blue-300">Download Sembreaker</h2>
              <DownloadButtons />
            </section>

            <section className="text-center mb-16">
              <h2 className="text-3xl font-semibold mb-6 text-blue-800 dark:text-blue-300">Admin Access</h2>
              <Button 
                onClick={() => window.open('https://garnox-web.vercel.app/', '_blank')}
                className="bg-purple-600 hover:bg-purple-700 dark:bg-purple-700 dark:hover:bg-purple-800 text-white font-bold py-2 px-4 rounded"
              >
                Open Admin Website
              </Button>
            </section>
          </div>
        </div>

        <section id="team" className="mb-16">
          <DeveloperShowcase />
        </section>
      </main>

      <footer className="bg-white dark:bg-gray-800 bg-opacity-80 dark:bg-opacity-80 shadow mt-12 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 text-center text-gray-500 dark:text-gray-400">
          © 2025 Sembreaker. Made With ♥️ By GeekHaven.
        </div>
      </footer>
    </div>
  )
}

