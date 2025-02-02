"use client";
import React from 'react'
import axios from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
const page = () => {
const router = useRouter();
    const logout = async() => {
        try {
            await axios.get("api/users/logout")
            router.push("/login")
        } catch (error:any) {
            console.log(error.message);
        }
    }
  return (
    <div className='h-screen flex justify-center items-center'>
      <div className='flex flex-col justify-center items-center'>
        <h1 className='text-4xl font-bold mb-8'>Profile</h1>
        <button onClick={logout} className='text-4xl font-bold mb-4 bg-gray-700 p-2 rounded-lg cursor-pointer active:bg-gray-600 active:scale-95 transition-all'>Logout</button>
      </div>
    </div>
  )
}

export default page
