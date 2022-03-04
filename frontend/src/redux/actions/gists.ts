import { ActionTypes, Gist } from './types'

export const getGistsRequest = (username: string): ActionTypes => {
  return {
    type: 'GET_GISTS_REQUEST',
    payload: username
  }
}

export const getGistsSuccess = (gists: Gist[]): ActionTypes => {
  return {
    type: 'GET_GISTS_SUCCESS',
    payload: gists
  }
}

export const getGistsFail = (error: any) => {
  return {
    type: 'GET_GISTS_FAIL',
    payload: {
      error:
        error.response && error.data.message
          ? error.response.data.message
          : error.message,
    }
  }
}