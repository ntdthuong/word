import React from 'react'
import { Dropdown} from 'semantic-ui-react'

const tagOptions = [
  {
    text: 'SHOW ALL',
    value: 'SHOW_ALL',
    label: { color: 'red', empty: true, circular: true },
  },
  {
    text: 'SHOW FORGOT',
    value: 'SHOW_FORGOT',
    label: { color: 'blue', empty: true, circular: true },
  },
  {
    text: 'SHOW_MEMORIZED',
    value: 'SHOW_MEMORIZED',
    label: { color: 'pink', empty: true, circular: true },
  }
]

export const WordFilter = () => (
  <Dropdown text='Filter Posts' icon='filter' fluid labeled button className='icon teal'>
    <Dropdown.Menu allowAdditions='selection'>
      <Dropdown.Menu scrolling allowAdditions='options'>
        {tagOptions.map(option => <Dropdown.Item key={option.value} {...option}/>)}
      </Dropdown.Menu>
    </Dropdown.Menu>
  </Dropdown>
)
