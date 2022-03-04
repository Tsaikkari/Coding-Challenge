import { Repos, ActionTypes } from '../actions/types'

export default function reposReducer(
  state: any = {
    repoList: [],
  },
  action: ActionTypes
): Repos {
  switch (action.type) {
    case 'GET_REPOS_SUCCESS':
      return { ...state, repoList: action.payload }
    default:
      return state
  }
}