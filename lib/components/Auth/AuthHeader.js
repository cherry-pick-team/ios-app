import React from 'react';
import PropTypes from 'prop-types';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import Icon from '../Icon/Icon';
import {primaryColor} from '../../shared/vars';
import * as SocialColors from './SocialColors';
import Link from '../Link/Link.connected';

export const AuthHeader = ({kind}) => (
	<View style={[styles.container, {backgroundColor: SocialColors[kind].primary || primaryColor}]}>
		<Link hasFeedback to="settings" type="replace">
			<View style={styles.backButton}>
				<Icon type="angle-left" from="FontAwesome" color="white"/>
				<View style={styles.title}>
					<Text style={styles.titleText}>
						Назад
					</Text>
				</View>
			</View>
		</Link>
	</View>
);

AuthHeader.propTypes = {
	kind: PropTypes.oneOf(['fb'])
};

const styles = StyleSheet.create({
	container: {
		width: '100%',
		height: 50,
		paddingLeft: 10,
		flexDirection: 'row',
		alignItems: 'center'
	},
	backButton: {
		width: '100%',
		height: '100%',
		flexDirection: 'row',
		alignItems: 'center'
	},
	title: {
		marginLeft: 10
	},
	titleText: {
		fontSize: 20,
		color: 'white'
	}
});

export default AuthHeader;
