import React from 'react';
import {View, Text, StyleSheet} from 'react-native';


export const Main = () => (
	<View style={styles.container}>
		<SearchInputConnected style={styles.searchInput}/>
		<Logo style={styles.logo}/>
		<SearchTrendsConnected style={styles.trends}/>
	</View>
);

const styles = StyleSheet.create({
	container: {
		flexDirection: 'column',
		alignItems: 'center',
		height: '100%',
		width: '100%'
	},
	searchInput: {

	},
	logo: {

	},
	trends: {

	}
});

export default Main;
