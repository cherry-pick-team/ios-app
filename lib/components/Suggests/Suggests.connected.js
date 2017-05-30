import {connect} from 'react-redux';
import Suggests from './Suggests';

const mapStateToProps = (state) => ({
	results: state.searchSuggests
});

export const SuggestsConnected = connect(mapStateToProps)(Suggests);

export default SuggestsConnected;
