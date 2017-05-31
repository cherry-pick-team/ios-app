import React from 'react';
import {View, StyleSheet} from 'react-native';
import FacebookAuthButton from './FacebookAuthButton';

/**
 * Список кнопок авторизации,
 * показывается если юзер не авторизован
 * @constructor
 */
export const AuthButtons = () => (
	<View style={styles.container}>
		<FacebookAuthButton/>
	</View>
);

const styles = StyleSheet.create({
	container: {
		flexDirection: 'column',
		alignItems: 'center',
		marginTop: 60
	}
});

export default AuthButtons;
