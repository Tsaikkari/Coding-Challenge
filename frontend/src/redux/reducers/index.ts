import { combineReducers } from 'redux'

import repos from './repos'
import gists from './gists'
import organizations from './organizations'

const createRootReducer = () =>
  combineReducers({
    repos,
    gists,
    organizations
  })

export default createRootReducer