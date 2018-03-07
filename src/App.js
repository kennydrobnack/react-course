import React, { Component } from 'react'
import classes from './App.css'
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
      backgroundColor: 'green',
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
      style.backgroundColor = 'red'
    }

    const assignedClasses = []
    if (this.state.persons.length <= 2) {
      assignedClasses.push(classes.red)
    }
    if (this.state.persons.length <= 1) {
      assignedClasses.push(classes.bold)
    }

    return (
        <div className={classes.App}>
          <h1>Hi I'm a React app</h1>
          <p className={assignedClasses.join(' ')}>This is really working</p>

          <button
            style={style} 
            onClick={() => this.togglePersonsHandler()}>Toggle persons</button>
          { this.state.showPersons ? persons : null }
        </div>
    )
  }
}

export default App
