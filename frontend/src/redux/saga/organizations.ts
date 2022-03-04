import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

import { GetOrganizationsRequestAction } from '../actions/types';
import { getOrganizationsSuccess, getOrganizationsFail } from '../actions/organizations'

function* fetchOrganizations(action: GetOrganizationsRequestAction) {
  const username = action.payload
  try {
    //@ts-ignore
    const res = yield axios.get(`/github/profile/${username}/orgs`);
    yield put(getOrganizationsSuccess(res.data));
  } catch (err: any) {
    yield put(getOrganizationsFail(err.message))
  }
}

const reposWatcher = [
  takeLatest('GET_ORGANIZATIONS_REQUEST', fetchOrganizations),
]

export default reposWatcher
