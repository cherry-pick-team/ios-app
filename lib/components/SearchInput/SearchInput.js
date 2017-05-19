import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {View, ViewPropTypes, StyleSheet, TextInput} from 'react-native';
import {primaryColor} from '../../shared/vars';
import Icon from '../Icon/Icon';


//todo
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
					onSubmitEditing={this.props.onSubmit}
				/>
				<View style={styles.icon}>
					<Icon type="search" size={30}/>
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
		paddingTop: 15,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center'
	},
	input: {
		width: '90%',
		height: 40,
		backgroundColor: 'white',
		padding: 5,
		paddingLeft: 40,
		borderRadius: 4
	},
	icon: {
		position: 'absolute',
		height: '100%',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: 'rgba(0,0,0,0)',
		top: 15,
		bottom: 0,
		left: 25
	}
});
