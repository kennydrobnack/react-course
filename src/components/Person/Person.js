import React, { Component } from 'react'
import classes from './Person.css'
import withClass from '../../hoc/withClass'
import Aux from '../../hoc/Aux'
import PropTypes from 'prop-types'

class Person extends Component {
    constructor(props) {
        super(props)
    }

    render () { 
        return (
            <div>
                <p onClick={props.click}>I'm a {props.name} and am {props.age} years old</p>
                <p>{props.children}</p>
                <input type="text" onChange={props.changed} value={props.name}/>
            </div>
    )}
}

Person.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string, 
    age: PropTypes.number,
    changed: PropTypes.func
}

export default Person
