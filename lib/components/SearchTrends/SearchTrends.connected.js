import {connect} from 'react-redux';
import SearchTrends from '../../components/SearchTrends/SearchTrends';
import {startFetchTrends} from '../../actions/trends';
import {search} from '../../actions/search';

const mapStateToProps = (state) => {
	return {
		trends: state.searchTrends.entries
	};
};

const mapDispatchToProps = (dispatch, ownProps) => ({
	fetchTrends: () => {
		dispatch(startFetchTrends());
	},
	onItemPress: (query) => {
		dispatch(search(query))
	}
});

export const SearchTrendsConnected = connect(mapStateToProps, mapDispatchToProps)(SearchTrends);

export default SearchTrendsConnected;
