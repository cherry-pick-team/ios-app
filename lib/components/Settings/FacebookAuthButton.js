import React from 'react';
import PropTypes from 'prop-types';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';

export const FacebookAuthButton = ({onPress}) => (
	<TouchableOpacity onPress={() => onPress('fb')}>
		<View style={styles.container}>
			<Text style={styles.text}>
				Войти через Facebook
			</Text>
		</View>
	</TouchableOpacity>
);

FacebookAuthButton.propTypes = {
	onPress: PropTypes.func.isRequired
};

const styles = StyleSheet.create({
	container: {
		padding: 10,
		borderRadius: 4,
		backgroundColor: '#3b5998'
	},
	text: {
		color: 'white',
		fontSize: 20,
		fontWeight: '400'
	}
});

export default FacebookAuthButton;
