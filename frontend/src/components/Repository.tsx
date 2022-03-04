import React from 'react';
import { Link } from 'react-router-dom'

import { RepositoryProps } from '../redux/actions/types'

const Repository = ({ repo }: RepositoryProps) => {
  return (
    <div className='repo-container'>
      <Link to={`/repos/${repo.name}`}>{repo.name}</Link>
    </div>
  )
}

export default Repository