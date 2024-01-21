import React from 'react'
import {useSelector} from 'react-redux';
import { Link , useNavigate} from 'react-router-dom';

export default function Header() {
  const {currentUser} = useSelector(state => state.user);
  
  return (

    <header className='bg-slate-200 shadow-md'>
      <div className='flex justify-between items-center max-w-6xl mx-auto p-3'>
        
          <h1 className='font-bold text-sm sm:text-xl flex flex-wrap'>
            <span className='text-yellow-400'>GYM</span>
            <span className='text-black'>TRACKER</span>
          </h1>
          
         <ul className='flex gap-4'>
          <Link to={'/'}>
            <li className='hidden sm:inline text-slate-700 hover:underline'>
              HOME
            </li>
          </Link>
          
            
          <Link to={'/sign-in'}>
              <li className='hidden sm:inline text-slate-700 hover:underline'>
                  SIGN IN
                </li>
          </Link>

          <Link >
              <li className='hidden sm:inline text-slate-700 hover:underline'>
                  SIGN UP
                </li>
          </Link>

          <Link to={'/calender'}>
                <li className='hidden sm:inline text-slate-700 hover:underline'>
                  CALENDER
                </li>
          </Link>
          
        </ul>

      </div>
    </header>
  )
}
