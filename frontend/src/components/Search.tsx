import React from 'react'
import { Navbar, Button, Form } from 'react-bootstrap'

import { SearchProps } from '../redux/actions/types'

const Search = ({ input, handleChange, handleSubmit }: SearchProps) => {
  return (
    <Navbar className='navbar'>
      <Form onSubmit={handleSubmit}>
        <Form.Control
          type='text'
          onChange={handleChange}
          placeholder='Search By Username'
          value={input}
        ></Form.Control>
        <Button type='submit' variant='danger' className='p-1.4'>
        Search
      </Button>
      </Form>
    </Navbar>
  )
}

export default Search
