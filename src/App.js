import './App.css';
import React from 'react';
import Person from './components/Person';

class App extends React.Component {

  //State is only avaliable in class component. State is a special property
  state = {
    people: [
      { name: 'Max', age: '28'},
      { name: 'Vlad', age: '68'},
      { name: 'Peter', age: '18'}

    ]
  }

  // With this function I can manipulate the state 
  changeNameHandler = (newName) => {
    //DO NOT TRY TO CHANGE THE STATE LIKE THIS: 
    //this.state.person[0].name = 'Carl';
    //It should be done like this:
    //setState will update the DOM and merge the data. 
    this.setState(
      {
        people: [
          { name: 'BOB', age: '100'},
          { name: newName , age: '35'},
          { name: 'Peter', age: '50'}
    
        ]
      }
    )
  
  }

    // HOW TO PASS THE DATA FROM 'newName' in the function changeNameHandler use bind.(arg1,arg2) Arg2: we change the data between ''.

    //This func/method will change the data by user's input. 

    nameChangeHandler = (event) => {

     this.setState(
      {
        people: [
          { name: 'BOB', age: '100'},
          { name: 'Vince' , age: '35'},
          { name: 'Peter', age: event.target.value}
          // event.target.value will get the input from Person.js
        ]
      }
    )

  }

  render(){

    //INLINE STYLING
    const style = {
    backgroundColor: 'red',
    font: 'inherit',
    padding: '10px'

    };

  return (
    <div className="App">
    <h1>This is my practice app in React</h1>
    <Person name={this.state.people[0].name} age={this.state.people[0].age} click={this.changeNameHandler.bind(this,'SHERON')}/>
    <Person name={this.state.people[1].name} age={this.state.people[1].age}/>
    <Person name={this.state.people[2].name} age={this.state.people[2].age} changed={this.nameChangeHandler}/>
    <button style={style} onClick={this.changeNameHandler.bind(this,'SHERON!!')}>Change Names</button>

    </div>
  );
  }
}

export default App;
