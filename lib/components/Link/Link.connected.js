import {connect} from 'react-redux';
import Link from './Link';
import {Actions} from 'react-native-router-flux';

const mapDispatchToProps = (dispatch) => ({
	onPress: (route, type) => {
		Actions[route]({type});
	}
});

export const LinkConnected = connect(null, mapDispatchToProps)(Link);

export default LinkConnected;
