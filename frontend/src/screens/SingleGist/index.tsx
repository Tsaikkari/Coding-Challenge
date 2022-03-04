import React from 'react'
import { useSelector } from 'react-redux'
import { useParams, useNavigate } from 'react-router-dom'
import { Card, Button } from 'react-bootstrap'

import { AppState } from '../../redux/actions/types'
import styles from './SingleGist.module.css'

const SingleGist = () => {
  const navigate = useNavigate()
  const { gistId } = useParams<string>()
  const gist = useSelector((state: AppState) =>
    state.gists.gistList.find((gist) => gist.id === gistId)
  )

  const handleClick = () => {
    navigate('/')
  }

  return (
    <div className={styles.gistcontainer}>
      <Card>
        <Card.Title className='pt-4 px-3'>Description: {gist?.description}</Card.Title>
        <Card.Body>
          <h5>Gist Owner: {gist?.owner.login}</h5>
        </Card.Body>
        <Card.Footer className='text-center'>
          <a href={gist?.html_url}>View Gist</a>
        </Card.Footer>
      </Card>
      <Button variant='light' onClick={handleClick}>Back</Button>
    </div>
  )
}

export default SingleGist
