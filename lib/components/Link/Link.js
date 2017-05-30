import React from 'react';
import PropTypes from 'prop-types';
import {TouchableWithoutFeedback, TouchableOpacity} from 'react-native';
import {ActionConst} from 'react-native-router-flux';

/**
 * Обертка которая позволяет по нажатию перейти на другой роут
 * @constructor
 */
export const Link = ({hasFeedback, to, onPress, children, type}) => {
	if (hasFeedback) {
		return (
			<TouchableOpacity onPress={onPress.bind(null, to, type)}>
				{children}
			</TouchableOpacity>
		);
	} else {
		return (
			<TouchableWithoutFeedback onPress={onPress.bind(null, to, type)}>
				{children}
			</TouchableWithoutFeedback>
		);
	}
};

Link.propTypes = {
	/** Должна ли быть анимация при нажатии */
	hasFeedback: PropTypes.bool,
	/** Роут на который нужно перейти */
	to: PropTypes.string.isRequired,
	/** Обрабатывает нажатие (определяется в *.connected.js) */
	onPress: PropTypes.func.isRequired,
	/** Тип перехода см. react-native-router-flux ActionConst */
	type: PropTypes.string
};

Link.defaultProps = {
	hasFeedback: false,
	type: ActionConst.PUSH
};

export default Link;
