import React, {useEffect} from 'react';
import classes from './Cockpit.css';

const cockpit = (props) => {

// Below useEffect() is executed when the 'props' of 'persons' changes  

/*     useEffect(() => {
      console.log('[Cockpit.js] useEffect');      
      //Http request can also be declared in it

      setTimeout(() => {
        alert('Saved data to cloud...!');
      },1000);
    },[props.persons]); */

    useEffect(() => {
      console.log('[Cockpit.js] useEffect');      
      //Http request can also be declared in it

      setTimeout(() => {
        alert('Saved data to cloud...!');
      },1000);

      return () => {
        console.log('[Cockpit.js] cleanup work in useEffect');        
      };
    },[]);    

    useEffect(() => {
      console.log('[Cockpit.js] 2nd useEffect');
      return () => {
        console.log('[Cockpit.js] cleanup work in 2nd useEffect');        
      };
    });

    const assignedClasses = [];
    let btnClass = '';
    if(props.showPersons){
        btnClass = classes.Red;
    }

    if(props.persons.length <= 2){
      assignedClasses.push(classes.red);    // classes = ['red']
    }
    if(props.persons.length <= 1){
      assignedClasses.push(classes.bold);  // classes = ['red','bold']
    }    

    return (
        <div classes={classes.Cockpit}>
            <h1>{props.title}</h1>
            <p className={assignedClasses.join(' ')}>This is working...!</p>
            <button className={btnClass} onClick={props.clicked}>Toggle Persons</button>        
        </div>
    );
};

export default cockpit;