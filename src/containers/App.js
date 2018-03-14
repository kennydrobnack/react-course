import React, { Component } from 'react'
//import classes from './App.css'
import People from '../components/People/People'
import Cockpit from '../components/Cockpit/Cockpit'
import Aux from '../hoc/Aux'
import withClass from '../hoc/withClass'

class App extends Component {

  state = {
    people: [
      { name: 'Max', age: 28, id: 1},
      { name: 'Kenny', age: 39, id: 2 },
      { name: 'Stephanie', age: 35, id: 3}
    ],
    showPeople: true,
  }

  togglePeopleHandler = () => {
    const doesShow = this.state.showPeople
    this.setState({ showPeople: !doesShow })
  }

  switchNameHandler = (newName) => {
    this.setState({
      people: [
      { name: newName, age: 28, id: 1},
      { name: 'Kenneth', age: 39, id: 2 },
      { name: 'Steph', age: 26, id: 3}
      ]})
  }

  nameChangeHandler = (event, id) => {
    const personIndex = this.state.people.findIndex(p => {
      return p.id === id
    })

    const person = { ...this.state.people[personIndex] }

    person.name = event.target.value
    const people = [...this.state.people]
    people[personIndex] = person

    this.setState({people: people })
  }


  deletePersonHandler = (personIndex) => {
    const people = [...this.state.people]
    people.splice(personIndex, 1)
    this.setState({people: people})
  }

  render() {
    let people = null

    if (this.state.showPeople) {
      people = (
          <People
            people={this.state.people}
            clicked={this.deletePersonHandler}
            changed={this.nameChangeHandler}
          />
      )
    }

    return (
      <Aux>
        <Cockpit
          showPeople={this.state.showPeople}
          people={this.state.people}
          clicked={this.togglePeopleHandler}
          />
        {people}
      </Aux>
    )
  }
}

export default withClass(App, classes.App)
