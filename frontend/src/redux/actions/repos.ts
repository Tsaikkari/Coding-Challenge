import { ActionTypes, Repo } from './types'

export const getReposRequest = (username: string): ActionTypes => {
  return {
    type: 'GET_REPOS_REQUEST',
    payload: username
  }
}

export const getReposSuccess = (repos: Repo[]): ActionTypes => {
  return {
    type: 'GET_REPOS_SUCCESS',
    payload: repos
  }
}

export const getReposFail = (error: any) => {
  return {
    type: 'GET_REPOS_FAIL',
    payload: {
      error:
        error.response && error.data.message
          ? error.response.data.message
          : error.message,
    }
  }
}

  
