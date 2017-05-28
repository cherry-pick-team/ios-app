import React from 'react';
import PropTypes from 'prop-types';
import {TouchableOpacity, View} from 'react-native';
import {Icon} from '../Icon/Icon';

/**
 * Иконка которая умеет обрабатывать нажатие
 * @constructor
 */
export const TouchableIcon = (props) => (
	<TouchableOpacity onPress={props.onPress}>
		<View>
			<Icon {...props}/>
		</View>
	</TouchableOpacity>
);

TouchableIcon.propTypes = {
	...Icon.propTypes,
	onPress: PropTypes.func.isRequired
};

export default TouchableIcon;
