import React, { useState } from 'react'
import { Link } from 'react-router-dom';

function Signup() {
  const [formData, setFormData] = useState({});
  const handleChange = (e) => {
    setFormData({
        // for keeping prev info
        ...formData, 
        [e.target.id] : e.target.value,
      });
  };
  console.log(formData);

  const handleSubmit = async (e) =>{
    //  to prevent page from refreshing
    e.preventDefault();
    // fetch request to our auth api to enter details into database 
    const res = await fetch('api/auth/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });
    const data = await res.json();
    console.log(data);
  }

  return (
    <div className='p-3 max-w-lg mx-auto'>
        <h1 className='text-3xl text-center font-semibold mt-4'>Sign Up</h1>

        <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
          {/* onChange event handler is to manage data when submited */}
            <input type='text' placeholder='Username' className='border p-3 rounded-lg mt-4' id='username'  onChange={handleChange}></input>
            <input type='email' placeholder='Email' className='border p-3 rounded-lg' id='email' onChange={handleChange}></input>
            <input type='password' placeholder='Password' className='border p-3 rounded-lg' id='password' onChange={handleChange}></input>
            <button className='bg-slate-600 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80' type="">SIGN UP</button>
        </form>

        <div className='flex gap-2 mt-5'>
            <p>Have an account?</p>
            <Link to={'/sign-in'}>
                <span className='text-blue-500'>Sign In</span>
            </Link>
        </div>
    </div>
  )
}

export default Signup;