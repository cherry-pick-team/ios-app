import {connect} from 'react-redux';
import Settings from './Settings.layout';

function mapStateToProps(state) {
	return {
		isAuth: state.user.isAuth,
		credentials: state.user.credentials
	};
}

export const SettingsConnected = connect(mapStateToProps)(Settings);

export default SettingsConnected;
