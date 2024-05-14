import React from 'react'

export default function page() {
  return (
    <div className="flex flex-col items-center w-full h-full space-y-20">
      <div className="flex justify-between w-[90%]">
        <div className="flex">
          <img id="note" src="/white.jpg" className=" w-20 h-auto" alt="hello"/>
          <p id="header" className="poetsen-one-regular mt-4" >New Music Recs</p>
        </div>
        <div className="w-fit px-5 py-2 h-9 mt-3 rounded-md shadow bg-gray-900 text-center flex justify-center items-center">
          <button className="w-fit h-7 text-center text-violet-100 text-base font-semibold font-['DM_Sans']">Sign in with Google</button>
        </div>
      </div>
    </div>
  )
}
