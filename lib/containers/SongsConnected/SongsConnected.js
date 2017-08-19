import {connect} from 'react-redux';
import Songs from '../../components/Songs/Songs';
import {filterSongsByIds} from '../../reducers/songs'

const mapStateToProps = (state) => ({
	songs: filterSongsByIds(state, state.searchResults.entries),
	isAuth: state.user.isAuth,
});

export const SongsConnected = connect(mapStateToProps)(Songs);

export default SongsConnected;
