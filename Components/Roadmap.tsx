"use client";
import React, { useState } from 'react';

export default function Roadmap() {
  const [activeQuarter, setActiveQuarter] = useState('Q1');
  
  // Sample roadmap data
  const roadmapData = {
    'Q1': [
      { id: 1, feature: 'User Authentication', status: 'completed', description: 'Implement secure login and registration system' },
      { id: 2, feature: 'Core Dashboard', status: 'completed', description: 'Create main user dashboard with key metrics' },
      { id: 3, feature: 'Basic Reporting', status: 'in-progress', description: 'Implement fundamental data reporting features' }
    ],
    'Q2': [
      { id: 4, feature: 'Team Collaboration', status: 'planned', description: 'Add features for team members to work together' },
      { id: 5, feature: 'Advanced Analytics', status: 'planned', description: 'Implement deeper insights and data visualization' },
      { id: 6, feature: 'Mobile App (Beta)', status: 'planned', description: 'Release initial mobile version for testing' }
    ],
    'Q3': [
      { id: 7, feature: 'API Integration', status: 'planned', description: 'Create interfaces for third-party connections' },
      { id: 8, feature: 'Custom Workflows', status: 'planned', description: 'Allow users to create personalized processes' },
      { id: 9, feature: 'Enhanced Security', status: 'planned', description: 'Implement additional security protocols' }
    ],
    'Q4': [
      { id: 10, feature: 'AI Assistant', status: 'considering', description: 'Explore AI-powered features for automation' },
      { id: 11, feature: 'Global Expansion', status: 'considering', description: 'Prepare for international market launch' },
      { id: 12, feature: 'Enterprise Features', status: 'considering', description: 'Develop tools for larger organization needs' }
    ]
  };
  
  // Status color mapping
  const statusColors = {
    'completed': 'bg-green-100 text-green-800',
    'in-progress': 'bg-blue-100 text-blue-800',
    'planned': 'bg-purple-100 text-purple-800',
    'considering': 'bg-gray-100 text-gray-800'
  };
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 p-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold text-gray-800">Product Roadmap</h1>
          <div className="bg-white rounded-lg shadow-sm p-1">
            <div className="flex space-x-1">
              {Object.keys(roadmapData).map((quarter) => (
                <button
                  key={quarter}
                  className={`px-4 py-2 rounded-md transition-all ${
                    activeQuarter === quarter 
                      ? 'bg-indigo-600 text-white' 
                      : 'bg-white text-gray-600 hover:bg-gray-100'
                  }`}
                  onClick={() => setActiveQuarter(quarter)}
                >
                  {quarter} 2025
                </button>
              ))}
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="p-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">{activeQuarter} 2025 Planned Features</h2>
            
            <div className="space-y-6">
              {roadmapData[activeQuarter].map((item) => (
                <div key={item.id} className="bg-gray-50 rounded-lg p-5 transition-all hover:shadow-md">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-lg font-medium text-gray-800">{item.feature}</h3>
                      <p className="text-gray-600 mt-1">{item.description}</p>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${statusColors[item.status]}`}>
                      {item.status.charAt(0).toUpperCase() + item.status.slice(1)}
                    </span>
                  </div>
                  
                  {item.status === 'in-progress' && (
                    <div className="mt-4">
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-blue-600 h-2 rounded-full w-2/3"></div>
                      </div>
                      <div className="flex justify-between mt-1">
                        <span className="text-xs text-gray-500">In development</span>
                        <span className="text-xs text-gray-500">65% complete</span>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
          
          <div className="bg-gray-50 border-t border-gray-100 p-4">
            <div className="flex items-center justify-between">
              <div className="flex space-x-4">
                <div className="flex items-center">
                  <span className="w-3 h-3 bg-green-500 rounded-full mr-2"></span>
                  <span className="text-sm text-gray-600">Completed</span>
                </div>
                <div className="flex items-center">
                  <span className="w-3 h-3 bg-blue-500 rounded-full mr-2"></span>
                  <span className="text-sm text-gray-600">In Progress</span>
                </div>
                <div className="flex items-center">
                  <span className="w-3 h-3 bg-purple-500 rounded-full mr-2"></span>
                  <span className="text-sm text-gray-600">Planned</span>
                </div>
                <div className="flex items-center">
                  <span className="w-3 h-3 bg-gray-500 rounded-full mr-2"></span>
                  <span className="text-sm text-gray-600">Considering</span>
                </div>
              </div>
              
              <p className="text-sm text-gray-500">Last updated: March 12, 2025</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}