import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {

  state ={
    persons : [
      {id: 'Dipak29', name: "Dipak", age: 29},
      {id: 'Yogesh26', name: "Yogesh", age: 26},
      {id: 'Anil28', name: "Anil", age: 28}    
    ],
    showPersons: false
  };


/*   switchNameHandler = (newName) => {
    //console.log('Was clicked');   
    // Don't do this : this.state.persons[0].name = 'Dipak Pachpande';

    this.setState({persons : [
      {name : newName, age : 29},
      { name : "Yogesh", age : 26},
      { name : "Anil", age : 30}
    ] })
  } */

  deletePersonHandler = (personIndex) => {
//    const persons = this.state.persons.slice();

    const persons = [...this.state.persons]
    persons.splice(personIndex,1);
    this.setState({persons: persons})
  }

  nameChangedHandler = (event,id) => {
    
    const personIndex = this.state.persons.findIndex(p => {
      return p.id===id;
    });

    const person = {
      ...this.state.persons[personIndex]
    }

//    const person = Object.assign({},this.state.persons[personIndex]); 

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({persons : persons})

  }

  togglePersonHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  render() {    

    let persons= null;

    if(this.state.showPersons){
      persons= (
        <div>
          {this.state.persons.map((person,index) => {
            return <Person
             click={() => this.deletePersonHandler(index)}
             name={person.name}
             age={person.age}
             key={person.id}
             changed={(event) => this.nameChangedHandler(event,person.id)} />
          })}
        </div> 
      );

/*       style.backgroundColor= 'red';
      style[':hover']= {
        backgroundColor: 'salmon',
        color: 'black'
      } */       

    }

    const classes = [];
    if(this.state.persons.length <= 2){
      classes.push('red');    // classes = ['red']
    }
    if(this.state.persons.length <= 1){
      classes.push('bold');  // classes = ['red','bold']
    }

    return (
      <div className="App">
        <h1>Hi I'm a React App...!</h1>
        <p className={classes.join(' ')}>This is working...!</p>
        <button className="button" onClick={this.togglePersonHandler}>Toggle Persons</button>
        {persons}
      </div>
    );

//    return React.createElement('div', {className : 'App'}, React.createElement('h1', null , 'Hi I\'m a React App!!!'));

  }
}

export default App;
