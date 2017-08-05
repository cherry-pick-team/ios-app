import {connect} from 'react-redux';
import SearchHeader from '../../components/SearchHeader/SearchHeader';

const mapStateToProps = (state) => ({
	query: state.searchResults.query,
});

export default connect(mapStateToProps, null)(SearchHeader);
