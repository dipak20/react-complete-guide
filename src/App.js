import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {

  state ={
    persons : [
      {name : "Dipak", age : 29},
      { name : "Yogesh", age : 26},
      { name : "Anil", age : 28}
    ]
  }

  switchNameHandler = () => {
    //console.log('Was clicked');   
    // Don't do this : this.state.persons[0].name = 'Dipak Pachpande';

    this.setState({persons : [
      {name : "Dipak Pachpande", age : 29},
      { name : "Yogesh", age : 26},
      { name : "Anil", age : 30}
    ] })
  }

  render() {
    
    return (
      <div className="App">
        <h1>Hi I'm a React App...!</h1>
        <p>This is working...!</p>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person
         name={this.state.persons[0].name}
         age={this.state.persons[0].age} >My Hobby : Trekking</Person>
        <Person
         name={this.state.persons[1].name}
         age={this.state.persons[1].age} />
        <Person
         name={this.state.persons[2].name}
         age={this.state.persons[2].age} />
      </div>
    );

//    return React.createElement('div', {className : 'App'}, React.createElement('h1', null , 'Hi I\'m a React App!!!'));

  }
}

export default App;
