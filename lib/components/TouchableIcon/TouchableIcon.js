import React from 'react';
import PropTypes from 'prop-types';
import {TouchableWithoutFeedback, View} from 'react-native';
import {Icon} from '../Icon/Icon';

/**
 * Иконка которая умеет обрабатывать нажатие
 * @constructor
 */
export const TouchableIcon = (props) => (
	<TouchableWithoutFeedback onPress={props.onPress}>
		<View>
			<Icon {...props}/>
		</View>
	</TouchableWithoutFeedback>
);

TouchableIcon.propTypes = {
	...Icon.propTypes,
	onPress: PropTypes.func.isRequired
};

export default TouchableIcon;
