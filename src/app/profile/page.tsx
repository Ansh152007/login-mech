"use client";
import React from 'react'
import axios from 'axios';
import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
const page = () => {
const [data, setdata] = useState(null)
const getuser = async ()=>{
  const user = await axios.get("api/users/me")
  console.log(user.data.data._id)
  setdata(user.data.data._id)
}
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
        <hr />
        <h2 className='text-white'>{data === null ? "User not found": <Link href={`profile/${data}`}>Click Here</Link>}</h2>
        <button onClick={logout} className='text-4xl font-bold mb-4 bg-gray-700 p-2 rounded-lg cursor-pointer active:bg-gray-600 active:scale-95 transition-all'>Logout</button>
        <button onClick={getuser} className='text-4xl font-bold mb-4 bg-gray-700 p-2 rounded-lg cursor-pointer active:bg-gray-600 active:scale-95 transition-all'>Get User</button>
      </div>
    </div>
  )
}

export default page
