import React from 'react';
import PropTypes from 'prop-types';
import {View, StyleSheet} from 'react-native';
import TouchableIcon from "../TouchableIcon/TouchableIcon";
import TabBarItem from "./TabBarItem";
import {additionalColor, primaryColor} from '../../shared/vars';

export const TabBarLayout = ({children, push, activeTab}) => (
	<View style={styles.container}>
		<View style={styles.children}>
			{children}
		</View>
		<View style={styles.icons}>
			<TabBarItem
				push={push}
				activeTab={activeTab}
				tab="main"
			/>
			<TabBarItem
				push={push}
				activeTab={activeTab}
				tab="voice-search"
			/>
			<TabBarItem
				push={push}
				activeTab={activeTab}
				tab="liked"
			/>
			<TabBarItem
				push={push}
				activeTab={activeTab}
				tab="settings"
			/>
		</View>
	</View>
);

TabBarLayout.propTypes = {
	push: PropTypes.func.isRequired,
	activeTab: PropTypes.string
};

const styles = StyleSheet.create({
	container: {
		height: '100%',
	},
	children: {
		marginBottom: 60
	},
	icons: {
		position: 'absolute',
		bottom: 0,
		left: 0,
		right: 0,
		height: 60,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-around',
		backgroundColor: 'white',
		borderTopWidth: 1,
		borderTopColor: additionalColor
	}
});

export default TabBarLayout;
