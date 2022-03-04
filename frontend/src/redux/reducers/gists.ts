import { Gists, ActionTypes } from '../actions/types'

export default function reposReducer(
  state: any = {
    gistList: [],
  },
  action: ActionTypes
): Gists {
  switch (action.type) {
    case 'GET_GISTS_SUCCESS':
      return { ...state, gistList: action.payload }
    default:
      return state
  }
}