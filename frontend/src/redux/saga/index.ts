import { all } from 'redux-saga/effects'
import reposSaga from './repos'
import gistsSaga from './gists'
import organizationsSaga from './organizations'

export default function* rootSaga() {
  yield all([...reposSaga, ...gistsSaga, ...organizationsSaga])
}