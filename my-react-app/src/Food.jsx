import React, {useState} from 'react';

function Food(){
    const [name, setName] = useState("Guest");
    const [age, setAge] = useState(0);
    const updateName = () => {
        setName("Parker");
    }
    const incrementAge = () => {
        setAge(age + 1);
    }
    return(<div>
        <p>Name: {name}</p>
        <button onClick={updateName}>Set Name</button>
        <p>Age: {age}</p>
        <button onClick={incrementAge}>Increment Age</button>
    </div>);
}

export default Food