import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {View, ViewPropTypes, StyleSheet, TextInput} from 'react-native';
import {primaryColor, additionalColor} from '../../shared/vars';
import Icon from '../Icon/Icon';

export default class SearchInput extends PureComponent {
	static propTypes = {
		...ViewPropTypes,
		onSubmit: PropTypes.func.isRequired
	};

	render() {
		return (
			<View {...this.props} style={[styles.container, this.props.style]}>
				<TextInput
					style={styles.input}
					onSubmitEditing={(event) => this.props.onSubmit(event.nativeEvent.text)}
					placeholder={'Введите фразу'}
					returnKeyType="search"
				/>
				<View style={styles.icon}>
					<Icon type="search" size={25} color={additionalColor}/>
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		width: '100%',
		borderBottomWidth: 0,
		backgroundColor: primaryColor,
		paddingTop: 25,
		paddingBottom: 25,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center'
	},
	input: {
		width: '95%',
		height: 35,
		backgroundColor: 'white',
		padding: 5,
		paddingLeft: 30,
		borderRadius: 4
	},
	icon: {
		position: 'absolute',
		height: '100%',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: 'rgba(0,0,0,0)',
		top: 25,
		bottom: 0,
		left: 15
	}
});
