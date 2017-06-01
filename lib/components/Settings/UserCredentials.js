import React from 'react';
import PropTypes from 'prop-types';
import {View, StyleSheet, Text, Image} from 'react-native';

export const UserCredentials = ({credentials}) => (
	<View style={styles.container}>
		<Image style={styles.avatar} source={{uri: credentials.avatar_url}}/>
		<Text style={styles.usernameText}>
			{credentials.name}
		</Text>
	</View>
);

UserCredentials.propTypes = {
	credentials: PropTypes.object.isRequired
};

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		alignItems: 'center',
		width: '100%',
		marginTop: 60
	},
	usernameText: {

	},
	avatar: {
		width: 100,
		height: 100,
		borderRadius: 50
	}
});

export default UserCredentials;
