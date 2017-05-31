"use strict";
import {call, put, takeEvery} from 'redux-saga/effects'
import {
	SONG_FETCH_START,
	songFetched,
	songFetchFail,
	LIKE_SONG
} from '../../actions/songs';
import {fetchSong} from '../../services/api/songs';
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

}