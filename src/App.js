import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {

  state ={
    persons : [
      {name : "Dipak", age : 29},
      { name : "Yogesh", age : 26},
      { name : "Anil", age : 28}    
    ],
    showPersons: false
  }

  switchNameHandler = (newName) => {
    //console.log('Was clicked');   
    // Don't do this : this.state.persons[0].name = 'Dipak Pachpande';

    this.setState({persons : [
      {name : newName, age : 29},
      { name : "Yogesh", age : 26},
      { name : "Anil", age : 30}
    ] })
  }

  nameChangedHandler = (event) => {
    
    this.setState({persons : [
      {name : event.target.value, age : 29},
      { name : "Yogesh", age : 26},
      { name : "Anil", age : 31}
    ] })

  }

  togglePersonHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  render() {
    
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border :'1px solid blue',
      padding : '8px',
      cursor : 'pointer'
    }

    let persons= null;

    if(this.state.showPersons){
      persons= (
        <div>
          {this.state.persons.map(person => {
            return <Person
             name={person.name}
             age={person.age} />
          })}
        </div> 
      )
    }

    return (
      <div className="App">
        <h1>Hi I'm a React App...!</h1>
        <p>This is working...!</p>
        <button 
          style = {style}
          onClick={this.togglePersonHandler}>Toggle Persons</button>
         {persons}
      </div>
    );

//    return React.createElement('div', {className : 'App'}, React.createElement('h1', null , 'Hi I\'m a React App!!!'));

  }
}

export default App;
