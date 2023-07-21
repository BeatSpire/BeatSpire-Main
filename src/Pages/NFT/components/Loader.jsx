import React from 'react'

export const Loader = () => {
  return (
<div className='flex flex-row justify-center h-screen '>
        <div className='flex flex-col justify-center text-red-700'>
          <div className = " animate-spin rounded-full h-16 w-16 border-b-2 top-0 left-0 border-red-700">  </div>
         </div></div>
  )
}
