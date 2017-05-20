import {connect} from 'react-redux';
import SearchTrendsItem from '../../components/SearchTrends/SearchTrendsItem';
import {search} from '../../actions/search';

const mapStateToProps = (state, ownProps) => ({

});

const mapDispatchToProps = (dispatch, ownProps) => ({
	onPress: (query) => {
		dispatch(search(query))
	}
});

export const SearchTrendsItemConnected = connect(mapStateToProps, mapDispatchToProps)(SearchTrendsItem);

export default SearchTrendsItemConnected;
