import { Organization, ActionTypes } from '../actions/types'

export default function reposReducer(
  state: any = {
    organizationList: [],
  },
  action: ActionTypes
): Organization {
  switch (action.type) {
    case 'GET_ORGANIZATIONS_SUCCESS':
      return { ...state, organizationList: action.payload }
    default:
      return state
  }
}