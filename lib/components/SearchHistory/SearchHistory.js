import React from 'react';
import SearchHistoryListConnected from './SearchHistoryList.connected';
import TabBarLayoutConnected from '../TabBarLayout/TabBarLayout.connected';
import SearchHistoryHeader from './SearchHistoryHeader.connected';
import StatusBar from '../StatusBar/StatusBar';
import {primaryColor} from '../../shared/vars';

export const SearchHistory = () => (
	<TabBarLayoutConnected activeTab="search-history">
		<StatusBar backgroundColor={primaryColor} barStyle="light-content"/>
		<SearchHistoryHeader/>
		<SearchHistoryListConnected/>
	</TabBarLayoutConnected>
);

export default SearchHistory;
