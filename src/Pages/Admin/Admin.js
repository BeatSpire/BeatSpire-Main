import { Co2Sharp } from '@mui/icons-material'
import React, { useContext, useState } from 'react'
import { FirebaseConfig } from '../../BackendConfig/FirebaseConfig'
import Navbar from '../Landing/components/Navbar'

export const Admin = () => {
    const {UserAdmin,PendingVerifications,verifyArtist} = useContext(FirebaseConfig)
    const [loading, setLoading] = useState(false)
    const handleVerification = async(wallet) =>{
      console.log("verifing...")
        await verifyArtist(wallet)
    }
  return (
    <>
  

    {UserAdmin ?      < div className="min-h-screen bg-[#99FFE3]">
        <Navbar/>
<div className='text-4xl font-bold '>Admin Section </div>
<br/><br/>
{
  PendingVerifications.map((item,k)=>{
    return(
      <div key = {k}>
<div className='flex flex-row justify-center'>
<div className='border border-2 border-black w-[50%]'>
   <div className='text-xl font-bold '>{item.name} </div>
   <div className='flex flex-row justify-evenly'>
 <a href = {item.spotify}>    <button class="mr-2 bg-green-500 text-green-100 block py-2 px-8 rounded-full">Spotify</button> </a> 
 <a href={item.twitter}><button
  type="button"
  data-te-ripple-init
  data-te-ripple-color="light"
  class="mb-2 inline-block rounded px-6 py-2.5 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg"
  style={{backgroundColor: "#1da1f2"}}>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    class="h-4 w-4"
    fill="currentColor"
    viewBox="0 0 24 24">
    <path
      d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
  </svg>
</button></a>
 </div>
 <div className='flex flex-row justify-evenly'>

 <img src = {item.txScrShot}/>
</div>
{!loading && <button className='bg-green-700 font-bold text-white text-xl p-2 rounded-xl mt-4 mb-4' onClick={()=>handleVerification(item.wallet)}>Verify User </button>}
{loading &&  <button className='bg-green-700 font-bold text-white text-xl p-2 rounded-xl mt-4 mb-4 cursor-not-allowed' onClick={()=>handleVerification(item.wallet)}>Verify User </button>   }
</div>
</div>
      </div>
    )
  })
}

    



    </div>: < div className="min-h-screen bg-[#99FFE3]">
        <Navbar/>
<div className='text-4xl font-bold '>Admin Section </div>
<br/><br/> <div>Only Admins can access this section</div> </div> }
    
    </>
    
  )
}
