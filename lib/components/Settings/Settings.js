import {connect} from 'react-redux';
import Settings from './Settings.layout';
import {logout} from '../../actions/user';

function mapStateToProps(state) {
	return {
		isAuth: state.user.isAuth,
		credentials: state.user.credentials
	};
}

export const SettingsConnected = connect(mapStateToProps, {logout})(Settings);

export default SettingsConnected;
