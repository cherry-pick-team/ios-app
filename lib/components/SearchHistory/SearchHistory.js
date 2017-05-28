import React from 'react';
import {StyleSheet} from 'react-native';
import SearchHistoryListConnected from '../../containers/SearchHistoryListConnected/SearchHistoryListConnected';
import TabBarLayoutConnected from '../../containers/TabBarLayoutConnected/TabBarLayoutConnected';

export const SearchHistory = () => (
	<TabBarLayoutConnected>
		<SearchHistoryListConnected/>
	</TabBarLayoutConnected>
);

const styles = StyleSheet.create({

});

export default SearchHistory;
