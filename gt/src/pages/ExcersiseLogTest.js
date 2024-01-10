import React, {useState} from 'react'
import {v4 as uuidv4} from 'uuid';
function ExcersiseLogTest() {
    const [excersises, setExcersise] = useState([{id: 1, value: 0}]);
    const [excersiseName, setExcersiseName] = useState('');
    const uniqueExcersiseId = uuidv4();

    const handleExcersiseNameChange = (e) =>{
        setExcersiseName(e.target.value);
    }
    const addExcersiseLog = () =>{
        const newExcersiseId = uniqueExcersiseId;
        setExcersise((prevExcersise) => [...prevExcersise, {id: newExcersiseId, value: 0}])
    }
  return (
    <div className='p-8'>
        {excersises.map((excersise)=> (
            <div key={excersise.id}>
                <div>
                    <input type="text" name="Excersise" value={excersiseName} onChange={handleExcersiseNameChange}/>
                    {excersiseName}

                </div>
            </div>
        ))};

        <button onClick={addExcersiseLog}> Add another excersise</button>
    </div>
  )
}

export default ExcersiseLogTest;