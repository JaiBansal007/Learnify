"use client";
import axios from 'axios';
import React, { use, useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import  {useRouter}  from 'next/navigation';


export default function FlashcardForm({handleSubmit}:any) {

    const [topic, setTopic] = useState<string>('');
    const router=useRouter();
  
    useEffect(() => {
      const token = localStorage.getItem('token');
      if (!token) {
        toast.error("Login First",{
          position: 'top-center',
        });
        router.push('/auth/login');
      }
    }, []);
  
    return (
      <div className="bg-white rounded-lg shadow-md p-6 max-w-md mx-auto">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">Create New Flashcard</h2>
        <form onSubmit={(e)=>{
          e.preventDefault();
          handleSubmit(topic);
          setTopic('');
        }}>
          <div className="mb-4">
            <label htmlFor="topic" className="block text-sm font-medium text-gray-700 mb-1">
              Topic
            </label>
            <input
              type="text"
              id="topic"
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter topic category"
              required
            />
          </div>
          
          <div className="flex justify-end">
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
            >
              Create Flashcard
            </button>
          </div>
        </form>
      </div>
    );
  };