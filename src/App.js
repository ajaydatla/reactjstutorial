import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

class App extends Component {

  state = {
    persons: [
      { id: 1, name: "Eminem", age: 45 },
      { id: 2, name: "Steve Jobs", age: 60 },
      { id: 3, name: "Heath Ledger", age: 38 }
    ],
    showNames: false
  }

  switchNameHandler = (newName) => {
    console.log('he ');
    this.setState({
      persons: [
        { name: newName, age: 45 },
        { name: "Steve Jobs", age: 60 },
        { name: "Heath Ledger", age: 38 }
      ]
    })
  }
  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: "Eminem", age: 45 },
        { name: event.target.value, age: 60 },
        { name: "Heath Ledger", age: 38 }
      ]
    })
  }

  toggerPersonHandler = () => {
    const doesShow = this.state.showNames;
    this.setState({
      showNames: !doesShow
    });
  }

  render() {

    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    let person = null;

    if (this.state.showNames) {
      person = (<div>
        {this.state.persons.map(singlePerson => {
          return <Person name={singlePerson.name} age={singlePerson.age} key={singlePerson.id}/>;
        })}

      </div>);
    }

    return (
      <div className="App">
        <h1>This is survival of the real.</h1>
        <button style={style} onClick={this.toggerPersonHandler}>Switch Name</button>
        {person}
      </div>
    );
  }
}

export default App;
