"use client";
import React, { useState } from 'react';

// Define the flashcard type
interface FlashcardType {
  id: string;
  description: string;
  body: string;
  topic: string;
}

interface FlashcardFormProps {
  onAddFlashcard: (flashcard: FlashcardType) => void;
}

const FlashcardForm: React.FC<FlashcardFormProps> = ({ onAddFlashcard }) => {
  const [description, setDescription] = useState<string>('');
  const [body, setBody] = useState<string>('');
  const [topic, setTopic] = useState<string>('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    
    const newFlashcard: FlashcardType = {
      id: Date.now().toString(),
      description,
      body,
      topic
    };
    
    onAddFlashcard(newFlashcard);
    
    // Reset form fields
    setDescription('');
    setBody('');
    setTopic('');
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Create New Flashcard</h2>
      <form onSubmit={handleSubmit}>
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
        
        <div className="mb-4">
          <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
            Description
          </label>
          <input
            type="text"
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter a short description"
            required
          />
        </div>
        
        <div className="mb-6">
          <label htmlFor="body" className="block text-sm font-medium text-gray-700 mb-1">
            Body
          </label>
          <textarea
            id="body"
            value={body}
            onChange={(e) => setBody(e.target.value)}
            rows={4}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter the main content"
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

export default FlashcardForm;

