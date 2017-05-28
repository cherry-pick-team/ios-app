import {connect} from 'react-redux';
import SearchHistoryList from '../../components/SearchHistory/SearchHistoryList';
import {addToFavourite, deleteEntry} from '../../actions/history';
import {search} from '../../actions/search';
import {persist} from '../../actions/persist'

const mapStateToProps = (state) => ({
	history: state.searchHistory
});

function mapDispatchToProps(dispatch) {
	return {
		search: (query) => {
			dispatch(search(query));
		},
		deleteEntry: (id) => {
			dispatch(deleteEntry(id));
			dispatch(persist('searchHistory'));
		},
		addToFavourite: (id) => {
			addToFavourite(deleteEntry(id));
			dispatch(persist('searchHistory'));
		}
	}
}

export const SearchHistoryListConnected = connect(mapStateToProps, mapDispatchToProps)(SearchHistoryList);

export default SearchHistoryListConnected;