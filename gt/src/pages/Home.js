import React from 'react';
import { Link } from 'react-router-dom';
// import { v4 as uuidv4 } from 'uuid';


function Home() {
  


  return (

    <div className='p-8'>
      
      
      <Link to={'/repsTest'}>
        <button
            id='test-reps-page'
            className='bg-blue-500 text-white hover:bg-blue-950 font-bold py-1 px-2 rounded text-sm mr-2'
        >
            Log Reps
        </button>
      </Link>
      
      <Link to={'/excersiseTest'}>
          <button
              id='test-reps-page'
              className='bg-blue-500 text-white hover:bg-blue-950 font-bold py-1 px-2 rounded text-sm'
          >
              Log Excersise
          </button>
      </Link>
        
        
    </div>
  );
}

export default Home;

