import React, { Component } from 'react';
import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {
  state = { username: 'cc' }

  changeUsernameHander = (event) => {
    this.setState({ username: event.target.value })
  }

  render() {
    return (
      <div className="App">
        <UserOutput username={this.state.username} />
        <UserInput changeUsername={this.changeUsernameHander} username={this.state.username} />
      </div>
    );
  }
}

export default App;

