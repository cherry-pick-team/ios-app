import React from 'react';
import PropTypes from 'prop-types';
import TabBarLayoutConnected from '../../containers/TabBarLayoutConnected/TabBarLayoutConnected'
import AuthWebViewConnected from '../../containers/AuthWebViewConnected/AuthWebViewConnected'

export const Auth = ({type}) => (
	<TabBarLayoutConnected>
		<AuthWebViewConnected type={type}/>
	</TabBarLayoutConnected>
);

Auth.propTypes = {
	type: PropTypes.oneOf(['fb'])
};

export default Auth;
