import React from 'react';
import PropTypes from 'prop-types';
import {View, StyleSheet, Text, Image, Switch, TouchableWithoutFeedback} from 'react-native';

export const UserCredentials = ({credentials, logout}) => (
	<View style={styles.container}>
		<View style={styles.userInfo}>
			<View style={styles.avatarWrapper}>
				<Image style={styles.avatar} source={{uri: credentials.avatar_url}}/>
			</View>
			<View style={styles.rightColumn}>
				<Text style={styles.usernameText}>
					{credentials.name}
				</Text>
				<View style={styles.logoutButton}>
					<TouchableWithoutFeedback onPress={logout}>
						<View>
							<Text style={styles.logoutButtonText}>
								Выйти
							</Text>
						</View>
					</TouchableWithoutFeedback>
				</View>
			</View>
		</View>
		<View style={styles.settings}>
			<Text style={styles.settingsText}>
				Персональный поиск
			</Text>
			<View style={styles.switchWrapper}>
				<Switch
					disabled
					tintColor="white"
					style={styles.switch}
				/>
			</View>
			<Text style={styles.settingsText}>
				Энергосбережение
			</Text>
			<View style={styles.switchWrapper}>
				<Switch
					disabled
					tintColor="white"
					style={styles.switch}
				/>
			</View>
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
		fontSize: 25,
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
		backgroundColor: 'rgba(255,255,255,0.7)',
		borderRadius: 10,
		marginTop: 40,
		padding: 20
	},
	avatarWrapper: {
		marginRight: 30
	},
	rightColumn: {
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'space-around'
	},
	logoutButton: {
		width: '100%',
		flexDirection: 'row',
		marginTop: 30
	},
	logoutButtonText: {
		color: 'white',
		fontWeight: '200',
		fontSize: 18
	},
	switchWrapper: {
		marginBottom: 15,
		marginTop: 15
	},
	settingsText: {
		fontSize: 18
	}
});

export default UserCredentials;
