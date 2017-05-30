import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import Icon from '../Icon/Icon';
import {primaryColor} from '../../shared/vars';

export const AuthHeader = () => (
	<View style={styles.container}>
		<Icon/>
		<Text>
			Назад
		</Text>
	</View>
);

const styles = StyleSheet.create({
	container: {
		width: '100%',
		height: 60,
		backgroundColor: primaryColor
	}
});

export default AuthHeader;
