import React from 'react';
import SearchHistoryListConnected from '../../containers/SearchHistoryListConnected/SearchHistoryListConnected';
import TabBarLayoutConnected from '../../containers/TabBarLayoutConnected/TabBarLayoutConnected';
import SearchHistoryHeader from '../../containers/SearchHistoryHeader/SearchHistoryHeader';
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
