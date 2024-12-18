'use client'

import { useState } from 'react'

const tabs = ['Feed', 'In Stock', 'Upcoming']

export default function TabNavigation() {
  const [activeTab, setActiveTab] = useState('Feed')

  return (
    <nav className="flex justify-around border-b border-gray-800 mb-6">
      {tabs.map((tab) => (
        <button
          key={tab}
          className={`py-2 px-4 font-semibold ${
            activeTab === tab ? 'text-white border-b-2 border-white' : 'text-gray-400'
          }`}
          onClick={() => setActiveTab(tab)}
        >
          {tab}
        </button>
      ))}
    </nav>
  )
}

