import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {View, ViewPropTypes, StyleSheet} from 'react-native';
import SearchBar from 'react-native-search-bar';
import {primaryColor} from '../../shared/vars';


//todo
export default class SearchInput extends PureComponent {
	static propTypes = {
		...ViewPropTypes,
		onSubmit: PropTypes.func.isRequired
	};

	render() {
		return (
			<View {...this.props} style={[styles.container, this.props.style]}>
				<SearchBar
					ref="searchBar"
					barTintColor={primaryColor}
					placeholder='Поиск фразы'
					onSearchButtonPress={this.props.onSubmit}
					hideBackground
				/>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		width: '100%',
		borderBottomWidth: 0,
		backgroundColor: primaryColor,
		paddingTop: 15
	}
});
