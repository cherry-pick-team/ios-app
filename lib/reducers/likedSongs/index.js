import {SUGGESTS_CLEAR, SUGGESTS_SET} from '../../actions/suggests';

export default function(state = [], action) {
	switch (action.type) {
		case FETCH_LIKED_SONGS_SUCCESS:
			return [...action.payload];

		case :
			return [];

		default:
			return state;
	}
}
