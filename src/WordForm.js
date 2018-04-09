import React from 'react'
import { Button, Form, Segment } from 'semantic-ui-react'

export const FormCreateWord = () => (
  <Segment inverted>
    <Form inverted>
      <Form.Field>
        <Form.Input placeholder='First name' />
        <Form.Input placeholder='Last name' />
      </Form.Field>
      <Button.Group>
        <Button color='teal'>Save</Button>
        <Button.Or />
        <Button>Cancel</Button>
      </Button.Group>
    </Form>
  </Segment>
)

