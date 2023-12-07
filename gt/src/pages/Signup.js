import React, { useState } from 'react'
import { Link , useNavigate} from 'react-router-dom';

function Signup() {
  // usestate o to handle form data
  const [formData, setFormData] = useState({});

  // userstate to keep track of errors
  const [error, setError] = useState(null);

  // usestate for checking if function has loaded or not
  const [loading, setLoading] = useState(false);

  // create an instance of useNavigate to route the user immediately to the sign in page upon a successfull sign up
  const usenavigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
        // for keeping prev info
        ...formData, 
        [e.target.id] : e.target.value,
      });
  };

  console.log(formData);

  const handleSubmit = async (e) =>{

    try {
      setLoading(true);
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

      if(data.sucess === false){
        setLoading(false);
        setError(data.message);
        return; 
      }
      
      // setting the loading to false as the loading has been completed
      setLoading(false);

      // setting the error to null since the sign up was successfull and there no longer needts to be an error so to remove the old error
      setError(null);

      console.log(data);
      
      // sign up successfull with of errors and the loading is complete now route to sign-in using usenavigate instance
      usenavigate('/sign-in');
      
    } catch (error) {
      setLoading(false);
      setError(error.message);
    }
   
  }

  return (
    <div className='p-3 max-w-lg mx-auto'>
        <h1 className='text-3xl text-center font-semibold mt-4'>Sign Up</h1>

        <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
          {/* onChange event handler is to manage data when submited */}
            <input type='text' placeholder='Username' className='border p-3 rounded-lg mt-4' id='username'  onChange={handleChange}></input>
            <input type='email' placeholder='Email' className='border p-3 rounded-lg' id='email' onChange={handleChange}></input>
            <input type='password' placeholder='Password' className='border p-3 rounded-lg' id='password' onChange={handleChange}></input>
            <button disabled={loading} className='bg-slate-600 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80' type="">
                {loading? 'LOADING...' : 'SIGN UP' }
            </button>
        </form>

        <div className='flex gap-2 mt-5'>
            <p>Have an account?</p>
            <Link to={'/sign-in'}>
                <span className='text-blue-500'>Sign In</span>
            </Link>
        </div>
        {error && <p className='text-red-600'>{error}</p>}
    </div>
  )
}

export default Signup;