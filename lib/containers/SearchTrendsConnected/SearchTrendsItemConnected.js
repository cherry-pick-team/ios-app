import {connect} from 'react-redux';
import SearchTrendsItem from '../../components/SearchTrends/SearchTrendsItem';

const mapStateToProps = (state, ownProps) => ({

});

const mapDispatchToProps = (dispatch, ownProps) => ({
	onPress: () => {
		//todo
		debugger;
	}
});

export const SearchTrendsItemConnected = connect(mapStateToProps, mapDispatchToProps)(SearchTrendsItem);

export default SearchTrendsItemConnected;
