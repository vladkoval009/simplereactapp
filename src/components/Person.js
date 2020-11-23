import React from 'react';
import './Person.css';

const person = (props) => {
return (

    <div className="Person">
        <p onClick={props.click}>My name is {props.name}. My age is {props.age}!</p>
        <input type="text" onChange={props.changed} />
    </div>    
    )
}

export default person;

//Calling onClick from Person.js component to App.js by passing a reference.
