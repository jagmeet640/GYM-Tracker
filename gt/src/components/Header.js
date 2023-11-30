import React from 'react'


export default function Header() {
  return (

    <header className='bg-slate-200 shadow-md'>
      <div className='flex justify-between items-center max-w-6xl mx-auto p-3'>
        
          <h1 className='font-bold text-sm sm:text-xl flex flex-wrap'>
            <span className='text-yellow-400'>GYM</span>
            <span className='text-black'>TRACKER</span>
          </h1>
          
         <ul className='flex gap-4'>
        
            <li className='hidden sm:inline text-slate-700 hover:underline'>
              HOME
            </li>
          
            <li className='hidden sm:inline text-slate-700 hover:underline'>
              SIGN IN
            </li>

            <li className='hidden sm:inline text-slate-700 hover:underline'>
              LOG IN
            </li>
          
        </ul>

      </div>
    </header>
  )
}
