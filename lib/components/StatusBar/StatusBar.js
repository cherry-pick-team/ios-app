import React from 'react';
import {View, StyleSheet, StatusBar as DefaultStatusBar, Platform} from 'react-native';

export const StatusBar = ({backgroundColor, ...props}) => (
	<View style={[styles.container, {backgroundColor}]}>
		<DefaultStatusBar backgroundColor={backgroundColor} {...props} />
	</View>
);

const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : 0;


const styles = StyleSheet.create({
	container: {
		height: STATUSBAR_HEIGHT,
		width: '100%'
	}
});

export default StatusBar;
