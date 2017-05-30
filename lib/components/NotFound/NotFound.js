import React from 'react';
import {View, StyleSheet} from 'react-native';
import TabBarLayout from '../TabBarLayout/TabBarLayout.connected';

export const NotFound = () => (
	<TabBarLayout>
		<View style={styles.container}>
			<View style={styles.icon}>

			</View>
			<View style={styles.button}>

			</View>
		</View>
	</TabBarLayout>
);

const styles = StyleSheet.create({
	container: {
		flexDirection: 'column',
		alignItems: 'center'
	},
	icon: {},
	button: {}
});

export default NotFound;
