import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {primaryColor} from '../../shared/vars';

export const LikedSongsHeader = ({author, title, ts, preview, isFavourite}) => (
	<View style={styles.container}>
		<Text style={styles.title}>
			Любимые песни
		</Text>
	</View>
);

const styles = StyleSheet.create({
	container: {
		height: 50,
		width: '100%',
		backgroundColor: primaryColor,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
	},
	title: {
		marginTop: 36,
		color: 'white',
		fontSize: 18,
	}
});

export default LikedSongsHeader;
