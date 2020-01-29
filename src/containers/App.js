import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import withClass from '../hoc/withClass';
import Auxiliary from '../hoc/Auxiliary';

class App extends Component {

  constructor(props){
    super(props);
    console.log('[App.js] constructor');    
  }

  state = {
    persons : [
      {id: 'Dipak29', name: "Dipak", age: "29"},
      {id: 'Yogesh26', name: "Yogesh", age: 26},
      {id: 'Anil28', name: "Anil", age: 28}    
    ],
    showPersons: false,
    showCockpit: true,
    changeCounter: 0
  };

  static getDerivedStateFromProps(props,state){
    console.log('[App.js] getDerivedStateFromProps',props);
    return state;
  }

  componentDidMount(){
    console.log('[App.js] componentDidMount');    
  }

  shouldComponentUpdate(nextProps,nextState){
    console.log('[App.js] shouldComponentUpdate');    
    return true;
  }

  componentDidUpdate(){
    console.log('[App.js] componentDidUpdate');    
  }

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
    };

//    const person = Object.assign({},this.state.persons[personIndex]); 

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState((prevState,props) => {
      return {
        persons : persons,
        changeCounter: this.state.changeCounter + 1 
      };

    });
  };

  togglePersonHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  render() {    
    console.log('[App.js] render');
        
    let persons= null;

    if(this.state.showPersons){
      persons= ( 
          <Persons
            persons={this.state.persons}
            clicked={this.deletePersonHandler} 
            changed={this.nameChangedHandler} /> );
    }

    return (
      <Auxiliary>
        <button
          onClick={() => {this.setState({showCockpit: false})}}>
            Remove Cockpit
        </button>
        {this.state.showCockpit ? (
          <Cockpit  
            title={this.props.appTitle}
            showPersons={this.state.showPersons}
            personsLength={this.state.persons.length}
            clicked={this.togglePersonHandler} />
        ) : null }
        {persons}
      </Auxiliary>
    );

//    return React.createElement('div', {className : 'App'}, React.createElement('h1', null , 'Hi I\'m a React App!!!'));

  }
}

export default withClass(App, classes.App);