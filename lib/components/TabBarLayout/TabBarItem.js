import React from 'react';
import PropTypes from 'prop-types';
import {View, StyleSheet, Text} from 'react-native';
import TouchableIcon from '../TouchableIcon/TouchableIcon';
import {additionalColor, primaryColor, textColor} from '../../shared/vars';

const titles = {
	main: 'Поиск',
	'voice-search': 'Голос',
	liked: 'Любимые',
	settings: 'Настройки',
};

const icons = {
	main: {
		type: 'search',
	},
	'voice-search': {
		type: 'microphone',
		from: 'FontAwesome',
	},
	liked: {
		type: 'favorite',
	},
	settings: {
		type: 'settings',
	},
};

export const TabBarItem = ({push, activeTab, tab}) => (
	<View style={styles.container}>
		<TouchableIcon
			{...icons[tab]}
			onPress={() => push(tab)}
			color={activeTab === tab ? primaryColor : additionalColor}
		/>
		<Text style={styles.caption}>
			{titles[tab]}
		</Text>
	</View>
);

TabBarItem.propTypes = {
	push: PropTypes.func.isRequired,
	activeTab: PropTypes.string,
	tab: PropTypes.string.isRequired,
};

const styles = StyleSheet.create({
	container: {
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
	},
	caption: {
		fontSize: 12,
		color: textColor,
	}
});

export default TabBarItem;
