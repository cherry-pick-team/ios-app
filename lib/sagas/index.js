import {fork} from 'redux-saga/effects'
import {trendsFetchWatcher} from './trends';
import {searchWatcher} from './search';
import {songWatcher} from './songs';
import {persistWatcher} from './persist';
import {authWatcher} from './user';


export default function* root() {
	yield [
		fork(trendsFetchWatcher),
		fork(persistWatcher),
		fork(searchWatcher),
		fork(authWatcher),
		fork(songWatcher)
	];
}
