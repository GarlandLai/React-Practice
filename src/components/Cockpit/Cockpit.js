import React, { useEffect, useRef, useContext, memo } from "react";
import classes from './Cockpit.css';
import AuthContext from "../../context/auth-context";

const cockpit = (props) => {
  const toggleBtnRef = useRef(null);
  const authContext = useContext(AuthContext);
  useEffect(()=> {
    console.log("Cockpit useEffect Fired");
    // setTimeout(()=> {
    //   console.log('Testing useEffect functionality')
    // }, 1000);
    toggleBtnRef.current.click();
    // Can return Something/function in use effects
    return () => {
      console.log("cockpit cleanup work in useEffect")
    }
    // You can add an empty array to only run on first loads or unmounts
  }, [])

  // Cleanup function with not dependency so it runs after every update
  useEffect(()=> {
    console.log("Cockpit 2nd UseEffect");
    return () => {
      console.log("cockpit cleanup work in 2nd useEffect")
    }
  })

  const assignedClasses = [];
  let btnClass = "";
  if (props.showPersons) {
    btnClass = classes.Red;
  }
  if (props.personsLength <= 2) {
    assignedClasses.push(classes.red);
    }
   if (props.personsLength <= 1) {
    assignedClasses.push(classes.bold);
   }

  return(
    <div className={classes.Cockpit}>
    <h1>{props.title}</h1>
      <p className={assignedClasses.join(" ")}>Its working, YAY!</p>
      <button ref={toggleBtnRef} className={btnClass} onClick={props.clicked}>Toggle Persons</button>
        {<button onClick={authContext.login}>Log in</button>}
    </div>
  );
};

export default memo(cockpit);