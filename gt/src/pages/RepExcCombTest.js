import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

function RepExcCombTest() {
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

  const uniqueExcersiseId = uuidv4();
    const [excersises, setExcersise] = useState([{ id: uniqueExcersiseId, excersiseName: '' }]);

    const handleExcersiseNameChange = (e, id) => {
        setExcersise((prevExcersise) =>
            prevExcersise.map((excersise) =>
                excersise.id === id ? { ...excersise, excersiseName: e.target.value } : excersise
            ));

    };
    const addExcersiseLog = () => {
        const newExcersiseId = uniqueExcersiseId;
        setExcersise((prevExcersise) => [...prevExcersise, { id: newExcersiseId, value: '' }])
    };

    const removeExcersise = (id) => {
        setExcersise((prevExcersise) => prevExcersise.filter((excersise) => excersise.id !== id));
    };
  
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
      {excersises.map((excersise) => (
                <div key={excersise.id}>
                    <div>
                        <input type="text" name="Excersise" value={excersise.excersiseName} onChange={() => handleExcersiseNameChange(excersise.id)} />
                    </div>

                    <button
                        onClick={() => removeExcersise(excersise.id)}
                        className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mb-2 mt-2'
                    >Remove Excersise</button> 
                </div>
            ))}

            <button className='bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mt-2' onClick={addExcersiseLog}> Add another excersise</button>
      
    </div>
  )
}

export default RepExcCombTest;