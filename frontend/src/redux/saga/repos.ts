import { put, takeLatest } from 'redux-saga/effects'
import axios from 'axios'

import { GetReposRequestAction } from '../actions/types'
import { getReposSuccess, getReposFail } from '../actions/repos'

function* fetchRepos(action: GetReposRequestAction) {
  const username = action.payload
  try {
    //@ts-ignore
    const res = yield axios.get(`/github/profile/${username}/repos?per_page=40`)
    yield put(getReposSuccess(res.data))
  } catch (err: any) {
    yield put(getReposFail(err.message))
  }
}

const reposWatcher = [
  takeLatest('GET_REPOS_REQUEST', fetchRepos),
]

export default reposWatcher
