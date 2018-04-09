import React, { Component } from 'react';
import {FormCreateWord} from './WordForm';
import {WordFilter} from './WordFilter';
import {Words} from './Words';
// import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App" style={{maxWidth: '767px', margin: 'auto'}}>
        <FormCreateWord />
        <WordFilter />
        <Words />
      </div>
    );
  }
}

export default App;
