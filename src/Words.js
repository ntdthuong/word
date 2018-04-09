import React from 'react'
import { Segment, Button } from 'semantic-ui-react'

export const Words = () => (
  <Segment.Group className='word'>
    <Segment.Group horizontal>
      <Segment>Top</Segment>
      <Segment>Middle</Segment>
    </Segment.Group>
    <Segment.Group horizontal>
      <Segment color='teal'>
        <Button color='teal' fluid>Forgot</Button>
      </Segment>
      <Segment color='yellow'>
        <Button color='yellow' fluid>Remove</Button>
      </Segment>
    </Segment.Group>
  </Segment.Group>
)
