import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import FacebookAuthButton from './FacebookAuthButton';

/**
 * Список кнопок авторизации,
 * показывается если юзер не авторизован
 * @constructor
 */
export const AuthButtons = () => (
	<View style={styles.container}>
		<View style={styles.title}>
			<Text style={styles.titleText}>
				Вход через социальные сети
			</Text>
		</View>
		<View style={styles.buttons}>
			<FacebookAuthButton/>
		</View>
	</View>
);

const styles = StyleSheet.create({
	container: {
		flexDirection: 'column',
		alignItems: 'center',
		backgroundColor: 'rgba(255,255,255,0.7)',
		borderRadius: 10,
		width: '90%',
		marginTop: '10%'
	},
	titleText: {
		fontWeight: '300',
		fontSize: 24,
		textAlign: 'center'
	},
	title: {
		marginBottom: 60,
		marginTop: 60
	},
	buttons: {
		marginBottom: 60
	}
});

export default AuthButtons;
