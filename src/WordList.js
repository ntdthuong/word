import React, { Component } from 'react';
import {connect} from 'react-redux';
import {WordForm} from './WordForm';
import {WordFilter} from './WordFilter';
import {Word} from './Word';
// import { Provider } from 'react-redux';
// import { Segment, Button } from 'semantic-ui-react';

class WordListComponent extends Component {
  genListWord() {
    const {words} = this.props;
    return words.map(word => (
      <Word
        wordInfo={word}
        key={word.id}
      />
    ));
  }
  render() {
      return (
          <div>
            <div className="header">
              <WordForm />
              <WordFilter />
            </div>
              {this.genListWord()}
          </div>
      );
  }
}

// const mapState = state => ({ filterMode: state.filterMode, words: state.words });
const mapState = state => ({ words: state.words });
export const WordList = connect(mapState)(WordListComponent);