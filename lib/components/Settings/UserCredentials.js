import React from 'react';
import PropTypes from 'prop-types';
import {View, StyleSheet, Text, Image} from 'react-native';

export const UserCredentials = ({credentials}) => (
	<View style={styles.container}>
		<View style={styles.userInfo}>
			<View style={styles.avatarWrapper}>
				<Image style={styles.avatar} source={{uri: credentials.avatar_url}}/>
			</View>
			<Text style={styles.usernameText}>
				{credentials.name}
			</Text>
		</View>
		<View style={styles.settings}>

		</View>
	</View>
);

UserCredentials.propTypes = {
	credentials: PropTypes.object.isRequired
};

const styles = StyleSheet.create({
	container: {
		flexDirection: 'column',
		alignItems: 'center',
		width: '100%',
		marginTop: 60
	},
	usernameText: {
		fontSize: 30,
		color: 'white',
		fontWeight: '200'
	},
	avatar: {
		width: 100,
		height: 100,
		borderRadius: 50
	},
	userInfo: {
		flexDirection: 'row',
		alignItems: 'center',
		backgroundColor: 'rgba(1,1,1,0)'
	},
	settings: {
		width: '90%',
		height: 100,
		backgroundColor: 'rgba(255,255,255,0.7)',
		borderRadius: 10,
		marginTop: 40
	},
	avatarWrapper: {
		marginRight: 30
	}
});

export default UserCredentials;
