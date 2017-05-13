import React from 'react';
import {View, StyleSheet, Image} from 'react-native';
import {primaryColor} from '../../shared/vars';
import LogoImage from './Logo.png';


export const Logo = () => (
	<View style={styles.container}>
		<Image
			style={styles.logo}
			source={LogoImage}
			resizeMode="contain"
		/>
	</View>
);

const styles = StyleSheet.create({
	container: {
		width: '100%',
		height: 180,
		backgroundColor: primaryColor,
		paddingTop: 30,
		paddingBottom: 30,
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center'
	},
	logo: {
		height: 150
	}
});

export default Logo;
