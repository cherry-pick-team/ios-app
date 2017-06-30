import {connect} from 'react-redux';
import LikedSongs from './LikedSongsList';
import {deleteEntry} from '../../actions/history';
import {persist} from '../../actions/persist'

const mapStateToProps = (state) => ({
	songs: state.likedSongs
});

function mapDispatchToProps(dispatch) {
	return {
		deleteEntry: (id) => {
			dispatch(deleteEntry(id));
			dispatch(persist('likedSongs'));
		}
	}
}

export const LikedSongsConnected = connect(mapStateToProps, mapDispatchToProps)(LikedSongs);

export default LikedSongsConnected;
