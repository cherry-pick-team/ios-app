import React from 'react';
import PropTypes from 'prop-types';
import {View, ViewPropTypes, StyleSheet} from 'react-native';
import {primaryColor} from '../../shared/vars';

/**
 * Базовый компонент для создания хедеров
 * @param props
 * @constructor
 */
export const Header = (props) => (
	<View {...props} style={[props.style, styles.container]}>
		{props.children}
	</View>
);

export const HEADER_HEIGHT = 60;

Header.propTypes = {
	...ViewPropTypes
};

const styles = StyleSheet.create({
	container: {
		backgroundColor: primaryColor,
		width: '100%',
		height: HEADER_HEIGHT
	}
});

export default Header;
