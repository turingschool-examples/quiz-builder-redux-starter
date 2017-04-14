import React, { Component } from 'react';
import './App.css';
import Users from '../../containers/Users'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Welcome To Quizzer</h1>
        <Users />
      </div>
    );
  }
}

export default App;
