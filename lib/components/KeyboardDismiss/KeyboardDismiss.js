import React from 'react';
import PropTypes from 'prop-types';
import {TouchableWithoutFeedback, Keyboard} from 'react-native';

export const KeyboardDismiss = ({children}) => (
	<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
		{children}
	</TouchableWithoutFeedback>
);

KeyboardDismiss.propTypes = {
	children: PropTypes.element
};

KeyboardDismiss.defaultProps = {
	children: null
};

export default KeyboardDismiss;
