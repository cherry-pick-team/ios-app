import React from 'react';
import ScrollableTabView from 'react-native-scrollable-tab-view';
import SearchHistoryListConnected from '../../containers/SearchHistoryListConnected/SearchHistoryListConnected';
import TabBarLayoutConnected from '../TabBarLayout/TabBarLayout.connected';
import StatusBar from '../StatusBar/StatusBar';
import {primaryColor} from '../../shared/vars';

export const SearchHistory = () => (
	<TabBarLayoutConnected activeTab="search-history">
		<StatusBar backgroundColor={primaryColor} barStyle="light-content"/>
		<ScrollableTabView
			tabBarActiveTextColor="white"
			tabBarBackgroundColor={primaryColor}
			tabBarInactiveTextColor="white"
			tabBarUnderlineStyle={{backgroundColor: "white"}}
		>
			<SearchHistoryListConnected tabLabel="Любимые"/>
			<SearchHistoryListConnected tabLabel="История"/>
		</ScrollableTabView>
	</TabBarLayoutConnected>
);

export default SearchHistory;
