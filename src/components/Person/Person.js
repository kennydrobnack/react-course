import React, { Component } from 'react'
import classes from './Person.css'
import withClass from '../../hoc/withClass'
import Aux from '../../hoc/Aux'

class Person extends Component {
    constructor(props) {
        super(props)
    }

    render () { 
        return (
            <Aux>
                <p onClick={props.click}>I'm a {props.name} and am {props.age} years old</p>
                <p>{props.children}</p>
                <input type="text" onChange={props.changed} value={props.name}/>
            </Aux>
    )}
}

export default withClass(Person, classes.Person)
