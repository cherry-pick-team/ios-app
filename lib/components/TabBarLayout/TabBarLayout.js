import React from 'react';
import PropTypes from 'prop-types';
import {View, StyleSheet} from 'react-native';
import TouchableIcon from "../TouchableIcon/TouchableIcon";
import {additionalColor} from '../../shared/vars';

export const TabBarLayout = ({children, push}) => (
	<View style={styles.container}>
		<View style={styles.children}>
			{children}
		</View>
		<View style={styles.icons}>
			<TouchableIcon onPress={() => push('main')} type="search"/>
			<TouchableIcon onPress={() => push('history')} type="search"/>
			<TouchableIcon onPress={() => push('settings')} type="search"/>
		</View>
	</View>
);

TabBarLayout.propTypes = {
	push: PropTypes.func.isRequired,
};

const styles = StyleSheet.create({
	container: {
		width: '100%',
		height: '100%'
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
		justifyContent: 'space-between',
		backgroundColor: 'white',
		borderTopWidth: 1,
		borderTopColor: additionalColor
	}
});

export default TabBarLayout;
