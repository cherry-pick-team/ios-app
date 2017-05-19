import React from 'react';
import {View, StyleSheet} from 'react-native';
import SearchHeaderConnected from '../../containers/SearchHeaderConnected/SearchHeaderConnected';
import SongsConnected from '../../containers/SongsConnected/SongsConnected';

export const SearchResults = () => (
	<View style={styles.container}>
		<SearchHeaderConnected>
			<SongsConnected/>
		</SearchHeaderConnected>
	</View>
);

const styles = StyleSheet.create({
	container: {

	}
});

export default SearchResults;
