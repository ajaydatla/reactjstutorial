import React from 'react';
import classes from './Cockpit.css';

const cockpit = (props) => {

    const assignedCClasses = [];
    let btnClass = '';
    if (props.showPersons) {
        
        btnClass = classes.Red;
    }

    if (props.persons.length <= 2) {
        assignedCClasses.push(classes.red); // classes = ['red']
    }
    if (props.persons.length <= 1) {
        assignedCClasses.push(classes.bold); // classes = ['red', 'bold']
    }

    return (
        <div className={classes.Cockpit}>
            <h1>Hi, I'm a React App</h1>
            <p className={assignedCClasses.join(' ')}>This is really working!</p>
            <button className={btnClass}
                onClick={props.clicked}>Toggle Persons</button>
        </div>
    );
};
export default cockpit;