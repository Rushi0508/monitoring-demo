"use client"
import { useState } from 'react';

export default function Home() {
  const [serverCrash, setServerCrash] = useState(false);

  const crashServer = async () => {
    try {
      await fetch('/api/crash'); // API call to trigger the server crash
    } catch (error) {
      console.error('Server crash initiated');
    }
    setServerCrash(true);
  };

  return (
    <div className='flex justify-center flex-col items-center h-screen gap-10'>
      <h1 className='text-4xl'>Home Page</h1>
      <div className='flex gap-5'>
        <button className='bg-green-500 py-2 px-4 rounded-full' onClick={crashServer}>
          Crash Entire Server
        </button>
      </div>
      {serverCrash && <p>Server is down! No further actions can be taken.</p>}
    </div>
  );
}
