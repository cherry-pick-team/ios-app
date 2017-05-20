import React from 'react';
import {View, StyleSheet} from 'react-native';
import SearchHeaderConnected from '../../containers/SearchHeaderConnected/SearchHeaderConnected';
import SongsConnected from '../../containers/SongsConnected/SongsConnected';
import TabBarLayoutConnected from '../../containers/TabBarLayoutConnected/TabBarLayoutConnected';

export const SearchResults = () => (
	<TabBarLayoutConnected>
		<View style={styles.container}>
			<SearchHeaderConnected>
				<SongsConnected/>
			</SearchHeaderConnected>
		</View>
	</TabBarLayoutConnected>
);

const styles = StyleSheet.create({
	container: {}
});

export default SearchResults;
