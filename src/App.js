import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
    state = {
        persons: [
            { id: 'agesg', name: 'Maximillian', age: 28 },
            { id: 'afgaeg', name: 'CC', age: 30 },
            { id: 'sethaeha', name: 'Stephanie', age: 22 }
        ],
        showPersons: false
    };

    deletePersonHandler = (personIndex) => {
        /* Without the slice, we are manipulating the original
        source of truth - not good practice, so using slice
        will create a copy you can update. */

        // const persons = this.state.persons.slice();

        /* OR
        you can use the spread operator
        */
        const persons = [...this.state.persons];

        persons.splice(personIndex, 1);
        this.setState({persons: persons});
    }

    changeNameHander = (event, id) => {
        // Locate the person that we want to update
        const personIndex = this.state.persons.findIndex(p => {
            return p.id === id;
        })
        // Manipulating the current state:
        // const person = this.state.persons[personIndex];

        // Creating a 'copy' of the particular person we want to manipulate
        const person = {
            ...this.state.persons[personIndex]
        };
        person.name = event.target.value;
        // Create a copy of the persons object
        const persons = [...this.state.persons];
        // Insert our new manipulated person name
        persons[personIndex] = person;
        // Return the new object with the new name
        this.setState( {persons: persons} );
    }

    togglePersonHandler = () => {
        const doesShow = this.state.showPersons;
        this.setState({showPersons: !doesShow});
    }

    render() {
        const style = {
          backgroundColor: 'green',
          color: 'white',
          font: 'inherit',
          border: '1px solid blue',
          padding: '8px',
          curser: 'pointer',
        };

        let persons = null;

        if (this.state.showPersons) {
            persons = (
                <div>
                {this.state.persons.map((person, index) => {
                    return <Person 
                    click={() => this.deletePersonHandler(index)}
                    name={person.name} 
                    age={person.age}
                    key={person.id}
                    change={(event) => this.changeNameHander(event, person.id)} />
                })}
                </div> 
            );
        }
        return (
            <div className="App">
                <h1>Hello</h1>
                <button style={style} onClick={this.togglePersonHandler}>Toggle Persons</button>
                {persons}
            </div>
        );

        style.backgroundColor = 'red';
        style[':hover'] = {
          backgroundColor: 'salmon',
          color: 'black'
        }
    }
}

export default App;
