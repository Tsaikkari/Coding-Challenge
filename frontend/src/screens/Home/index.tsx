import React, { useState, useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col } from 'react-bootstrap'

import Repository from '../../components/Repository'
import Gist from '../../components/Gist'
import Organization from '../../components/Organization'
import Search from '../../components/Search'
import { getReposRequest } from '../../redux/actions'
import { getGistsRequest } from '../../redux/actions'
import { getOrganizationsRequest } from '../../redux/actions'
import { AppState } from '../../redux/actions/types'
import styles from './Home.module.css'

const Home = () => {
  const [username, setUsername] = useState('')
  const { repoList } = useSelector((state: AppState) => state.repos)
  const { gistList } = useSelector((state: AppState) => state.gists)
  const { organizationList } = useSelector(
    (state: AppState) => state.organizations
  )
 
  const dispatch = useDispatch()

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value)
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    await Promise.all([
      dispatch(getReposRequest(username)),
      dispatch(getGistsRequest(username)), 
      dispatch(getOrganizationsRequest(username))
    ])
  }

  return (
    <div className={styles.container}>
      <Search
        input={username}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
      <Row>
        <h3>Repos</h3>
        {repoList ? (
          repoList.map((repo: any) => (
            <Col key={repo.id} sm={12} md={6} lg={4} xl={3}>
              <Repository repo={repo} />
            </Col>
          ))
        ) : (
          <h2>...loading</h2>
        )}
      </Row>
      <Row>
        <h3>Gists</h3>
        {gistList ? (
          gistList.map((gist: any) => (
            <Col key={gist.id} sm={12} md={6} lg={4} xl={3}>
              <Gist gist={gist} />
            </Col>
          ))
        ) : (
          <h2>...loading</h2>
        )}
      </Row>
      <Row>
        <h3>Organizations</h3>
        {organizationList === [] ? (
          <h3>No public organizations</h3>
        ) : (
          organizationList.map((organization: any) => (
            <Col key={organization.description} sm={12} md={6} lg={4} xl={3}>
              <Organization organization={organization} />
            </Col>
          ))
        )}
      </Row>
    </div>
  )
}

export default Home
