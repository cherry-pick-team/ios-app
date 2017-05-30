import {call, put, takeEvery} from 'redux-saga/effects'
import {delay} from 'redux-saga'
import {SEARCH_START, searchSuccess, searchFail, SEARCH_VOICE} from '../../actions/search';
import {searchPhrase} from '../../services/api/search';
import {sendFile} from '../../services/upload';
import {persist} from '../../actions/persist';
import {push, replace} from '../../actions/router';


export function* searchWatcher() {
	yield takeEvery(SEARCH_START, searchWorker);
	yield takeEvery(SEARCH_VOICE, voiceSearchWorker);
}

function* searchWorker(action) {
	yield put(push('search-loader'));
	const {response, error} = yield call(searchPhrase, action.payload);

	if (response) {
		if (response.entries.length === 0) {
			yield put(replace('not-found'));
			return;
		}
		yield put(searchSuccess(response));
		yield call(delay, 500);
		yield put(replace('search-results'));
		yield call(delay, 500);
		yield put(persist('searchHistory'));
	} else {
		yield put(searchFail(error));
	}
}

function* voiceSearchWorker({payload}) {
	yield put(push('search-loader'));

	const {response, error} = yield call(sendFile, payload, 'https://zsong.ru/api/v2/search/voice');

	if (error) {
		yield put(searchFail(error));
		return;
	}

	const searchResults = [];
	for (const phrase of response) {
		const searchResponse = yield call(searchPhrase, phrase);
		if (searchResponse.error) {
			continue;
		}
		searchResults.push(searchResponse.response);
	}

	const queryCombined = searchResults.reduce((result, {query}) => {
		if (result === '') {
			return query;
		}
		return result + ', ' + query
	}, '');

	const entriesCombined = searchResults.reduce((result, {entries}) => {
		return result.concat(entries);
	}, []);
	yield put(searchSuccess({
		query: queryCombined,
		entries: entriesCombined
	}));
	yield call(delay, 500);
	yield put(replace('search-results'));
}
