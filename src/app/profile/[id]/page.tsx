import React from 'react'

const page = ({params}:any) => {
  return (
    <div className='h-screen flex justify-center items-center'>
      <div>Your profile id is {params.id}</div>
    </div>
  )
}

export default page
