import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionCreators from './redux/actionCreators';
import { Segment, Button } from 'semantic-ui-react';

class WordComponent extends Component {
  render() {
      const { wordInfo, toggleWord, removeWord } = this.props;
      return (
        <div className='word'>
          <Segment.Group horizontal>
            <Segment>
              <div className='text'>{wordInfo.en}</div>
              <Button color='teal' fluid onClick={() => toggleWord(wordInfo.id)}>
                {wordInfo.isMemorised ? 'Forgot' : 'Memorised'}
              </Button>
            </Segment>
            <Segment>
              <div className='text'>
                { wordInfo.isMemorised ? '-----' : wordInfo.vn }
              </div>
              <Button color='yellow' fluid onClick={() => removeWord(wordInfo.id)}>Remove</Button>
            </Segment>
          </Segment.Group>
        </div>
      );
  }
}
export const Word = connect(null, actionCreators)(WordComponent);