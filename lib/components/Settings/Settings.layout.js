import React from 'react';
import PropTypes from 'prop-types';
import {View, StyleSheet, Text} from 'react-native';
import TabBarLayoutConnected from '../TabBarLayout/TabBarLayout.connected';
import StatusBar from '../StatusBar/StatusBar';
import AuthButtons from './AuthButtons';
import UserCredentials from './UserCredentials';
import {primaryColor} from '../../shared/vars';
import LinearGradient from 'react-native-linear-gradient';

/**
 * Страница настроек проекта
 * @constructor
 */
export const Settings = ({isAuth, credentials, logout, push}) => (
	<TabBarLayoutConnected activeTab="settings">
		<StatusBar backgroundColor={primaryColor} barStyle="light-content"/>
		<LinearGradient
			style={styles.container}
			start={{x: 0, y: 0}}
			end={{x: 0, y: 1}}
			colors={[primaryColor, '#A964FF']}
		>
			<View style={styles.container}>
				<View style={styles.header}>
					<Text style={styles.headerText}>
						Настройки
					</Text>
				</View>
				{isAuth ? <UserCredentials credentials={credentials} logout={logout} push={push}/> : <AuthButtons/>}
			</View>
		</LinearGradient>
	</TabBarLayoutConnected>
);

Settings.propTypes = {
	/** Идентификатор того вошел ли юзер через соц сети */
	isAuth: PropTypes.bool.isRequired,
	/** Позволяет выйти из аккаунта */
	logout: PropTypes.func.isRequired
};

const styles = StyleSheet.create({
	container: {
		flexDirection: 'column',
		alignItems: 'center',
		width: '100%',
		height: '100%'
	},
	header: {
		marginTop: 20,
		marginBottom: 20,
		backgroundColor: 'rgba(1,1,1,0)'
	},
	headerText: {
		fontSize: 30,
		color: 'white',
		fontWeight: '200'
	}
});

export default Settings;
