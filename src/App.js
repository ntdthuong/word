import React, { Component } from 'react';
import {WordList} from './WordList';
import { Provider } from 'react-redux';
import {store} from './redux/store';
// import logo from './logo.svg';
import './App.css';

export class App extends Component {
  render() {
    return (
      <div className="App">
        <Provider store={store}>
          <WordList />
        </Provider>
      </div>
    );
  }
}
