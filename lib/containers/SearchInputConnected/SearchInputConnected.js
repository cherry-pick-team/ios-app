import {connect} from 'react-redux';
import SearchInput from '../../components/SearchInput/SearchInput';

const mapStateToProps = (state, ownProps) => ({

});

const mapDispatchToProps = (dispatch, ownProps) => ({
	onSubmit: () => {
		//todo
		debugger;
	}
});

export const SearchInputConnected = connect(mapStateToProps, mapDispatchToProps)(SearchInput);

export default SearchInputConnected;