import React, { Component } from 'react';
import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {
  state = {
    usernames: [
      { username: 'cc' }
    ]
  }

  changeUsernameHander = (event) => {
    this.setState({
      usernames: [
        { username: event.target.value }
      ]   
    })
  }

  render() {
    return (
      <div className="App">
        <UserOutput username={this.state.usernames[0].username} />
        <UserInput changeUsername={this.changeUsernameHander} username={this.state.usernames[0].username} />
      </div>
    );
  }
}

export default App;

