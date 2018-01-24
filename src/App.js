import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  state = {
    persons: [
      { name: 'Maximillian', age: 28 },
      { name: 'CC', age: 30 },
      { name: 'Stephanie', age: 22 }
    ]
  };

  switchNameHandler = (newName) => {
    // console.log('was clicked');
    // DON'T DO THIS - this.state.persons[0].name = 'cc';
    this.setState({
      persons: [
        { name: newName, age: 28 },
        { name: 'CC', age: 30 },
        { name: 'Stephanie', age: 22 }
      ]
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Hello</h1>
        <button onClick={() => this.switchNameHandler()}>Switch name</button>
        <Person 
          name={this.state.persons[0].name} 
          age={this.state.persons[0].age} />
        <Person 
          name={this.state.persons[1].name} 
          age={this.state.persons[1].age} />
        <Person 
          name={this.state.persons[2].name} 
          age={this.state.persons[2].age}
          click={this.switchNameHandler.bind(this, 'bae')} />
      </div>
    );
  }
}

export default App;
