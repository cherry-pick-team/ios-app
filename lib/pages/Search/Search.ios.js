import React from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import Logo from '../../components/Logo/Logo';
import StatusBar from '../../components/StatusBar/StatusBar';
import KeyboardDismiss from '../../components/KeyboardDismiss/KeyboardDismiss';
import SearchInputConnected from '../../components/SearchInput/SearchInput.connected';
import SearchTrendsConnected from '../../components/SearchTrends/SearchTrends.connected';
import TabBarLayoutConnected from '../../components/TabBarLayout/TabBarLayout.connected';
import {primaryColor} from '../../shared/vars';

export const Search = () => (
	<TabBarLayoutConnected activeTab="main">
		<KeyboardDismiss>
			<ScrollView
				style={styles.container}
				showsVerticalScrollIndicator={false}
				bounces={false}
			>
				<StatusBar backgroundColor={primaryColor} barStyle="light-content"/>
				<Logo style={styles.logo}/>
				<SearchInputConnected style={styles.searchInput}/>
				<SearchTrendsConnected style={styles.trends}/>
			</ScrollView>
		</KeyboardDismiss>
	</TabBarLayoutConnected>
);

const styles = StyleSheet.create({
	container: {
		height: '100%',
		width: '100%',
		backgroundColor: primaryColor
	},
	searchInput: {

	},
	logo: {

	},
	trends: {

	}
});

export default Search;
