"use client"
import React from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import { useState } from 'react';
const page = () => {
    const [user, setuser] = useState({
        email: "",
        password: ""
    })

    const SignUp = async () => {
        
    }
  return (
    
    <div className='h-screen flex justify-center items-center'>
      <div className='flex flex-col font-bold text-2xl text-center'>
        <h1>Sign Up</h1>
        <div className='my-4'><input onChange={(e) => setuser({...user, email: e.target.value})} value={user.email} className='p-2 rounded-xl text-black' type="email" placeholder='Email' /></div>
        <div className='my-2'><input onChange={(e) => setuser({...user, password: e.target.value})} value={user.password} className='p-2 rounded-xl text-black'  type="password" placeholder='Password' /></div>
        <div className='my-2'><button onClick={SignUp} className='p-2 rounded-xl text-black bg-gray-700 cursor-pointer active:bg-gray-600 active:scale-95 transition-all'>Sign Up</button></div>
      </div>
    </div>
  )
}

export default page