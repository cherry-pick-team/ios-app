import React from 'react';
import PropTypes from 'prop-types';
import {View} from 'react-native';

/**
 * Иконка которая умеет обрабатывать нажатие
 * @constructor
 */
export const TouchableIcon = () => (
	<View>
	</View>
);

TouchableIcon.propTypes = {
	type: PropTypes.string.isRequired,
	from: PropTypes.string.isRequired,
	size: PropTypes.number.isRequired,
	onPress: PropTypes.func.isRequired
};

export default TouchableIcon;
