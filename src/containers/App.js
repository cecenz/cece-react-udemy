import React, { PureComponent } from 'react';
import './App.css';
import Cockpit from '../components/Cockpit/Cockpit';
import Persons from '../components/Persons/Persons';

class App extends PureComponent {
    constructor(props) {
        super(props);
        console.log('[App.js] Inside constructor', props);

    }

    componentWillMount() {
        console.log('[App.js] Inside componentWillMount');
    }

    componentDidMount() {
        console.log('[App.js] Inside componentDidMount');
    }

    // shouldComponentUpdate(nextProps, nextState) {
    //     console.log('[UPDATE App.js] Inside shouldComponentUpdate', nextProps );
    //     return nextState.persons !== this.state.persons ||
    //     nextState.showPersons !== this.state.showPersons ;
    // }

    componentWillUpdate(nextProps, nextState) {
        console.log('[UPDATE App.js] Inside componentWillUpdate', nextProps )
    }

    componentDidUpdate() {
        console.log('[UPDATE App.js] Inside componentDidUpdate' )
    }

    state = {
        persons: [
            { id: 'agesg', name: 'Maximillian', age: 28 },
            { id: 'afgaeg', name: 'CC', age: 30 },
            { id: 'sethaeha', name: 'Stephanie', age: 22 }
        ],
        showPersons: false
    };

    deletePersonHandler = (personIndex) => {
        const persons = [...this.state.persons];

        persons.splice(personIndex, 1);
        this.setState({persons: persons});
    }

    changeNameHander = (event, id) => {
        const personIndex = this.state.persons.findIndex(p => {
            return p.id === id;
        })
        const person = {
            ...this.state.persons[personIndex]
        };
        person.name = event.target.value;
        const persons = [...this.state.persons];
        persons[personIndex] = person;
        this.setState( {persons: persons} );
    }

    togglePersonHandler = () => {
        const doesShow = this.state.showPersons;
        this.setState({showPersons: !doesShow});
    }

    render() {
        console.log('[App.js] Inside Render');
        let persons = null;
        if (this.state.showPersons) {
            persons = (
                <Persons
                    persons={this.state.persons}
                    clicked={this.deletePersonHandler}
                    changed={this.changeNameHander}
                />
            );
        }
        return (
            <div className="App">
                <button onClick={() => {this.setState({showPersons: true})}}>Show Persons</button>
                <Cockpit 
                    appTitle={this.props.title} // <- using this.props because this is coming from Index.js
                    clicked={this.togglePersonHandler} 
                    persons={this.state.persons}
                />
                {persons}
            </div>
        );
    }
}

export default App;
