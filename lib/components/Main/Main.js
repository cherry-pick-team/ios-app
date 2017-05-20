import React from 'react';
import {ScrollView, StyleSheet, RefreshControl} from 'react-native';
import SearchInputConnected from '../../containers/SearchInputConnected/SearchInputConnected';
import Logo from '../Logo/Logo';
import StatusBar from '../StatusBar/StatusBar';
import KeyboardDismiss from '../KeyboardDismiss/KeyboardDismiss';
import SearchTrendsConnected from '../../containers/SearchTrendsConnected/SearchTrendsConnected';
import {primaryColor} from '../../shared/vars';
import TabBarLayoutConnected from '../../containers/TabBarLayoutConnected/TabBarLayoutConnected';

export const Main = () => (
	<TabBarLayoutConnected>
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

export default Main;
