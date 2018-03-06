import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {

  state = {
    persons: [
      { name: 'Max', age: 28, id: 1},
      { name: 'Kenny', age: 39, id: 2 },
      { name: 'Stephanie', age: 35, id: 3}
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
      { name: newName, age: 28, id: 1},
      { name: 'Kenneth', age: 39, id: 2 },
      { name: 'Steph', age: 26, id: 3}
      ]})
  }

  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id
    })

    const person = { ...this.state.persons[personIndex] }

    person.name = event.target.value
    const persons = [...this.state.persons]
    persons[personIndex] = person

    this.setState({persons: persons })
  }
  

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons]
    persons.splice(personIndex, 1)
    this.setState({persons: persons})
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
          { this.state.persons.map((person, index) => {
            return <Person key={person.id}
              click={() => this.deletePersonHandler(index)}
              name={person.name}
              age={person.age}
              changed={(event) => this.nameChangeHandler(event, person.id) } />
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
