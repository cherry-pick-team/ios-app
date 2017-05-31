import {call, put, takeEvery} from 'redux-saga/effects';
import {USER_LOGOUT, USER_LOGIN, setCredentials} from '../../actions/user';
import {persist} from '../../actions/persist';
import {push, replace} from '../../actions/router';
import {fetchUserData} from '../../services/api/user';


export function* authWatcher() {
	yield takeEvery(USER_LOGOUT, logoutWorker);
	yield takeEvery(USER_LOGIN, loginWorker);
}

function* loginWorker(action) {
	const {response, error} = yield call(fetchUserData, action.payload.token);
	if (!error) {
		yield put(replace('settings'));
	}
	yield put(setCredentials(response));
	yield put(replace('settings'));
}

function* logoutWorker() {

}

