import React from 'react';
import { Link } from 'react-router-dom';
// import { v4 as uuidv4 } from 'uuid';


function Home() {
  


  return (

    <div className='p-8'>
      
      
      {/* <Link to={'/repsTest'}>
        <button
            id='test-reps-page'
            className='bg-violet-500 text-white hover:bg-violet-950 font-bold py-1 px-2 rounded text-sm mr-2'
        >
            Log Reps
        </button>
      </Link>
      
      <Link to={'/excersiseTest'}>
          <button
              id='test-reps-page'
              className='bg-violet-500 text-white hover:bg-violet-950 font-bold py-1 px-2 rounded text-sm mr-2'
          >
              Log Excersise
          </button>
      </Link> */}

      <Link to={'/combTest'}>
          <button
              id='test-reps-page'
              className='bg-violet-500 text-white hover:bg-violet-950 font-bold py-1 px-2 rounded text-sm'
          >
              Excersise recorder test
          </button>
      </Link>
        
        
    </div>
  );
}

export default Home;

