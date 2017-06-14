import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {primaryColor} from '../../shared/vars';
import Spinner from 'react-native-spinkit';

export const SearchLoading = () => (
	<View style={styles.container}>
		<View style={styles.title}>
			<Text style={styles.titleText}>
				Ищем песни для вас
			</Text>
		</View>
		<Spinner
			isVisible
			size={200}
			type="Wave"
			color="#FFFFFF"
		/>
	</View>
);

const styles = StyleSheet.create({
	container: {
		width: '100%',
		height: '100%',
		backgroundColor: primaryColor,
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center'
	},
	title: {
		marginBottom: 20
	},
	titleText: {
		fontWeight: '200',
		color: 'white',
		fontSize: 30
	}
});

export default SearchLoading;
