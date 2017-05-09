import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {View, ViewPropTypes} from 'react-native';
import SearchBar from 'react-native-search-bar';
import {primaryColor} from '../../shared/vars';


//todo
export default class SearchInput extends PureComponent {
	static propTypes = {
		...ViewPropTypes,
		onSubmit: PropTypes.func.isRequired
	};

	onBlur() {
		debugger;
		this.refs.searchBar.blur(React.findNodeHandle(this.refs.searchBar));
		this.refs.searchBar.unFocus()
	}

	render() {
		return (
			<View {...this.props} style={{width: '100%'}}>
				<SearchBar
					ref="searchBar"
					barTintColor={primaryColor}
					placeholder='Поиск фразы'
					onSearchButtonPress={this.props.onSubmit}
				    onBlur={this.onBlur.bind(this)}
				/>
			</View>
		);
	}
}
