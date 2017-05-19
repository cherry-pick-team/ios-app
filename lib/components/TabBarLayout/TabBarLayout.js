import React from 'react';
import {View} from 'react-native';
import TouchableIcon from "../TouchableIcon/TouchableIcon";

export const TabBarLayout = ({children}) => (
	<View>
		{children}
		<View style={styles.icons}>
			<TouchableIcon/>
			<TouchableIcon/>
			<TouchableIcon/>
		</View>
	</View>
);

export default TabBarLayout;

