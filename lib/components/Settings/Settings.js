import React from 'react';
import {View, StyleSheet} from 'react-native';
import FacebookAuthButton from '../../containers/FacebookAuthButtonConnected/FacebookAuthButtonConnected';
import TabBarLayoutConnected from '../TabBarLayout/TabBarLayout.connected';

export const Settings = () => (
	<TabBarLayoutConnected activeTab="settings">
		<View style={styles.container}>
			<FacebookAuthButton/>
		</View>
	</TabBarLayoutConnected>
);

const styles = StyleSheet.create({
	container: {
		flexDirection: 'column',
		alignItems: 'center',
		marginTop: 60
	}
});

export default Settings;
