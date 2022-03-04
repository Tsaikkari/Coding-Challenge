import React from 'react'
import { Link } from 'react-router-dom'

import { GistProps } from '../redux/actions/types'

const Gist = ({ gist }: GistProps) => {
  return (
    <div className='gist-container'>
      <Link to={`/gists/${gist.id}`}>
        {gist.description ? gist.description : 'No description'}
      </Link>
    </div>
  )
}

export default Gist
