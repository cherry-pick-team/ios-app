import React from 'react';
import {View, StyleSheet} from 'react-native';
import SongsConnected from '../../containers/SongsConnected/SongsConnected';
import TabBarLayoutConnected from '../TabBarLayout/TabBarLayout.connected';

export const SearchResults = () => (
	<TabBarLayoutConnected>
		<View style={styles.container}>
			<SongsConnected/>
		</View>
	</TabBarLayoutConnected>
);

const styles = StyleSheet.create({
	container: {}
});

export default SearchResults;
