import React from 'react';
import PropTypes from 'prop-types';
import {View, StyleSheet, Text} from 'react-native';

export const UserCredentials = ({username}) => (
	<View style={styles.container}>
		<Text style={styles.usernameText}>
			{username}
		</Text>
	</View>
);

UserCredentials.propTypes = {
	username: PropTypes.string
};

const styles = StyleSheet.create({
	container: {
		flexDirection: 'column',
		alignItems: 'center',
		marginTop: 60
	},
	usernameText: {

	}
});

export default UserCredentials;
