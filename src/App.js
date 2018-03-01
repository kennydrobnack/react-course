import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {

  state = {
    persons: [
      { name: 'Max', age: 28},
      { name: 'Kenny', age: 39 },
      { name: 'Stephanie', age: 26}
    ],
    showPersons: true,
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons
    this.setState({ showPersons: !doesShow })
  }

  switchNameHandler = (newName) => {
    this.setState({
      persons: [
      { name: newName, age: 28},
      { name: 'Kenneth', age: 39 },
      { name: 'Steph', age: 26}
      ]})
  }

  nameChangeHandler = (event) => {
    this.setState({
      persons: [
        { name: event.target.value, age: 28},
        { name: 'Kenneth', age: 39 },
        { name: 'Steph', age: 26}
        ]})
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }


    let persons = null
    if (this.state.showPersons) {
      persons = (
        <div>
          { this.state.persons.map(person => {
            return <Person name={person.name}
              age={person.age}/>
            })}
        </div>
      ) 
    }

    return (
      <div className="App">
        <h1>Hi I'm a React app</h1>
        <button
          style={style} 
          onClick={() => this.switchNameHandler('Maximillian!!')}>Switch names</button>
                <button
          style={style} 
          onClick={() => this.togglePersonsHandler()}>Toggle persons</button>
        { this.state.showPersons ? persons : null }
      </div>
    );
  }
}

export default App;
