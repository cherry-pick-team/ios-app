import React from 'react';
import PropTypes from 'prop-types';
import {View, StyleSheet} from 'react-native';
import TouchableIcon from "../TouchableIcon/TouchableIcon";
import {additionalColor, primaryColor} from '../../shared/vars';

export const TabBarLayout = ({children, push, activeTab}) => (
	<View style={styles.container}>
		<View style={styles.children}>
			{children}
		</View>
		<View style={styles.icons}>
			<TouchableIcon
				onPress={() => push('main')}
				type="search"
				color={activeTab === 'main' ? primaryColor : additionalColor}/>
			<TouchableIcon
				onPress={() => push('voice-search')}
				type="microphone"
				from="FontAwesome"
				color={activeTab === 'voice-search' ? primaryColor : additionalColor}/>
			<TouchableIcon
				onPress={() => push('search-history')}
				type="history"
				color={activeTab === 'search-history' ? primaryColor : additionalColor}/>
			<TouchableIcon
				onPress={() => push('settings')}
				type="settings"
				color={activeTab === 'settings' ? primaryColor : additionalColor}/>
		</View>
	</View>
);

TabBarLayout.propTypes = {
	push: PropTypes.func.isRequired,
	activeTab: PropTypes.string
};

const styles = StyleSheet.create({
	container: {
		width: '100%',
		height: '100%',
		zIndex: 100
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
