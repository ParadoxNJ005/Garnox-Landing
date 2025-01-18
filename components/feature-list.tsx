'use client'

import { CheckCircle, Clock } from 'lucide-react'
import { motion } from 'framer-motion'

const currentFeatures = [
  "Official IIITA Gmail login with OTP verification",
  "Profile selection: Choose semester, branch, and batch",
  "Access to semester-specific materials (Lecture Notes PDF)",
  "Year-wise previous question papers (PDF)",
  "View, download, and share PDFs for selected semester subjects",
  "Edit profile: Update semester, branch, and batch details",
  "Recent searches: Access offline (stored locally)",
  "Notifications"
]

const upcomingFeatures = [
  "Theme options: Switch between dark and light themes",
  "Moderators and important links (Videos and Documentations)",
  "Recommended books for each semester",
  "TA Connect: Connect with TAs for respective subjects",
  "Calendar: Manage class schedules, extra lectures, tutorials, labs, and daily events",
  "In-app quiz and practice tests",
  "In App ChatBot"
]

export function FeatureList() {
  return (
    <div className="flex flex-col md:flex-row gap-8">
      <motion.div 
        className="flex-1"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h3 className="text-2xl font-semibold mb-4 text-green-600">Current Features</h3>
        <ul className="space-y-2">
          {currentFeatures.map((feature, index) => (
            <motion.li 
              key={index} 
              className="flex items-start space-x-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0" />
              <span>{feature}</span>
            </motion.li>
          ))}
        </ul>
      </motion.div>
      <motion.div 
        className="flex-1"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h3 className="text-2xl font-semibold mb-4 text-blue-600">Upcoming Features</h3>
        <ul className="space-y-2">
          {upcomingFeatures.map((feature, index) => (
            <motion.li 
              key={index} 
              className="flex items-start space-x-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Clock className="h-6 w-6 text-blue-500 flex-shrink-0" />
              <span className="text-blue-600">{feature}</span>
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </div>
  )
}

