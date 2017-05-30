import {connect} from 'react-redux';
import FacebookAuthButton from '../../components/Settings/FacebookAuthButton';
import {push} from '../../actions/router';

function mapDispatchToProps (dispatch) {
	return {
		onPress: (kind) => {
			dispatch(push('auth', {kind}))
		}
	}
}

export const FacebookAuthButtonConnected = connect(null, mapDispatchToProps)(FacebookAuthButton);

export default FacebookAuthButtonConnected;
