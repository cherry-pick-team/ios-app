"use strict";
import {SONG_FETCH_SUCCESS, LIKE_SONG_SUCCESS} from '../../actions/songs';
import {SEARCH_SUCCESS} from '../../actions/search';
import {SET_STATE} from '../../actions/persist';


export default function (state = {}, action) {
	switch (action.type) {
		case SONG_FETCH_SUCCESS:
			return {
				...state,
				[action.id]: action.song
			};

		case SEARCH_SUCCESS:
			const mapFromResponse = {};
			action.payload.entries.forEach((song) => {
				mapFromResponse[song.mongoId] = song;
			});

			return {
				...state,
				...mapFromResponse
			};

		case SET_STATE: {
			return {
				...state,
				...(action.payload.songs || {})
			}
		}

		case LIKE_SONG_SUCCESS: {
			const mongoId = selectIdBySimpleId(state, action.payload);
			return {
				...state,
				[mongoId]: {
					...state[mongoId],
					like: true
				}
			}
		}

		default:
			return state;
	}
}

export function selectSongById(state, id) {
	return state.songs[id];
}

export function selectIdBySimpleId(state, id) {
	return Object.keys(state).filter((mongoId) => {
		return state[mongoId].id === id;
	})[0];
}

export function filterSongsByIds(state, ids) {
	return ids.map(selectSongById.bind(null, state));
}
