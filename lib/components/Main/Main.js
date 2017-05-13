import React from 'react';
import {View, StyleSheet} from 'react-native';
import SearchInputConnected from '../../containers/SearchInputConnected/SearchInputConnected';
import Logo from '../Logo/Logo';
import StatusBar from '../StatusBar/StatusBar';
import SearchTrendsConnected from '../../containers/SearchTrendsConnected/SearchTrendsConnected';
import {primaryColor} from '../../shared/vars';


export const Main = () => (
	<View style={styles.container}>
		<StatusBar backgroundColor={primaryColor} barStyle="light-content"/>
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
