import {connect} from 'react-redux';
import Songs from '../../components/Songs/Songs';
import {filterSongsByIds} from '../../reducers/songs'

const mapStateToProps = (state, ownProps) => {
	debugger;
	return {
		songs: filterSongsByIds(state, state.searchResults.entries)
	}
};

export const SongsConnected = connect(mapStateToProps)(Songs);

export default SongsConnected;
