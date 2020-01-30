import React, {useEffect,useRef} from 'react';
import classes from './Cockpit.css';

const cockpit = (props) => {

  const toggleBtnRef = useRef(null);

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

      toggleBtnRef.current.click();

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

    if(props.personsLength <= 2){
      assignedClasses.push(classes.red);    // classes = ['red']
    }
    if(props.personsLength <= 1){
      assignedClasses.push(classes.bold);  // classes = ['red','bold']
    }    

    return (
        <div classes={classes.Cockpit}>
            <h1>{props.title}</h1>
            <p className={assignedClasses.join(' ')}>This is working...!</p>
            <button ref={toggleBtnRef} className={btnClass} onClick={props.clicked}>
              Toggle Persons
            </button>    
            <button onClick={props.login}>Log In</button>
        </div>
    );
};

export default React.memo(cockpit);