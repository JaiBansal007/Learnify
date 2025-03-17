"use client";
import React, { useState } from 'react';
import axios from 'axios';

type StreamingData = { content: string }[];

function parseStreamingData(dataArray: StreamingData): string {
  return dataArray.map(item => item.content).join('');
}

type DoubtType = {
  id: string;
  user: string;
  timestamp: string;
  message: string;
  resolved: boolean;
};

export default function Doubt() {
  const [newDoubt, setNewDoubt] = useState('');
  const [selectedDoubt, setSelectedDoubt] = useState<DoubtType | null>(null);
  const [filter, setFilter] = useState('all');
  const postNewDoubt = async () => {


    try {
      const formData = new FormData();
        formData.append('query', prompt);
      if (imageFile) {
        formData.append('file', imageFile);
      }
      const response = await fetch('http://localhost:4500/api/v1/doubt/new', {
        method: 'POST',
        body: formData
      });

      if (!response.ok) {
        // throw new Error(⁠ HTTP error! status: ${response.status} ⁠);
      }

      const reader = response.body?.getReader();
      const decoder = new TextDecoder();

      while (true) {
        const { value, done } = await reader.read();
        if (done) break;
      const chunk = decoder.decode(value, { stream: true });
        const lines = chunk.split('\n\n');

        for (const line of lines) {
            if (line.startsWith('data: ')) {
                const data = line.substring(6);
                if (data === '[DONE]') {
                  break;
                }
                try {
                const parsed = JSON.parse(data);
                const message = parsed.content || '';
                if (message) {
                  responseDiv.textContent += message;
                  responseDiv.scrollTop = responseDiv.scrollHeight;
                }
                } catch (e) {
              if (data && data !== '[DONE]') {
                  responseDiv.textContent += data;
                  responseDiv.scrollTop = responseDiv.scrollHeight;
                }
             console.error('Error parsing SSE data:', e);
            }
          }
        }
    
  
      console.log(parseStreamingData(Array.isArray(parsedData) ? parsedData : []));
  
    } catch (error) {
      console.log("Error posting doubt:", error);
    }
  };



  const handleAddDoubt = () => {
    if (!newDoubt.trim()) return;
    postNewDoubt();
    setNewDoubt('');
  };

  const toggleResolved = (id: string) => {
    if (!selectedDoubt) return;
    setSelectedDoubt({ ...selectedDoubt, resolved: !selectedDoubt.resolved });
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar with doubt list */}
      <div className="w-1/3 bg-white border-r border-gray-200 flex flex-col">
        <div className="p-4 border-b border-gray-200">
          <h1 className="text-xl font-bold text-gray-800">Doubts</h1>
          <div className="flex mt-2 space-x-2">
            {['all', 'resolved', 'unresolved'].map((type) => (
              <button
                key={type}
                className={`px-3 py-1 rounded-full text-sm ${
                  filter === type
                    ? type === 'resolved'
                      ? 'bg-green-500 text-white'
                      : type === 'unresolved'
                      ? 'bg-yellow-500 text-white'
                      : 'bg-blue-500 text-white'
                    : 'bg-gray-200 text-gray-700'
                }`}
                onClick={() => setFilter(type)}
              >
                {type.charAt(0).toUpperCase() + type.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main content area */}
      <div className="flex-1 flex flex-col">
        {selectedDoubt ? (
          <>
            <div className="p-4 border-b border-gray-200 bg-white flex justify-between items-center">
              <div>
                <h2 className="text-lg font-semibold text-gray-800">
                  Doubt from {selectedDoubt.user}
                </h2>
                <p className="text-sm text-gray-500">{selectedDoubt.timestamp}</p>
              </div>
              <button
                className={`px-4 py-2 rounded-lg ${
                  selectedDoubt.resolved
                    ? 'bg-gray-500 hover:bg-gray-600'
                    : 'bg-green-500 hover:bg-green-600'
                } text-white`}
                onClick={() => toggleResolved(selectedDoubt.id)}
              >
                {selectedDoubt.resolved ? 'Mark as Pending' : 'Mark as Resolved'}
              </button>
            </div>

            <div className="flex-1 p-6 overflow-y-auto bg-gray-50">
              <div className="bg-white rounded-lg p-4 shadow">
                <p className="text-gray-800">{selectedDoubt.message}</p>
              </div>

              <div className="mt-6">
                <h3 className="text-sm font-medium text-gray-500 mb-2">Responses</h3>
                <p className="text-sm text-gray-500 italic">No responses yet.</p>
              </div>
            </div>
          </>
        ) : (
          <div className="flex-1 flex items-center justify-center bg-gray-50">
            <p className="text-lg text-gray-500">Select a doubt to view details</p>
          </div>
        )}

        <div className="p-4 border-t border-gray-200 bg-white">
          <div className="flex space-x-2">
            <input
              type="text"
              className="flex-1 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="What's your doubt?"
              value={newDoubt}
              onChange={(e) => setNewDoubt(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleAddDoubt()}
            />
            <button
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg"
              onClick={handleAddDoubt}
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
