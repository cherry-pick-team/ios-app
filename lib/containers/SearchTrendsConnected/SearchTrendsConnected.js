import {connect} from 'react-redux';
import SearchTrends from '../../components/SearchTrends/SearchTrends';

const mapStateToProps = (state, ownProps) => ({
	trends: []
});

const mapDispatchToProps = (dispatch, ownProps) => ({

});

export const SearchTrendsConnected = connect(mapStateToProps, mapDispatchToProps)(SearchTrends);

export default SearchTrendsConnected;
