"use client"
import React from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import { useState, useEffect } from 'react';
const page = () => {

  const [user, setuser] = useState({
    email: "",
    password: ""
  })

  const [loader, setloader] = useState(false)
  useEffect(() => {
    if (user.email.length > 0 && user.password.length > 0) {
      setbutton(true);
    }
    else {
      setbutton(false);
    }
  }, [user])
  const [button, setbutton] = useState(false)

  const OnSignUp = async () => {
    try {
      setloader(true)
      const response = await axios.post("api/users/signup", user);
      console.log("Signedup successfully", response.data)
      
    } catch (err) {
      console.log(err)
    }finally {
      setloader(false)
    }
  }
  return (

    <div className='h-screen flex justify-center items-center'>
      <div className='flex flex-col font-bold text-2xl text-center'>
        <h1>{loader ? "Siging Up..." : "Sign Up"}</h1>
        <div className='my-4'><input onChange={(e) => setuser({ ...user, email: e.target.value })} value={user.email} className='p-2 rounded-xl text-black' type="email" placeholder='Email' /></div>
        <div className='my-2'><input onChange={(e) => setuser({ ...user, password: e.target.value })} value={user.password} className='p-2 rounded-xl text-black' type="password" placeholder='Password' /></div>
        <div className="my-2">
          <button
            onClick={button ? OnSignUp : () => {}}
            disabled={!button}
            className={`p-2 rounded-xl text-black ${button ? "bg-gray-700 cursor-pointer active:bg-gray-600 active:scale-95" : "bg-gray-400 cursor-not-allowed"
              } transition-all`}
          >
            Sign Up
          </button>
        </div>
      </div>
    </div>
  )
}

export default page