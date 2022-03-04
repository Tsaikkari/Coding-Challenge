import React from 'react'
import { useSelector } from 'react-redux'
import { useParams, useNavigate } from 'react-router-dom'
import { Card, Button } from 'react-bootstrap'

import { AppState } from '../../redux/actions/types'
import styles from './SingleRepo.module.css'

const SingleRepo = () => {
  const navigate = useNavigate()
  const { repoName } = useParams<string>()
  const repo = useSelector((state: AppState) =>
    state.repos.repoList.find((repo) => repo.name === repoName)
  )

  const handleClick = () => {
    navigate('/')
  }

  return (
    <div className={styles.container}>
      <Card>
        <Card.Title className='pt-4 px-3'>Repo: {repo?.name}</Card.Title>
        <Card.Body>
          <h5>Repo Owner: {repo?.owner.login}</h5>
        </Card.Body>
        <Card.Footer className='text-center'>
          <a href={repo?.html_url}>View Repo</a>
        </Card.Footer>
      </Card>
      <Button variant='light' onClick={handleClick}>Back</Button>
    </div>
  )
}

export default SingleRepo
