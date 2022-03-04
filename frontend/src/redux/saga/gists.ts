import { put, takeLatest } from 'redux-saga/effects'
import axios from 'axios'

import { GetGistsRequestAction } from '../actions/types'
import { getGistsSuccess, getGistsFail } from '../actions/gists'

function* fetchGists(action: GetGistsRequestAction) {
  const username = action.payload
  try {
    //@ts-ignore
    const res = yield axios.get(`/github/profile/${username}/gists`)
    yield put(getGistsSuccess(res.data))
  } catch (err: any) {
    yield put(getGistsFail(err.message))
  }
}

const reposWatcher = [
  takeLatest('GET_GISTS_REQUEST', fetchGists),
]

export default reposWatcher
