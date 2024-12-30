"use client"
import React from 'react'

const page = () => {
  return (
    
    <div className='h-screen flex justify-center items-center'>
      <div className='flex flex-col font-bold text-2xl text-center'>
        <h1>Sign in</h1>
        <div className='my-4'><input className='p-2 rounded-xl text-black' type="email" /></div>
        <div className='my-2'><input className='p-2 rounded-xl text-black'  type="password" /></div>
      </div>
    </div>
  )
}

export default page
