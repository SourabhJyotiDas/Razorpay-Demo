import React from 'react'
import { Link, useSearchParams } from 'react-router-dom'

export default function Payment() {

   const searchQuery = useSearchParams()[0];
   const referenceNo = searchQuery.get("reference")

   return (
      <div>
         <div className='h-[100vh] w-[100%] flex flex-col items-center justify-center text-center space-y-5'>
            <h2 className='text-2xl text-green-600 font-semibold'>Order Successfull</h2>
            <p className='bg-blue-500 text-white p-3'>Reference No.  </p>
            <Link to={"/"}>
               <button className='bg-blue-500 p-3 text-white hover:bg-blue-800 ease-in-out transition-all duration-150 rounded-md'>Back to Home</button>
            </Link>
         </div>
      </div>
   )
}
