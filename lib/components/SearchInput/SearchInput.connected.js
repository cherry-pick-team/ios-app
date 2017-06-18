import {connect} from 'react-redux';
import SearchInput from './SearchInput';
import {search} from '../../actions/search';

const mapStateToProps = (state, ownProps) => ({

});

const mapDispatchToProps = (dispatch, ownProps) => ({
	onSubmit: (query) => {
		dispatch(search(query))
	}
});

export const SearchInputConnected = connect(mapStateToProps, mapDispatchToProps)(SearchInput);

export default SearchInputConnected;
