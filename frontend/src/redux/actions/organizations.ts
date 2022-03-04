import { ActionTypes, Organization } from './types'

export const getOrganizationsRequest = (username: string): ActionTypes => {
  return {
    type: 'GET_ORGANIZATIONS_REQUEST',
    payload: username
  }
}

export const getOrganizationsSuccess = (organizations: Organization[]): ActionTypes => {
  return {
    type: 'GET_ORGANIZATIONS_SUCCESS',
    payload: organizations
  }
}

export const getOrganizationsFail = (error: any) => {
  return {
    type: 'GET_ORGANIZATIONS_FAIL',
    payload: {
      error:
        error.response && error.data.message
          ? error.response.data.message
          : error.message,
    }
  }
}