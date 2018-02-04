import React, { Component } from 'react';
import './Person.css';

class Person extends Component {
    constructor(props) {
        super(props);
        console.log('[Person.js] Inside constructor', props);
    
    }
    
    componentWillMount() {
        console.log('[Person.js] Inside componentWillMount');
    }
    
    componentDidMount() {
        console.log('[Person.js] Inside componentDidMount');
    }


    shouldComponentUpdate(nextProps, nextState) {
        console.log('[UPDATE Persons.js] Inside shouldComponentUpdate', nextProps );
        return false;
    }

    componentWillUpdate(nextProps, nextState) {
        console.log('[UPDATE Persons.js] Inside componentWillUpdate', nextProps )
    }

    componentDidUpdate() {
        console.log('[UPDATE Persons.js] Inside componentDidUpdate' )
    }
    render() {
        console.log('[Person.js] Inside render')
        return (
            <div className='person'>
                <p onClick={this.props.click}>I am {this.props.name} and I am {this.props.age} years old</p>
                <p>{this.props.children}</p>
                <input type="text" onChange={this.props.change} value={this.props.name}  />
            </div>
        )
    }
}
export default Person;