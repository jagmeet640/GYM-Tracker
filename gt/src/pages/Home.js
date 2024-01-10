import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';


function Home() {
  const [counters, setCounters] = useState([{ id: 1, value: 0 }]);
  const uniqueId = uuidv4();

  const increaseReps = (id) => {
    setCounters((prevCounters) =>
      prevCounters.map((counter) =>
        counter.id === id ? { ...counter, value: counter.value + 1 } : counter
      )
    );
  };

  const resetReps = (id) => {
    setCounters((prevCounters) =>
      prevCounters.map((counter) =>
        counter.id === id ? { ...counter, value: 0 } : counter
      )
    );
  };


  const addCounter = () => {

    // const newCounterId = counters.length + 1;
    const newCounterId = uniqueId;
    setCounters((prevCounters) => [...prevCounters, { id: newCounterId, value: 0 }]);
  };

  const removeCounter = (id) => {
    setCounters((prevCounters) => prevCounters.filter((counter) => counter.id !== id));
  }

  return (
    <div className='p-8'>
      {counters.map((counter) => (
        <div key={counter.id} className='bg-white p-6 rounded-lg shadow-md mb-4'>
          <div className='text-xl font-bold mb-4'>Excersise #{counter.id} Reps : {counter.value}</div>
          <button
            onClick={() => increaseReps(counter.id)}
            className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2'
          >
            Increase reps
          </button>
          <button
            onClick={() => resetReps(counter.id)}
            className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mr-2'
          >
            Reset
          </button>

          <button
            onClick={() => removeCounter(counter.id)}
            className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded'
          >
            Remove Counter
          </button>
          

        </div>
      ))}
      <button
        onClick={addCounter}
        className='bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mr-2'
      >
        Add Another Counter
      </button>

      
    </div>
  );
}

export default Home;

