import {connect} from 'react-redux';
import LikedSongsList from './LikedSongsList';
import {deleteEntry} from '../../actions/history';
import {search} from '../../actions/search';
import {persist} from '../../actions/persist'

const mapStateToProps = (state) => ({
	//todo
});

function mapDispatchToProps(dispatch) {
	return {
		search: (query) => {
			dispatch(search(query));
		},
		deleteEntry: (id) => {
			dispatch(deleteEntry(id));
			dispatch(persist('searchHistory'));
		}
	}
}

export const LikedSongsListConnected = connect(mapStateToProps, mapDispatchToProps)(LikedSongsList);

export default LikedSongsListConnected;
