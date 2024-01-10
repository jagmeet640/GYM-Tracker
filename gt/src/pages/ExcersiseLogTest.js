import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
function ExcersiseLogTest() {
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

export default ExcersiseLogTest;