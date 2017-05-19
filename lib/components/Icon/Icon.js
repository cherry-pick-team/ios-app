import React from 'react';
import {View, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import FoundationIcon from 'react-native-vector-icons/Foundation';


export const Icon = (props) => (
	<View style={styles.container}>
		{props.from === 'MaterialIcons'? <MaterialIcon name={props.type} size={props.size}/>: null}
		{props.from === 'FontAwesome'? <FontAwesomeIcon name={props.type} size={props.size}/>: null}
		{props.from === 'Foundation'? <FoundationIcon name={props.type} size={props.size}/>: null}
	</View>
);

Icon.propTypes = {
	from: PropTypes.string,
	size: PropTypes.number,
	type: PropTypes.string.isRequired
};

Icon.defaultProps = {
	from: 'MaterialIcons',
	size: 40
};

const styles = StyleSheet.create({
	container: {}
});

export default Icon;
