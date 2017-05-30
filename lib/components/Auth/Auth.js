import React from 'react';
import PropTypes from 'prop-types';
import TabBarLayoutConnected from '../../containers/TabBarLayoutConnected/TabBarLayoutConnected'
import AuthWebViewConnected from '../../containers/AuthWebViewConnected/AuthWebViewConnected'

export const Auth = ({kind}) => (
	<AuthWebViewConnected kind={kind}/>
);

Auth.propTypes = {
	kind: PropTypes.oneOf(['fb'])
};

export default Auth;
