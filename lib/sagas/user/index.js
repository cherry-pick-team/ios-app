import {call, put, takeEvery} from 'redux-saga/effects';
import {USER_LOGOUT, USER_LOGIN} from '../../actions/user';
import {persist} from '../../actions/persist';
import {push, replace} from '../../actions/router';


export function* authWatcher() {
	yield takeEvery(USER_LOGOUT, loginWorker);
	yield takeEvery(USER_LOGIN, logoutWorker);
}

function* loginWorker() {
	yield put(replace('settings'));
}

function* logoutWorker() {

}

