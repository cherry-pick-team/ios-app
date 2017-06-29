import {connect} from 'react-redux';
import SearchHistoryHeader from '../../components/LikeSongs/SearchHistoryHeader';
import {deleteAll} from '../../actions/history';

export const SearchHistoryHeaderConnected = connect(null, {deleteAll})(SearchHistoryHeader);

export default SearchHistoryHeaderConnected;