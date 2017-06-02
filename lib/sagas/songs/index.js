"use strict";
import {call, put, takeEvery, select} from 'redux-saga/effects'
import {
	LIKE_SONG,
	SONG_FETCH_START,
	songFetched,
	songFetchFail,
	likeSongSuccess
} from '../../actions/songs';
import {fetchSong, like} from '../../services/api/songs';
import {persist} from '../../actions/persist';


export function* songWatcher() {
	yield takeEvery(SONG_FETCH_START, songWorker);
	yield takeEvery(LIKE_SONG, likeWatcher);
}

function* songWorker(action) {
	const {response, error} = yield call(fetchSong, action.payload.id);

	if (response) {
		yield put(songFetched(response.results, action.payload.target));
		yield put(persist('songs'));
	} else {
		yield put(songFetchFail(error));
	}
}

function* likeWatcher(action) {
	const {token, isAuth} = yield select(state => state.user);
	if (!isAuth) {
		return;
	}
	const {error} = yield call(like, action.payload, token);
	if (error) {
		return;
	}
	yield put(likeSongSuccess(action.payload));
}
