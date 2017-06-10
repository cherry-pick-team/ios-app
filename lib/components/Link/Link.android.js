import React from 'react';
import PropTypes from 'prop-types';
import {TouchableWithoutFeedback, TouchableOpacity} from 'react-native';
import {ActionConst} from 'react-native-router-flux';

const getType = (customType) => {
	switch (customType) {
		case 'push':
			return ActionConst.PUSH;
		case 'replace':
			return ActionConst.REPLACE;
	}
};

/**
 * Обертка которая позволяет по нажатию перейти на другой роут
 * @constructor
 */
export const Link = ({hasFeedback, to, onPress, children, type}) => {
	if (hasFeedback) {
		return (
			<TouchableOpacity onPress={onPress.bind(null, to, getType(type))}>
				{children}
			</TouchableOpacity>
		);
	} else {
		return (
			<TouchableWithoutFeedback onPress={onPress.bind(null, to, getType(type))}>
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
	/** Тип перехода (push | replace) */
	type: PropTypes.oneOf(['push', 'replace'])
};

Link.defaultProps = {
	hasFeedback: false,
	type: 'push'
};

export default Link;
