import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Dropdown } from 'semantic-ui-react';

class WordFilterComponent extends Component {
  // constructor(props) {
  //   super(props);
  // }
  render() {
    const options = [
      { key: 1, text: 'SHOW ALL', value: 'SHOW_ALL' },
      { key: 2, text: 'SHOW FORGOT', value: 'SHOW_FORGOT' },
      { key: 3, text: 'SHOW MEMORISED', value: 'SHOW_MEMORISED' },
    ];
    return (
      <Dropdown selection defaultValue='SHOW_ALL' options={options}/>
    );
  }
}

const mapState = state => ({ filterMode: state.filterMode });

export const WordFilter = connect(mapState)(WordFilterComponent);

