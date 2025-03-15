"use client";
import axios from 'axios';
import React, { use, useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import Card1 from '@/Components/Cards/Card1';
import FlashcardForm from '@/Components/FlashCardForm';
import Loader1 from '@/Components/Loaders/Loader1';


export default function Flashcard(){
  const [flashcards, setFlashcards] = useState([]);
  const [isopen,setisopen]=useState(true);
  const [loading,setLoading]=useState(false); 
  const getallflashcards = () => {

    axios.get(`${process.env.NEXT_PUBLIC_API_URL}flashcard`).then((response) => {
      setFlashcards(response.data.data);
    }).catch((error) => {
      console.log(error);
    }).finally(() => {
      setLoading(false);  
    });
  }

  const handleSubmit = (topic:any):void=> {
    console.log(topic);
    // console.log(localStorage.getItem('token'));
    const token = localStorage.getItem('token');

      if (!token) {
        toast.error("Login First");
      } else {
        toast.promise(axios.post(
          `${process.env.NEXT_PUBLIC_API_URL}flashcard`, 
          { topic: topic }, // Fix: Send only topic in the body
          {
            headers: {
              Authorization: `bearer ${token}`, // Fix: Use "Bearer" if required
              "Content-Type": "application/json"
            }
          }
        )
        .then(response => {
          getallflashcards();
        })
        .catch(error => {
          console.error("Error creating flashcard:", error.response ? error.response.data : error.message);
        }),{
          loading: 'Creating flashcard...',
          success: 'Flashcard created successfully!',
          error: 'Failed to create flashcard'
        })
      }
  };


  useEffect(() => {
    setLoading(true);
    getallflashcards();
  }, []);
  
  if(loading){
    return <Loader1 />
  }
  return (
    <>
      {isopen?( <FlashcardForm handleSubmit={handleSubmit} />):(<>
        <div className="flex justify-end"/></>)}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
      {flashcards.map(({_id,topic}) => (
          <Card1 key={_id} _id={_id} topic={topic} />
        ))}
      </div>
      
    </>
  )
};

