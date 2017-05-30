import React from 'react';
import {View, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';
import TabBarLayoutConnected from '../../containers/TabBarLayoutConnected/TabBarLayoutConnected';
import AuthWebViewConnected from '../../containers/AuthWebViewConnected/AuthWebViewConnected';
import StatusBar from '../StatusBar/StatusBar';
import AuthHeader from './AuthHeader';
import {primaryColor} from '../../shared/vars';
import * as SocialColors from './SocialColors';

export const Auth = ({kind}) => (
	<TabBarLayoutConnected>
		<View style={styles.container}>
			<StatusBar backgroundColor={SocialColors[kind].primary || primaryColor} barStyle="light-content"/>
			<AuthHeader kind={kind}/>
			<AuthWebViewConnected kind={kind}/>
		</View>
	</TabBarLayoutConnected>
);

Auth.propTypes = {
	kind: PropTypes.oneOf(['fb'])
};

const styles = StyleSheet.create({
	container: {
		width: '100%',
		height: '100%'
	}
});

export default Auth;
