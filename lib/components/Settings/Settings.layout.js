import React from 'react';
import PropTypes from 'prop-types';
import {View, StyleSheet} from 'react-native';
import FacebookAuthButton from './FacebookAuthButton';
import TabBarLayoutConnected from '../TabBarLayout/TabBarLayout.connected';
import StatusBar from '../StatusBar/StatusBar';
import AuthButtons from './AuthButtons';
import UserCredentials from './UserCredentials';
import {primaryColor} from '../../shared/vars';
import LinearGradient from 'react-native-linear-gradient';

/**
 * Страница настроек проекта
 * @param isAuth
 * @param credentials
 * @constructor
 */
export const Settings = ({isAuth, credentials}) => (
	<TabBarLayoutConnected activeTab="settings">
		<StatusBar backgroundColor={primaryColor} barStyle="light-content"/>
		<LinearGradient
			style={styles.container}
			start={{x: 0, y: 0}}
			end={{x: 0, y: 1}}
			colors={[primaryColor, '#A964FF']}
		>
			<View style={styles.container}>
				{isAuth ? <UserCredentials credentials={credentials}/> : <AuthButtons/>}
			</View>
		</LinearGradient>
	</TabBarLayoutConnected>
);

Settings.propTypes = {
	/** Идентификатор того вошел ли юзер через соц сети */
	isAuth: PropTypes.bool.isRequired
};

const styles = StyleSheet.create({
	container: {
		flexDirection: 'column',
		alignItems: 'center',
		width: '100%',
		height: '100%'
	}
});

export default Settings;
