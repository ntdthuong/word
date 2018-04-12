import React, { Component } from 'react';
import {connect} from 'react-redux';
import { Button, Form, Segment } from 'semantic-ui-react';
import * as actionCreators from './redux/actionCreators';

export class WordFormComponent extends Component {
  // constructor(props) {
  //   super(props);
  // }
  render() {
    const {shouldShowForm, toggleShouldShowForm} = this.props;
    if (!shouldShowForm) return (
      <Button color='teal' onClick={toggleShouldShowForm}>Create new word</Button>
    );
    return (
      <Segment inverted>
        <Form inverted>
          <Form.Field>
            <Form.Input placeholder='English' />
            <Form.Input placeholder='Vietnamese' />
          </Form.Field>
          <Button.Group>
            <Button color='teal'>Create new word</Button>
            <Button.Or />
            <Button onClick={toggleShouldShowForm}>Cancel</Button>
          </Button.Group>
        </Form>
      </Segment>
    );
  }
}

const mapState = state => ({ shouldShowForm: state.shouldShowForm });

export const WordForm = connect(mapState, actionCreators)(WordFormComponent);
